import { ArrowLeft, ArrowRight, Search, Filter, Clock, CheckCircle, XCircle, Home, ShoppingBag, User, MessageSquare, Banknote, Building2, Wallet, FileText, ClipboardCheck, FileCheck } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { BottomNavBar } from './BottomNavBar';

interface MyOrdersScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function MyOrdersScreen({ onNavigate, language }: MyOrdersScreenProps) {
  const isRTL = language === 'ar';

  const applications = [
    {
      id: '#REQ-2025-1234',
      property: isRTL ? 'شقة فاخرة في وسط المدينة' : 'Luxury Apartment Downtown',
      location: isRTL ? 'الرياض، حي النخيل' : 'Riyadh, Palm District',
      amount: '1,250,000',
      bank: isRTL ? 'البنك الأهلي' : 'National Bank',
      status: 'pending',
      statusTextEn: 'Under Review',
      statusTextAr: 'قيد المراجعة',
      date: '2025-10-25',
      type: 'financing',
      paymentType: 'financing',
      stage: 'documents_review',
    },
    {
      id: '#REQ-2025-1189',
      property: isRTL ? 'فيلا عصرية مع حديقة' : 'Modern Villa with Garden',
      location: isRTL ? 'جدة، حي البحر' : 'Jeddah, Sea District',
      amount: '2,800,000',
      bank: isRTL ? 'بنك الراجحي' : 'Al Rajhi Bank',
      status: 'approved',
      statusTextEn: 'Approved',
      statusTextAr: 'تمت الموافقة',
      date: '2025-10-18',
      type: 'financing',
      paymentType: 'financing',
      stage: 'final_approval',
    },
    {
      id: '#REQ-2025-1056',
      property: isRTL ? 'شقة بغرفتين مطلة على البحر' : 'Sea View 2BR Apartment',
      location: isRTL ? 'الدمام، الكورنيش' : 'Dammam, Corniche',
      amount: '890,000',
      bank: isRTL ? 'بنك الرياض' : 'Riyad Bank',
      status: 'rejected',
      statusTextEn: 'Rejected',
      statusTextAr: 'مرفوض',
      date: '2025-10-10',
      type: 'financing',
      paymentType: 'financing',
      stage: 'initial_approval',
    },
    {
      id: '#REQ-2025-0987',
      property: isRTL ? 'دوبلكس واسع مع تراس' : 'Spacious Duplex with Terrace',
      location: isRTL ? 'الرياض، حي السفارات' : 'Riyadh, Embassy District',
      amount: '2,100,000',
      bank: isRTL ? 'دفع كاش' : 'Cash Payment',
      status: 'pending',
      statusTextEn: 'In Progress',
      statusTextAr: 'قيد التنفيذ',
      date: '2025-10-28',
      type: 'cash',
      paymentType: 'cash',
      stage: 'initial_approval',
    },
  ];

  const bookings = [
    {
      id: '#BK-2025-5678',
      property: isRTL ? 'شقة فاخرة في وسط المدينة' : 'Luxury Apartment Downtown',
      location: isRTL ? 'الرياض، حي النخيل' : 'Riyadh, Palm District',
      amount: '1,250,000',
      developer: isRTL ? 'شركة العمران' : 'Omran Development',
      status: 'confirmed',
      statusTextEn: 'Confirmed',
      statusTextAr: 'مؤكد',
      date: '2025-10-26',
      type: 'booking',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'approved':
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'approved':
      case 'confirmed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'rejected':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStageProgress = (stage: string) => {
    switch (stage) {
      case 'documents_review':
        return 33;
      case 'initial_approval':
        return 66;
      case 'final_approval':
        return 100;
      default:
        return 0;
    }
  };

  const getPaymentTypeInfo = (paymentType: string) => {
    if (paymentType === 'cash') {
      return {
        icon: <Wallet className="w-4 h-4" />,
        textEn: 'Cash Payment',
        textAr: 'دفع كاش',
        color: 'bg-sky-50 text-sky-700 border-sky-200',
      };
    }
    return {
      icon: <Banknote className="w-4 h-4" />,
      textEn: 'Financing',
      textAr: 'تمويل',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    };
  };

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl text-white font-semibold">{isRTL ? 'طلباتي' : 'My Orders'}</h1>
          <button className="p-2 hover:bg-[#0A3540] rounded-lg transition-colors text-white">
            <Filter className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-[#4B5563]`} />
          <Input
            placeholder={isRTL ? 'ابحث في طلباتك...' : 'Search your orders...'}
            className={`${isRTL ? 'pr-10' : 'pl-10'} bg-white border-[rgba(15,76,92,0.1)] text-[#0E1E25] placeholder-[#4B5563]`}
          />
        </div>
      </div>

      <div className="px-6 py-6">
        <Tabs defaultValue="financing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="financing">
              {isRTL ? `طلبات التمويل (${applications.length})` : `Financing (${applications.length})`}
            </TabsTrigger>
            <TabsTrigger value="bookings">
              {isRTL ? `الحجوزات (${bookings.length})` : `Bookings (${bookings.length})`}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="financing" className="space-y-4">
            {applications.map((app) => {
              const paymentInfo = getPaymentTypeInfo(app.paymentType);
              const progress = getStageProgress(app.stage);
              
              return (
                <Card key={app.id} className="p-5 cursor-pointer hover:shadow-md transition-all bg-white border-[rgba(15,76,92,0.1)]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-sm text-[#4B5563]">{app.id}</span>
                        <Badge className={`${getStatusColor(app.status)} border`}>
                          {getStatusIcon(app.status)}
                          <span className={`${isRTL ? 'mr-1' : 'ml-1'}`}>{isRTL ? app.statusTextAr : app.statusTextEn}</span>
                        </Badge>
                        <Badge className={`${paymentInfo.color} border`}>
                          {paymentInfo.icon}
                          <span className={`${isRTL ? 'mr-1' : 'ml-1'}`}>{isRTL ? paymentInfo.textAr : paymentInfo.textEn}</span>
                        </Badge>
                      </div>
                      <h3 className="text-[#0E1E25] mb-1 font-medium">{app.property}</h3>
                      <p className="text-sm text-[#4B5563]">{app.location}</p>
                    </div>
                  </div>

                  {/* Progress Section */}
                  {app.status !== 'rejected' && (
                    <div className="mb-4 p-3 bg-[#F2F4F5] rounded-lg">
                      <div className="flex items-center justify-between mb-2 text-xs">
                        <span className={`flex items-center gap-1 ${app.stage === 'documents_review' ? 'text-[#0F4C5C] font-medium' : app.stage !== 'documents_review' ? 'text-emerald-600' : 'text-[#4B5563]'}`}>
                          <FileText className="w-3 h-3" />
                          {isRTL ? 'مراجعة المستندات' : 'Documents Review'}
                        </span>
                        <span className={`flex items-center gap-1 ${app.stage === 'initial_approval' ? 'text-[#0F4C5C] font-medium' : app.stage === 'final_approval' ? 'text-emerald-600' : 'text-[#4B5563]'}`}>
                          <ClipboardCheck className="w-3 h-3" />
                          {isRTL ? 'الموافقة المبدئية' : 'Initial Approval'}
                        </span>
                        <span className={`flex items-center gap-1 ${app.stage === 'final_approval' ? 'text-emerald-600 font-medium' : 'text-[#4B5563]'}`}>
                          <FileCheck className="w-3 h-3" />
                          {isRTL ? 'الموافقة النهائية' : 'Final Approval'}
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#4B5563]">{isRTL ? 'المبلغ' : 'Amount'}</span>
                      <span className="text-[#0E1E25] font-medium">{app.amount} {isRTL ? 'ر.س' : 'SAR'}</span>
                    </div>
                    {app.paymentType === 'financing' && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#4B5563]">{isRTL ? 'البنك' : 'Bank'}</span>
                        <span className="text-[#0E1E25]">{app.bank}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#4B5563]">{isRTL ? 'تاريخ التقديم' : 'Submitted'}</span>
                      <span className="text-[#0E1E25]">{app.date}</span>
                    </div>
                  </div>

                  {app.status === 'pending' && (
                    <div className="pt-3 border-t border-[rgba(15,76,92,0.1)]">
                      <div className="flex items-center gap-2 text-sm text-[#0F4C5C]">
                        <Clock className="w-4 h-4" />
                        <span>{isRTL ? 'سيتم الرد خلال 3-5 أيام عمل' : 'Response within 3-5 business days'}</span>
                      </div>
                    </div>
                  )}

                  {app.status === 'approved' && (
                    <div className="pt-3 border-t border-[rgba(15,76,92,0.1)]">
                      <button className="text-sm text-[#0F4C5C] hover:text-[#0A3540] transition-colors font-medium">
                        {isRTL ? 'عرض التفاصيل والخطوات التالية' : 'View details and next steps'}
                      </button>
                    </div>
                  )}

                  {app.status === 'rejected' && (
                    <div className="pt-3 border-t border-[rgba(15,76,92,0.1)]">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#4B5563]">{isRTL ? 'يمكنك التقديم مرة أخرى' : 'You can reapply'}</span>
                        <button className="text-sm text-[#0F4C5C] hover:text-[#0A3540] transition-colors font-medium">
                          {isRTL ? 'عرض السبب' : 'View reason'}
                        </button>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}

            {applications.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-[#F2F4F5] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-10 h-10 text-[#4B5563]" />
                </div>
                <h3 className="text-xl mb-2 text-[#0E1E25] font-semibold">
                  {isRTL ? 'لا توجد طلبات تمويل' : 'No Financing Applications'}
                </h3>
                <p className="text-[#4B5563] mb-6">
                  {isRTL ? 'ابدأ بتقديم طلب تمويل لعقارك المفضل' : 'Start by applying for financing on your favorite property'}
                </p>
                <button
                  onClick={() => onNavigate('propertyListings')}
                  className="text-[#0F4C5C] hover:text-[#0A3540] transition-colors font-medium"
                >
                  {isRTL ? 'تصفح العقارات' : 'Browse Properties'}
                </button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="bookings" className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id} className="p-5 cursor-pointer hover:shadow-md transition-all bg-white border-[rgba(15,76,92,0.1)]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-[#4B5563]">{booking.id}</span>
                      <Badge className={`${getStatusColor(booking.status)} border`}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1">{isRTL ? booking.statusTextAr : booking.statusTextEn}</span>
                      </Badge>
                    </div>
                    <h3 className="text-[#0E1E25] mb-1 font-medium">{booking.property}</h3>
                    <p className="text-sm text-[#4B5563]">{booking.location}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4B5563]">{isRTL ? 'السعر' : 'Price'}</span>
                    <span className="text-[#0E1E25] font-medium">{booking.amount} {isRTL ? 'ر.س' : 'SAR'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4B5563]">{isRTL ? 'المطور' : 'Developer'}</span>
                    <span className="text-[#0E1E25]">{booking.developer}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4B5563]">{isRTL ? 'تاريخ الحجز' : 'Booking Date'}</span>
                    <span className="text-[#0E1E25]">{booking.date}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(15,76,92,0.1)]">
                  <button className="text-sm text-[#0F4C5C] hover:text-[#0A3540] transition-colors font-medium">
                    {isRTL ? 'عرض تفاصيل الحجز' : 'View booking details'}
                  </button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar currentScreen="orders" onNavigate={onNavigate} language={language} />
    </div>
  );
}
