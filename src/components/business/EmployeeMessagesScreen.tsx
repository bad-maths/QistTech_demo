import { MessageSquare, User } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeeMessagesScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeeMessagesScreen({ onNavigate, language, employeeData }: EmployeeMessagesScreenProps) {
  const isRTL = language === 'ar';

  const chats = [
    {
      id: 1,
      customerName: isRTL ? 'محمد أحمد الغامدي' : 'Mohammed Ahmed Al-Ghamdi',
      lastMessage: isRTL ? 'شكراً على المساعدة' : 'Thank you for your help',
      time: isRTL ? 'منذ ساعتين' : '2h ago',
      unread: 2,
      type: 'combined',
      hasPaid: true,
    },
    {
      id: 2,
      customerName: isRTL ? 'فاطمة سعيد القحطاني' : 'Fatima Saeed Al-Qahtani',
      lastMessage: isRTL ? 'ممتاز! سأقوم بتحويل المبلغ الآن' : 'Great! I will transfer the amount now',
      time: isRTL ? 'منذ ساعة' : '1h ago',
      unread: 1,
      type: 'normal',
      hasPaid: false,
    },
    {
      id: 3,
      customerName: isRTL ? 'عائشة محمد الدعيع' : 'Aisha Mohammed Al-Dua',
      lastMessage: isRTL ? 'هل يمكنك إرسال المستندات؟' : 'Can you send the documents?',
      time: isRTL ? 'منذ 4 ساعات' : '4h ago',
      unread: 0,
      type: 'normal',
      hasPaid: true,
    },
    {
      id: 4,
      customerName: isRTL ? 'سارة علي العتيبي' : 'Sarah Ali Al-Otaibi',
      lastMessage: isRTL ? 'نريد توضيح المزيد عن الشروط' : 'We need more clarification about terms',
      time: isRTL ? 'منذ 6 ساعات' : '6h ago',
      unread: 0,
      type: 'combined',
      hasPaid: true,
    },
  ];

  return (
    <div 
      className="min-h-screen bg-[#F2F4F5] pb-20 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      

      <div className="relative z-10">
        {/* Header */}
        <div className=" text-white px-6 py-4 relative overflow-hidden">
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h1 className="text-xl font-bold tracking-tight text-white">
              {isRTL ? 'الرسائل' : 'Messages'}
            </h1>
            <p className="text-sm text-white/70">
              {isRTL ? 'إدارة المحادثات مع العملاء' : 'Manage conversations with customers'}
            </p>
          </div>
        </div>

        <div className="px-6 py-6 space-y-3">
          {chats.map((chat) => (
            <Card
              key={chat.id}
              className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl cursor-pointer transition-all duration-300 shadow-lifted"
              onClick={() => onNavigate('employeeChat', {
                customerId: chat.id.toString(),
                customerName: chat.customerName,
              })}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full p-3 flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#0E1E25] truncate">{chat.customerName}</h3>
                    <span className="text-xs text-[#4B5563] flex-shrink-0 ml-2">{chat.time}</span>
                  </div>
                  <p className="text-sm text-[#4B5563] truncate mb-2">{chat.lastMessage}</p>
                  
                  {/* Chat Type and Payment Status */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Chat Type Badge */}
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      chat.type === 'combined'
                        ? 'bg-[#0F4C5C]/10 text-[#0F4C5C]'
                        : 'bg-[#059669]/10 text-[#059669]'
                    }`}>
                      {chat.type === 'combined' 
                        ? (isRTL ? 'محادثة مدمجة' : 'Combined Chat')
                        : (isRTL ? 'محادثة عادية' : 'Normal Chat')
                      }
                    </span>

                    {/* Payment Status */}
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      chat.hasPaid
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        : 'bg-amber-100 text-amber-700 border border-amber-300'
                    }`}>
                      {chat.hasPaid 
                        ? (isRTL ? '✓ رسوم الحجز مدفوعة' : '✓ Fee Paid')
                        : (isRTL ? '✗ لم يتم الدفع' : '✗ Not Paid')
                      }
                    </span>
                  </div>
                </div>
                {chat.unread > 0 && (
                  <Badge className="bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] text-white flex-shrink-0 rounded-full font-semibold">
                    {chat.unread}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

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

      <BottomNavBar
        currentScreen="messages"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />
    </div>
  );
}
