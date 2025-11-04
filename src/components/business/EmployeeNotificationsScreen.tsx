import { ArrowLeft, ArrowRight, UserPlus, MessageSquare, CheckCircle, Bell, X, Check, XCircle, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { useState } from 'react';

interface EmployeeNotificationsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

interface Notification {
  id: number;
  type: 'referral_request' | 'referral_accepted' | 'referral_rejected' | 'message' | 'commission_earned' | 'task_assigned';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  icon: any;
  iconBg: string;
  customerName?: string;
  customerPhone?: string;
  propertyName?: string;
  actionText?: string;
  actionRoute?: string;
  badgeText?: string;
  badgeBg?: string;
}

export function EmployeeNotificationsScreen({ onNavigate, language, employeeData }: EmployeeNotificationsScreenProps) {
  const isRTL = language === 'ar';

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'referral_request',
      title: isRTL ? 'طلب إحالة عميل جديد' : 'New Customer Referral Request',
      message: isRTL 
        ? 'العميل محمد أحمد الغامدي يطلب منك مساعدته في التمويل والعقار. هل تقبل الإحالة؟'
        : 'Customer Mohammed Ahmed Al-Ghamdi requests your assistance with financing and property. Do you accept the referral?',
      time: isRTL ? 'منذ دقيقة' : '1 minute ago',
      isRead: false,
      icon: UserPlus,
      iconBg: 'bg-indigo-600',
      customerName: 'Mohammed Ahmed Al-Ghamdi',
      customerPhone: '+966501234567',
      propertyName: isRTL ? 'فيلا النرجس' : 'Narcissus Villa',
      badgeText: isRTL ? 'جديد' : 'New',
      badgeBg: 'bg-indigo-600',
    },
    {
      id: 2,
      type: 'referral_request',
      title: isRTL ? 'طلب إحالة عميل جديد' : 'New Customer Referral Request',
      message: isRTL 
        ? 'العميلة فاطمة سعيد القحطاني تطلب منك مساعدتها في شراء عقار بالكاش. هل تقبل الإحالة؟'
        : 'Customer Fatima Saeed Al-Qahtani requests your assistance in purchasing a property with cash. Do you accept the referral?',
      time: isRTL ? 'منذ 10 دقائق' : '10 minutes ago',
      isRead: false,
      icon: UserPlus,
      iconBg: 'bg-purple-600',
      customerName: 'Fatima Saeed Al-Qahtani',
      customerPhone: '+966509876543',
      propertyName: isRTL ? 'شقة البحر' : 'Sea Apartment',
      badgeText: isRTL ? 'جديد' : 'New',
      badgeBg: 'bg-purple-600',
    },
    {
      id: 3,
      type: 'referral_accepted',
      title: isRTL ? 'تم قبول إحالتك' : 'Your Referral Was Accepted',
      message: isRTL 
        ? 'تم قبول إحالتك للعميل خالد عبدالله السالم من قبل فريق المبيعات. ستحصل على عمولة عند إتمام العملية'
        : 'Your referral of customer Khalid Abdullah Al-Salem has been accepted by the sales team. You will receive a commission upon transaction completion',
      time: isRTL ? 'منذ ساعة' : '1 hour ago',
      isRead: false,
      icon: CheckCircle,
      iconBg: 'bg-green-600',
      customerName: 'Khalid Abdullah Al-Salem',
      badgeText: isRTL ? 'مهم' : 'Important',
      badgeBg: 'bg-green-600',
    },
    {
      id: 4,
      type: 'commission_earned',
      title: isRTL ? 'عمولة جديدة محققة' : 'New Commission Earned',
      message: isRTL 
        ? 'تم إتمام عملية الشراء للعميل سارة علي العتيبي. حصلت على عمولة بقيمة 5,000 ريال'
        : 'Purchase transaction completed for customer Sarah Ali Al-Otaibi. You earned a commission of 5,000 SAR',
      time: isRTL ? 'منذ 3 ساعات' : '3 hours ago',
      isRead: false,
      icon: Award,
      iconBg: 'bg-yellow-600',
      customerName: 'Sarah Ali Al-Otaibi',
      actionText: isRTL ? 'عرض محفظتي' : 'View My Wallet',
      actionRoute: 'employeeWallet',
      badgeText: isRTL ? 'عمولة' : 'Commission',
      badgeBg: 'bg-yellow-600',
    },
    {
      id: 5,
      type: 'referral_rejected',
      title: isRTL ? 'تم رفض إحالتك' : 'Your Referral Was Rejected',
      message: isRTL 
        ? 'للأسف، تم رفض إحالتك للعميل علي محمد الدعيع من قبل فريق المبيعات'
        : 'Unfortunately, your referral of customer Ali Mohammed Al-Doaie has been rejected by the sales team',
      time: isRTL ? 'منذ 5 ساعات' : '5 hours ago',
      isRead: true,
      icon: XCircle,
      iconBg: 'bg-red-600',
      customerName: 'Ali Mohammed Al-Doaie',
    },
    {
      id: 6,
      type: 'message',
      title: isRTL ? 'رسالة جديدة من فريق التسويق' : 'New Message from Marketing Team',
      message: isRTL 
        ? 'فريق التسويق أرسل لك معلومات عن حملة جديدة للعقارات الفاخرة'
        : 'The marketing team sent you information about a new luxury properties campaign',
      time: isRTL ? 'منذ 6 ساعات' : '6 hours ago',
      isRead: true,
      icon: MessageSquare,
      iconBg: 'bg-blue-600',
      actionText: isRTL ? 'عرض الرسالة' : 'View Message',
      actionRoute: 'employeeMessages',
    },
    {
      id: 7,
      type: 'task_assigned',
      title: isRTL ? 'مهمة جديدة' : 'New Task Assigned',
      message: isRTL 
        ? 'تم تعيين لك مهمة متابعة العملاء المحتملين للعقارات الجديدة في حي الياسمين'
        : 'You have been assigned a task to follow up with potential customers for new properties in Al-Yasmin district',
      time: isRTL ? 'منذ يوم' : '1 day ago',
      isRead: true,
      icon: CheckCircle,
      iconBg: 'bg-teal-600',
      actionText: isRTL ? 'عرض التفاصيل' : 'View Details',
      actionRoute: 'employeeRequests',
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
    const notification = notifications.find(n => n.id === notificationId);
    if (notification && notification.type === 'referral_request') {
      // Mark as read and accept the referral
      handleMarkAsRead(notificationId);
      // Navigate to chat with the customer
      onNavigate('employeeChat', {
        chat: {
          id: notification.id.toString(),
          chatType: 'single-customer',
          name: notification.customerName || 'Customer',
          lastMessage: isRTL ? 'طلب إحالة جديد' : 'New Referral Request',
          lastMessageTime: 'now',
          unread: 0,
          avatar: notification.customerName?.charAt(0) || 'C',
          color: 'bg-blue-500',
          property: notification.propertyName,
          participants: [
            {
              id: 'customer',
              name: notification.customerName || 'Customer',
              type: 'customer',
              avatar: notification.customerName?.substring(0, 2).toUpperCase() || 'C',
              color: 'bg-blue-500',
            },
          ],
        },
      });
    }
  };

  const handleReject = (notificationId: number) => {
    // Remove the notification (reject the referral request)
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
              const isHighPriority = notification.type === 'referral_request' || notification.type === 'referral_accepted' || notification.type === 'commission_earned';
              
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
                      notification.type === 'referral_accepted' 
                        ? 'bg-[#10B981]'
                        : notification.type === 'referral_rejected'
                        ? 'bg-red-600'
                        : notification.type === 'commission_earned'
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
                              notification.type === 'referral_accepted'
                                ? 'bg-[#10B981] text-white'
                                : notification.type === 'commission_earned'
                                ? 'bg-[#D4AF37] text-[#0E1E25]'
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
                        
                        {notification.customerName && (
                          <div className="text-xs text-[#4B5563]">
                            <p className="font-medium">{isRTL ? 'العميل' : 'Customer'}: {notification.customerName}</p>
                            {notification.customerPhone && (
                              <p>{isRTL ? 'الهاتف' : 'Phone'}: {notification.customerPhone}</p>
                            )}
                            {notification.propertyName && (
                              <p>{isRTL ? 'العقار' : 'Property'}: {notification.propertyName}</p>
                            )}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#4B5563]">
                            {notification.time}
                          </span>
                          
                          <div  className="flex gap-2 flex-wrap justify-end"
                            style={{ maxWidth: '150px' , minWidth: '250px' }}>
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
                            {notification.actionText && notification.type !== 'referral_request' && (
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
                            {notification.type === 'referral_request' && (
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
                                  className="text-xs h-8 font-medium bg-red-600 hover:bg-red-700 text-white"
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
