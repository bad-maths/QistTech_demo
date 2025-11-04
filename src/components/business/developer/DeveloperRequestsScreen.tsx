import React, { useState } from 'react';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import { Switch } from '../../ui/switch';
import { BottomNavBar } from '../../BottomNavBar';
import {
  ArrowLeft,
  Bell,
  Search,
  ClipboardList,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface DeveloperRequestsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function DeveloperRequestsScreen({ onNavigate, language, employeeData }: DeveloperRequestsScreenProps) {
  const isRTL = language === 'ar';
  const [isOnline, setIsOnline] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const requests = [
    {
      id: 1,
      customerName: isRTL ? 'أحمد محمد' : 'Ahmed Mohammed',
      propertyName: isRTL ? 'فيلا الياسمين - الرياض' : 'Yasmine Villa - Riyadh',
      amount: '2,500,000',
      status: 'pending',
      time: isRTL ? 'منذ ساعتين' : '2 hours ago',
      type: 'financing'
    },
    {
      id: 2,
      customerName: isRTL ? 'فاطمة علي' : 'Fatima Ali',
      propertyName: isRTL ? 'شقة النخيل - جدة' : 'Palm Apartment - Jeddah',
      amount: '1,800,000',
      status: 'in-progress',
      time: isRTL ? 'منذ 5 ساعات' : '5 hours ago',
      type: 'booking'
    },
    {
      id: 3,
      customerName: isRTL ? 'خالد عبدالله' : 'Khaled Abdullah',
      propertyName: isRTL ? 'قصر الفخامة - الدمام' : 'Luxury Palace - Dammam',
      amount: '4,200,000',
      status: 'completed',
      time: isRTL ? 'منذ يوم واحد' : '1 day ago',
      type: 'financing'
    },
    {
      id: 4,
      customerName: isRTL ? 'سارة إبراهيم' : 'Sarah Ibrahim',
      propertyName: isRTL ? 'شقة المرجان - الخبر' : 'Coral Apartment - Khobar',
      amount: '950,000',
      status: 'pending',
      time: isRTL ? 'منذ 3 ساعات' : '3 hours ago',
      type: 'booking'
    }
  ];

  const filters = [
    { id: 'all', label: isRTL ? 'الكل' : 'All', icon: ClipboardList },
    { id: 'pending', label: isRTL ? 'قيد الانتظار' : 'Pending', icon: Clock },
    { id: 'in-progress', label: isRTL ? 'قيد المعالجة' : 'In Progress', icon: AlertCircle },
    { id: 'completed', label: isRTL ? 'مكتملة' : 'Completed', icon: CheckCircle2 }
  ];

  const stats = [
    {
      label: isRTL ? 'إجمالي الطلبات' : 'Total Requests',
      value: '156',
      icon: ClipboardList
    },
    {
      label: isRTL ? 'الطلبات النشطة' : 'Active Requests',
      value: '23',
      icon: AlertCircle
    },
    {
      label: isRTL ? 'قيد الانتظار' : 'Pending',
      value: '8',
      icon: Clock
    },
    {
      label: isRTL ? 'عملاء جدد' : 'New Clients',
      value: '12',
      icon: Users
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white border-0';
      case 'in-progress':
        return 'bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white border-0';
      case 'completed':
        return 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white border-0';
      default:
        return 'bg-gradient-to-r from-[#6B7280] to-[#4B5563] text-white border-0';
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

  const filteredRequests = requests.filter(req => {
    const matchesFilter = selectedFilter === 'all' || req.status === selectedFilter;
    const matchesSearch =
      req.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.propertyName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="relative h-auto overflow-hidden">
        {/* Background with gradient */}
        <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 pt-12 pb-8">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => onNavigate('home')}
                className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xl hover:bg-white/25 transition-all duration-300 border border-white/10 flex items-center justify-center"
              >
                <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <div className="text-center flex-1 mx-4">
                <h1 className="text-xl text-white mb-1 tracking-[-0.4px]">
                  {isRTL ? 'طلبات العملاء' : 'Client Requests'}
                </h1>
                <p className="text-sm text-[rgba(255,255,255,0.8)]">
                  {isRTL ? `${filteredRequests.length} طلب نشط` : `${filteredRequests.length} active requests`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('notifications')}
                  className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xl hover:bg-white/25 transition-all duration-300 border border-white/10 flex items-center justify-center relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full shadow-glow-gold flex items-center justify-center">
                    <span className="text-[9px] text-white">3</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Online Status Card */}
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-4 mb-4 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: isOnline ? '#10B981' : '#6B7280' }}
                  ></div>
                  <span className="font-medium text-white">
                    {isOnline ? (isRTL ? 'متصل الآن' : 'Online Now') : isRTL ? 'غير متصل' : 'Offline'}
                  </span>
                </div>
                <Switch checked={isOnline} onCheckedChange={setIsOnline} />
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60 ${
                  isRTL ? 'right-4' : 'left-4'
                }`}
              />
              <Input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={isRTL ? 'ابحث عن عميل أو عقار...' : 'Search for client or property...'}
                className={`bg-white/15 backdrop-blur-xl border border-white/10 text-white placeholder-white/60 rounded-xl ${
                  isRTL ? 'pr-11 pl-4' : 'pl-11 pr-4'
                } py-3 h-12 hover:bg-white/20 transition-all duration-300`}
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-1.5 text-white/90" />
                  <div className="text-xl font-bold text-white mb-0.5">{stat.value}</div>
                  <div className="text-[10px] text-white/80 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="relative -mt-16 overflow-hidden">
          <svg viewBox="0 0 1440 120" className="w-full h-16" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient-requests" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0F4C5C" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0A3540" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0F4C5C" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 C320,80 420,20 720,40 C1020,60 1120,20 1440,40 L1440,120 L0,120 Z"
              fill="url(#wave-gradient-requests)"
              opacity="0.5"
            />
            <path
              d="M0,60 C360,20 540,80 720,60 C900,40 1080,80 1440,60 L1440,120 L0,120 Z"
              fill="#F2F4F5"
              opacity="0.8"
            />
            <path
              d="M0,70 C240,90 480,50 720,70 C960,90 1200,50 1440,70 L1440,120 L0,120 Z"
              fill="#F2F4F5"
            />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] text-white shadow-[0px_4px_12px_0px_rgba(15,76,92,0.2)]'
                  : 'bg-white text-[#0F4C5C] border border-[rgba(15,76,92,0.1)] hover:border-[rgba(15,76,92,0.2)]'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Request Cards */}
      <div className="px-6 pb-6">
        {filteredRequests.length === 0 ? (
          <Card className="p-12 text-center bg-gradient-to-br from-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-3xl shadow-lifted">
            <div className="bg-gradient-to-br from-[#F2F4F5] to-white rounded-3xl size-20 flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="w-10 h-10 text-gray-300" />
            </div>
            <p className="text-gray-500">{isRTL ? 'لا توجد طلبات' : 'No requests found'}</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map((request, index) => (
              <Card
                key={request.id}
                onClick={() => onNavigate('requestDetails', request)}
                className="p-5 bg-gradient-to-br from-white to-[#F2F4F5]/30 border-[#0F4C5C]/8 rounded-3xl cursor-pointer hover:shadow-lifted hover:scale-[1.01] transition-all duration-300 shadow-soft"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(request.status)}`}>
                    {getStatusText(request.status)}
                  </Badge>
                  <span className="text-xs text-[#4B5563] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {request.time}
                  </span>
                </div>

                <h4 className="font-semibold text-[#0E1E25] mb-2 text-base tracking-[-0.3px]">
                  {request.customerName}
                </h4>
                <p className="text-sm text-[#4B5563] mb-4">{request.propertyName}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-4 py-2 rounded-xl shadow-soft">
                      {request.amount}
                    </span>
                    <span className="text-xs text-[#4B5563]">{isRTL ? 'ر.س' : 'SAR'}</span>
                  </div>
                  <Badge variant="outline" className="text-xs font-medium border-[#D4AF37]/40 text-[#B8941F] bg-[#D4AF37]/5">
                    {request.type === 'financing'
                      ? isRTL
                        ? 'تمويل'
                        : 'Financing'
                      : isRTL
                      ? 'حجز'
                      : 'Booking'}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <BottomNavBar currentScreen="requests" onNavigate={onNavigate} language={language} variant="business" role="developer" />

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
