import React, { useState } from 'react';
import { Input } from '../../ui/input';
import { BottomNavBar } from '../../BottomNavBar';
import { Badge } from '../../ui/badge';
import { Card } from '../../ui/card';
import {
  Bell,
  University,
  Users,
  ChartBar,
  MessageSquare,
  Calculator,
  Award,
  FileText,
  Search as SearchIcon,
  Clock,
  CheckCircle,
  Phone,
  Building2,
  AlertTriangle,
  Download,
  Share,
  ArrowLeft,
  Settings,
  TrendingUp,
  Star
} from 'lucide-react';

interface DeveloperClientManagementScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function DeveloperClientManagementScreen({
  onNavigate,
  language,
  employeeData
}: DeveloperClientManagementScreenProps) {
  const isRTL = language === 'ar';
  const [isAvailable, setIsAvailable] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [timelineFilter, setTimelineFilter] = useState('today');

  const t = (en: string, ar: string) => (isRTL ? ar : en);

  const quickStats = [
    { label: t('Total Clients', 'إجمالي العملاء'), value: 47, color: 'text-[#D4AF37]' },
    { label: t('Active', 'نشط'), value: 24, color: 'text-green-300' },
    { label: t('Waiting', 'في انتظار'), value: 12, color: 'text-yellow-300' },
    { label: t('New', 'طلبات جديدة'), value: 3, color: 'text-red-300' }
  ];

  const filterTabs = [
    { id: 'all', label: t('All', 'الكل') },
    { id: 'active', label: t('Active', 'نشط') },
    { id: 'waiting', label: t('Waiting', 'في انتظار') },
    { id: 'new', label: t('New', 'جديد') },
    { id: 'completed', label: t('Completed', 'مكتمل') }
  ];

  const bankRequests = [
    {
      id: 'br1',
      urgent: true,
      name: t('Sara Ahmed AlZahrani', 'سارة أحمد الزهراني'),
      phone: '+966 50 123 4567',
      propertyType: t('Apartment', 'شقة سكنية'),
      propertyValue: 1200000,
      downPayment: 240000,
      downPaymentPercent: 20,
      term: 20,
      banks: [t('AlAhli', 'الأهلي'), t('AlRajhi', 'الراجحي'), t('Samba', 'سامبا')]
    },
    {
      id: 'br2',
      urgent: false,
      name: t('Mohammed Ali AlSalem', 'محمد علي السالم'),
      phone: '+966 55 987 6543',
      propertyType: t('Villa', 'فيلا'),
      propertyValue: 2800000,
      downPayment: 560000,
      downPaymentPercent: 20,
      term: 25,
      banks: [t('Riyad', 'الرياض'), t('Samba', 'سامبا')],
      status: 'pending',
      time: t('2 hours ago', 'منذ 2 ساعات')
    }
  ];

  const activeClients = [
    {
      id: 'c1',
      name: t('Sara Ahmed AlZahrani', 'سارة أحمد الزهراني'),
      note: t('Interested in apartment in Riyadh - Al Narjis', 'مهتمة بشقة في الرياض - حي النرجس'),
      budget: 1200000,
      priority: 'high',
      lastInteraction: t('15 minutes ago', 'منذ 15 دقيقة'),
      propertiesSent: 3,
      viewings: 2,
      interactions: [
        { type: 'phone', text: t('Phone call - 15 min ago', 'مكالمة هاتفية - منذ 15 دقيقة'), icon: Phone, color: 'text-green-500' },
        { type: 'message', text: t('WhatsApp - 1 hour ago', 'رسالة واتساب - منذ ساعة'), icon: MessageSquare, color: 'text-blue-500' },
        { type: 'property', text: t('Property sent - 3 hours ago', 'إرسال عقار - منذ 3 ساعات'), icon: Building2, color: 'text-[#D4AF37]' }
      ]
    },
    {
      id: 'c2',
      name: t('Mohammed Ali AlSalem', 'محمد علي السالم'),
      note: t('Looking for villa in Jeddah - Al Safa', 'يبحث عن فيلا في جدة - حي الصفا'),
      budget: 2800000,
      priority: 'normal',
      lastInteraction: t('2 hours ago', 'منذ 2 ساعات'),
      propertiesSent: 5,
      viewings: 1,
      messages: 8
    }
  ];

  const timelineEvents = [
    {
      id: 'e1',
      type: 'urgent',
      title: t('Urgent bank calculation request', 'طلب حساب بنكي عاجل'),
      description: t('Sara requested urgent bank calculation for 1.2M SAR apartment', 'سارة أحمد طلبت حساب بنكي عاجل لشقة بقيمة 1.2 مليون ريال'),
      time: t('15 minutes ago', 'منذ 15 دقيقة'),
      client: t('Sara Ahmed AlZahrani', 'سارة أحمد الزهراني'),
      icon: AlertTriangle,
      color: 'bg-red-500'
    },
    {
      id: 'e2',
      type: 'chat',
      title: t('New 3-way chat', 'محادثة ثلاثية جديدة'),
      description: t('Started 3-way chat between Mohammed and finance employee', 'بدء محادثة ثلاثية بين محمد علي وموظف التمويل'),
      time: t('1 hour ago', 'منذ ساعة'),
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      id: 'e3',
      type: 'success',
      title: t('Bank approval completed', 'موافقة بنكية مكتملة'),
      description: t('Fatima financing approved by AlRajhi Bank', 'تمت الموافقة على طلب التمويل لفاطمة خالد من بنك الراجحي'),
      time: t('3 hours ago', 'منذ 3 ساعات'),
      commission: '+8,000',
      icon: CheckCircle,
      color: 'bg-green-500'
    }
  ];

  const bankPartners = [
    {
      id: 'b1',
      name: t('AlRajhi Bank', 'مصرف الراجحي'),
      subtitle: t('Certified partner - High approval rate', 'شريك معتمد - معدل موافقة عالي'),
      approvalRate: 92,
      color: 'bg-green-50 border-green-100'
    },
    {
      id: 'b2',
      name: t('AlAhli Bank', 'البنك الأهلي'),
      subtitle: t('Certified partner - Competitive rates', 'شريك معتمد - أسعار تنافسية'),
      approvalRate: 88,
      color: 'bg-blue-50 border-blue-100'
    },
    {
      id: 'b3',
      name: t('Samba Bank', 'بنك سامبا'),
      subtitle: t('New partner - Special offers', 'شريك جديد - عروض خاصة'),
      approvalRate: 85,
      color: 'bg-purple-50 border-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
  {/* Header */}
  <header className="relative gradient-primary text-white pb-6">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <ArrowLeft className={`w-5 h-5 text-white ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <div className="text-center">
              <h1 className="text-lg font-bold">{t('Client Management', 'إدارة الطلبات')}</h1>
              <p className="text-sm text-white/80">
                {t('Bank calculation requests and client interactions', 'طلبات حساب البنك والتفاعل مع العملاء')}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('notifications')}
                className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center"
              >
                <Bell className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Availability Toggle */}
          <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full animate-pulse ${
                  isAvailable ? 'bg-green-400' : 'bg-red-400'
                }`}
              />
              <span className="text-sm font-semibold">
                {isAvailable ? t('Available for clients', 'متاح للعملاء') : t('Unavailable', 'غير متاح')}
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-green-500 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
            </label>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search for client...', 'البحث عن عميل...')}
              className="w-full p-3 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white-70"
            />
            <SearchIcon className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} w-4 h-4 text-white/70`} />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-2">
            {quickStats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
                <div className={`${s.color} text-lg font-bold`}>{s.value}</div>
                <div className="text-xs text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave SVG */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-8" 
          viewBox="0 0 1440 48" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 24C360 12 720 12 1080 24C1260 30 1350 30 1440 24V48H0V24Z" 
            fill="#F2F4F5"
          />
          <path 
            d="M0 30C240 18 480 18 720 30C960 42 1200 42 1440 30V48H0V30Z" 
            fill="url(#wave-gradient-dev-client)" 
            fillOpacity="0.3"
          />
          <defs>
            <linearGradient id="wave-gradient-dev-client" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F4C5C" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#0F4C5C" />
            </linearGradient>
          </defs>
        </svg>
      </header>

      <main className="px-4 pb-24 -mt-6 relative z-20">
        {/* Filter and Sort */}
        <section className="mb-6">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F4C5C]">{t('Filter & Sort', 'تصفية وترتيب')}</h2>
              <button
                onClick={() => setActiveFilter('all')}
                className="text-[#0F4C5C] text-sm font-semibold"
              >
                {t('Reset', 'إعادة تعيين')}
              </button>
            </div>
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeFilter === tab.id
                      ? 'bg-brand text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-3 border border-gray-200 rounded-lg text-sm"
              >
                <option value="date">{t('Sort by Date', 'ترتيب حسب التاريخ')}</option>
                <option value="name">{t('Sort by Name', 'ترتيب حسب الاسم')}</option>
                <option value="status">{t('Sort by Status', 'ترتيب حسب الحالة')}</option>
                <option value="value">{t('Sort by Property Value', 'ترتيب حسب قيمة العقار')}</option>
              </select>
              <select className="p-3 border border-gray-200 rounded-lg text-sm">
                <option>{t('Newest First', 'الأحدث أولاً')}</option>
                <option>{t('Oldest First', 'الأقدم أولاً')}</option>
                <option>{t('Highest Value', 'الأعلى قيمة')}</option>
                <option>{t('Lowest Value', 'الأقل قيمة')}</option>
              </select>
            </div>
          </Card>
        </section>

        {/* Bank Calculation Requests */}
        <section className="mb-6">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F4C5C] flex items-center gap-2">
                <University className="w-4 h-4 text-[#D4AF37]" />
                {t('Bank Calculation Requests', 'طلبات حساب البنك')}
              </h2>
              <div className="flex items-center gap-2">
                <Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs font-semibold">
                  {t('3 new requests', '3 طلبات جديدة')}
                </Badge>
                <button
                  onClick={() => window.alert(t('New request', 'طلب جديد'))}
                  className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  + {t('New', 'طلب جديد')}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {bankRequests.map((req) => (
                <div
                  key={req.id}
                  className={`rounded-xl p-4 ${
                    req.urgent
                      ? 'border-2 border-red-200 bg-red-50/50'
                      : 'border border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                        alt="Client"
                        className={`w-10 h-10 rounded-full object-cover ${
                          req.urgent ? 'border-2 border-red-300' : ''
                        }`}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm">{req.name}</h3>
                        <p className="text-xs text-gray-500">{req.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {req.urgent && (
                        <Badge className="bg-red-500 text-white px-2 py-1 text-xs animate-pulse">
                          {t('Urgent', 'عاجل')}
                        </Badge>
                      )}
                      {req.status && (
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {req.time}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div className="bg-white rounded-lg p-2">
                      <span className="text-gray-500 block">{t('Property Type:', 'نوع العقار:')}</span>
                      <span className="font-semibold text-gray-800">{req.propertyType}</span>
                    </div>
                    <div className="bg-white rounded-lg p-2">
                      <span className="text-gray-500 block">{t('Property Value:', 'قيمة العقار:')}</span>
                      <span className="font-semibold text-[#D4AF37]">
                        {req.propertyValue.toLocaleString()} {t('SAR', 'ريال')}
                      </span>
                    </div>
                    <div className="bg-white rounded-lg p-2">
                      <span className="text-gray-500 block">{t('Down Payment:', 'الدفعة الأولى:')}</span>
                      <span className="font-semibold text-gray-800">
                        {req.downPayment.toLocaleString()} {t('SAR', 'ريال')} ({req.downPaymentPercent}%)
                      </span>
                    </div>
                    <div className="bg-white rounded-lg p-2">
                      <span className="text-gray-500 block">{t('Term:', 'مدة التمويل:')}</span>
                      <span className="font-semibold text-gray-800">
                        {req.term} {t('years', 'سنة')}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        {t('Requested Banks:', 'البنوك المطلوبة:')}
                      </span>
                      <span className="text-xs text-gray-500">
                        {req.banks.length} {t('banks', 'بنوك')}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {req.banks.map((bank, i) => (
                        <span
                          key={i}
                          className="bg-[#0F4C5C]/10 text-[#0F4C5C] px-2 py-1 rounded-full text-xs"
                        >
                          {bank}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => window.alert(t('Sent to banks', 'إرسال للبنوك'))}
                      className={`flex-1 ${
                        req.urgent ? 'bg-red-500' : 'bg-[#0F4C5C]'
                      } text-white py-2 rounded-lg text-sm font-semibold`}
                    >
                      {t('Send to Banks', 'إرسال للبنوك')}
                    </button>
                    <button
                      onClick={() => onNavigate('employeeChat', { contactData: { name: req.name } })}
                      className={`px-4 py-2 border ${
                        req.urgent ? 'border-red-200' : 'border-gray-200'
                      } rounded-lg text-sm`}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => window.alert(t('View details', 'عرض'))}
                      className={`px-4 py-2 border ${
                        req.urgent ? 'border-red-200' : 'border-gray-200'
                      } rounded-lg text-sm`}
                    >
                      👁️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('requests')}
              className="w-full mt-4 py-3 text-[#0F4C5C] font-semibold text-sm hover:bg-[#0F4C5C]/5 rounded-lg border border-[#0F4C5C]/20"
            >
              {t('View all bank requests (15 requests)', 'عرض جميع طلبات البنك (15 طلب)')}
            </button>
          </Card>
        </section>

        {/* Active Clients Management */}
        <section className="mb-6">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F4C5C] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D4AF37]" />
                {t('Active Clients Management', 'إدارة العملاء النشطين')}
              </h2>
              <Badge className="bg-[#D4AF37]/10 text-[#B8941F] px-3 py-1 text-sm font-semibold">
                24 {t('active clients', 'عميل نشط')}
              </Badge>
            </div>

            <div className="space-y-4">
              {activeClients.map((client) => (
                <div
                  key={client.id}
                  className={`rounded-xl p-4 ${
                    client.priority === 'high'
                      ? 'border-l-4 border-l-red-500 bg-red-50/30'
                      : 'border border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                          alt="Client"
                          className={`w-12 h-12 rounded-full object-cover ${
                            client.priority === 'high' ? 'border-2 border-red-300' : ''
                          }`}
                        />
                        {client.priority === 'high' && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{client.name}</h3>
                        <p className="text-sm text-gray-600">{client.note}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {client.priority === 'high' && (
                            <Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs font-semibold">
                              {t('High Priority', 'أولوية عالية')}
                            </Badge>
                          )}
                          <span className="text-xs text-gray-500">
                            {t('Last interaction:', 'آخر تفاعل:')} {client.lastInteraction}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#D4AF37] font-bold text-sm">
                        {client.budget.toLocaleString()} {t('SAR', 'ريال')}
                      </div>
                      <div className="text-xs text-gray-500">{t('Expected Budget', 'الميزانية المتوقعة')}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-lg p-2 text-center">
                      <div className="text-[#0F4C5C] text-sm font-bold">{client.propertiesSent}</div>
                      <div className="text-xs text-gray-500">{t('Properties sent', 'عقارات مرسلة')}</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-center">
                      <div className="text-green-600 text-sm font-bold">{client.viewings}</div>
                      <div className="text-xs text-gray-500">{t('Viewings', 'معاينات')}</div>
                    </div>
                  </div>

                  {client.interactions && (
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <h4 className="font-semibold text-gray-700 text-sm mb-2">
                        {t('Recent Interactions:', 'آخر التفاعلات:')}
                      </h4>
                      <div className="space-y-2">
                        {client.interactions.map((int, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <int.icon className={`w-4 h-4 ${int.color}`} />
                            <span className="text-gray-600">{int.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={() => window.alert(t('3-way chat', 'محادثة ثلاثية'))}
                      className={`flex-1 ${
                        client.priority === 'high' ? 'bg-red-500' : 'bg-[#0F4C5C]'
                      } text-white py-2 rounded-lg text-sm font-semibold`}
                    >
                      {t('3-way Chat', 'محادثة ثلاثية')}
                    </button>
                    <button
                      onClick={() => window.alert(t('Call', 'اتصال'))}
                      className={`px-4 py-2 border ${
                        client.priority === 'high' ? 'border-red-200 bg-white' : 'border-gray-200'
                      } rounded-lg text-sm`}
                    >
                      <Phone className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onNavigate('properties')}
                      className={`px-4 py-2 border ${
                        client.priority === 'high' ? 'border-red-200 bg-white' : 'border-gray-200'
                      } rounded-lg text-sm`}
                    >
                      <Building2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Client Analytics */}
        <section className="mb-6">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F4C5C] flex items-center gap-2">
                <ChartBar className="w-4 h-4 text-[#D4AF37]" />
                {t('Client Analytics', 'إحصائيات العملاء')}
              </h2>
              <select
                className="text-sm border border-gray-200 rounded-lg px-3 py-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>{t('This Month', 'هذا الشهر')}</option>
                <option>{t('Last Month', 'الشهر الماضي')}</option>
                <option>{t('Last 3 Months', 'آخر 3 أشهر')}</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-[#0F4C5C]/5 to-[#0F4C5C]/10 rounded-xl p-4 border border-[#0F4C5C]/20">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-6 h-6 text-[#0F4C5C]" />
                  <Badge className="bg-[#0F4C5C] text-white px-2 py-1 text-xs">+15%</Badge>
                </div>
                <div className="text-[#0F4C5C] font-bold text-xl">47</div>
                <div className="text-sm text-gray-600">{t('Total Clients', 'إجمالي العملاء')}</div>
                <div className="text-xs text-gray-500 mt-1">
                  24 {t('active', 'نشط')}, 12 {t('waiting', 'في انتظار')}, 11 {t('completed', 'مكتمل')}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/5 to-[#D4AF37]/10 rounded-xl p-4 border border-[#D4AF37]/20">
                <div className="flex items-center justify-between mb-2">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                  <Badge className="bg-[#D4AF37] text-white px-2 py-1 text-xs">+8%</Badge>
                </div>
                <div className="text-[#D4AF37] font-bold text-xl">68%</div>
                <div className="text-sm text-gray-600">{t('Conversion Rate', 'معدل التحويل')}</div>
                <div className="text-xs text-gray-500 mt-1">32 {t('of', 'من')} 47 {t('clients', 'عميل')}</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Tools */}
        <section className="mb-6">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F4C5C] flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#D4AF37]" />
                {t('Quick Tools', 'أدوات سريعة')}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-green-700 text-sm mb-1">
                  {t('Financing Calculator', 'حاسبة التمويل')}
                </h3>
                <p className="text-xs text-green-600 mb-3">
                  {t('Calculate installments & interest', 'احسب الأقساط والفوائد')}
                </p>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-semibold"
                >
                  {t('Open Calculator', 'فتح الحاسبة')}
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-blue-700 text-sm mb-1">
                  {t('Contract Generator', 'مولد العقود')}
                </h3>
                <p className="text-xs text-blue-600 mb-3">
                  {t('Create contracts automatically', 'إنشاء عقود تلقائياً')}
                </p>
                <button
                  onClick={() => window.alert(t('Create contract', 'إنشاء عقد'))}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                >
                  {t('Create', 'إنشاء عقد')}
                </button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <BottomNavBar currentScreen="clientManagement" onNavigate={onNavigate} language={language} variant="business" role="developer" />
    </div>
  );
}

export default DeveloperClientManagementScreen;
