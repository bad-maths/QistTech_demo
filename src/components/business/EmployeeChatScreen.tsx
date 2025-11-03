import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Send, User, Banknote, Building2, Mic, Phone, X, Paperclip, FileText, Image as ImageIcon, Download, Check, XCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../ui/alert-dialog';

interface ChatContact {
  id: string;
  name: string;
  type: 'customer' | 'finance';
  avatar: string;
  color: string;
  property?: string;
}

interface Contact {
  id: string;
  chatType: 'single-customer' | 'single-finance' | 'combined';
  name: string;
  type?: 'customer' | 'finance';
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  avatar: string;
  color: string;
  property?: string;
  requestType?: 'referral' | 'direct';
  participants?: ChatContact[];
}

interface Message {
  id: string;
  sender: 'me' | 'them';
  text: string;
  time: string;
  attachments?: {
    id: string;
    name: string;
    type: 'image' | 'document';
    url: string;
    size: string;
  }[];
}

interface EmployeeChatScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  contactData?: {
    contact: Contact;
  };
}

export function EmployeeChatScreen({ onNavigate, language, contactData }: EmployeeChatScreenProps) {
  const isRTL = language === 'ar';
  const selectedContact = contactData?.contact || null;
  const [messageText, setMessageText] = useState('');
  const [activeParticipant, setActiveParticipant] = useState<'customer' | 'finance'>('customer');
  
  // Voice message states
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showCallDialog, setShowCallDialog] = useState(false);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Attachment states
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Booking fee payment status (in a real app, this would come from the backend)
  const [bookingFeePaid, setBookingFeePaid] = useState(false);

  const getMessages = (contact: Contact, participantType?: 'customer' | 'finance'): Message[] => {
    const now = new Date();
    const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    // For combined chats, get messages based on active participant
    if (contact.chatType === 'combined' && contact.participants) {
      const participant = contact.participants.find(p => p.type === participantType);
      if (!participant) return [];

      if (participantType === 'customer') {
        return [
          {
            id: 'c1',
            sender: 'them',
            text: isRTL ? 'مرحباً، هل تمويل العقار جاهز؟' : 'Hello, is the property financing ready?',
            time: timeStr,
          },
          {
            id: 'c2',
            sender: 'me',
            text: isRTL ? 'أهلاً، سأتحقق مع قسم المالية وأعود إليك.' : 'Hi, I will check with the finance department and get back to you.',
            time: timeStr,
          },
        ];
      } else {
        return [
          {
            id: 'f1',
            sender: 'me',
            text: isRTL ? 'مرحباً، هل يمكننا الحصول على تحديث بشأن الطلب؟' : 'Hi, can we get an update on the request?',
            time: timeStr,
          },
          {
            id: 'f2',
            sender: 'them',
            text: isRTL ? 'بالتأكيد، العقار متاح للمعاينة في أي وقت.' : 'Sure, the property is available for viewing at any time.',
            time: timeStr,
          },
        ];
      }
    }

    // Default messages for single chats
    const messageSets: Record<string, Message[]> = {
      '1': [
        {
          id: '1',
          sender: 'them',
          text: isRTL ? 'مرحباً! شكراً على المساعدة في طلب التمويل' : 'Hello! Thank you for helping with the financing request',
          time: '10:00',
        },
        {
          id: '2',
          sender: 'me',
          text: isRTL ? 'أهلاً! سنعمل على طلبك ونعود إليك قريباً' : 'Hi! We will work on your request and get back to you soon',
          time: '10:15',
        },
        {
          id: '3',
          sender: 'them',
          text: isRTL ? 'هل يمكننا الحصول على تحديث؟' : 'Can we get an update?',
          time: '10:30',
        },
      ],
      '2': [
        {
          id: '1',
          sender: 'them',
          text: isRTL ? 'متى يمكنني معاينة العقار؟' : 'When can I view the property?',
          time: '09:00',
        },
        {
          id: '2',
          sender: 'me',
          text: isRTL ? 'يمكننا ترتيب معاينة غداً في الصباح' : 'We can arrange a viewing tomorrow morning',
          time: '09:15',
        },
      ],
    };
    return messageSets[contact.id] || [];
  };

  const handleSendMessage = () => {
    if (messageText.trim() || attachedFiles.length > 0) {
      // In a real app, this would send the message and attachments to the backend
      setMessageText('');
      setAttachedFiles([]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setAttachedFiles(prev => [...prev, ...Array.from(files)]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    recordingTimerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
    }
    setIsRecording(false);
    setRecordingTime(0);
  };

  const cancelRecording = () => {
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
    }
    setIsRecording(false);
    setRecordingTime(0);
  };

  const formatRecordingTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCall = () => {
    setShowCallDialog(true);
  };

  if (!selectedContact) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F2F4F5]">
        <p className="text-gray-500">{isRTL ? 'الرجاء تحديد محادثة' : 'Please select a chat'}</p>
      </div>
    );
  }

  // Single Chat Conversation View
  if (selectedContact.chatType !== 'combined') {
    const messages = getMessages(selectedContact);
    
    return (
      <div className="min-h-screen bg-[#F2F4F5] flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="bg-white border-b border-teal-100 px-6 pt-4 pb-4 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('messages')}
              className="text-[#0F4C5C] hover:text-[#0A3540] transition-colors"
            >
              {isRTL ? <ArrowRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
            </button>
            <div 
              className="rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"
              style={{
                backgroundImage: selectedContact.type === 'customer'
                  ? 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)'
                  : 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
              }}
            >
              <span className="text-white text-sm">{selectedContact.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-[#0E1E25] truncate font-semibold">{selectedContact.name}</h2>
              <div className="flex items-center gap-1">
                {selectedContact.type === 'finance' ? (
                  <Banknote className="w-3 h-3 text-[#0F4C5C]" />
                ) : (
                  <User className="w-3 h-3 text-[#0F4C5C]" />
                )}
                <p className="text-xs text-[#4B5563]">
                  {selectedContact.type === 'finance' 
                    ? (isRTL ? 'جهة تمويل' : 'Finance Partner')
                    : (isRTL ? 'عميل' : 'Customer')
                  }
                </p>
              </div>
            </div>
            <Button
              onClick={handleCall}
              variant="ghost"
              size="icon"
              className="flex-shrink-0 text-[#10B981] hover:bg-green-50"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </div>
          {selectedContact.property && (
            <div className="mt-3 p-2 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-xs text-[#0F4C5C] font-medium">
                <span className="font-semibold">
                  {isRTL ? 'العقار: ' : 'Property: '}
                </span>
                {selectedContact.property}
              </p>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  message.sender === 'me'
                    ? 'bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white'
                    : 'bg-white text-[#0E1E25] border border-teal-100'
                }`}
                style={
                  message.sender === 'me'
                    ? { backgroundImage: 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)' }
                    : undefined
                }
              >
                {message.text && <p className="break-words">{message.text}</p>}
                
                {message.attachments && message.attachments.length > 0 && (
                  <div className={`space-y-2 ${message.text ? 'mt-2' : ''}`}>
                    {message.attachments.map((attachment) => (
                      <div
                        key={attachment.id}
                        className={`flex items-center gap-2 p-2 rounded-lg ${
                          message.sender === 'me'
                            ? 'bg-white/10 backdrop-blur-sm'
                            : 'bg-teal-50'
                        }`}
                      >
                        {attachment.type === 'image' ? (
                          <ImageIcon className="w-4 h-4" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs truncate">{attachment.name}</p>
                          <p className="text-xs opacity-70">{attachment.size}</p>
                        </div>
                        <button className="hover:opacity-80">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'me' ? 'text-teal-100' : 'text-[#4B5563]'
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-teal-100 p-4">
          {isRecording ? (
            <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg animate-pulse border border-red-200">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm text-red-700">
                  {isRTL ? 'جاري التسجيل...' : 'Recording...'}
                </span>
                <span className="text-sm text-red-600 font-mono">
                  {formatRecordingTime(recordingTime)}
                </span>
              </div>
              <Button
                onClick={cancelRecording}
                variant="ghost"
                size="icon"
                className="text-red-600 hover:bg-red-100"
              >
                <X className="w-5 h-5" />
              </Button>
              <Button
                onClick={stopRecording}
                className="bg-[#0F4C5C] hover:bg-[#0A3540]"
              >
                <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {attachedFiles.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {attachedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2 min-w-fit"
                    >
                      {file.type.startsWith('image/') ? (
                        <ImageIcon className="w-4 h-4 text-[#0F4C5C]" />
                      ) : (
                        <FileText className="w-4 h-4 text-[#0F4C5C]" />
                      )}
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-900 max-w-[120px] truncate">
                          {file.name}
                        </span>
                        <span className="text-xs text-[#4B5563]">
                          {formatFileSize(file.size)}
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-[#4B5563] hover:text-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2">
                <Button
                  onClick={handleCall}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0 text-[#10B981] border-green-200 hover:bg-green-50"
                >
                  <Phone className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0 text-[#0F4C5C] border-teal-200 hover:bg-teal-50"
                >
                  <Paperclip className="w-5 h-5" />
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx,.txt"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Input
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={isRTL ? 'اكتب رسالة...' : 'Type a message...'}
                  className="flex-1 border-teal-100"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                {messageText.trim() || attachedFiles.length > 0 ? (
                  <Button
                    onClick={handleSendMessage}
                    className="bg-[#0F4C5C] hover:bg-[#0A3540] px-4"
                  >
                    <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Button>
                ) : (
                  <Button
                    onMouseDown={startRecording}
                    variant="outline"
                    size="icon"
                    className="flex-shrink-0 text-[#0F4C5C] border-teal-200 hover:bg-teal-50"
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Call Dialog */}
        <AlertDialog open={showCallDialog} onOpenChange={setShowCallDialog}>
          <AlertDialogContent dir={isRTL ? 'rtl' : 'ltr'}>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" />
                {isRTL ? 'اتصال هاتفي' : 'Phone Call'}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {isRTL 
                  ? `هل تريد الاتصال بـ ${selectedContact.name}؟`
                  : `Do you want to call ${selectedContact.name}?`
                }
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                {isRTL ? 'إلغاء' : 'Cancel'}
              </AlertDialogCancel>
              <AlertDialogAction className="bg-green-600 hover:bg-green-700">
                <Phone className="w-4 h-4 mr-2" />
                {isRTL ? 'اتصال' : 'Call'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  }

  // Combined Chat with Tabs
  const customerParticipant = selectedContact.participants?.find(p => p.type === 'customer');
  const financeParticipant = selectedContact.participants?.find(p => p.type === 'finance');
  
  // Check if the finance participant is actually a developer
  const isDeveloper = financeParticipant && (
    financeParticipant.name.includes('إعمار') || 
    financeParticipant.name.includes('Emaar') || 
    financeParticipant.color === 'bg-[#D4AF37]'
  );
  
  const currentParticipant = activeParticipant === 'customer' ? customerParticipant : financeParticipant;
  const messages = getMessages(selectedContact, activeParticipant);

  return (
    <div className="min-h-screen bg-[#F2F4F5] flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="px-6 pt-4 pb-3 sticky top-0 z-10 shadow-sm" style={{ backgroundImage: 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)' }}>
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => onNavigate('messages')}
            className="text-white hover:text-teal-100 transition-colors"
          >
            {isRTL ? <ArrowRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
          </button>
          <div className="flex-1">
            <h2 className="text-white font-semibold">{selectedContact.property || selectedContact.name}</h2>
            <p className="text-xs text-teal-100">
              {isRTL ? 'محادثة مدمجة (عميل ومطور)' : 'Combined Chat (Customer & Developer)'}
            </p>
          </div>
          <Button
            onClick={handleCall}
            variant="ghost"
            size="icon"
            className="flex-shrink-0 text-white hover:bg-white/20"
          >
            <Phone className="w-5 h-5" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeParticipant} onValueChange={(v: string) => setActiveParticipant(v as 'customer' | 'finance')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm border border-white/20">
            <TabsTrigger 
              value="customer" 
              className="flex items-center gap-2"
              style={{
                backgroundImage: activeParticipant === 'customer' ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)' : 'none',
                color: activeParticipant === 'customer' ? '#0E1E25' : '#FFFFFF'
              }}
            >
              <User className="w-4 h-4" />
              <span>{isRTL ? 'العميل' : 'Customer'}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="finance" 
              className="flex items-center gap-2"
              style={{
                backgroundImage: activeParticipant === 'finance' ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)' : 'none',
                color: activeParticipant === 'finance' ? '#0E1E25' : '#FFFFFF'
              }}
            >
              {isDeveloper ? <Building2 className="w-4 h-4" /> : <Banknote className="w-4 h-4" />}
              <span>{isDeveloper ? (isRTL ? 'المطور' : 'Developer') : (isRTL ? 'الممول' : 'Finance')}</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Current Participant Info */}
        {currentParticipant && (
          <div className="mt-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg flex items-center gap-2 border border-white/20">
            <div 
              className="rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
              style={{
                backgroundImage: currentParticipant.type === 'customer'
                  ? 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)'
                  : isDeveloper
                    ? 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)'
                    : 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
              }}
            >
              <span className="text-white text-xs">{currentParticipant.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-sm text-white truncate font-medium">{currentParticipant.name}</p>
                {currentParticipant.type === 'customer' && (
                  <Badge 
                    className={`text-xs flex items-center gap-1 ${
                      bookingFeePaid 
                        ? 'bg-green-500/90 text-white border-green-400' 
                        : 'bg-amber-500/90 text-white border-amber-400'
                    }`}
                    style={{
                      backgroundImage: bookingFeePaid 
                        ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                        : 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
                    }}
                  >
                    {bookingFeePaid ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>{isRTL ? 'تم الدفع' : 'Paid'}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3 h-3" />
                        <span>{isRTL ? 'لم يدفع' : 'Unpaid'}</span>
                      </>
                    )}
                  </Badge>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-teal-100">
                  {currentParticipant.type === 'customer' 
                    ? (isRTL ? 'عميل' : 'Customer')
                    : isDeveloper
                      ? (isRTL ? 'مطور عقاري' : 'Property Developer')
                      : (isRTL ? 'ممول - بنك' : 'Finance - Bank')
                  }
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Messages Container */}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                message.sender === 'me'
                  ? 'text-white'
                  : 'bg-white text-[#0E1E25] border border-teal-100'
              }`}
              style={message.sender === 'me' ? { backgroundImage: 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)' } : undefined}
            >
              {message.text && <p className="break-words">{message.text}</p>}
              
              {message.attachments && message.attachments.length > 0 && (
                <div className={`space-y-2 ${message.text ? 'mt-2' : ''}`}>
                  {message.attachments.map((attachment) => (
                    <div
                      key={attachment.id}
                      className={`flex items-center gap-2 p-2 rounded-lg ${
                        message.sender === 'me'
                          ? 'bg-white/10 backdrop-blur-sm'
                          : 'bg-teal-50'
                      }`}
                    >
                      {attachment.type === 'image' ? (
                        <ImageIcon className="w-4 h-4" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs truncate">{attachment.name}</p>
                        <p className="text-xs opacity-70">{attachment.size}</p>
                      </div>
                      <button className="hover:opacity-80">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <p
                className={`text-xs mt-1 ${
                  message.sender === 'me' ? 'text-teal-100' : 'text-[#4B5563]'
                }`}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-teal-100 p-4">
        {isRecording ? (
          <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg animate-pulse border border-red-200">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-700">
                {isRTL ? 'جاري التسجيل...' : 'Recording...'}
              </span>
              <span className="text-sm text-red-600 font-mono">
                {formatRecordingTime(recordingTime)}
              </span>
            </div>
            <Button
              onClick={cancelRecording}
              variant="ghost"
              size="icon"
              className="text-red-600 hover:bg-red-100"
            >
              <X className="w-5 h-5" />
            </Button>
            <Button
              onClick={stopRecording}
              className="bg-[#0F4C5C] hover:bg-[#0A3540]"
            >
              <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            {attachedFiles.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {attachedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2 min-w-fit"
                  >
                    {file.type.startsWith('image/') ? (
                      <ImageIcon className="w-4 h-4 text-[#0F4C5C]" />
                    ) : (
                      <FileText className="w-4 h-4 text-[#0F4C5C]" />
                    )}
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-900 max-w-[120px] truncate">
                        {file.name}
                      </span>
                      <span className="text-xs text-[#4B5563]">
                        {formatFileSize(file.size)}
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="text-[#4B5563] hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2">
              <Button
                onClick={handleCall}
                variant="outline"
                size="icon"
                className="flex-shrink-0 text-[#10B981] border-green-200 hover:bg-green-50"
              >
                <Phone className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                size="icon"
                className="flex-shrink-0 text-[#0F4C5C] border-teal-200 hover:bg-teal-50"
              >
                <Paperclip className="w-5 h-5" />
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,.pdf,.doc,.docx,.txt"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Input
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder={
                  isRTL 
                    ? `اكتب رسالة لـ ${currentParticipant?.name}...`
                    : `Message ${currentParticipant?.name}...`
                }
                className="flex-1 border-teal-100"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              {messageText.trim() || attachedFiles.length > 0 ? (
                <Button
                  onClick={handleSendMessage}
                  className="bg-[#0F4C5C] hover:bg-[#0A3540] px-4"
                >
                  <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              ) : (
                <Button
                  onMouseDown={startRecording}
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0 text-[#0F4C5C] border-teal-200 hover:bg-teal-50"
                >
                  <Mic className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Call Dialog */}
      <AlertDialog open={showCallDialog} onOpenChange={setShowCallDialog}>
        <AlertDialogContent dir={isRTL ? 'rtl' : 'ltr'}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              {isRTL ? 'اتصال هاتفي' : 'Phone Call'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {isRTL 
                ? `هل تريد الاتصال بـ ${currentParticipant?.name}؟`
                : `Do you want to call ${currentParticipant?.name}?`
              }
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              {isRTL ? 'إلغاء' : 'Cancel'}
            </AlertDialogCancel>
            <AlertDialogAction className="bg-green-600 hover:bg-green-700">
              <Phone className="w-4 h-4 mr-2" />
              {isRTL ? 'اتصال' : 'Call'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}