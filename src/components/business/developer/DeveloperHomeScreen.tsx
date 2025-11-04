import { useState } from 'react';
import { Power, TrendingUp, CheckCircle, Wallet, Percent, UserPlus, ClipboardList, Building2, Bell, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Switch } from '../../ui/switch';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BottomNavBar } from '../../BottomNavBar';

interface DeveloperHomeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function DeveloperHomeScreen({ onNavigate, language, employeeData }: DeveloperHomeScreenProps) {
  const isRTL = language === 'ar';
  const [isOnline, setIsOnline] = useState(true);

  // Mock statistics for Developer
  const stats = {
    activeBookings: 12,
    completedSales: 48,
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
      type: 'booking',
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
      type: 'booking',
    },
  ];

  // Mock company properties
  const companyProperties = [
    {
      id: 1,
      title: isRTL ? 'فيلا النرجس الفاخرة' : 'Luxury Narcissus Villa',
      location: isRTL ? 'الرياض، حي النرجس' : 'Riyadh, Narcissus District',
      price: '1,250,000',
      units: 5,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: isRTL ? 'شقق البحر الحديثة' : 'Modern Sea Apartments',
      location: isRTL ? 'جدة، كورنيش البحر' : 'Jeddah, Sea Corniche',
      price: '850,000',
      units: 12,
      status: 'available',
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      case 'completed':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
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
      className="min-h-screen bg-[#F2F4F5] pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white px-6 pt-6 pb-6 relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Floating orbs for depth */}
        <div className="absolute top-4 right-[10%] w-24 h-24 bg-[#D4AF37]/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-[5%] w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isRTL ? `مرحباً، ${employeeData?.name}` : `Hello, ${employeeData?.name}`}
            </h1>
            <p className="text-sm text-white/80 mt-1">
              {employeeData?.company} • {isRTL ? 'مطور عقاري' : 'Property Developer'}
            </p>
          </div>
          <button 
            onClick={() => onNavigate('notifications')}
            className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10"
          >
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

      
       {/* Online Status Toggle */}
        <div 
          className="flex items-center justify-between rounded-xl p-4 transition-all duration-300 relative z-30"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: isOnline ? '#10B981' : '#6B7280' }}
            />
            <div>
              <p className="font-medium text-sm" style={{ color: '#FFFFFF' }}>
                {isRTL ? 'حالة الاستقبال' : 'Receiving Status'}
              </p>
              <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {isOnline 
                  ? (isRTL ? 'متصل - يمكنك استقبال طلبات التمويل' : 'Online - Receiving financing requests')
                  : (isRTL ? 'غير متصل' : 'Offline')}
              </p>
            </div>
          </div>
          <Switch
            checked={isOnline}
            onCheckedChange={setIsOnline}
            style={{
              backgroundColor: isOnline ? '#10B981' : undefined,
            }}
          />
        </div>
      </div>

      {/* ========== WAVE TRANSITION ========== */}
      <div className="relative -mt-16 overflow-hidden">
        {/* Floating gradient orbs for depth */}
        <div className="absolute top-4 left-[10%] w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-6 right-[20%] w-20 h-20 bg-[#0F4C5C]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Wave SVG with flipped middle wave */}
        <svg
          className="w-full h-28 relative z-10"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Main wave */}
          <path
            d="M0 60C360 30 720 30 1080 60C1260 75 1350 75 1440 60V120H0V60Z"
            fill="#F2F4F5"
            transform="translate(1440,0) scale(-1,1)"
          />

          {/* Accent wave with gradient (flipped horizontally) */}
          <path
            d="M0 70C240 40 480 40 720 70C960 100 1200 100 1440 70V120H0V70Z"
            fill="url(#wave-gradient-1)"
            opacity="0.4"
            transform="translate(1440,0) scale(-1,1)"
          />

          {/* Top highlight wave */}
          <path
            d="M0 50C300 20 600 20 900 50C1140 75 1320 75 1440 50V120H0V50Z"
            fill="#F2F4F5"
            opacity="0.5"
            transform="translate(1440,0) scale(-1,1)"
          />

          <defs>
            <linearGradient
              id="wave-gradient-1"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0F4C5C" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5" />
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative dots pattern */}
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-[#0F4C5C]/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-7 right-1/3 w-2 h-2 bg-[#D4AF37]/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-9 right-1/4 w-1.5 h-1.5 bg-[#0F4C5C]/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl p-2">
                  <ClipboardList className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'الحجوزات النشطة' : 'Active Bookings'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.activeBookings}</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl p-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'المبيعات المكتملة' : 'Completed Sales'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.completedSales}</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-xl p-2">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'رصيد المحفظة' : 'Wallet'}</p>
                  <p className="text-lg font-bold text-[#0E1E25]">
                    {stats.walletBalance.toLocaleString()} {isRTL ? 'ر.س' : 'SAR'}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl p-2">
                  <Percent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'معدل النجاح' : 'Success Rate'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.successRate}%</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#0E1E25] mb-3 tracking-tight">
              {isRTL ? 'إجراءات سريعة' : 'Quick Actions'}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => onNavigate('pullClient')}
                className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white rounded-xl p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <UserPlus className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{isRTL ? 'احسب لعميلك' : 'Calculate for Client'}</span>
              </button>

              <button
                onClick={() => onNavigate('wallet')}
                className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white rounded-xl p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Wallet className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{isRTL ? 'المحفظة' : 'Wallet'}</span>
              </button>

              <button
                onClick={() => onNavigate('properties')}
                className="text-white rounded-xl p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(to bottom right, #10B981, #059669)',
                }}
              >
                <Building2 className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{isRTL ? 'عقاراتي' : 'Properties'}</span>
              </button>
            </div>
          </div>

          {/* Active Bookings */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#0E1E25] tracking-tight">
                {isRTL ? 'الحجوزات النشطة' : 'Active Bookings'}
              </h3>
              <button
                onClick={() => onNavigate('requests')}
                className="text-sm text-[#0F4C5C] hover:text-[#0A3540] font-medium flex items-center gap-1 transition-colors"
              >
                {isRTL ? 'عرض الكل' : 'View All'}
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {activeRequests.map((request) => (
                <Card
                  key={request.id}
                  onClick={() => onNavigate('requestDetails', request)}
                  className="min-w-[280px] p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex-shrink-0"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={`text-xs font-medium ${getStatusColor(request.status)}`}>
                          {getStatusText(request.status)}
                        </Badge>
                        <span className="text-xs text-[#4B5563]">{request.time}</span>
                      </div>
                      <h4 className="font-semibold text-[#0E1E25] mb-1 text-sm">{request.customerName}</h4>
                      <p className="text-xs text-[#4B5563]">{request.propertyName}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#0F4C5C]/10">
                    <div>
                      <p className="text-xs text-[#4B5563] font-medium mb-1">{isRTL ? 'المبلغ' : 'Amount'}</p>
                      <p className="font-semibold text-white bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-3 py-1.5 rounded-lg inline-block text-sm">
                        {request.amount} {isRTL ? 'ر.س' : 'SAR'}
                      </p>
                    </div>
                    <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white border-0">
                      {isRTL ? 'حجز' : 'Booking'}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Properties */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#0E1E25] mb-3 tracking-tight">
              {isRTL ? 'عقارات الشركة' : 'Company Properties'}
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {companyProperties.map((property) => (
                <Card
                  key={property.id}
                  onClick={() => onNavigate('properties')}
                  className="min-w-[200px] p-3 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex-shrink-0"
                >
                  <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-[#0E1E25] mb-1 text-sm">{property.title}</h4>
                  <p className="text-xs text-[#4B5563] mb-2">{property.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#D4AF37]">{property.units} {isRTL ? 'وحدة' : 'Units'}</span>
                    <Badge className={`text-xs ${property.status === 'available' ? 'bg-[#10B981] text-white' : 'bg-[#6B7280] text-white'} border-0`}>
                      {property.status === 'available' ? (isRTL ? 'متاح' : 'Available') : (isRTL ? 'مباع' : 'Sold')}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Bottom Navigation */}
      <BottomNavBar
        currentScreen="home"
        onNavigate={onNavigate}
        language={language}
        variant="business"
        role="developer"
      />
    </div>
  );
}
