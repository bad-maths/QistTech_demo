import { useMemo, useState } from 'react';
import {
  ClipboardList,
  Filter,
  Search,
  Clock,
  Cog,
  CheckCircle,
  MessageSquare,
  Calculator as Calc,
  Check,
  Eye,
  Download,
  Play,
  UserPlus,
} from 'lucide-react';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { BottomNavBar } from '../../BottomNavBar';
import { FinancingCalculator } from '../../FinancingCalculator';

interface FinanceEmployeeRequestsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeeRequestsScreen({ onNavigate, language }: FinanceEmployeeRequestsScreenProps) {
  const isRTL = language === 'ar';
  type ReqType = 'all' | 'mortgage' | 'booking' | 'land';
  const [activeTab, setActiveTab] = useState<ReqType>('all');
  const [showCalculator, setShowCalculator] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);

  const activeRequests = useMemo(
    () => [
      {
        id: 'request-card-1',
        nameAr: 'محمد العتيبي',
        nameEn: 'Mohammed Al-Otaibi',
        nationalId: '1234567890',
        timeAr: 'منذ 5 دقائق',
        timeEn: '5 minutes ago',
        category: 'mortgage' as ReqType,
        propertyAr: 'فيلا في الرياض - حي النرجس',
        propertyEn: 'Villa in Riyadh - Al Narjis',
        propertyValue: '1,200,000',
        phaseAr: 'مرحلة التحقق من الوثائق',
        phaseEn: 'Document verification',
        progress: 45,
        flags: [
          { color: 'emerald', textAr: 'هوية مرفقة', textEn: 'ID Attached' },
          { color: 'amber', textAr: 'كشف راتب مطلوب', textEn: 'Payslip required' },
        ],
        statusColor: 'amber',
        statusAr: 'قيد المراجعة',
        statusEn: 'Under review',
      },
      {
        id: 'request-card-2',
        nameAr: 'فاطمة الشهراني',
        nameEn: 'Fatimah Al-Shahrani',
        nationalId: '9876543210',
        timeAr: 'منذ 15 دقيقة',
        timeEn: '15 minutes ago',
        category: 'booking' as ReqType,
        propertyAr: 'شقة في جدة - حي الروضة',
        propertyEn: 'Apartment in Jeddah - Al Rawdah',
        propertyValue: '850,000',
        phaseAr: 'مرحلة الموافقة النهائية',
        phaseEn: 'Final approval stage',
        progress: 90,
        flags: [{ color: 'emerald', textAr: 'كافة الوثائق مكتملة', textEn: 'All docs complete' }],
        statusColor: 'emerald',
        statusAr: 'جاهز للموافقة النهائية',
        statusEn: 'Ready for approval',
      },
      {
        id: 'request-card-3',
        nameAr: 'سالم الدوسري',
        nameEn: 'Salem Al-Dosary',
        nationalId: '5555666677',
        timeAr: 'منذ ساعة',
        timeEn: '1 hour ago',
        category: 'land' as ReqType,
        propertyAr: 'أرض سكنية في الدمام - حي الفيصلية',
        propertyEn: 'Residential land in Dammam - Al Faisaliah',
        propertyValue: '750,000',
        phaseAr: 'مرحلة الدراسة الائتمانية',
        phaseEn: 'Credit study',
        progress: 65,
        flags: [
          { color: 'blue', textAr: 'تحت الدراسة', textEn: 'Under study' },
          { color: 'emerald', textAr: 'مؤهل للدعم السكني', textEn: 'Housing support eligible' },
        ],
        statusColor: 'blue',
        statusAr: 'تحت الدراسة',
        statusEn: 'In study',
      },
      {
        id: 'request-card-4',
        nameAr: 'نورا الزهراني',
        nameEn: 'Noura Al-Zahrani',
        nationalId: '4444555566',
        timeAr: 'منذ ساعتين',
        timeEn: '2 hours ago',
        category: 'mortgage' as ReqType,
        propertyAr: 'شقة في مكة - حي العزيزية',
        propertyEn: 'Apartment in Makkah - Al Aziziyah',
        propertyValue: '950,000',
        phaseAr: 'مرحلة التقييم العقاري',
        phaseEn: 'Appraisal stage',
        progress: 30,
        flags: [{ color: 'orange', textAr: 'في انتظار التقييم', textEn: 'Awaiting appraisal' }],
        statusColor: 'orange',
        statusAr: 'بداية المعالجة',
        statusEn: 'Processing started',
      },
    ],
    [isRTL]
  );

  const completedRequests = useMemo(
    () => [
      {
        id: 'completed-request-1',
        nameAr: 'عبدالرحمن القرني',
        nameEn: 'Abdulrahman Al-Qarni',
        nationalId: '3333444455',
        timeAr: 'أمس',
        timeEn: 'Yesterday',
        propertyAr: 'فيلا في الطائف - حي الشهداء',
        propertyEn: 'Villa in Taif - Al-Shuhada',
        propertyValue: '1,800,000',
        commission: '5,400',
      },
    ],
    []
  );

  const visibleActive = activeRequests
    .filter((r) => activeTab === 'all' || r.category === activeTab)
    .sort((a, b) => (sortAsc ? a.timeAr.localeCompare(b.timeAr) : b.timeAr.localeCompare(a.timeAr)));

  const ColorDot = ({ color }: { color: string }) => (
    <div className={`w-2 h-2 rounded-full ${
      color === 'emerald' ? 'bg-emerald-400' : color === 'amber' ? 'bg-amber-400' : color === 'blue' ? 'bg-blue-400' : color === 'orange' ? 'bg-orange-400' : 'bg-gray-400'
    }`} />
  );

  return (
    <div className="min-h-screen bg-[#f2f4f5] overflow-x-hidden legacy-scope" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header id="header" className="relative gradient-bg text-white pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#0A3540]/20" />

        {/* Top Bar */}
        <div className="relative z-20 px-4 pt-12 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <ClipboardList className="text-white w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{isRTL ? 'إدارة الطلبات' : 'Requests Management'}</h2>
                <p className="text-sm text-white/80">{isRTL ? 'تتبع ومتابعة طلبات العملاء' : 'Track and follow up client requests'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm" onClick={() => setActiveTab('all')}>
                <Filter className="text-white w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm" onClick={() => onNavigate('requests')}>
                <Search className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Request Stats */}
        <div id="header-stats" className="relative z-20 px-4 pb-8">
          <div className="grid grid-cols-3 gap-2">
            {[{ icon: Clock, color: 'bg-amber-500/80', value: 24, titleAr: 'قيد المراجعة', titleEn: 'Under review' }, { icon: Cog, color: 'bg-blue-500/80', value: 18, titleAr: 'تحت المعالجة', titleEn: 'Processing' }, { icon: CheckCircle, color: 'bg-emerald-500/80', value: 67, titleAr: 'مكتملة', titleEn: 'Completed' }].map((s, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                <div className="text-center">
                  <div className={`w-8 h-8 ${s.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <s.icon className="text-white w-4 h-4" />
                  </div>
                  <span className="text-xl font-bold block">{s.value}</span>
                  <p className="text-xs text-white/80">{isRTL ? s.titleAr : s.titleEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave SVG */}
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 relative z-10">
          <path d="M0 32C360 16 720 16 1080 32C1260 40 1350 40 1440 32V64H0V32Z" fill="#F2F4F5" />
          <path d="M0 40C240 24 480 24 720 40C960 56 1200 56 1440 40V64H0V40Z" fill="url(#wave-gradient)" opacity="0.4" />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5" />
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </header>

      {/* Filter Tabs */}
      <section id="filter-tabs" className="px-4 -mt-2 relative z-20">
        <div className="bg-white rounded-2xl card-shadow border border-[rgba(15,76,92,0.08)] p-2">
          <div className="flex gap-1">
            {([
              { id: 'all', labelAr: 'الكل', labelEn: 'All' },
              { id: 'mortgage', labelAr: 'تمويل عقاري', labelEn: 'Mortgage' },
              { id: 'booking', labelAr: 'حجز عقار', labelEn: 'Booking' },
            ] as { id: ReqType; labelAr: string; labelEn: string }[]).map((t) => (
              <button
                key={t.id}
                className={`flex-1 rounded-xl py-2.5 px-3 text-sm font-medium ${activeTab === t.id ? 'bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white' : 'bg-gray-50 text-gray-600'}`}
                onClick={() => setActiveTab(t.id)}
              >
                {isRTL ? t.labelAr : t.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Requests */}
      <section id="active-requests" className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#0F4C5C]">{isRTL ? 'الطلبات النشطة' : 'Active Requests'}</h3>
          <button className="text-[#D4AF37] text-sm font-medium" onClick={() => setSortAsc((s) => !s)}>
            {isRTL ? 'ترتيب حسب التاريخ' : 'Sort by date'}
          </button>
        </div>
        <div className="space-y-3">
          {visibleActive.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl card-shadow border border-[rgba(15,76,92,0.08)] p-4">
              <div className="flex items-start gap-3">
                <img src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${r.id.endsWith('1') ? 'avatar-2' : r.id.endsWith('2') ? 'avatar-5' : r.id.endsWith('3') ? 'avatar-8' : 'avatar-6'}.jpg`} alt="Client" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-[#0F4C5C]">{isRTL ? r.nameAr : r.nameEn}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">ID</span>
                        <span className="text-xs text-gray-500">{r.nationalId}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{isRTL ? r.timeAr : r.timeEn}</span>
                  </div>

                  {/* Category Box */}
                  <div className={`${r.category === 'booking' ? 'bg-emerald-50' : r.category === 'land' ? 'bg-purple-50' : 'bg-blue-50'} rounded-lg p-2 mb-3`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${r.category === 'booking' ? 'bg-emerald-600' : r.category === 'land' ? 'bg-purple-600' : 'bg-blue-600'}`} />
                      <span className={`${r.category === 'booking' ? 'text-emerald-800' : r.category === 'land' ? 'text-purple-800' : 'text-blue-800'} text-sm font-medium`}>
                        {r.category === 'booking' ? (isRTL ? 'طلب حجز عقار' : 'Booking request') : r.category === 'land' ? (isRTL ? 'طلب تمويل أرض' : 'Land finance request') : (isRTL ? 'طلب تمويل عقاري' : 'Mortgage request')}
                      </span>
                    </div>
                    <p className={`${r.category === 'booking' ? 'text-emerald-600' : r.category === 'land' ? 'text-purple-600' : 'text-blue-600'} text-xs`}>{isRTL ? r.propertyAr : r.propertyEn}</p>
                    <p className={`${r.category === 'booking' ? 'text-emerald-600' : r.category === 'land' ? 'text-purple-600' : 'text-blue-600'} text-xs mt-1`}>
                      {isRTL ? 'قيمة' : 'Value'}: {r.propertyValue} {isRTL ? 'ر.س' : 'SAR'}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="bg-gray-50 rounded-lg p-2 mb-3">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>{isRTL ? r.phaseAr : r.phaseEn}</span>
                      <span>{r.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${r.category === 'booking' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' : r.category === 'land' ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-[#0F4C5C] to-[#D4AF37]'} progress-bar`} style={{ width: `${r.progress}%` }} />
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs">
                      {r.flags.map((f, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <ColorDot color={f.color} />
                          <span className="text-gray-600">{isRTL ? f.textAr : f.textEn}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ColorDot color={r.statusColor} />
                      <span className={`text-xs font-medium ${r.statusColor === 'amber' ? 'text-amber-600' : r.statusColor === 'emerald' ? 'text-emerald-600' : r.statusColor === 'blue' ? 'text-blue-600' : 'text-orange-600'}`}>
                        {isRTL ? r.statusAr : r.statusEn}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-[#0F4C5C] rounded-lg flex items-center justify-center" onClick={() => onNavigate('employeeChat', { name: isRTL ? r.nameAr : r.nameEn })}>
                        <MessageSquare className="w-3.5 h-3.5 text-white" />
                      </button>
                      <button className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center" onClick={() => setShowCalculator(true)}>
                        <Calc className="w-3.5 h-3.5 text-white" />
                      </button>
                      <button className={`w-8 h-8 ${r.statusColor === 'emerald' ? 'bg-emerald-500' : r.statusColor === 'blue' ? 'bg-gray-400' : 'bg-emerald-500'} rounded-lg flex items-center justify-center`} onClick={() => window.alert(isRTL ? 'تمت الموافقة' : 'Approved')}>
                        {r.statusColor === 'blue' ? <Clock className="w-3.5 h-3.5 text-white" /> : <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Requests */}
      <section id="completed-requests" className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#0F4C5C] flex items-center gap-2">
            <CheckCircle className="text-emerald-500 w-5 h-5" />
            {isRTL ? 'الطلبات المكتملة' : 'Completed Requests'}
          </h3>
          <button className="text-[#D4AF37] text-sm font-medium" onClick={() => onNavigate('requests')}>
            {isRTL ? 'عرض الكل' : 'View all'}
          </button>
        </div>
        <div className="space-y-3">
          {completedRequests.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl card-shadow border-l-4 border-emerald-500 border border-[rgba(15,76,92,0.08)] p-4">
              <div className="flex items-start gap-3">
                <img src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg`} alt="Client" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-[#0F4C5C]">{isRTL ? c.nameAr : c.nameEn}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">ID</span>
                        <span className="text-xs text-gray-500">{c.nationalId}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{isRTL ? c.timeAr : c.timeEn}</span>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-2 mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                      <span className="text-sm font-medium text-emerald-800">{isRTL ? 'طلب تمويل عقاري' : 'Mortgage request'}</span>
                    </div>
                    <p className="text-xs text-emerald-600">{isRTL ? c.propertyAr : c.propertyEn}</p>
                    <p className="text-xs text-emerald-600 mt-1">{isRTL ? 'قيمة العقار' : 'Property value'}: {c.propertyValue} {isRTL ? 'ر.س' : 'SAR'}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-2 mb-3">
                    <div className="flex items-center justify-between text-xs text-emerald-700 mb-1">
                      <span>{isRTL ? 'تم اكتمال الطلب بنجاح' : 'Request completed successfully'}</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-emerald-200 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-1.5 rounded-full w-full" />
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs">
                      <div className="flex items-center gap-1">
                        <TrophyIcon />
                        <span className="text-emerald-700">{isRTL ? `عمولة: ${c.commission} ر.س` : `Commission: ${c.commission} SAR`}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-xs text-emerald-600 font-medium">{isRTL ? 'تم الإنجاز بنجاح' : 'Completed successfully'}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-[#0F4C5C] rounded-lg flex items-center justify-center"><Eye className="w-3.5 h-3.5 text-white" /></button>
                      <button className="w-8 h-8 bg-[#D4AF37] rounded-lg flex items-center justify-center"><Download className="w-3.5 h-3.5 text-white" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating actions */}
      <div id="floating-actions" className="fixed bottom-20 left-4 right-4 z-40">
        <div className="bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] rounded-2xl p-3 shadow-lg">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 py-2 px-3 text-white" onClick={() => setShowCalculator(true)}>
              <Calc className="text-lg" />
              <span className="text-xs">{isRTL ? 'الحاسبة' : 'Calculator'}</span>
            </button>
            <button className="flex flex-col items-center gap-1 py-2 px-3 text-white" onClick={() => onNavigate('pullClient')}>
              <UserPlus className="text-lg" />
              <span className="text-xs">{isRTL ? 'احسب لعميلك' : 'Calculate for client'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar currentScreen="requests" onNavigate={onNavigate} language={language} variant="business" />

      {/* Calculator Modal */}
      {showCalculator && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
          }}
          onClick={() => setShowCalculator(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-t-2xl"
            style={{ maxHeight: '50vh', display: 'flex', flexDirection: 'column' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 bg-white px-4 pt-4 pb-2 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#0E1E25]">{isRTL ? 'حاسبة التمويل' : 'Financing Calculator'}</h4>
                <button className="text-[#4B5563] text-sm" onClick={() => setShowCalculator(false)}>
                  ✕
                </button>
              </div>
            </div>
            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-4 pb-4">
              <FinancingCalculator language={language} showCloseButton={false} />
            </div>
          </div>
        </div>
      )}

      {/* Scoped styles */}
      <style>{`
        .gradient-bg { background: linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%); }
        .gold-gradient { background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%); }
        .card-shadow { box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.06); }
        .floating-animation { animation: float 6s ease-in-out infinite; }
        .progress-bar { background: linear-gradient(90deg, #D4AF37 0%, #B8941F 50%, #0F4C5C 100%); background-size: 200% 100%; animation: shimmer 2s infinite; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .legacy-scope .text-primary { color: #0F4C5C; }
        .legacy-scope .bg-primary { background-color: #0F4C5C; }
        .legacy-scope .text-accent { color: #D4AF37; }
        .legacy-scope .bg-accent { background-color: #D4AF37; }
      `}</style>
    </div>
  );
}

// simple inline icons to avoid extra deps
function PaperPlaneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D4AF37" className="w-3.5 h-3.5">
      <path d="M21 5h-3V3H6v2H3v3c0 2.76 2.24 5 5 5h.08A6.002 6.002 0 0011 18v2H8v2h8v-2h-3v-2a6.002 6.002 0 002.92-5H16c2.76 0 5-2.24 5-5V5zm-2 3c0 1.66-1.34 3-3 3V8h3zM5 8V5h3v3c-1.66 0-3-1.34-3-3z"/>
    </svg>
  );
}
