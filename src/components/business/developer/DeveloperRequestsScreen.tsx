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
    <div className="min-h-screen bg-[#F2F4F5] relative overflow-hidden pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0F4C5C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white px-6 pt-6 pb-6 relative overflow-visible">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => onNavigate('home')}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <h1 className="text-2xl font-bold tracking-tight">{isRTL ? 'طلبات العملاء' : 'Client Requests'}</h1>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onNavigate('notifications')}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <button
                  onClick={() => onNavigate('profile')}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold hover:bg-white/30 transition-all duration-300"
                >
                  {employeeData?.name?.[0] || 'A'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6 p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${isOnline ? 'bg-[#10B981]' : 'bg-[#6B7280]'} animate-pulse`}
                ></div>
                <span className="font-medium">
                  {isOnline ? (isRTL ? 'متصل الآن' : 'Online Now') : isRTL ? 'غير متصل' : 'Offline'}
                </span>
              </div>
              <Switch checked={isOnline} onCheckedChange={setIsOnline} className="data-[state=checked]:bg-[#10B981]" />
            </div>

            <div className="relative mb-6">
              <Search
                className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 ${isRTL ? 'right-3' : 'left-3'}`}
              />
              <Input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={isRTL ? 'ابحث عن عميل أو عقار...' : 'Search for client or property...'}
                className={`bg-white/15 backdrop-blur-xl border border-white/10 text-white placeholder-white/60 rounded-xl ${
                  isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
                } py-2.5 hover:bg-white/20 transition-all duration-300`}
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-1.5 text-white/80" />
                  <div className="text-xl font-bold mb-0.5">{stat.value}</div>
                  <div className="text-[10px] text-white/80 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 -mb-16 z-20">
            <svg viewBox="0 0 1440 120" className="w-full h-16" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradientDeveloperRequests" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0F4C5C" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#0A3540" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0F4C5C" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M0,40 C320,80 420,20 720,40 C1020,60 1120,20 1440,40 L1440,120 L0,120 Z"
                fill="url(#waveGradientDeveloperRequests)"
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
                className="animate-float"
              />
            </svg>
          </div>
        </div>

        <div className="px-6 pt-6 pb-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white shadow-lg'
                    : 'bg-white text-[#0F4C5C] border border-[#0F4C5C]/20 hover:bg-[#F2F4F5]'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6">
          {filteredRequests.length === 0 ? (
            <Card className="p-8 text-center bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted">
              <ClipboardList className="w-12 h-12 text-[#4B5563] mx-auto mb-3" />
              <p className="text-[#4B5563]">{isRTL ? 'لا توجد طلبات' : 'No requests found'}</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredRequests.map(request => (
                <Card
                  key={request.id}
                  onClick={() => onNavigate('requestDetails', request)}
                  className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 text-gray-900"
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
                    <span className="text-lg font-bold text-white bg-gradient-to-r from-[#D4AF37] to-[#B8941F] px-3 py-1 rounded-lg">
                      {request.amount} {isRTL ? 'ر.س' : 'SAR'}
                    </span>
                    <Badge variant="outline" className="text-xs font-medium border-[#D4AF37]/40 text-[#B8941F]">
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
      </div>

      <BottomNavBar currentScreen="requests" onNavigate={onNavigate} language={language} variant="business" />

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
