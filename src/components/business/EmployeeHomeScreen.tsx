import { useState } from 'react';
import { Power, TrendingUp, CheckCircle, Wallet, Percent, UserPlus, Calculator, Home, ClipboardList, Building2, MessageSquare, User, Bell, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeeHomeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeeHomeScreen({ onNavigate, language, employeeData }: EmployeeHomeScreenProps) {
  const isRTL = language === 'ar';
  const [isOnline, setIsOnline] = useState(true);
  const isDeveloper = employeeData?.type === 'developer';

  // Mock statistics
  const stats = {
    activeRequests: 12,
    completedRequests: 48,
    walletBalance: 24500,
    successRate: 92,
  };

  // Mock active requests
  const activeRequests = [
    {
      id: 'REQ-001',
      customerName: isRTL ? 'محمد أحمد الغامدي' : 'Mohammed Ahmed Al-Ghamdi',
      propertyName: isRTL ? 'فيلا النرجس - الرياض' : 'Narcissus Villa - Riyadh',
      amount: '1,250,000',
      status: 'pending',
      time: isRTL ? 'منذ ساعتين' : '2 hours ago',
      type: 'financing',
    },
    {
      id: 'REQ-002',
      customerName: isRTL ? 'فاطمة سعيد القحطاني' : 'Fatima Saeed Al-Qahtani',
      propertyName: isRTL ? 'شقة البحر - جدة' : 'Sea Apartment - Jeddah',
      amount: '850,000',
      status: 'in-progress',
      time: isRTL ? 'منذ 4 ساعات' : '4 hours ago',
      type: 'booking',
    },
    {
      id: 'REQ-003',
      customerName: isRTL ? 'خالد عبدالله السالم' : 'Khalid Abdullah Al-Salem',
      propertyName: isRTL ? 'فيلا الورود - الدمام' : 'Roses Villa - Dammam',
      amount: '1,800,000',
      status: 'pending',
      time: isRTL ? 'منذ 6 ساعات' : '6 hours ago',
      type: 'financing',
    },
  ];

  // Mock company properties (for developers only)
  const companyProperties = [
    {
      id: 1,
      title: isRTL ? 'فيلا النرجس الفاخرة' : 'Luxury Narcissus Villa',
      location: isRTL ? 'الرياض، حي النرجس' : 'Riyadh, Narcissus District',
      price: '1,250,000',
      units: 5,
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: isRTL ? 'شقق البحر الحديثة' : 'Modern Sea Apartments',
      location: isRTL ? 'جدة، كورنيش البحر' : 'Jeddah, Sea Corniche',
      price: '850,000',
      units: 12,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return isRTL ? 'قيد الانتظار' : 'Pending';
      case 'in-progress':
        return isRTL ? 'قيد المعالجة' : 'In Progress';
      case 'completed':
        return isRTL ? 'مكتمل' : 'Completed';
      default:
        return status;
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#F2F4F5] relative overflow-hidden pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0F4C5C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-bold">
                {isRTL ? `مرحباً، ${employeeData?.name}` : `Hello, ${employeeData?.name}`}
              </h1>
              <p className="text-teal-100 text-sm">
                {employeeData?.company}
              </p>
            </div>
            <button className="p-2 hover:bg-white/20 rounded-full transition-colors relative">
              <Bell className="w-6 h-6 text-[#D4AF37]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Online Status Toggle */}
          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex items-center gap-2">
              <Power className={`w-5 h-5 ${isOnline ? 'text-[#10B981]' : 'text-teal-300'}`} />
              <div>
                <p className="font-semibold text-white text-sm">
                  {isRTL ? 'حالة الاستقبال' : 'Receiving Status'}
                </p>
                <p className="text-xs text-teal-100">
                  {isOnline 
                    ? (isRTL ? 'متصل - يمكنك استقبال الطلبات' : 'Online - Receiving requests')
                    : (isRTL ? 'غير متصل' : 'Offline')}
                </p>
              </div>
            </div>
            <Switch
              checked={isOnline}
              onCheckedChange={setIsOnline}
              className="data-[state=checked]:bg-[#10B981]"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card className="p-4 bg-white border-teal-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-amber-50 rounded-lg p-2">
                  <ClipboardList className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'الطلبات النشطة' : 'Active'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.activeRequests}</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-white border-teal-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-green-50 rounded-lg p-2">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'المكتملة' : 'Completed'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.completedRequests}</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-white border-teal-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-teal-50 rounded-lg p-2">
                  <Wallet className="w-5 h-5 text-[#0F4C5C]" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'رصيد المحفظة' : 'Wallet'}</p>
                  <p className="text-lg font-bold text-[#0E1E25]">
                    {stats.walletBalance.toLocaleString()} {isRTL ? 'ر.س' : 'SAR'}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-white border-teal-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-teal-50 rounded-lg p-2">
                  <Percent className="w-5 h-5 text-[#0F4C5C]" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'معدل النجاح' : 'Success'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.successRate}%</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#0E1E25] mb-3">
              {isRTL ? 'إجراءات سريعة' : 'Quick Actions'}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => onNavigate('pullClient')}
                className="rounded-lg p-4 text-center transition-all shadow-sm text-white font-medium"
                style={{ backgroundColor: '#0F4C5C' }}
              >
                <UserPlus className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs">{isRTL ? 'احسب لعميلك' : 'Calculate for Client'}</span>
              </button>

              <button
                onClick={() => onNavigate('wallet')}
                className="rounded-lg p-4 text-center transition-all shadow-sm font-medium"
                style={{ backgroundColor: '#D4AF37', color: '#0E1E25' }}
              >
                <Wallet className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs">{isRTL ? 'المحفظة' : 'Wallet'}</span>
              </button>

              <button
                onClick={() => onNavigate('calculator')}
                className="rounded-lg p-4 text-center transition-all shadow-sm text-white font-medium"
                style={{ backgroundColor: '#10B981' }}
              >
                <Calculator className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs">{isRTL ? 'حاسبة' : 'Calculator'}</span>
              </button>
            </div>
          </div>

          {/* Active Requests */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#0E1E25]">
                {isRTL ? 'الطلبات النشطة' : 'Active Requests'}
              </h3>
              <button
                onClick={() => onNavigate('requests')}
                className="text-sm text-[#0F4C5C] hover:text-[#0A3540] font-semibold flex items-center gap-1"
              >
                {isRTL ? 'عرض الكل' : 'View All'}
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {activeRequests.map((request) => (
                <Card
                  key={request.id}
                  onClick={() => onNavigate('requestDetails', request)}
                  className="min-w-[280px] p-4 bg-white border-teal-100 cursor-pointer hover:shadow-md transition-all text-gray-900"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${
                      request.status === 'pending'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : request.status === 'in-progress'
                        ? 'bg-teal-50 text-[#0F4C5C] border-teal-200'
                        : 'bg-green-50 text-green-700 border-green-200'
                    } border`}>
                      {getStatusText(request.status)}
                    </Badge>
                    <span className="text-xs text-[#4B5563]">{request.time}</span>
                  </div>

                  <h4 className="font-semibold text-[#0E1E25] mb-1">{request.customerName}</h4>
                  <p className="text-sm text-[#4B5563] mb-2">{request.propertyName}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#0F4C5C]">
                      {request.amount} {isRTL ? 'ر.س' : 'SAR'}
                    </span>
                    <Badge variant="outline" className="text-xs border-teal-200 text-[#0F4C5C]">
                      {request.type === 'financing' 
                        ? (isRTL ? 'تمويل' : 'Financing')
                        : (isRTL ? 'حجز' : 'Booking')}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Properties (Developer Only) */}
          {isDeveloper && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-[#0E1E25]">
                  {isRTL ? 'عقارات شركتي' : 'Company Properties'}
                </h3>
                <button
                  onClick={() => onNavigate('properties')}
                  className="text-sm text-[#0F4C5C] hover:text-[#0A3540] font-semibold flex items-center gap-1"
                >
                  {isRTL ? 'عرض الكل' : 'View All'}
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {companyProperties.map((property) => (
                  <Card
                    key={property.id}
                    onClick={() => onNavigate('propertyDetails', property)}
                    className="min-w-[200px] overflow-hidden bg-white border-teal-100 cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="relative h-32">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-[#0F4C5C] text-white">
                        {property.units} {isRTL ? 'وحدة' : 'units'}
                      </Badge>
                    </div>
                    <div className="p-3">
                      <h4 className="font-semibold text-[#0E1E25] text-sm mb-1 line-clamp-1">
                        {property.title}
                      </h4>
                      <p className="text-xs text-[#4B5563] mb-2">{property.location}</p>
                      <p className="font-bold text-[#0F4C5C]">
                        {property.price} {isRTL ? 'ر.س' : 'SAR'}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar
        currentScreen="home"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
