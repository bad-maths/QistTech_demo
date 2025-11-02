import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Send, User, Mic, Phone, X, Paperclip, FileText, Image as ImageIcon, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../ui/alert-dialog';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeeChatScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
  chatData?: {
    customerId: string;
    customerName: string;
    customerAvatar?: string;
  };
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

export function EmployeeChatScreen({ onNavigate, language, employeeData, chatData }: EmployeeChatScreenProps) {
  const isRTL = language === 'ar';
  const [messageText, setMessageText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showCallDialog, setShowCallDialog] = useState(false);
  const [activeTab, setActiveTab] = useState<'finance' | 'customer'>('customer');
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Attachment states
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const customerName = chatData?.customerName || (isRTL ? 'محمد أحمد الغامدي' : 'Mohammed Ahmed Al-Ghamdi');

  const messages: Message[] = [
    {
      id: '1',
      sender: 'them',
      text: isRTL ? 'مرحباً، أنا مهتم بمعرفة المزيد عن العقارات المتاحة' : 'Hello, I am interested in learning more about available properties',
      time: '10:00',
    },
    {
      id: '2',
      sender: 'me',
      text: isRTL ? 'أهلاً وسهلاً! سأكون سعيداً بمساعدتك' : 'Welcome! I will be happy to help you',
      time: '10:02',
    },
    {
      id: '3',
      sender: 'them',
      text: isRTL ? 'هل يمكنك إرسال بعض الخيارات؟' : 'Can you send me some options?',
      time: '10:05',
      attachments: [
        {
          id: 'att1',
          name: isRTL ? 'متطلبات_العقار.pdf' : 'property_requirements.pdf',
          type: 'document',
          url: '#',
          size: '245 KB',
        },
      ],
    },
    {
      id: '4',
      sender: 'me',
      text: isRTL ? 'بالتأكيد! سأرسل لك بعض الخيارات المناسبة' : 'Certainly! I will send you some suitable options',
      time: '10:08',
    },
  ];

  const financeMessages: Message[] = [
    {
      id: '1',
      sender: 'them',
      text: isRTL ? 'هل يمكنك التحقق من أسعار التمويل الحالية؟' : 'Can you verify the current financing rates?',
      time: '09:30',
    },
    {
      id: '2',
      sender: 'me',
      text: isRTL ? 'نعم، الأسعار الحالية هي 4.5% للعقارات السكنية' : 'Yes, current rates are 4.5% for residential properties',
      time: '09:35',
    },
    {
      id: '3',
      sender: 'them',
      text: isRTL ? 'هل يمكن تعديل هذا بناءً على ملف العميل؟' : 'Can this be adjusted based on client profile?',
      time: '09:40',
    },
    {
      id: '4',
      sender: 'me',
      text: isRTL ? 'بالطبع، يمكننا تقديم معدل خصم 0.5% للعملاء المؤهلين' : 'Of course, we can offer a 0.5% discount rate for qualified clients',
      time: '09:45',
    },
  ];

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

  return (
    <div 
      className="min-h-screen bg-[#F2F4F5] flex flex-col pb-20 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0F4C5C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white px-6 py-4 sticky top-0 z-10 border-b border-[#0F4C5C]/10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('messages')}
              className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10"
            >
              {isRTL ? <ArrowRight className="w-5 h-5 text-white" /> : <ArrowLeft className="w-5 h-5 text-white" />}
            </button>
            <div className=" rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-white font-semibold truncate">{customerName}</h2>
              <p className="text-xs text-white/70">
                {isRTL ? 'عميل' : 'Customer'}
              </p>
            </div>
            <Button
              onClick={handleCall}
              variant="ghost"
              size="icon"
              className="flex-shrink-0 text-white hover:bg-white/20 rounded-lg"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 bg-white border-b border-[#0F4C5C]/10">
          <button
            onClick={() => setActiveTab('customer')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'customer'
                ? 'bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md'
                : 'bg-[#F2F4F5] text-[#0E1E25] hover:bg-[#E8EAED]'
            }`}
          >
            {isRTL ? 'العميل' : 'Customer'}
          </button>
          <button
            onClick={() => setActiveTab('finance')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'finance'
                ? 'bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md'
                : 'bg-[#F2F4F5] text-[#0E1E25] hover:bg-[#E8EAED]'
            }`}
          >
            {isRTL ? 'الموظف المالي' : 'Finance Employee'}
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {(activeTab === 'customer' ? messages : financeMessages).map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  message.sender === 'me'
                    ? 'bg-[#059669] text-white shadow-md'
                    : 'bg-gradient-to-br from-[#F2F4F5] via-[#F2F4F5] to-[#E8EAED] text-[#0E1E25] border border-[#0F4C5C]/10 shadow-lifted'
                }`}
              >
                {message.text && <p className="break-words text-sm">{message.text}</p>}
                
                {/* Attachments */}
                {message.attachments && message.attachments.length > 0 && (
                  <div className={`space-y-2 ${message.text ? 'mt-2' : ''}`}>
                    {message.attachments.map((attachment) => (
                      <div
                        key={attachment.id}
                        className={`flex items-center gap-2 p-2 rounded-lg ${
                          message.sender === 'me'
                            ? 'bg-white/20'
                            : 'bg-white/60 border border-[#0F4C5C]/10'
                        }`}
                      >
                        {attachment.type === 'image' ? (
                          <ImageIcon className={`w-4 h-4 flex-shrink-0 ${message.sender === 'me' ? 'text-white' : 'text-[#0F4C5C]'}`} />
                        ) : (
                          <FileText className={`w-4 h-4 flex-shrink-0 ${message.sender === 'me' ? 'text-white' : 'text-[#0F4C5C]'}`} />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs truncate font-medium">{attachment.name}</p>
                          <p className={`text-xs ${message.sender === 'me' ? 'text-white/70' : 'text-[#4B5563]'}`}>{attachment.size}</p>
                        </div>
                        <button className={`flex-shrink-0 ${message.sender === 'me' ? 'text-white' : 'text-[#0F4C5C]'}`}>
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'me' ? 'text-white/70' : 'text-[#4B5563]'
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white/80 backdrop-blur-lg border-t border-[#0F4C5C]/10 p-4 mt-auto">
          {isRecording ? (
            // Recording UI
            <div className="flex items-center gap-3 bg-red-50 p-3 rounded-xl border border-red-200 animate-pulse">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm text-red-700 font-medium">
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
                className="text-red-600 hover:bg-red-100 rounded-lg flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </Button>
              <Button
                onClick={stopRecording}
                className="bg-gradient-to-r from-[#059669] to-[#047857] text-white hover:from-[#047857] hover:to-[#036b4a] rounded-lg"
              >
                <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {/* Attached Files Preview */}
              {attachedFiles.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {attachedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941F]/5 border border-[#D4AF37]/20 rounded-lg px-3 py-2 min-w-fit"
                    >
                      {file.type.startsWith('image/') ? (
                        <ImageIcon className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      ) : (
                        <FileText className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      )}
                      <div className="flex flex-col">
                        <span className="text-xs text-[#0E1E25] max-w-[120px] truncate font-medium">
                          {file.name}
                        </span>
                        <span className="text-xs text-[#4B5563]">
                          {formatFileSize(file.size)}
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-[#4B5563] hover:text-red-600 flex-shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleCall}
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0 text-white bg-[#10B981] hover:bg-[#0EA570] rounded-lg border-0"
                >
                  <Phone className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0 text-white bg-[#D4AF37] hover:bg-[#BFA02B] rounded-lg border-0"
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
                  className="flex-1 border-[#0F4C5C]/20 focus:ring-[#0F4C5C]/30 rounded-lg"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                {messageText.trim() || attachedFiles.length > 0 ? (
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] text-white hover:from-[#0A3540] hover:to-[#082735] px-4 rounded-lg"
                  >
                    <Send className={`w-5 h-5 text-white ${isRTL ? 'rotate-180' : ''}`} />
                  </Button>
                ) : (
                  <Button
                    onMouseDown={startRecording}
                    variant="ghost"
                    size="icon"
                    className="flex-shrink-0 text-white bg-[#0F4C5C] hover:bg-[#0A3540] rounded-lg border-0"
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call Dialog */}
      <AlertDialog open={showCallDialog} onOpenChange={setShowCallDialog}>
        <AlertDialogContent dir={isRTL ? 'rtl' : 'ltr'} className="max-w-sm rounded-2xl border border-[#0F4C5C]/10 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-[#0E1E25]">
              <Phone className="w-5 h-5 text-[#10B981]" />
              {isRTL ? 'اتصال هاتفي' : 'Phone Call'}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#4B5563]">
              {isRTL 
                ? `هل تريد الاتصال بـ ${customerName}؟`
                : `Do you want to call ${customerName}?`
              }
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-[#0F4C5C]/20 text-[#0E1E25] hover:bg-[#F2F4F5]">
              {isRTL ? 'إلغاء' : 'Cancel'}
            </AlertDialogCancel>
            <AlertDialogAction className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white hover:from-[#059669] hover:to-[#047857]">
              <Phone className="w-4 h-4 mr-2" />
              {isRTL ? 'اتصال' : 'Call'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bottom Navigation */}
      <BottomNavBar
        currentScreen="messages"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
