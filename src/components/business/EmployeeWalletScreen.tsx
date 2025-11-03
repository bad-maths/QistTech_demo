import { useState } from 'react';
import { ArrowLeft, ArrowRight, Wallet, TrendingUp, Download, Bell, Filter, ChevronDown, Home as HomeIcon, Building, DollarSign, HandshakeIcon, Trophy, Calendar, Check, X, Clock, University, CreditCard, Smartphone, Info, Calculator, Settings, MessageSquare, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { BottomNavBar } from '../BottomNavBar';
import { Switch } from '../ui/switch';

interface EmployeeWalletScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeeWalletScreen({ onNavigate, language, employeeData }: EmployeeWalletScreenProps) {
  const isRTL = language === 'ar';
  const [selectedMonth, setSelectedMonth] = useState('november-2024');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notificationsEnabled, setNotificationsEnabled] = useState({
    newCommission: true,
    monthlyReport: true,
    withdrawalAlerts: false,
  });

  const walletStats = {
    totalBalance: 248950,
    availableBalance: 156750,
    processing: 67200,
    reserved: 25000,
  };

  const monthlyPerformance = {
    commissionThisMonth: 45200,
    commissionGrowth: 18.5,
    dealsCompleted: 8,
    dealsGrowth: 2,
    averageCommission: 5650,
    ranking: 3,
    totalBrokers: 25,
  };

  const transactions = [
    {
      id: 'TXN-2024-1156',
      type: 'sale',
      propertyType: isRTL ? 'شقة سكنية' : 'Residential Apartment',
      title: isRTL ? 'بيع شقة - الرياض' : 'Apartment Sale - Riyadh',
      customerName: isRTL ? 'سارة أحمد محمد' : 'Sarah Ahmed Mohammed',
      propertyValue: 1200000,
      commissionRate: 2.08,
      amount: 25000,
      location: isRTL ? 'الرياض - العليا' : 'Riyadh - Al Olaya',
      status: 'completed',
      date: '2024/11/02',
      icon: <HomeIcon className="w-5 h-5" />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      id: 'TXN-2024-1155',
      type: 'rental',
      propertyType: isRTL ? 'مكتب تجاري' : 'Commercial Office',
      title: isRTL ? 'إيجار مكتب تجاري - جدة' : 'Commercial Office Rental - Jeddah',
      customerName: isRTL ? 'شركة النور للتجارة' : 'Al-Noor Trading Company',
      propertyValue: 180000,
      commissionRate: 10,
      amount: 18000,
      location: isRTL ? 'جدة - الحمراء' : 'Jeddah - Al Hamra',
      status: 'completed',
      date: '2024/11/01',
      icon: <Building className="w-5 h-5" />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 'TXN-2024-1154',
      type: 'sale',
      propertyType: isRTL ? 'فيلا سكنية' : 'Residential Villa',
      title: isRTL ? 'بيع فيلا - الدمام' : 'Villa Sale - Dammam',
      customerName: isRTL ? 'محمد علي الأحمد' : 'Mohammed Ali Al-Ahmad',
      propertyValue: 1750000,
      commissionRate: 2,
      amount: 35000,
      location: isRTL ? 'الدمام - الفيصلية' : 'Dammam - Al Faisaliyah',
      status: 'processing',
      date: '2024/10/30',
      icon: <HomeIcon className="w-5 h-5" />,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      id: 'TXN-2024-1153',
      type: 'rental',
      propertyType: isRTL ? 'محل تجاري' : 'Commercial Shop',
      title: isRTL ? 'إيجار محل تجاري - الرياض' : 'Commercial Shop Rental - Riyadh',
      customerName: isRTL ? 'فاطمة خالد السعد' : 'Fatima Khaled Al-Saad',
      propertyValue: 120000,
      commissionRate: 10,
      amount: 12000,
      location: isRTL ? 'الرياض - العلية' : 'Riyadh - Al Olaya',
      status: 'completed',
      date: '2024/10/28',
      icon: <Building className="w-5 h-5" />,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  const withdrawalRequests = [
    {
      id: 'WD-001',
      amount: 50000,
      status: 'review',
      requestDate: '2024/11/03',
      method: isRTL ? 'تحويل بنكي' : 'Bank Transfer',
      bank: isRTL ? 'البنك الأهلي' : 'Al Ahli Bank',
      accountNumber: '****1234',
      expectedDays: isRTL ? '2-3 أيام عمل' : '2-3 business days',
    },
    {
      id: 'WD-002',
      amount: 75000,
      status: 'completed',
      requestDate: '2024/10/25',
      completedDate: '2024/10/26',
      referenceNumber: 'REF-789456',
      bank: isRTL ? 'بنك الراجحي' : 'Al Rajhi Bank',
      fees: 0,
    },
    {
      id: 'WD-003',
      amount: 30000,
      status: 'rejected',
      requestDate: '2024/10/20',
      rejectionReason: isRTL 
        ? 'بيانات الحساب البنكي غير مكتملة. يرجى تحديث بيانات الحساب وإعادة المحاولة.'
        : 'Incomplete bank account information. Please update account details and try again.',
    },
  ];

  const leaderboard = [
    { rank: 1, name: isRTL ? 'محمد العتيبي' : 'Mohammed Al-Otaibi', deals: 18 },
    { rank: 2, name: isRTL ? 'سارة الأحمد' : 'Sarah Al-Ahmad', deals: 15 },
    { rank: 3, name: isRTL ? 'أحمد محمد (أنت)' : 'Ahmed Mohammed (You)', deals: 8, isCurrentUser: true },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'review':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return isRTL ? 'مكتملة' : 'Completed';
      case 'processing':
        return isRTL ? 'قيد المعالجة' : 'Processing';
      case 'rejected':
        return isRTL ? 'مرفوض' : 'Rejected';
      case 'review':
        return isRTL ? 'قيد المراجعة' : 'Under Review';
      default:
        return status;
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#F2F4F5] relative overflow-hidden pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header with Gradient and Wave */}
      <header className="relative bg-gradient-to-br from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white">
        <div className="px-4 pt-6 pb-6">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('home')}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                {isRTL ? (
                  <ArrowRight className="w-5 h-5" />
                ) : (
                  <ArrowLeft className="w-5 h-5" />
                )}
              </button>
              <div>
                <h1 className="text-lg font-bold">{isRTL ? 'محفظة العمولات' : 'Commission Wallet'}</h1>
                <p className="text-white/80 text-sm">{isRTL ? 'إدارة وتتبع أرباحك' : 'Manage and track your earnings'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">2</span>
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Wallet Balance Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center animate-pulse-slow">
                  <Wallet className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-white/90 text-sm font-medium">{isRTL ? 'الرصيد الإجمالي' : 'Total Balance'}</h2>
                  <p className="text-white/70 text-xs">{isRTL ? 'آخر تحديث: منذ 5 دقائق' : 'Last updated: 5 minutes ago'}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white mb-1">{walletStats.totalBalance.toLocaleString()}</div>
                <div className="text-[#D4AF37] text-sm font-semibold">{isRTL ? 'ريال سعودي' : 'Saudi Riyal'}</div>
              </div>
            </div>
            
            {/* Balance Breakdown */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                <div className="text-[#D4AF37] text-lg font-bold">{walletStats.availableBalance.toLocaleString()}</div>
                <div className="text-white/80 text-xs">{isRTL ? 'متاح للسحب' : 'Available'}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                <div className="text-green-300 text-lg font-bold">{walletStats.processing.toLocaleString()}</div>
                <div className="text-white/80 text-xs">{isRTL ? 'قيد المعالجة' : 'Processing'}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                <div className="text-blue-300 text-lg font-bold">{walletStats.reserved.toLocaleString()}</div>
                <div className="text-white/80 text-xs">{isRTL ? 'محجوز' : 'Reserved'}</div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-[#0F4C5C] font-semibold py-3 px-4 rounded-xl transition-all">
              <Download className={`w-4 h-4 inline ${isRTL ? 'mr-2' : 'ml-2'}`} />
              {isRTL ? 'سحب الأرباح' : 'Withdraw Earnings'}
            </button>
            <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all">
              <TrendingUp className={`w-4 h-4 inline ${isRTL ? 'mr-2' : 'ml-2'}`} />
              {isRTL ? 'التقرير المفصل' : 'Detailed Report'}
            </button>
          </div>
        </div>

        {/* Wave SVG Separator */}
        <svg className="w-full h-20 -mt-16" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60C360 30 720 30 1080 60C1260 75 1350 75 1440 60V120H0V60Z" fill="#F2F4F5"/>
          <path d="M0 70C240 40 480 40 720 70C960 100 1200 100 1440 70V120H0V70Z" fill="url(#wave-gradient-wallet)" opacity="0.4"/>
          <path d="M0 50C300 20 600 20 900 50C1140 75 1320 75 1440 50V120H0V50Z" fill="#F2F4F5" opacity="0.5"/>
          
          <defs>
            <linearGradient id="wave-gradient-wallet" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4"/>
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5"/>
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative Elements */}
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-[#0F4C5C]/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-7 right-1/3 w-2 h-2 bg-[#D4AF37]/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-9 right-1/4 w-1.5 h-1.5 bg-[#0F4C5C]/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </header>

      {/* Main Commission Wallet Content */}
      <main className="px-4 pb-24">
        
        {/* Monthly Performance Overview */}
        <section className="mb-6 -mt-6 relative z-20">
          <Card className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F4C5C]">{isRTL ? 'الأداء الشهري' : 'Monthly Performance'}</h2>
              <div className="flex items-center gap-2">
                <select 
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="text-sm border border-gray-200 rounded-lg px-3 py-1 bg-white"
                >
                  <option value="november-2024">{isRTL ? 'نوفمبر 2024' : 'November 2024'}</option>
                  <option value="october-2024">{isRTL ? 'أكتوبر 2024' : 'October 2024'}</option>
                  <option value="september-2024">{isRTL ? 'سبتمبر 2024' : 'September 2024'}</option>
                </select>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white w-5 h-5" />
                  </div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">+{monthlyPerformance.commissionGrowth}%</span>
                </div>
                <div className="text-green-700 font-bold text-xl mb-1">{monthlyPerformance.commissionThisMonth.toLocaleString()}</div>
                <div className="text-green-600 text-sm">{isRTL ? 'عمولة هذا الشهر' : 'Commission This Month'}</div>
                <div className="text-green-500 text-xs mt-1">{isRTL ? 'مقارنة بالشهر الماضي' : 'Compared to last month'}</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <HandshakeIcon className="text-white w-5 h-5" />
                  </div>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">+{monthlyPerformance.dealsGrowth}</span>
                </div>
                <div className="text-blue-700 font-bold text-xl mb-1">{monthlyPerformance.dealsCompleted}</div>
                <div className="text-blue-600 text-sm">{isRTL ? 'صفقات مكتملة' : 'Deals Completed'}</div>
                <div className="text-blue-500 text-xs mt-1">{isRTL ? 'زيادة عن الشهر الماضي' : 'Increase from last month'}</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <DollarSign className="text-white w-5 h-5" />
                  </div>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">{monthlyPerformance.averageCommission.toLocaleString()}</span>
                </div>
                <div className="text-purple-700 font-bold text-xl mb-1">{monthlyPerformance.averageCommission.toLocaleString()}</div>
                <div className="text-purple-600 text-sm">{isRTL ? 'متوسط العمولة' : 'Average Commission'}</div>
                <div className="text-purple-500 text-xs mt-1">{isRTL ? 'ريال لكل صفقة' : 'SAR per deal'}</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Trophy className="text-white w-5 h-5" />
                  </div>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">#{monthlyPerformance.ranking}</span>
                </div>
                <div className="text-orange-700 font-bold text-xl mb-1">{monthlyPerformance.ranking}</div>
                <div className="text-orange-600 text-sm">{isRTL ? 'ترتيبك' : 'Your Ranking'}</div>
                <div className="text-orange-500 text-xs mt-1">{isRTL ? `من أصل ${monthlyPerformance.totalBrokers} وسيط` : `Out of ${monthlyPerformance.totalBrokers} brokers`}</div>
              </div>
            </div>

            {/* Leaderboard Preview */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 mb-3">{isRTL ? 'ترتيب أفضل الوسطاء هذا الشهر' : 'Top Brokers This Month'}</h3>
              <div className="space-y-2">
                {leaderboard.map((broker) => (
                  <div 
                    key={broker.rank}
                    className={`flex items-center justify-between ${broker.isCurrentUser ? 'bg-[#0F4C5C]/10 rounded-lg p-2' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 ${broker.rank === 1 ? 'bg-yellow-500' : broker.rank === 2 ? 'bg-gray-400' : 'bg-amber-500'} text-white rounded-full flex items-center justify-center text-xs font-bold`}>
                        {broker.rank}
                      </span>
                      <span className={`text-sm font-semibold ${broker.isCurrentUser ? 'text-[#0F4C5C]' : ''}`}>{broker.name}</span>
                    </div>
                    <span className={`text-sm ${broker.isCurrentUser ? 'text-[#0F4C5C] font-semibold' : 'text-gray-600'}`}>
                      {broker.deals} {isRTL ? 'صفقات' : 'deals'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Transaction History */}
        <section className="mb-6">
          <Card className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F4C5C]">{isRTL ? 'سجل المعاملات' : 'Transaction History'}</h2>
              <div className="flex items-center gap-2">
                <button className="text-sm text-[#0F4C5C] font-semibold border border-[#0F4C5C] rounded-lg px-3 py-1 hover:bg-[#0F4C5C] hover:text-white transition-all">
                  {isRTL ? 'تصدير PDF' : 'Export PDF'}
                </button>
                <button className="text-sm text-gray-500">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
              {['all', 'completed', 'processing', 'withdrawn'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                    selectedFilter === filter
                      ? 'bg-[#0F4C5C] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter === 'all' && (isRTL ? 'الكل' : 'All')}
                  {filter === 'completed' && (isRTL ? 'مكتملة' : 'Completed')}
                  {filter === 'processing' && (isRTL ? 'قيد المعالجة' : 'Processing')}
                  {filter === 'withdrawn' && (isRTL ? 'مسحوبة' : 'Withdrawn')}
                </button>
              ))}
            </div>

            {/* Transaction List */}
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${transaction.iconBg} rounded-full flex items-center justify-center ${transaction.iconColor}`}>
                        {transaction.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{transaction.title}</h3>
                        <p className="text-sm text-gray-500">{isRTL ? 'العميل: ' : 'Client: '}{transaction.customerName}</p>
                        <p className="text-xs text-gray-400">{isRTL ? 'رقم المعاملة: ' : 'Transaction #'}{transaction.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-bold text-lg">+{transaction.amount.toLocaleString()} {isRTL ? 'ريال' : 'SAR'}</div>
                      <div className="text-xs text-gray-500">{transaction.date}</div>
                      <Badge className={`text-xs font-semibold mt-1 border ${getStatusColor(transaction.status)}`}>
                        {getStatusText(transaction.status)}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 rounded-lg p-3">
                    <div>
                      <span className="text-gray-500">{isRTL ? 'قيمة العقار:' : 'Property Value:'}</span>
                      <span className="font-semibold text-gray-800 mr-2">{transaction.propertyValue.toLocaleString()} {isRTL ? 'ريال' : 'SAR'}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">{isRTL ? 'نسبة العمولة:' : 'Commission Rate:'}</span>
                      <span className="font-semibold text-gray-800 mr-2">{transaction.commissionRate}%</span>
                    </div>
                    <div>
                      <span className="text-gray-500">{isRTL ? 'نوع العقار:' : 'Property Type:'}</span>
                      <span className="font-semibold text-gray-800 mr-2">{transaction.propertyType}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">{isRTL ? 'المنطقة:' : 'Area:'}</span>
                      <span className="font-semibold text-gray-800 mr-2">{transaction.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <button className="w-full mt-4 py-3 text-[#0F4C5C] font-semibold border border-[#0F4C5C] rounded-lg hover:bg-[#0F4C5C] hover:text-white transition-all">
              {isRTL ? 'عرض المزيد من المعاملات' : 'Load More Transactions'}
              <ChevronDown className={`w-4 h-4 inline ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </button>
          </Card>
        </section>

        {/* Withdrawal Requests */}
        <section className="mb-6">
          <Card className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F4C5C]">{isRTL ? 'طلبات السحب' : 'Withdrawal Requests'}</h2>
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#0F4C5C] px-4 py-2 rounded-lg text-sm font-semibold hover:from-[#B8941F] hover:to-[#D4AF37] transition-colors">
                <Download className={`w-4 h-4 inline ${isRTL ? 'mr-2' : 'ml-2'}`} />
                {isRTL ? 'طلب سحب جديد' : 'New Withdrawal'}
              </button>
            </div>

            {/* Withdrawal Cards */}
            <div className="space-y-3">
              {withdrawalRequests.map((request) => (
                <div 
                  key={request.id}
                  className={`rounded-xl p-4 ${
                    request.status === 'review' 
                      ? 'border-2 border-yellow-200 bg-yellow-50'
                      : request.status === 'rejected'
                      ? 'border border-red-200 bg-red-50'
                      : 'border border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        request.status === 'review' 
                          ? 'bg-yellow-500 animate-pulse'
                          : request.status === 'completed'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}>
                        {request.status === 'review' && <Clock className="text-white w-5 h-5" />}
                        {request.status === 'completed' && <Check className="text-white w-5 h-5" />}
                        {request.status === 'rejected' && <X className="text-white w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          request.status === 'review' ? 'text-yellow-800' : 
                          request.status === 'rejected' ? 'text-red-800' : 'text-gray-800'
                        }`}>
                          {request.status === 'review' && (isRTL ? 'طلب سحب قيد المراجعة' : 'Withdrawal Under Review')}
                          {request.status === 'completed' && (isRTL ? 'سحب مكتمل' : 'Completed Withdrawal')}
                          {request.status === 'rejected' && (isRTL ? 'طلب سحب مرفوض' : 'Withdrawal Rejected')}
                        </h3>
                        <p className={`text-sm ${
                          request.status === 'review' ? 'text-yellow-600' : 
                          request.status === 'rejected' ? 'text-red-600' : 'text-gray-500'
                        }`}>
                          {isRTL ? 'تاريخ الطلب: ' : 'Request Date: '}{request.requestDate}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold text-lg ${
                        request.status === 'review' ? 'text-yellow-700' : 
                        request.status === 'completed' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {request.amount.toLocaleString()} {isRTL ? 'ريال' : 'SAR'}
                      </div>
                      <Badge className={`text-xs font-semibold border ${getStatusColor(request.status)}`}>
                        {getStatusText(request.status)}
                      </Badge>
                    </div>
                  </div>
                  
                  {request.status === 'review' && (
                    <>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-yellow-600">{isRTL ? 'طريقة السحب:' : 'Method:'}</span>
                          <span className="font-semibold text-yellow-800 mr-2">{request.method}</span>
                        </div>
                        <div>
                          <span className="text-yellow-600">{isRTL ? 'البنك:' : 'Bank:'}</span>
                          <span className="font-semibold text-yellow-800 mr-2">{request.bank}</span>
                        </div>
                        <div>
                          <span className="text-yellow-600">{isRTL ? 'رقم الحساب:' : 'Account:'}</span>
                          <span className="font-semibold text-yellow-800 mr-2">{request.accountNumber}</span>
                        </div>
                        <div>
                          <span className="text-yellow-600">{isRTL ? 'المدة المتوقعة:' : 'Expected:'}</span>
                          <span className="font-semibold text-yellow-800 mr-2">{request.expectedDays}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="flex-1 bg-yellow-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-yellow-700 transition-colors">
                          {isRTL ? 'تتبع الطلب' : 'Track Request'}
                        </button>
                        <button className="px-4 py-2 border border-yellow-300 rounded-lg text-sm text-yellow-700 hover:bg-yellow-100 transition-colors">
                          {isRTL ? 'إلغاء' : 'Cancel'}
                        </button>
                      </div>
                    </>
                  )}

                  {request.status === 'completed' && (
                    <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 rounded-lg p-3">
                      <div>
                        <span className="text-gray-500">{isRTL ? 'تاريخ التحويل:' : 'Transfer Date:'}</span>
                        <span className="font-semibold text-gray-800 mr-2">{request.completedDate}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{isRTL ? 'رقم المرجع:' : 'Reference:'}</span>
                        <span className="font-semibold text-gray-800 mr-2">{request.referenceNumber}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{isRTL ? 'البنك:' : 'Bank:'}</span>
                        <span className="font-semibold text-gray-800 mr-2">{request.bank}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{isRTL ? 'الرسوم:' : 'Fees:'}</span>
                        <span className="font-semibold text-gray-800 mr-2">{request.fees} {isRTL ? 'ريال' : 'SAR'}</span>
                      </div>
                    </div>
                  )}

                  {request.status === 'rejected' && (
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="text-sm text-red-600 mb-2">
                        <strong>{isRTL ? 'سبب الرفض:' : 'Rejection Reason:'}</strong>
                      </div>
                      <p className="text-sm text-red-700 mb-2">
                        {request.rejectionReason}
                      </p>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                        {isRTL ? 'تحديث البيانات' : 'Update Information'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </section>

      </main>

      <BottomNavBar
        currentScreen="wallet"
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
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
