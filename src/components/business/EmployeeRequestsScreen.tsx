import { useState } from 'react';
import { Filter, Search, ClipboardList } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeeRequestsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeeRequestsScreen({ onNavigate, language, employeeData }: EmployeeRequestsScreenProps) {
  const isRTL = language === 'ar';
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const requests = [
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
      status: 'completed',
      time: isRTL ? 'منذ يومين' : '2 days ago',
      type: 'financing',
    },
    {
      id: 'REQ-004',
      customerName: isRTL ? 'سارة محمد العتيبي' : 'Sarah Mohammed Al-Otaibi',
      propertyName: isRTL ? 'شقة الياسمين - مكة' : 'Jasmine Apartment - Makkah',
      amount: '950,000',
      status: 'pending',
      time: isRTL ? 'منذ 5 ساعات' : '5 hours ago',
      type: 'financing',
    },
    {
      id: 'REQ-005',
      customerName: isRTL ? 'عبدالرحمن خالد الشمري' : 'Abdulrahman Khalid Al-Shammari',
      propertyName: isRTL ? 'فيلا القصر - الخبر' : 'Palace Villa - Khobar',
      amount: '2,100,000',
      status: 'in-progress',
      time: isRTL ? 'منذ 8 ساعات' : '8 hours ago',
      type: 'booking',
    },
    {
      id: 'REQ-006',
      customerName: isRTL ? 'نورة أحمد الدوسري' : 'Noura Ahmed Al-Dosari',
      propertyName: isRTL ? 'شقة الحدائق - الرياض' : 'Gardens Apartment - Riyadh',
      amount: '780,000',
      status: 'completed',
      time: isRTL ? 'منذ 3 أيام' : '3 days ago',
      type: 'financing',
    },
  ];

  const filters = [
    { id: 'all', label: isRTL ? 'الكل' : 'All' },
    { id: 'pending', label: isRTL ? 'قيد الانتظار' : 'Pending' },
    { id: 'in-progress', label: isRTL ? 'قيد المعالجة' : 'In Progress' },
    { id: 'completed', label: isRTL ? 'مكتملة' : 'Completed' },
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

  const filteredRequests = requests.filter(req => {
    const matchesFilter = selectedFilter === 'all' || req.status === selectedFilter;
    const matchesSearch = req.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         req.propertyName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div 
      className="min-h-screen bg-[#F2F4F5] relative overflow-hidden pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0F4C5C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white px-6 py-6 relative overflow-hidden">
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h1 className="text-2xl font-bold tracking-tight mb-4">
              {isRTL ? 'الطلبات' : 'Requests'}
            </h1>
            
            {/* Search */}
            <div className="relative mb-4">
              <Search className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 ${isRTL ? 'right-3' : 'left-3'}`} />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRTL ? 'ابحث عن عميل أو عقار...' : 'Search for customer or property...'}
                className={`bg-white/15 backdrop-blur-xl border border-white/10 text-white placeholder-white/60 rounded-xl ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2.5 hover:bg-white/20 transition-all duration-300`}
              />
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white shadow-lg'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Requests List */}
        <div className="px-6 py-6">
          {filteredRequests.length === 0 ? (
            <Card className="p-8 text-center bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted">
              <ClipboardList className="w-12 h-12 text-[#4B5563] mx-auto mb-3" />
              <p className="text-[#4B5563]">
                {isRTL ? 'لا توجد طلبات' : 'No requests found'}
              </p>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredRequests.map((request) => (
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
                    <span className="text-lg font-bold text-white bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] px-3 py-1 rounded-lg">
                      {request.amount} {isRTL ? 'ر.س' : 'SAR'}
                    </span>
                    <Badge variant="outline" className="text-xs font-medium border-[#0F4C5C]/20">
                      {request.type === 'financing' 
                        ? (isRTL ? 'تمويل' : 'Financing')
                        : (isRTL ? 'حجز' : 'Booking')}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <BottomNavBar
        currentScreen="requests"
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
