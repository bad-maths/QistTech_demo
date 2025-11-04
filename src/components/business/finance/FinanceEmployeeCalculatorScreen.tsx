import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarCheck, Eye } from 'lucide-react';
import { BottomNavBar } from '../../BottomNavBar';
import { FinancingCalculator } from '../../FinancingCalculator';
import { Input } from '../../ui/input';

interface EmployeeCalculatorScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeeCalculatorScreen({ onNavigate, language, employeeData }: EmployeeCalculatorScreenProps) {
  const isRTL = language === 'ar';

  // Calculator aggregation from FinancingCalculator
  const [calc, setCalc] = useState({
    loanAmount: 1500000,
    downPaymentAmount: 300000,
    termYears: 25,
    monthlyPayment: 5847,
    isEligible: true,
    supportAmount: 150000,
  });

  // Client search + recent items
  const [searchId, setSearchId] = useState('');
  const [foundClient, setFoundClient] = useState<null | {
    name: string;
    id: string;
    avatar: string;
    lastActive: string;
    online: boolean;
  }>(null);

  const recent = useMemo(
    () => [
      { id: '1', name: 'نورا العبدالله', when: 'منذ ساعة', property: 2200000, payment: 8450, avatar: 'avatar-6.jpg', status: 'تم الإرسال', statusColor: 'emerald' },
      { id: '2', name: 'عبدالرحمن السالم', when: 'منذ 3 ساعات', property: 1800000, payment: 6920, avatar: 'avatar-9.jpg', status: 'تم الاطلاع', statusColor: 'blue' },
      { id: '3', name: 'ريم الحربي', when: 'أمس', property: 950000, payment: 3680, avatar: 'avatar-1.jpg', status: 'معلق', statusColor: 'amber' },
    ],
    []
  );

  const format = (n: number) => n.toLocaleString(isRTL ? 'ar-SA' : 'en-US');

  const computed = useMemo(() => {
    const propertyValue = calc.loanAmount;
    const support = calc.supportAmount || 0;
    const loanAmount = Math.max(0, propertyValue - calc.downPaymentAmount - support);
    const totalPayment = calc.monthlyPayment * (calc.termYears * 12);
    const totalInterest = Math.max(0, totalPayment - loanAmount);
    return { propertyValue, support, loanAmount, totalPayment, totalInterest };
  }, [calc]);

  return (
    <div className="min-h-screen bg-[#f2f4f5] overflow-x-hidden legacy-scope" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header id="header" className="relative gradient-bg text-white pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#0A3540]/20" />

        {/* Top Bar */}
        <div className="relative z-20 px-4 pt-12 pb-6">
          <div className="flex items-center justify-between" style={{ flexDirection: 'row' }}>
            {/* Title + Back button on the left (button is left-most) */}
            <div className="flex items-center gap-3" style={{ flexDirection: 'row' }}>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm" onClick={() => onNavigate('home')}>
                {isRTL ? <ArrowRight className="w-5 h-5 text-white" /> : <ArrowLeft className="w-5 h-5 text-white" />}
              </button>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h2 className="text-lg font-semibold">{isRTL ? 'حاسبة التمويل' : 'Financing Calculator'}</h2>
                <p className="text-sm text-white/80">{isRTL ? 'احسب الأقساط الشهرية' : 'Calculate monthly installments'}</p>
              </div>
            </div>

            {/* Online status on the right */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium">{isRTL ? 'متصل' : 'Online'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Info & Rates */}
        <div id="header-calculator" className="relative z-20 px-4 pb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4">
            <div className="text-center mb-3">
              <h3 className="text-lg font-bold text-white">{isRTL ? 'بنك الرياض' : 'Riyad Bank'}</h3>
              <p className="text-xs text-white/80">{isRTL ? 'عروض التمويل العقاري المميزة' : 'Featured mortgage offers'}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { value: '3.5%', labelAr: 'معدل ثابت', labelEn: 'Fixed rate' },
                { value: '90%', labelAr: 'نسبة التمويل', labelEn: 'LTV' },
                { value: '30', labelAr: 'سنة كحد أقصى', labelEn: 'Max years' },
              ].map((x, i) => (
                <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <div className="text-lg font-bold text-[#D4AF37] mb-1">{x.value}</div>
                  <div className="text-xs text-white/90">{isRTL ? x.labelAr : x.labelEn}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 bg-emerald-500/20 rounded-full px-3 py-1.5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-white">{isRTL ? 'عرض محدود - حتى نهاية الشهر' : 'Limited offer - till month end'}</span>
            </div>
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

      {/* Calculator Container replaced with FinancingCalculator */}
      <section id="calculator-form" className="px-4 -mt-2 relative z-20">
        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl card-shadow border border-[rgba(15,76,92,0.08)] p-6 relative overflow-hidden">
          <div className="absolute bg-[rgba(212,175,55,0.05)] blur-3xl filter right-0 rounded-full w-32 h-32 top-0" />
          <div className="absolute bg-[rgba(15,76,92,0.03)] blur-2xl filter left-0 rounded-full w-24 h-24 bottom-0" />
          <div className="relative z-10">
            <FinancingCalculator
              language={language}
              showCloseButton={false}
              onCalculate={(v) => setCalc(v)}
              initialValues={{ loanAmount: calc.loanAmount, downPaymentAmount: calc.downPaymentAmount, termYears: calc.termYears }}
            />
          </div>
        </div>
      </section>

      {/* Monthly Payment Result */}
      <section id="payment-result" className="px-4 mt-6">
        <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-2xl" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <CalendarCheck className="text-white w-7 h-7" />
            </div>
            <p className="text-sm text-white/80 mb-2">{isRTL ? 'القسط الشهري المتوقع' : 'Expected Monthly Payment'}</p>
            <p className="text-4xl font-bold mb-2">{format(calc.monthlyPayment)}</p>
            <p className="text-sm text-white/80">{isRTL ? 'ريال سعودي' : 'SAR'}</p>
            <div className="pt-4 border-t border-white/20 text-xs text-white/70">{isRTL ? 'بناءً على معدل 3.5%' : 'Based on 3.5% rate'}</div>
          </div>
        </div>
      </section>

      {/* Calculation Details */}
      <section id="calculation-details" className="px-4 mt-6">
        <h3 className="text-lg font-semibold text-[#0F4C5C] mb-4">{isRTL ? 'تفاصيل الحساب' : 'Calculation Details'}</h3>
        <div className="bg-white rounded-2xl card-shadow border border-[rgba(15,76,92,0.08)] p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center"><span className="text-sm text-gray-600">{isRTL ? 'قيمة العقار' : 'Property Value'}</span><span className="font-semibold text-[#0F4C5C]">{format(computed.propertyValue)} {isRTL ? 'ر.س' : 'SAR'}</span></div>
            <div className="flex justify-between items-center"><span className="text-sm text-gray-600">{isRTL ? 'الدفعة الأولى' : 'Down Payment'}</span><span className="font-semibold text-[#0F4C5C]">{format(calc.downPaymentAmount)} {isRTL ? 'ر.س' : 'SAR'}</span></div>
            <div className="flex justify-between items-center"><span className="text-sm text-gray-600">{isRTL ? 'الدعم السكني' : 'Housing Support'}</span><span className="font-semibold text-emerald-600">{format(computed.support)} {isRTL ? 'ر.س' : 'SAR'}</span></div>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center"><span className="text-sm font-semibold text-[#0F4C5C]">{isRTL ? 'مبلغ التمويل' : 'Financed Amount'}</span><span className="font-bold text-[#0F4C5C]">{format(computed.loanAmount)} {isRTL ? 'ر.س' : 'SAR'}</span></div>
            <div className="flex justify-between items-center"><span className="text-sm text-gray-600">{isRTL ? 'إجمالي المبلغ المسدد' : 'Total Paid'}</span><span className="font-semibold text-[#0F4C5C]">{format(Math.round(computed.totalPayment))} {isRTL ? 'ر.س' : 'SAR'}</span></div>
            <div className="flex justify-between items-center"><span className="text-sm text-gray-600">{isRTL ? 'إجمالي الفوائد' : 'Total Interest'}</span><span className="font-semibold text-amber-600">{format(Math.round(computed.totalInterest))} {isRTL ? 'ر.س' : 'SAR'}</span></div>
          </div>
        </div>
      </section>

      {/* Client Selection */}
      <section id="client-selection" className="px-4 mt-6">
        <h3 className="text-lg font-semibold text-[#0F4C5C] mb-4">{isRTL ? 'إرسال الحاسبة للعميل' : 'Send Calculator to Client'}</h3>
        <div className="bg-white rounded-2xl card-shadow border border-[rgba(15,76,92,0.08)] p-4">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#0F4C5C] mb-3">{isRTL ? 'رقم الهوية / الإقامة' : 'National ID / Iqama'}</label>
            <div className="relative">
              <Input value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder={isRTL ? '1234567890' : '1234567890'} className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-base" />
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0F4C5C] rounded-lg flex items-center justify-center"
                onClick={() =>
                  setFoundClient({
                    name: 'خالد بن أحمد الغامدي',
                    id: searchId || '1234567890',
                    avatar: 'avatar-3.jpg',
                    lastActive: isRTL ? 'منذ 10 دقائق' : '10 minutes ago',
                    online: true,
                  })
                }
              >
                <span className="text-white text-sm">🔍</span>
              </button>
            </div>
          </div>

          {foundClient && (
            <div className="mb-4 p-3 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <img src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${foundClient.avatar}`} alt="Client" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold text-[#0F4C5C]">{foundClient.name}</h4>
                  <p className="text-sm text-gray-600">ID: {foundClient.id}</p>
                  <p className="text-xs text-gray-500">{isRTL ? 'آخر نشاط' : 'Last active'}: {foundClient.lastActive}</p>
                </div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full" />
              </div>
            </div>
          )}

          <button
            disabled={!foundClient}
            onClick={() => window.alert(isRTL ? 'تم إرسال الحاسبة للعميل' : 'Calculator sent to client')}
            className={`w-full text-white rounded-2xl py-4 font-semibold text-lg shadow-lg transition-all ${foundClient ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:shadow-xl' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            <div className="flex items-center justify-center gap-2">
              <span>📤</span>
              <span>{isRTL ? 'إرسال الحاسبة للعميل' : 'Send to client'}</span>
            </div>
          </button>
        </div>
      </section>

      {/* Recent Calculations */}
      <section id="recent-calculations" className="px-4 mt-6 mb-24">
        <h3 className="text-lg font-semibold text-[#0F4C5C] mb-4">{isRTL ? 'الحسابات الأخيرة' : 'Recent Calculations'}</h3>
        <div className="space-y-3">
          {recent.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl card-shadow border border-[rgba(15,76,92,0.08)] p-4">
              <div className="flex items-start gap-3">
                <img src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${r.avatar}`} alt="Client" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-[#0F4C5C] text-sm">{r.name}</h4>
                    <span className="text-xs text-gray-500">{r.when}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{isRTL ? 'عقار' : 'Property'}: {format(r.property)} {isRTL ? 'ر.س' : 'SAR'} | {isRTL ? 'قسط' : 'Payment'}: {format(r.payment)} {isRTL ? 'ر.س' : 'SAR'}</p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.statusColor === 'emerald' ? 'bg-emerald-100 text-emerald-700' : r.statusColor === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>{r.status}</span>
                    <button className="text-[#0F4C5C] text-xs" onClick={() => window.alert(isRTL ? 'معاينة الحساب' : 'Preview calculation')}>
                      <Eye className="inline w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavBar currentScreen="calculator" onNavigate={onNavigate} language={language} variant="business" />

      {/* Scoped styles */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
        .gradient-bg { background: linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%); }
        .gold-gradient { background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%); }
        .card-shadow { box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.06); }
        .floating-animation { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .legacy-scope .text-primary { color: #0F4C5C; }
        .legacy-scope .bg-primary { background-color: #0F4C5C; }
        .legacy-scope .text-accent { color: #D4AF37; }
        .legacy-scope .bg-accent { background-color: #D4AF37; }
      `}</style>
    </div>
  );
}

