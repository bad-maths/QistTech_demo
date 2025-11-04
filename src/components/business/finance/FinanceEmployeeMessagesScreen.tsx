import { useState } from 'react';
import { ArrowLeft, ArrowRight, User, Banknote, Building2, MessageSquare } from 'lucide-react';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { BottomNavBar } from '../../BottomNavBar';

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

interface EmployeeMessagesScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function FinanceEmployeeMessagesScreen({ onNavigate, language }: EmployeeMessagesScreenProps) {
  const isRTL = language === 'ar';
  
  const [contacts] = useState<Contact[]>([
    {
      id: '1',
      chatType: 'single-customer',
      name: isRTL ? 'سعود أحمد العتيبي' : 'Saud Ahmed Al-Otaibi',
      type: 'customer',
      lastMessage: isRTL ? 'متى سيتم الرد على طلب التمويل؟' : 'When will the financing request be answered?',
      lastMessageTime: '10:30',
      unread: 2,
      avatar: 'SA',
      color: 'bg-[#0F4C5C]',
      property: isRTL ? 'شقة الأندلس' : 'Andalus Apartment',
      requestType: 'direct',
    },
    {
      id: '2',
      chatType: 'combined',
      name: isRTL ? 'فيلا النخيل - طلب #4512' : 'Palm Villa - Request #4512',
      lastMessage: isRTL ? 'المطور: جاهز لإتمام الصفقة' : 'Developer: Ready to close the deal',
      lastMessageTime: '09:15',
      unread: 3,
      avatar: '2',
      color: 'bg-gradient-to-r from-[#0F4C5C] to-[#D4AF37]',
      property: isRTL ? 'فيلا النخيل' : 'Palm Villa',
      participants: [
        {
          id: 'customer-2',
          name: isRTL ? 'ريم خالد المطيري' : 'Reem Khalid Al-Mutairi',
          type: 'customer',
          avatar: 'RM',
          color: 'bg-[#0F4C5C]',
          property: isRTL ? 'فيلا النخيل' : 'Palm Villa',
        },
        {
          id: 'developer-2',
          name: isRTL ? 'ماجد الدوسري - شركة دار الأركان' : 'Majed Al-Dosari - Dar Al-Arkan',
          type: 'finance',
          avatar: 'MD',
          color: 'bg-[#D4AF37]',
          property: isRTL ? 'فيلا النخيل' : 'Palm Villa',
        },
      ],
    },
    {
      id: '3',
      chatType: 'single-customer',
      name: isRTL ? 'نورة عبدالله السالم' : 'Noura Abdullah Al-Salem',
      type: 'customer',
      lastMessage: isRTL ? 'هل يمكنني الحصول على عرض تمويل أفضل؟' : 'Can I get a better financing offer?',
      lastMessageTime: '08:45',
      unread: 0,
      avatar: 'NA',
      color: 'bg-[#10B981]',
      property: isRTL ? 'شقة الفيحاء' : 'Faihaa Apartment',
      requestType: 'referral',
    },
    {
      id: '4',
      chatType: 'single-customer',
      name: isRTL ? 'عبدالرحمن محمد القحطاني' : 'Abdulrahman Mohammed Al-Qahtani',
      type: 'customer',
      lastMessage: isRTL ? 'ما هي المستندات المطلوبة؟' : 'What documents are required?',
      lastMessageTime: 'Yesterday',
      unread: 1,
      avatar: 'AQ',
      color: 'bg-[#0F4C5C]',
      property: isRTL ? 'فيلا الورد' : 'Rose Villa',
      requestType: 'direct',
    },
  ]);

  const getChatTypeLabel = (contact: Contact) => {
    switch (contact.chatType) {
      case 'single-customer':
        return isRTL ? 'عميل' : 'Customer';
      case 'single-finance':
        return isRTL ? 'تمويل' : 'Finance';
      case 'combined':
        // Check if it's a developer or finance combined chat
        const isDeveloper = contact.participants?.some(p => 
          p.name.includes('إعمار') || p.name.includes('Emaar') || p.color === 'bg-[#D4AF37]'
        );
        if (isDeveloper) {
          return isRTL ? 'عميل ومطور' : 'Customer & Developer';
        }
        return isRTL ? 'عميل وتمويل' : 'Customer & Finance';
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F4F5] flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="relative bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white sticky top-0 z-10">
        <div className="px-6 pt-12 pb-6">
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
        
        {/* Wave Separator */}
        <svg 
          className="w-full h-8 relative z-10" 
          viewBox="0 0 1440 48" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 24C360 12 720 12 1080 24C1260 30 1350 30 1440 24V48H0V24Z" 
            fill="#F2F4F5"
          />
          <path 
            d="M0 30C240 18 480 18 720 30C960 42 1200 42 1440 30V48H0V30Z" 
            fill="url(#wave-gradient)" 
            fillOpacity="0.3"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5" />
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </header>

      <div className="flex-1 overflow-y-auto p-4 pb-24 -mt-2">
        {contacts.length === 0 ? (
          <div className="text-center py-12 text-[#4B5563]">
            <MessageSquare className="w-16 h-16 mx-auto mb-4 text-[#0F4C5C]/20" />
            <p>{isRTL ? 'لا توجد رسائل بعد' : 'No messages yet'}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                className="p-4 cursor-pointer hover:shadow-lg transition-shadow border-teal-100 bg-white"
                onClick={() => onNavigate('employeeChat', { contact })}
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-white"
                    style={{
                      backgroundImage: contact.chatType === 'combined' 
                        ? 'linear-gradient(135deg, #0F4C5C 0%, #10B981 100%)'
                        : contact.type === 'customer'
                          ? 'linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%)'
                          : 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                    }}
                  >
                    <span>{contact.avatar}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-[#0E1E25] truncate font-medium">{contact.name}</h3>
                      <span className="text-xs text-[#4B5563] flex-shrink-0 ml-2">{contact.lastMessageTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          contact.chatType === 'combined'
                            ? 'bg-purple-50 border-purple-200 text-purple-700'
                            : 'bg-green-50 border-green-200 text-[#059669]'
                        }`}
                      >
                        {contact.chatType === 'combined' ? (
                          <>
                            <User className="w-3 h-3" style={{ color: '#7C3AED' }} />
                            {contact.participants?.some(p => 
                              p.name.includes('إعمار') || p.name.includes('Emaar') || p.color === 'bg-[#D4AF37]'
                            ) ? (
                              <Building2 className="w-3 h-3 ml-1" style={{ color: '#7C3AED' }} />
                            ) : (
                              <Banknote className="w-3 h-3 ml-1" style={{ color: '#7C3AED' }} />
                            )}
                          </>
                        ) : (
                          <User className="w-3 h-3" />
                        )}
                        <span className="ml-1">{getChatTypeLabel(contact)}</span>
                      </Badge>
                      
                      {contact.property && (
                        <Badge variant="outline" className="text-xs bg-purple-50 border-purple-200 text-purple-700">
                          {contact.property}
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
            ))}
          </div>
        )}
      </div>

      <BottomNavBar currentScreen="messages" onNavigate={onNavigate} language={language} variant="business" />
    </div>
  );
}
