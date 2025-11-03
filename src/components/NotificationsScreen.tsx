import { ArrowLeft, ArrowRight, UserPlus, Home, TrendingUp, Heart, MessageSquare, CheckCircle, Bell, X, Check, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface NotificationsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

interface Notification {
  id: number;
  type: 'employee_request' | 'finance_employee_request' | 'property_update' | 'financing_approved' | 'message' | 'favorite';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  icon: any;
  iconBg: string;
  actionText?: string;
  actionRoute?: string;
  badgeText?: string;
  badgeBg?: string;
}

export function NotificationsScreen({ onNavigate, language }: NotificationsScreenProps) {
  const isRTL = language === 'ar';

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'finance_employee_request',
      title: isRTL ? 'طلب من موظف تمويل' : 'Request from Finance Agent',
      message: isRTL 
        ? 'الموظفة سارة العتيبي من بنك الراجحي تطلب منك إجراء حسبة تمويلية لتقييم قدرتك الشرائية'
        : 'Agent Sarah Al-Otaibi from Al Rajhi Bank requests you to perform a financing calculation to assess your purchasing power',
      time: isRTL ? 'منذ 3 دقائق' : '3 minutes ago',
      isRead: false,
      icon: UserPlus,
      iconBg: 'bg-indigo-600',
      actionText: isRTL ? 'إجراء الحسبة' : 'Perform Calculation',
      actionRoute: 'financingListings',
      badgeText: isRTL ? 'جديد' : 'New',
      badgeBg: 'bg-indigo-600',
    },
    {
      id: 2,
      type: 'employee_request',
      title: isRTL ? 'طلب من موظف مبيعات' : 'Request from Sales Agent',
      message: isRTL 
        ? 'الموظف أحمد السالم من شركة إعمار يطلب منك إجراء حسبة بنكية لتقييم قدرتك الشرائية'
        : 'Agent Ahmad Al-Salem from Emaar requests you to perform a bank calculation to assess your purchasing power',
      time: isRTL ? 'منذ 5 دقائق' : '5 minutes ago',
      isRead: false,
      icon: UserPlus,
      iconBg: 'bg-purple-600',
      actionText: isRTL ? 'إجراء الحسبة' : 'Perform Calculation',
      actionRoute: 'financingListings',
      badgeText: isRTL ? 'جديد' : 'New',
      badgeBg: 'bg-purple-600',
    },
    {
      id: 3,
      type: 'property_update',
      title: isRTL ? 'عقار جديد يطابق تفضيلاتك' : 'New Property Matches Your Preferences',
      message: isRTL 
        ? 'تم إضافة شقة فاخرة في حي الياسمين بسعر مناسب لميزانيتك'
        : 'A luxury apartment in Al-Yasmin district was added at a price matching your budget',
      time: isRTL ? 'منذ ساعة' : '1 hour ago',
      isRead: false,
      icon: Home,
      iconBg: 'bg-blue-600',
      actionText: isRTL ? 'عرض العقار' : 'View Property',
      actionRoute: 'propertyDetails',
      badgeText: isRTL ? 'جديد' : 'New',
      badgeBg: 'bg-blue-600',
    },
    {
      id: 4,
      type: 'financing_approved',
      title: isRTL ? 'تمت الموافقة على طلب التمويل' : 'Financing Request Approved',
      message: isRTL 
        ? 'تمت الموافقة المبدئية على طلب التمويل الخاص بك من البنك الأهلي'
        : 'Your financing request from National Bank has been pre-approved',
      time: isRTL ? 'منذ 3 ساعات' : '3 hours ago',
      isRead: false,
      icon: CheckCircle,
      iconBg: 'bg-green-600',
      actionText: isRTL ? 'عرض التفاصيل' : 'View Details',
      actionRoute: 'myOrders',
      badgeText: isRTL ? 'مهم' : 'Important',
      badgeBg: 'bg-green-600',
    },
    {
      id: 5,
      type: 'message',
      title: isRTL ? 'رسالة جديدة من المطور' : 'New Message from Developer',
      message: isRTL 
        ? 'شركة دار الأركان ردت على استفسارك حول مشروع النرجس'
        : 'Dar Al Arkan replied to your inquiry about Al-Narjis project',
      time: isRTL ? 'منذ 5 ساعات' : '5 hours ago',
      isRead: true,
      icon: MessageSquare,
      iconBg: 'bg-orange-600',
      actionText: isRTL ? 'عرض الرسالة' : 'View Message',
      actionRoute: 'chat',
    },
    {
      id: 6,
      type: 'favorite',
      title: isRTL ? 'تحديث على عقار مفضل' : 'Update on Favorite Property',
      message: isRTL 
        ? 'انخفض سعر الفيلا في حي الندى بنسبة 10%'
        : 'The villa in Al-Nada district price dropped by 10%',
      time: isRTL ? 'منذ يوم' : '1 day ago',
      isRead: true,
      icon: Heart,
      iconBg: 'bg-red-600',
      actionText: isRTL ? 'عرض العقار' : 'View Property',
      actionRoute: 'propertyDetails',
    },
    {
      id: 7,
      type: 'property_update',
      title: isRTL ? 'توصية عقار جديد' : 'New Property Recommendation',
      message: isRTL 
        ? 'بناءً على بحثك، نقترح عليك مشروع السكني في حي الربيع'
        : 'Based on your search, we recommend Al-Sakani project in Al-Rabie district',
      time: isRTL ? 'منذ يومين' : '2 days ago',
      isRead: true,
      icon: Home,
      iconBg: 'bg-blue-600',
      actionText: isRTL ? 'عرض العقار' : 'View Property',
      actionRoute: 'propertyDetails',
    },
  ]);

  const handleDismiss = (notificationId: number) => {
    setNotifications(notifications.filter(n => n.id !== notificationId));
  };

  const handleMarkAsRead = (notificationId: number) => {
    setNotifications(notifications.map(n => 
      n.id === notificationId ? { ...n, isRead: true } : n
    ));
  };

  const handleAccept = (notificationId: number) => {
    // Mark as read and navigate to the action route
    const notification = notifications.find(n => n.id === notificationId);
    if (notification) {
      handleMarkAsRead(notificationId);
      if (notification.actionRoute) {
        if (notification.type === 'employee_request') {
          onNavigate('chat', {
            newChat: true,
            chatType: 'combined',
            property: isRTL ? 'طلب حسبة بنكية' : 'Bank Calculation Request',
            applicationId: '#HC' + Math.floor(Math.random() * 10000),
            participants: [
              {
                id: 'developer-req',
                name: isRTL ? 'أحمد السالم - إعمار العقارية' : 'Ahmad Al-Salem - Emaar Properties',
                type: 'developer',
                avatar: 'AS',
                color: 'bg-[#10B981]',
                property: isRTL ? 'طلب حسبة بنكية' : 'Bank Calculation Request',
              },
              {
                id: 'bank-req',
                name: isRTL ? 'سارة العتيبي - بنك الراجحي' : 'Sarah Al-Otaibi - Al Rajhi Bank',
                type: 'bank',
                avatar: 'SO',
                color: 'bg-[#0F4C5C]',
                property: isRTL ? 'طلب حسبة بنكية' : 'Bank Calculation Request',
              },
            ],
          });
        } else if (notification.type === 'finance_employee_request') {
          onNavigate('chat', {
            newChat: true,
            chatType: 'combined',
            property: isRTL ? 'طلب حسبة تمويلية' : 'Financing Calculation Request',
            applicationId: '#FC' + Math.floor(Math.random() * 10000),
            participants: [
              {
                id: 'finance-req',
                name: isRTL ? 'سارة العتيبي - بنك الراجحي' : 'Sarah Al-Otaibi - Al Rajhi Bank',
                type: 'bank',
                avatar: 'SO',
                color: 'bg-[#0F4C5C]',
                property: isRTL ? 'طلب حسبة تمويلية' : 'Financing Calculation Request',
              },
              {
                id: 'developer-support',
                name: isRTL ? 'أحمد السالم - إعمار العقارية' : 'Ahmad Al-Salem - Emaar Properties',
                type: 'developer',
                avatar: 'AS',
                color: 'bg-[#10B981]',
                property: isRTL ? 'طلب حسبة تمويلية' : 'Financing Calculation Request',
              },
            ],
          });
        }
      }
    }
  };

  const handleReject = (notificationId: number) => {
    // Remove the notification (reject the request)
    handleDismiss(notificationId);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-6 h-6" />
              ) : (
                <ArrowLeft className="w-6 h-6" />
              )}
            </button>
            <div>
              <h1 className="text-2xl font-bold">{isRTL ? 'الإشعارات' : 'Notifications'}</h1>
              {unreadCount > 0 && (
                <p className="text-teal-100 text-sm">
                  {isRTL ? `${unreadCount} إشعارات جديدة` : `${unreadCount} new notifications`}
                </p>
              )}
            </div>
          </div>
          <Bell className="w-6 h-6" />
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-4">
        {notifications.length === 0 ? (
          <Card className="p-8 text-center bg-white border-teal-100">
            <Bell className="w-16 h-16 text-[#4B5563] mx-auto mb-4" />
            <h3 className="text-[#0E1E25] mb-2 font-semibold">
              {isRTL ? 'لا توجد إشعارات' : 'No Notifications'}
            </h3>
            <p className="text-sm text-[#4B5563]">
              {isRTL ? 'ستظهر هنا جميع الإشعارات الجديدة' : 'All new notifications will appear here'}
            </p>
          </Card>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              const isHighPriority = notification.type === 'employee_request' || notification.type === 'finance_employee_request' || notification.type === 'financing_approved';
              
              return (
                <Card 
                  key={notification.id}
                  className={`p-4 bg-white border transition-all ${
                    !notification.isRead 
                      ? 'border-teal-200 border-2 shadow-md' 
                      : 'border-teal-100'
                  } ${isHighPriority && !notification.isRead ? 'bg-gradient-to-r from-teal-50 to-amber-50' : 'bg-white'}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`${
                      notification.type === 'financing_approved' 
                        ? 'bg-[#10B981]'
                        : notification.type === 'favorite'
                        ? 'bg-[#D4AF37]'
                        : notification.type === 'message'
                        ? 'bg-[#0F4C5C]'
                        : 'bg-[#0F4C5C]'
                    } rounded-full p-2.5 flex-shrink-0 shadow-sm`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-[#0E1E25] font-semibold">
                            {notification.title}
                          </h3>
                          {notification.badgeText && !notification.isRead && (
                            <Badge className={`${
                              notification.type === 'financing_approved'
                                ? 'bg-[#10B981] text-white'
                                : isHighPriority
                                ? 'bg-[#0F4C5C] text-white'
                                : 'bg-[#D4AF37] text-[#0E1E25]'
                            } text-xs font-medium border-0`}>
                              {notification.badgeText}
                            </Badge>
                          )}
                        </div>
                        <button
                          onClick={() => handleDismiss(notification.id)}
                          className="text-[#4B5563] hover:text-[#0E1E25] flex-shrink-0 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-[#4B5563]">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#4B5563]">
                            {notification.time}
                          </span>
                          
                          <div 
                            className="flex gap-2 flex-wrap justify-end"
                            style={{ maxWidth: '150px' , minWidth: '250px' }}
                          >
                            {!notification.isRead && (
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="text-xs h-8 border-teal-200 text-[#0F4C5C] hover:bg-teal-50"
                                onClick={() => handleMarkAsRead(notification.id)}
                              >
                                {isRTL ? 'تحديد كمقروء' : 'Mark as Read'}
                              </Button>
                            )}
                            {notification.actionText && !((notification.type === 'employee_request' || notification.type === 'finance_employee_request')) && (
                              <Button 
                                size="sm" 
                                className={`text-xs h-8 font-medium ${
                                  isHighPriority && !notification.isRead
                                    ? 'bg-[#0F4C5C] hover:bg-[#0A3540] text-white'
                                    : 'bg-[#0F4C5C] hover:bg-[#0A3540] text-white'
                                }`}
                                onClick={() => {
                                  handleMarkAsRead(notification.id);
                                  if (notification.actionRoute) {
                                    onNavigate(notification.actionRoute);
                                  }
                                }}
                              >
                                {notification.actionText}
                              </Button>
                            )}
                            {(notification.type === 'employee_request' || notification.type === 'finance_employee_request') && (
                              <>
                                <Button 
                                  size="sm" 
                                  className="text-xs h-8 font-medium bg-[#10B981] hover:bg-[#059669] text-white"
                                  onClick={() => handleAccept(notification.id)}
                                >
                                  <Check className="w-3 h-3 mr-1" />
                                  {isRTL ? 'قبول' : 'Accept'}
                                </Button>
                                <Button 
                                  size="sm" 
                                  className="text-xs h-8 font-medium text-white"
                                  style={{ backgroundColor: '#d4183d' }}
                                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.currentTarget.style.backgroundColor = '#b91433';
                                  }}
                                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.currentTarget.style.backgroundColor = '#d4183d';
                                  }}
                                  onClick={() => handleReject(notification.id)}
                                >
                                  <XCircle className="w-3 h-3 mr-1" />
                                  {isRTL ? 'رفض' : 'Reject'}
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
