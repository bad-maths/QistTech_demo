import { useState } from 'react';
import { Power, TrendingUp, CheckCircle, Wallet, Percent, UserPlus, Calculator, ClipboardList, Building2, Bell, ArrowRight, ArrowLeft } from 'lucide-react';
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
      className="min-h-screen bg-[#F2F4F5] relative overflow-hidden pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0F4C5C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#0A3540] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Premium Header */}
        <div className="relative bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white px-6 py-8 overflow-hidden">
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
            <button className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10">
              <Bell className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Online Status Toggle */}
          <div className="flex items-center justify-between bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-gradient-to-br from-[#10B981] to-[#059669]' : 'bg-gradient-to-br from-gray-500 to-gray-600'}`}></div>
              <div>
                <p className="font-medium text-white text-sm">
                  {isRTL ? 'حالة الاستقبال' : 'Receiving Status'}
                </p>
                <p className="text-xs text-white/70">
                  {isOnline 
                    ? (isRTL ? 'متصل - يمكنك استقبال الحجوزات' : 'Online - Receiving bookings')
                    : (isRTL ? 'غير متصل' : 'Offline')}
                </p>
              </div>
            </div>
            <Switch
              checked={isOnline}
              onCheckedChange={setIsOnline}
              className="data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-[#10B981] data-[state=checked]:to-[#059669]"
              style={isOnline ? { backgroundImage: 'none', backgroundColor: '#10B981' } : undefined}
            />
          </div>
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
                className="bg-gradient-to-br from-[#10B981] to-[#059669] text-white rounded-xl p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
                  className="min-w-[280px] p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`text-xs font-medium ${getStatusColor(request.status)}`}>
                      {getStatusText(request.status)}
                    </Badge>
                    <span className="text-xs text-[#4B5563]">{request.time}</span>
                  </div>

                  <h4 className="font-semibold text-[#0E1E25] mb-1 text-sm">{request.customerName}</h4>
                  <p className="text-xs text-[#4B5563] mb-3">{request.propertyName}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] bg-clip-text text-transparent">
                      {request.amount} {isRTL ? 'ر.س' : 'SAR'}
                    </span>
                    <Badge variant="outline" className="text-xs font-medium border-[#0F4C5C]/20">
                      {isRTL ? 'حجز' : 'Booking'}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Properties */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#0E1E25] tracking-tight">
                {isRTL ? 'عقارات شركتي' : 'Company Properties'}
              </h3>
              <button
                onClick={() => onNavigate('properties')}
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
              {companyProperties.map((property) => (
                <Card
                  key={property.id}
                  onClick={() => onNavigate('propertyDetails', property)}
                  className="min-w-[200px] overflow-hidden bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative h-32">
                    <ImageWithFallback
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white font-medium">
                      {property.units} {isRTL ? 'وحدة' : 'units'}
                    </Badge>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-[#0E1E25] text-sm mb-1 line-clamp-1 tracking-tight">
                      {property.title}
                    </h4>
                    <p className="text-xs text-[#4B5563] mb-2">{property.location}</p>
                    <p className="font-bold bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] bg-clip-text text-transparent">
                      {property.price} {isRTL ? 'ر.س' : 'SAR'}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
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
