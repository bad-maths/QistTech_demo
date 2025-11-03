import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Send, Building2, Banknote, Home, ShoppingBag, User, MessageSquare, CreditCard, Check, AlertCircle, Mic, Phone, X, Pause, Play, Paperclip, FileText, Image as ImageIcon, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';

interface ChatScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  bookingData?: {
    openChats?: Array<{
      type: 'bank' | 'developer';
      name: string;
      property: string;
      bookingType: 'cash' | 'financing';
      financingDetails?: any;
    }>;
  };
}

interface ChatContact {
  id: string;
  name: string;
  type: 'bank' | 'developer';
  avatar: string;
  color: string;
  property?: string;
}

interface Contact {
  id: string;
  chatType: 'single-developer' | 'single-bank' | 'combined';
  name: string; // For single chats
  type?: 'bank' | 'developer'; // For single chats
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  avatar: string;
  color: string;
  property?: string;
  bookingType?: 'cash' | 'financing';
  // For combined chats
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

export function ChatScreen({ onNavigate, language, bookingData }: ChatScreenProps) {
  const isRTL = language === 'ar';
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messageText, setMessageText] = useState('');
  const [activeParticipant, setActiveParticipant] = useState<'bank' | 'developer'>('developer');
  const [newChatData, setNewChatData] = useState<any>(null);
  const [bookingFeePaid, setBookingFeePaid] = useState(false);
  const [bookingFeeDeclined, setBookingFeeDeclined] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  
  // Voice message states
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showCallDialog, setShowCallDialog] = useState(false);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Attachment states
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      chatType: 'single-bank',
      name: isRTL ? 'بنك الراجحي' : 'Al Rajhi Bank',
      type: 'bank',
      lastMessage: isRTL ? 'تمت الموافقة على طلبك' : 'Your application has been approved',
      lastMessageTime: '10:30',
      unread: 2,
      avatar: 'AR',
      color: 'bg-[#0F4C5C]',
    },
    {
      id: '2',
      chatType: 'single-developer',
      name: isRTL ? 'شركة إعمار العق��رية' : 'Emaar Properties',
      type: 'developer',
      lastMessage: isRTL ? 'العقار متاح للمعاينة' : 'Property available for viewing',
      lastMessageTime: '09:15',
      unread: 0,
      avatar: 'EP',
      color: 'bg-[#10B981]',
    },
    {
      id: '3',
      chatType: 'single-bank',
      name: isRTL ? 'بنك الأهلي' : 'Al Ahli Bank',
      type: 'bank',
      lastMessage: isRTL ? 'نحتاج مستندات إضافية' : 'Additional documents needed',
      lastMessageTime: isRTL ? 'أمس' : 'Yesterday',
      unread: 1,
      avatar: 'AA',
      color: 'bg-[#0F4C5C]',
    },
    {
      id: '4',
      chatType: 'single-developer',
      name: isRTL ? 'الدار العقارية' : 'Al Dar Properties',
      type: 'developer',
      lastMessage: isRTL ? 'شكراً لاهتمامك' : 'Thank you for your interest',
      lastMessageTime: isRTL ? 'أمس' : 'Yesterday',
      unread: 0,
      avatar: 'AD',
      color: 'bg-[#10B981]',
    },
    {
      id: '5',
      chatType: 'combined',
      name: isRTL ? 'فيلا النرجس - طلب #2847' : 'Narcissus Villa - Request #2847',
      lastMessage: isRTL ? 'البنك: تم إرسال عرض التمويل المبدئي' : 'Bank: Initial financing offer sent',
      lastMessageTime: '14:22',
      unread: 3,
      avatar: '2',
      color: 'bg-gradient-to-r from-[#0F4C5C] to-[#10B981]',
      property: isRTL ? 'فيلا النرجس' : 'Narcissus Villa',
      participants: [
        {
          id: 'bank-1',
          name: isRTL ? 'أحمد السالم - بنك الراجحي' : 'Ahmed Al-Salem - Al Rajhi Bank',
          type: 'bank',
          avatar: 'AS',
          color: 'bg-[#0F4C5C]',
          property: isRTL ? 'فيلا النرجس' : 'Narcissus Villa',
        },
        {
          id: 'developer-1',
          name: isRTL ? 'سارة المطيري - إعمار العقارية' : 'Sarah Al-Mutairi - Emaar Properties',
          type: 'developer',
          avatar: 'SM',
          color: 'bg-[#10B981]',
          property: isRTL ? 'فيلا النرجس' : 'Narcissus Villa',
        },
      ],
    },
  ]);

  // Add new chats when booking is made
  useEffect(() => {
    // Check if there's new chat data from application form
    if (bookingData && (bookingData as any).newChat) {
      const data = bookingData as any;
      const now = new Date();
      const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

      if (data.chatType === 'combined' && data.participants) {
        // Combined chat with both developer and bank staff
        const combinedContact: Contact = {
          id: `combined-${Date.now()}`,
          chatType: 'combined',
          name: data.property || (isRTL ? 'طلب تمويل عقار' : 'Property Financing Request'),
          lastMessage: isRTL 
            ? `تم استلام طلبك ${data.applicationId}. جاري التواصل معك...` 
            : `Your application ${data.applicationId} has been received. We'll be in touch...`,
          lastMessageTime: timeStr,
          unread: 2,
          avatar: '2',
          color: 'bg-gradient-to-r from-[#0F4C5C] to-[#0A3540]',
          property: data.property,
          participants: data.participants,
        };

        setContacts(prev => [combinedContact, ...prev]);
        setSelectedContact(combinedContact);
      } else if (data.chatType === 'single-bank') {
        // Single chat with bank only (external property)
        const singleContact: Contact = {
          id: `new-${Date.now()}`,
          chatType: 'single-bank',
          name: data.bankName || (isRTL ? 'البنك الأهلي' : 'National Bank'),
          type: 'bank',
          lastMessage: isRTL 
            ? `تم استلام طلب التمويل ${data.applicationId}. سنتواصل معك قريباً...` 
            : `Financing application ${data.applicationId} received. We'll contact you soon...`,
          lastMessageTime: timeStr,
          unread: 1,
          avatar: data.bankAvatar || 'NB',
          color: 'bg-[#0F4C5C]',
          property: data.propertyType,
        };

        setContacts(prev => [singleContact, ...prev]);
        setSelectedContact(singleContact);
      }
    } else if (bookingData?.openChats && bookingData.openChats.length > 0) {
      const now = new Date();
      const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      // Check if this is a combined chat (both bank and developer)
      const hasBank = bookingData.openChats.some(c => c.type === 'bank');
      const hasDeveloper = bookingData.openChats.some(c => c.type === 'developer');
      
      if (hasBank && hasDeveloper) {
        // Combined chat with tabs
        const bankChat = bookingData.openChats.find(c => c.type === 'bank')!;
        const developerChat = bookingData.openChats.find(c => c.type === 'developer')!;
        
        const participants: ChatContact[] = [
          {
            id: 'bank',
            name: bankChat.name,
            type: 'bank',
            avatar: bankChat.name.split(' ').length > 1 
              ? bankChat.name.split(' ')[0][0] + bankChat.name.split(' ')[1][0] 
              : bankChat.name.substring(0, 2).toUpperCase(),
            color: 'bg-[#0F4C5C]',
            property: bankChat.property,
          },
          {
            id: 'developer',
            name: developerChat.name,
            type: 'developer',
            avatar: developerChat.name.split(' ').length > 1 
              ? developerChat.name.split(' ')[0][0] + developerChat.name.split(' ')[1][0] 
              : developerChat.name.substring(0, 2).toUpperCase(),
            color: 'bg-[#10B981]',
            property: developerChat.property,
          },
        ];

        const combinedContact: Contact = {
          id: `combined-${Date.now()}`,
          chatType: 'combined',
          name: bankChat.property,
          lastMessage: isRTL 
            ? `طلب حجز وتمويل لـ ${bankChat.property}` 
            : `Booking & financing request for ${bankChat.property}`,
          lastMessageTime: timeStr,
          unread: 2,
          avatar: '2',
          color: 'bg-gradient-to-r from-[#0F4C5C] to-[#10B981]',
          property: bankChat.property,
          bookingType: 'financing',
          participants,
        };

        setContacts(prev => [combinedContact, ...prev]);
        setSelectedContact(combinedContact);
      } else {
        // Single chat
        const chat = bookingData.openChats[0];
        const words = chat.name.split(' ');
        const avatar = words.length > 1 
          ? words[0][0] + words[1][0] 
          : chat.name.substring(0, 2).toUpperCase();

        const welcomeMessage = chat.type === 'bank'
          ? (isRTL 
              ? `مرحباً! تم استلام طلب تمويلك لـ ${chat.property}` 
              : `Hello! Your financing request for ${chat.property} has been received`)
          : chat.bookingType === 'cash'
            ? (isRTL 
                ? `مرحباً! شكراً لاهتمامك بـ ${chat.property}` 
                : `Hello! Thank you for your interest in ${chat.property}`)
            : (isRTL 
                ? `مرحباً! تم استلام طلب حجزك لـ ${chat.property}` 
                : `Hello! Your booking request for ${chat.property} has been received`);

        const singleContact: Contact = {
          id: `new-${Date.now()}`,
          chatType: chat.type === 'bank' ? 'single-bank' : 'single-developer',
          name: chat.name,
          type: chat.type,
          lastMessage: welcomeMessage,
          lastMessageTime: timeStr,
          unread: 1,
          avatar: avatar,
          color: chat.type === 'bank' ? 'bg-[#0F4C5C]' : 'bg-[#10B981]',
          property: chat.property,
          bookingType: chat.bookingType,
        };

        setContacts(prev => [singleContact, ...prev]);
        setSelectedContact(singleContact);
      }
    }
  }, [bookingData, isRTL]);

  const getMessages = (contact: Contact, participantType?: 'bank' | 'developer'): Message[] => {
    const now = new Date();
    const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    // For combined chats, get messages based on active participant
    if (contact.chatType === 'combined' && contact.participants) {
      const participant = contact.participants.find(p => p.type === participantType);
      if (!participant) return [];

      if (participantType === 'bank') {
        const isCalculationRequest = contact.property && (
          contact.property.includes('حسبة') || 
          contact.property.includes('Calculation')
        );
        
        return [
          {
            id: '1',
            sender: 'them',
            text: isRTL 
              ? isCalculationRequest 
                ? 'مرحباً! تم استلام طلب الحسبة البنكية. سنقوم بتقييم قدرتك التمويلية'
                : `مرحباً! تم استلام طلب تمويلك لـ ${contact.property}`
              : isCalculationRequest
                ? 'Hello! Your bank calculation request has been received. We will assess your financing capacity'
                : `Hello! Your financing request for ${contact.property} has been received`,
            time: timeStr,
          },
          {
            id: '2',
            sender: 'them',
            text: isRTL 
              ? isCalculationRequest
                ? 'نحتاج بعض المستندات لإتمام الحسبة. هل يمكنك تزويدنا بآخر 3 كشوف حساب بنكي؟'
                : 'سنقوم بمراجعة طلبك والرد عليك خلال 24-48 ساعة'
              : isCalculationRequest
                ? 'We need some documents to complete the calculation. Can you provide your last 3 bank statements?'
                : 'We will review your request and respond within 24-48 hours',
            time: timeStr,
          },
          {
            id: '3',
            sender: 'them',
            text: isRTL 
              ? isCalculationRequest
                ? 'بناءً على الحسبة، سنحدد أفضل العروض التمويلية المناسبة لك'
                : 'هل لديك أي استفسارات؟'
              : isCalculationRequest
                ? 'Based on the calculation, we will determine the best financing options for you'
                : 'Do you have any questions?',
            time: timeStr,
          },
        ];
      } else {
        const isCalculationRequest = contact.property && (
          contact.property.includes('حسبة') || 
          contact.property.includes('Calculation')
        );
        
        return [
          {
            id: '1',
            sender: 'them',
            text: isRTL 
              ? isCalculationRequest
                ? 'مرحباً! أنا هنا لمساعدتك في إيجاد العقار المناسب بعد معرفة قدرتك الشرائية'
                : `مرحباً! تم استلام طلب حجزك لـ ${contact.property}`
              : isCalculationRequest
                ? 'Hello! I am here to help you find the right property after knowing your purchasing power'
                : `Hello! Your booking request for ${contact.property} has been received`,
            time: timeStr,
          },
          {
            id: '2',
            sender: 'them',
            text: isRTL 
              ? isCalculationRequest
                ? 'لدينا مجموعة متنوعة من العقارات التي قد تناسب ميزانيتك'
                : 'سنساعدك في إتمام عملية التمويل والحجز'
              : isCalculationRequest
                ? 'We have a variety of properties that may suit your budget'
                : 'We will help you complete the financing and booking process',
            time: timeStr,
          },
        ];
      }
    }

    // For single chats with property
    if (contact.property && contact.type) {
      if (contact.type === 'bank') {
        return [
          {
            id: '1',
            sender: 'them',
            text: isRTL 
              ? `مرحباً! تم استلام طلب تمويلك لـ ${contact.property}` 
              : `Hello! Your financing request for ${contact.property} has been received`,
            time: timeStr,
          },
          {
            id: '2',
            sender: 'them',
            text: isRTL 
              ? 'سنقوم بمراجعة طلبك والرد عليك خلال 24-48 ساعة' 
              : 'We will review your request and respond within 24-48 hours',
            time: timeStr,
          },
          {
            id: '3',
            sender: 'them',
            text: isRTL 
              ? 'هل لديك أي استفسارات؟' 
              : 'Do you have any questions?',
            time: timeStr,
          },
        ];
      } else {
        return [
          {
            id: '1',
            sender: 'them',
            text: contact.bookingType === 'cash'
              ? (isRTL 
                  ? `مرحباً! شكراً لاهتمامك بـ ${contact.property}` 
                  : `Hello! Thank you for your interest in ${contact.property}`)
              : (isRTL 
                  ? `مرحباً! تم استلام طلب حجزك لـ ${contact.property}` 
                  : `Hello! Your booking request for ${contact.property} has been received`),
            time: timeStr,
          },
          {
            id: '2',
            sender: 'them',
            text: contact.bookingType === 'cash'
              ? (isRTL 
                  ? 'سنساعدك في إتمام عملية الشراء. هل ترغب في تحديد موعد للمعاينة؟' 
                  : 'We will help you complete the purchase. Would you like to schedule a viewing?')
              : (isRTL 
                  ? 'سنساعدك في إتمام عملية التمويل والحجز' 
                  : 'We will help you complete the financing and booking process'),
            time: timeStr,
          },
        ];
      }
    }

    // Default messages for existing chats
    const messageSets: Record<string, Message[]> = {
      '1': [
        {
          id: '1',
          sender: 'them',
          text: isRTL ? 'م��حباً! شكراً لتقديم طلب التمويل' : 'Hello! Thank you for submitting your financing application',
          time: '09:00',
        },
        {
          id: '2',
          sender: 'me',
          text: isRTL ? 'متى يمكنني توقع الرد؟' : 'When can I expect a response?',
          time: '09:15',
        },
        {
          id: '3',
          sender: 'them',
          text: isRTL ? 'عادة خلال 2-3 أيام عمل. نحتاج بعض المستندات منك' : 'Usually within 2-3 business days. We need some documents from you',
          time: '09:20',
          attachments: [
            {
              id: 'att1',
              name: isRTL ? 'قائمة_المستندات_المطلوبة.pdf' : 'required_documents_list.pdf',
              type: 'document',
              url: '#',
              size: '156 KB',
            },
          ],
        },
        {
          id: '4',
          sender: 'them',
          text: isRTL ? 'تمت الموافقة على طلبك' : 'Your application has been approved',
          time: '10:30',
        },
      ],
      '2': [
        {
          id: '1',
          sender: 'me',
          text: isRTL ? 'مرحباً، أنا مهتم بالفيلا في شمال الرياض' : 'Hello, I am interested in the villa in North Riyadh',
          time: '08:00',
        },
        {
          id: '2',
          sender: 'them',
          text: isRTL ? 'مرحباً! سنكون سعداء بترتيب معاينة' : 'Hello! We would be happy to arrange a viewing',
          time: '08:30',
        },
        {
          id: '3',
          sender: 'them',
          text: isRTL ? 'العقار متاح للمعاينة' : 'Property available for viewing',
          time: '09:15',
        },
      ],
      '3': [
        {
          id: '1',
          sender: 'them',
          text: isRTL ? 'مرحباً! تم استلام طلبك' : 'Hello! Your request has been received',
          time: isRTL ? 'أمس' : 'Yesterday',
        },
        {
          id: '2',
          sender: 'them',
          text: isRTL ? 'نحتاج مستندات إضافية' : 'Additional documents needed',
          time: isRTL ? 'أمس' : 'Yesterday',
        },
      ],
      '4': [
        {
          id: '1',
          sender: 'me',
          text: isRTL ? 'هل الشقة لا تزال متاحة؟' : 'Is the apartment still available?',
          time: isRTL ? 'أمس' : 'Yesterday',
        },
        {
          id: '2',
          sender: 'them',
          text: isRTL ? 'شكراً لاهتمامك' : 'Thank you for your interest',
          time: isRTL ? 'أمس' : 'Yesterday',
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

  // Voice recording functions
  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    recordingTimerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    // In a real app, start actual voice recording here
  };

  const stopRecording = () => {
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
    }
    setIsRecording(false);
    // In a real app, send the voice message here
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
    // In a real app, initiate the call here
  };

  const getChatTypeLabel = (chatType: Contact['chatType']) => {
    switch (chatType) {
      case 'single-bank':
        return isRTL ? 'تمويل' : 'Financing';
      case 'single-developer':
        return isRTL ? 'حجز' : 'Booking';
      case 'combined':
        return isRTL ? 'حجز وتمويل' : 'Booking & Financing';
    }
  };

  // Chat List View
  if (!selectedContact) {
    return (
      <div className="min-h-screen bg-[#F2F4F5] flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 pt-12 pb-6 shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => onNavigate('home')}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isRTL ? <ArrowRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold">{isRTL ? 'الرسائل' : 'Messages'}</h1>
            <Badge className="bg-[#D4AF37] text-[#0E1E25] border-[#B8941F]">
              {contacts.filter(c => c.unread > 0).length}
            </Badge>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto p-4 pb-24">
          {contacts.length === 0 ? (
            <div className="text-center py-12 text-[#4B5563]">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-[#0F4C5C]/20" />
              <p>{isRTL ? 'لا توجد رسائل بعد' : 'No messages yet'}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {contacts.map((contact) => {
                return (
                  <Card
                    key={contact.id}
                    className="p-4 cursor-pointer hover:shadow-lg transition-shadow border-teal-100 bg-white"
                    onClick={() => {
                      setSelectedContact(contact);
                      setActiveParticipant('developer'); // Default to developer for combined chats
                      // Mark as read
                      setContacts(prev => 
                        prev.map(c => c.id === contact.id ? { ...c, unread: 0 } : c)
                      );
                    }}
                  >
                    <div className="flex items-start gap-3">
                      {/* Avatar */}
                      <div 
                        className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-white"
                        style={{
                          backgroundImage: contact.chatType === 'combined' 
                            ? 'linear-gradient(135deg, #0F4C5C 0%, #10B981 100%)'
                            : contact.type === 'bank'
                              ? 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)'
                              : 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                        }}
                      >
                        {contact.chatType === 'combined' ? (
                          <div className="flex items-center justify-center">
                            <span className="text-xs">{contact.avatar}</span>
                          </div>
                        ) : (
                          <span>{contact.avatar}</span>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-[#0E1E25] truncate font-medium">{contact.name}</h3>
                          <span className="text-xs text-[#4B5563] flex-shrink-0 ml-2">{contact.lastMessageTime}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          {/* Chat Type Badge */}
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              contact.chatType === 'combined' 
                                ? 'bg-teal-50 border-teal-200 text-[#0F4C5C]' 
                                : contact.chatType === 'single-bank'
                                  ? 'bg-teal-50 border-teal-200 text-[#0F4C5C]'
                                  : 'bg-green-50 border-green-200 text-[#059669]'
                            }`}
                          >
                            {contact.chatType === 'combined' && (
                              <span className="flex items-center gap-1">
                                <Banknote className="w-3 h-3" style={{ color: '#0F4C5C' }} />
                                <Building2 className="w-3 h-3" style={{ color: '#0F4C5C' }} />
                              </span>
                            )}
                            {contact.chatType === 'single-bank' && <Banknote className="w-3 h-3" style={{ color: '#0F4C5C' }} />}
                            {contact.chatType === 'single-developer' && <Building2 className="w-3 h-3" style={{ color: '#059669' }} />}
                            <span className="ml-1">{getChatTypeLabel(contact.chatType)}</span>
                          </Badge>
                          
                          {/* New Booking Badge */}
                          {contact.property && (
                            <Badge variant="outline" className="text-xs bg-amber-50 border-amber-200 text-amber-700">
                              {isRTL ? 'حجز جديد' : 'New'}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-[#4B5563] truncate">{contact.lastMessage}</p>
                          {contact.unread > 0 && (
                            <Badge className="bg-[#D4AF37] text-[#0E1E25] ml-2 flex-shrink-0 border-[#B8941F]">
                              {contact.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1 text-gray-400">
              <Home className="w-6 h-6" />
              <span className="text-xs">{isRTL ? 'الرئيسية' : 'Home'}</span>
            </button>
            <button
              onClick={() => onNavigate('financingListings')}
              className="flex flex-col items-center gap-1 text-gray-400"
            >
              <Banknote className="w-6 h-6" />
              <span className="text-xs">{isRTL ? 'التمويل' : 'Financing'}</span>
            </button>
            <button
              onClick={() => onNavigate('propertyListings')}
              className="flex flex-col items-center gap-1 text-gray-400"
            >
              <Building2 className="w-6 h-6" />
              <span className="text-xs">{isRTL ? 'العقارات' : 'Properties'}</span>
            </button>
            <button
              onClick={() => onNavigate('myOrders')}
              className="flex flex-col items-center gap-1 text-gray-400"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="text-xs">{isRTL ? 'طلباتي' : 'Orders'}</span>
            </button>
            <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1 text-gray-400">
              <User className="w-6 h-6" />
              <span className="text-xs">{isRTL ? 'الملف' : 'Profile'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Single Chat Conversation View
  if (selectedContact.chatType !== 'combined') {
    const messages = getMessages(selectedContact);
    
    return (
      <div className="min-h-screen bg-[#F2F4F5] flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="px-6 pt-4 pb-4 sticky top-0 z-10 shadow-sm" style={{ backgroundImage: 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)' }}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedContact(null)}
              className="text-white hover:text-teal-100 transition-colors"
            >
              {isRTL ? <ArrowRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
            </button>
            <div className={`${selectedContact.color} rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-sm">{selectedContact.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-white truncate font-semibold">{selectedContact.name}</h2>
              <div className="flex items-center gap-1">
                {selectedContact.type === 'bank' ? (
                  <Banknote className="w-3 h-3 text-teal-200" />
                ) : (
                  <Building2 className="w-3 h-3 text-teal-200" />
                )}
                <p className="text-xs text-teal-100">
                  {selectedContact.type === 'bank' 
                    ? (isRTL ? 'بنك' : 'Bank')
                    : (isRTL ? 'مطور عقاري' : 'Property Developer')
                  }
                </p>
              </div>
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
          {selectedContact.property && (
            <div className="mt-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-xs text-white font-medium">
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
                    ? 'text-white'
                    : 'bg-white text-[#0E1E25] border border-teal-100'
                }`}
                style={message.sender === 'me' ? { backgroundImage: 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)' } : undefined}
              >
                {message.text && <p className="break-words">{message.text}</p>}
                
                {/* Attachments */}
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
            // Recording UI
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
              {/* Attached Files Preview */}
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

              {/* Input Area */}
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
  const bankParticipant = selectedContact.participants?.find(p => p.type === 'bank');
  const developerParticipant = selectedContact.participants?.find(p => p.type === 'developer');
  const currentParticipant = activeParticipant === 'bank' ? bankParticipant : developerParticipant;
  const messages = getMessages(selectedContact, activeParticipant);

  return (
    <div className="min-h-screen bg-[#F2F4F5] flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="px-6 pt-4 pb-3 sticky top-0 z-10 shadow-sm" style={{ backgroundImage: 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)' }}>
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => setSelectedContact(null)}
            className="text-white hover:text-teal-100 transition-colors"
          >
            {isRTL ? <ArrowRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
          </button>
          <div className="flex-1">
            <h2 className="text-white font-semibold">{selectedContact.property}</h2>
            <p className="text-xs text-teal-100">
              {isRTL ? 'حجز وتمويل عقاري' : 'Property Booking & Financing'}
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
        <Tabs value={activeParticipant} onValueChange={(v: string) => setActiveParticipant(v as 'bank' | 'developer')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm border border-white/20">
            <TabsTrigger 
              value="bank" 
              className="flex items-center justify-center gap-2" 
              style={{ 
                backgroundImage: activeParticipant === 'bank' ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)' : 'none',
                color: activeParticipant === 'bank' ? '#0E1E25' : '#FFFFFF'
              }}
            >
              <Banknote className="w-4 h-4" />
              <span>{isRTL ? 'البنك' : 'Bank'}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="developer" 
              className="flex items-center justify-center gap-2" 
              style={{ 
                backgroundImage: activeParticipant === 'developer' ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)' : 'none',
                color: activeParticipant === 'developer' ? '#0E1E25' : '#FFFFFF'
              }}
            >
              <Building2 className="w-4 h-4" />
              <span>{isRTL ? 'المطور' : 'Developer'}</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Current Participant Info */}
        {currentParticipant && (
          <div className="mt-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg flex items-center gap-2 border border-white/20">
            <div className={`${currentParticipant.color} rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-xs">{currentParticipant.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate font-medium">{currentParticipant.name}</p>
              <p className="text-xs text-teal-100">
                {currentParticipant.type === 'bank' 
                  ? (isRTL ? 'موظف البنك' : 'Bank Officer')
                  : (isRTL ? 'موظف المبيعات' : 'Sales Agent')
                }
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        {/* Booking Fee Payment Card - Only show in developer tab at the beginning */}
        {activeParticipant === 'developer' && !bookingFeePaid && !bookingFeeDeclined && (
          <Card className="p-5 bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200">
            <div className="flex items-start gap-4">
              <div className="bg-[#10B981] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#0E1E25] mb-2 text-right font-semibold">
                  {isRTL ? 'دفع رسوم الحجز' : 'Pay Booking Fee'}
                </h3>
                <p className="text-sm text-[#4B5563] mb-4 leading-relaxed text-right">
                  {isRTL 
                    ? 'لتأكيد حجزك، يرجى دفع رسوم الحجز' 
                    : 'To confirm your reservation, please pay the booking fee'}
                </p>
                <div className="bg-white rounded-lg p-4 mb-4 border border-teal-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#4B5563]">{isRTL ? 'رسوم الحجز' : 'Booking Fee'}</span>
                    <span className="text-[#0E1E25] font-semibold">5,000 {isRTL ? 'ر.س' : 'SAR'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#4B5563]">{isRTL ? 'قابلة للاسترداد' : 'Refundable'}</span>
                    <Badge className="bg-[#10B981] text-white border-[#059669]">
                      <Check className="w-3 h-3" />
                      <span className={`${isRTL ? 'mr-1' : 'ml-1'}`}>{isRTL ? 'نعم' : 'Yes'}</span>
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 text-[13px] border-teal-200 text-[#0F4C5C] hover:bg-teal-50"
                    onClick={() => setBookingFeeDeclined(true)}
                  >
                    {isRTL ? 'لاحقاً' : 'Later'}
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="flex-1 bg-[#10B981] hover:bg-[#059669]">
                        <CreditCard className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        {isRTL ? 'ادفع الآن' : 'Pay Now'}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent dir={isRTL ? 'rtl' : 'ltr'}>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {isRTL ? 'تأكيد دفع رسوم الحجز' : 'Confirm Booking Fee Payment'}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {isRTL 
                            ? 'سيتم خصم مبلغ 5,000 ريال سعودي كرسوم حجز قابلة للاسترداد. هل تريد المتابعة؟' 
                            : 'A refundable booking fee of 5,000 SAR will be charged. Do you want to proceed?'}
                        </AlertDialogDescription>
                        <div className="mt-4 p-3 bg-teal-50 rounded-lg border border-teal-200">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-[#0F4C5C] flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-[#0F4C5C]">
                              {isRTL 
                                ? 'ستتم إضافة رسوم الحجز إلى المبلغ الإجمالي عند إتمام عملية الشراء' 
                                : 'The booking fee will be added to the total amount when completing the purchase'}
                            </p>
                          </div>
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>{isRTL ? 'إلغاء' : 'Cancel'}</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            setBookingFeePaid(true);
                            setShowPaymentSuccess(true);
                            setTimeout(() => setShowPaymentSuccess(false), 3000);
                          }}
                          className="bg-[#10B981] hover:bg-[#059669]"
                        >
                          {isRTL ? 'تأكيد الدفع' : 'Confirm Payment'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </Card>
        )}
        
        {/* Payment Success Message */}
        {showPaymentSuccess && (
          <Card className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-[#10B981]">
            <div className="flex items-center gap-3">
              <div className="bg-[#10B981] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#065f46] mb-1 font-semibold">
                  {isRTL ? 'تم الدفع بنجاح!' : 'Payment Successful!'}
                </h3>
                <p className="text-sm text-[#059669]">
                  {isRTL 
                    ? 'تم تأكيد حجزك. شكراً لك!' 
                    : 'Your reservation has been confirmed. Thank you!'}
                </p>
              </div>
            </div>
          </Card>
        )}
        
        {/* Messages */}
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
              
              {/* Attachments */}
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
          // Recording UI
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
            {/* Attached Files Preview */}
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

            {/* Input Area */}
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
