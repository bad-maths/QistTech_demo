import { useState } from 'react';
import { ArrowLeft, ArrowRight, User, Banknote, Building2, MessageSquare } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { BottomNavBar } from '../BottomNavBar';

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

export function EmployeeMessagesScreen({ onNavigate, language }: EmployeeMessagesScreenProps) {
  const isRTL = language === 'ar';
  
  const [contacts] = useState<Contact[]>([
    {
      id: '1',
      chatType: 'single-customer',
      name: isRTL ? 'محمد أحمد الغامدي' : 'Mohammed Ahmed Al-Ghamdi',
      type: 'customer',
      lastMessage: isRTL ? 'هل يمكننا الحصول على تحديث؟' : 'Can we get an update?',
      lastMessageTime: '10:30',
      unread: 2,
      avatar: 'MA',
      color: 'bg-[#0F4C5C]',
      property: isRTL ? 'فيلا النرجس' : 'Narcissus Villa',
      requestType: 'referral',
    },
    {
      id: '2',
      chatType: 'single-customer',
      name: isRTL ? 'فاطمة سعيد القحطاني' : 'Fatima Saeed Al-Qahtani',
      type: 'customer',
      lastMessage: isRTL ? 'متى يمكنني معاينة العقار؟' : 'When can I view the property?',
      lastMessageTime: '09:15',
      unread: 0,
      avatar: 'FS',
      color: 'bg-[#10B981]',
      property: isRTL ? 'شقة البحر' : 'Sea Apartment',
      requestType: 'direct',
    },
    {
      id: '3',
      chatType: 'combined',
      name: isRTL ? 'شقة الياسمين - طلب #3421' : 'Jasmine Apartment - Request #3421',
      lastMessage: isRTL ? 'الممول: تم إرسال عرض التمويل المبدئي' : 'Finance: Initial financing offer sent',
      lastMessageTime: '14:22',
      unread: 1,
      avatar: '3',
      color: 'bg-gradient-to-r from-[#0F4C5C] to-[#10B981]',
      property: isRTL ? 'شقة الياسمين' : 'Jasmine Apartment',
      participants: [
        {
          id: 'customer-1',
          name: isRTL ? 'عبدالله محمد السعيد' : 'Abdullah Mohammed Al-Saeed',
          type: 'customer',
          avatar: 'AS',
          color: 'bg-[#0F4C5C]',
          property: isRTL ? 'شقة الياسمين' : 'Jasmine Apartment',
        },
        {
          id: 'finance-1',
          name: isRTL ? 'أحمد الراجحي - بنك الراجحي' : 'Ahmed Al-Rajhi - Al Rajhi Bank',
          type: 'finance',
          avatar: 'AR',
          color: 'bg-[#10B981]',
          property: isRTL ? 'شقة الياسمين' : 'Jasmine Apartment',
        },
      ],
    },
    {
      id: '4',
      chatType: 'combined',
      name: isRTL ? 'فيلا الورد - طلب #3654' : 'Rose Villa - Request #3654',
      lastMessage: isRTL ? 'المطور: العقار جاهز للمعاينة' : 'Developer: Property ready for viewing',
      lastMessageTime: '11:45',
      unread: 2,
      avatar: '4',
      color: 'bg-gradient-to-r from-[#0F4C5C] to-[#D4AF37]',
      property: isRTL ? 'فيلا الورد' : 'Rose Villa',
      participants: [
        {
          id: 'customer-2',
          name: isRTL ? 'نورة عبدالعزيز المطيري' : 'Noura Abdulaziz Al-Mutairi',
          type: 'customer',
          avatar: 'NM',
          color: 'bg-[#0F4C5C]',
          property: isRTL ? 'فيلا الورد' : 'Rose Villa',
        },
        {
          id: 'developer-1',
          name: isRTL ? 'سارة المطيري - شركة إعمار العقارية' : 'Sarah Al-Mutairi - Emaar Properties',
          type: 'finance',
          avatar: 'SM',
          color: 'bg-[#D4AF37]',
          property: isRTL ? 'فيلا الورد' : 'Rose Villa',
        },
      ],
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

      <div className="flex-1 overflow-y-auto p-4 pb-24">
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
