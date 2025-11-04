import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Share2, Bookmark, CalendarCheck, Eye } from 'lucide-react';
import { FinancingCalculator } from '../../FinancingCalculator';
import { BottomNavBar } from '../../BottomNavBar';
import { Input } from '../../ui/input';

interface EmployeeFinancialCalculatorScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function EmployeeFinancialCalculatorScreen({ onNavigate, language }: EmployeeFinancialCalculatorScreenProps) {
  const isRTL = language === 'ar';

  // Client selection state
  const [client, setClient] = useState({
    name: 'خالد محمد العبدالله',
    salary: 18500,
    age: 35,
    eligible: true,
    active: true,
    avatar: 'avatar-2.jpg',
  });

  // Property selection state
  type Property = { id: string; name: string; price: number; location: string; img: string; selected?: boolean };
  const [selectedProperty, setSelectedProperty] = useState<Property>({
    id: 'villa-1',
    name: 'فيلا الواحة الذهبية',
    price: 2850000,
    location: 'الرياض - حي الملقا',
    img: 'a7493ad534-ff931f8f2cc35d1ce6f5.png',
    selected: true,
  });

  const [gridProperties, setGridProperties] = useState<Property[]>([
    { id: 'apt-1', name: 'شقة النخبة', price: 1250000, location: 'الرياض', img: '69a35c93be-cf8cf058d9531922704a.png' },
    { id: 'ph-1', name: 'بنتهاوس الأفق', price: 3200000, location: 'الرياض', img: 'd82b3c0caf-93b2a486fb5a1d6d37f3.png' },
  ]);

  // External controls feeding FinancingCalculator via remount key
  const [dpPercent, setDpPercent] = useState(20);
  const [termYears, setTermYears] = useState<number>(25);

  const downPaymentAmount = useMemo(
    () => Math.round(selectedProperty.price * dpPercent / 100),
    [selectedProperty.price, dpPercent]
  );

  const [calc, setCalc] = useState({
    loanAmount: selectedProperty.price,
    downPaymentAmount: downPaymentAmount,
    termYears: termYears,
    monthlyPayment: 0,
    isEligible: true,
    supportAmount: 0,
  });

  // Additional fees
  const [lifeInsurance, setLifeInsurance] = useState(true);
  const [homeInsurance, setHomeInsurance] = useState(true);
  const [adminFees, setAdminFees] = useState(false);
  const extraMonthly = (lifeInsurance ? 285 : 0) + (homeInsurance ? 190 : 0) + (adminFees ? 150 : 0);

  // Remount key to refresh FinancingCalculator when external controls change
  const calcKey = `${selectedProperty.price}-${downPaymentAmount}-${termYears}`;

  const format = (n: number) => n.toLocaleString(isRTL ? 'ar-SA' : 'en-US');

  const computed = useMemo(() => {
    const propertyValue = calc.loanAmount;
    const support = calc.supportAmount || 0;
    const financed = Math.max(0, propertyValue - calc.downPaymentAmount - support);
    const totalPayment = calc.monthlyPayment * (calc.termYears * 12);
    const totalInterest = Math.max(0, totalPayment - financed);
    const totalMonthly = calc.monthlyPayment + extraMonthly;
    const salaryRatio = client.salary > 0 ? Math.round((totalMonthly / client.salary) * 1000) / 10 : 0;
    return { propertyValue, support, financed, totalPayment, totalInterest, totalMonthly, salaryRatio };
  }, [calc, extraMonthly, client.salary]);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 overflow-x-hidden legacy-scope" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <header id="header" className="relative bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] overflow-hidden">
        <div className="relative z-20 px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3" style={{ flexDirection: isRTL ? 'row-reverse' as const : 'row' }}>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm" onClick={() => onNavigate('employeeHome')}>
                {isRTL ? <ArrowRight className="w-5 h-5 text-white" /> : <ArrowLeft className="w-5 h-5 text-white" />}
              </button>
              <div>
                <h1 className="text-white text-lg font-semibold">{isRTL ? 'حاسبة التمويل العقاري' : 'Mortgage Calculator'}</h1>
                <p className="text-teal-100 text-sm">{isRTL ? 'أداة حساب خيارات التمويل' : 'Financing options tool'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3" style={{ flexDirection: isRTL ? 'row-reverse' as const : 'row' }}>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm" onClick={() => window.alert(isRTL ? 'مشاركة' : 'Share')}>
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm" onClick={() => window.alert(isRTL ? 'تم الحفظ' : 'Bookmarked')}>
                <Bookmark className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <svg className="w-full h-20 relative z-10" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C360 20 720 20 1080 40C1260 50 1350 50 1440 40V80H0V40Z" fill="#F9FAFB" />
          <path d="M0 50C240 30 480 30 720 50C960 70 1200 70 1440 50V80H0V50Z" fill="url(#wave-gradient-1)" opacity="0.3" />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5" />
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative dots */}
        <div className="absolute top-4 left-6 w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-pulse" />
        <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-6 right-8 w-2 h-2 bg-[#D4AF37]/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </header>

      {/* Client Selection */}
      <section id="client-selection" className="px-4 py-4 -mt-4 relative z-30">
        <div className="bg-white rounded-2xl card-shadow p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">{isRTL ? 'اختيار العميل' : 'Select Client'}</h3>
            <button className="text-[#0F4C5C] text-sm font-medium" onClick={() => onNavigate('pullClient')}>
              <span className="ml-1">＋</span>{isRTL ? 'عميل جديد' : 'New client'}
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#0F4C5C]/5 to-[#D4AF37]/5 rounded-xl border border-[#0F4C5C]/20">
            <img src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${client.avatar}`} alt="Client" className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{client.name}</h4>
              <p className="text-sm text-gray-600">{isRTL ? 'الراتب' : 'Salary'}: {format(client.salary)} {isRTL ? 'ر.س' : 'SAR'} | {isRTL ? 'العمر' : 'Age'}: {client.age}</p>
              <div className="flex items-center gap-2 mt-1">
                {client.eligible && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{isRTL ? 'مؤهل للتمويل' : 'Eligible'}</span>}
                {client.active && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{isRTL ? 'عميل نشط' : 'Active'}</span>}
              </div>
            </div>
            <button className="w-8 h-8 bg-[#0F4C5C] rounded-lg flex items-center justify-center" onClick={() => window.alert(isRTL ? 'تم الاختيار' : 'Selected')}>
              <span className="text-white text-sm">✓</span>
            </button>
          </div>
        </div>
      </section>

      {/* Property Selection */}
      <section id="property-selection" className="px-4 py-2">
        <div className="bg-white rounded-2xl card-shadow border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">{isRTL ? 'اختيار العقار' : 'Choose Property'}</h2>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {/* Featured property */}
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#D4AF37]/5 to-[#0F4C5C]/5 rounded-xl border-2 border-[#D4AF37]/30">
                <div className="w-16 h-16 rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover" src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${selectedProperty.img}`} alt={selectedProperty.name} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{selectedProperty.name}</h4>
                  <p className="text-sm text-gray-600">{selectedProperty.location}</p>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-[#0F4C5C]">{format(selectedProperty.price)} {isRTL ? 'ر.س' : 'SAR'}</span>
                  </div>
                </div>
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>

              {/* Grid properties */}
              <div className="grid grid-cols-2 gap-3">
                {gridProperties.map((p) => (
                  <button
                    key={p.id}
                    className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0F4C5C]/30 text-left"
                    onClick={() => {
                      setSelectedProperty({ ...p, selected: true });
                      // Keep others unselected
                      setGridProperties((prev) => prev.map((x) => ({ ...x })));
                    }}
                  >
                    <div className="w-full h-20 rounded-lg overflow-hidden mb-2">
                      <img className="w-full h-full object-cover" src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/${p.img}`} alt={p.name} />
                    </div>
                    <h5 className="text-sm font-semibold text-gray-900">{p.name}</h5>
                    <p className="text-xs text-gray-600">{format(p.price)} {isRTL ? 'ر.س' : 'SAR'}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator Section (replaced with FinancingCalculator) */}
      <section id="main-calculator" className="px-4 py-4">
        <div className="bg-white rounded-2xl card-shadow border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">{isRTL ? 'معاملات التمويل' : 'Financing Parameters'}</h2>
          </div>

          {/* External controls that seed the embedded calculator */}
          <div className="p-4 space-y-4">
            {/* Property Value display */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{isRTL ? 'قيمة العقار' : 'Property Value'}</label>
              <div className="relative">
                <Input readOnly value={format(selectedProperty.price)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-center font-bold text-lg text-[#0F4C5C]" />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">{isRTL ? 'ر.س' : 'SAR'}</span>
              </div>
            </div>

            {/* Down payment percent slider mimic */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">{isRTL ? 'الدفعة المقدمة' : 'Down payment'}</label>
                <span className="text-sm font-semibold text-[#0F4C5C]">{dpPercent}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                value={dpPercent}
                onChange={(e) => setDpPercent(parseInt(e.target.value) || 10)}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="bg-gradient-to-r from-[#0F4C5C]/10 to-[#D4AF37]/10 rounded-lg p-3 border border-[#0F4C5C]/20 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{isRTL ? 'المبلغ المطلوب:' : 'Required amount:'}</span>
                  <span className="font-bold text-[#0F4C5C] text-lg">{format(downPaymentAmount)} {isRTL ? 'ر.س' : 'SAR'}</span>
                </div>
              </div>
            </div>

            {/* Loan term buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{isRTL ? 'مدة القرض' : 'Loan term'}</label>
              <div className="grid grid-cols-4 gap-2">
                {[15, 20, 25, 30].map((y) => (
                  <button
                    key={y}
                    className={`${termYears === y ? 'bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] text-white' : 'bg-gray-100 text-gray-700 border border-gray-200'} py-3 rounded-lg font-semibold text-sm`}
                    onClick={() => setTermYears(y)}
                  >
                    {isRTL ? `${y} سنة` : `${y} years`}
                  </button>
                ))}
              </div>
            </div>

            {/* Insurance & fees */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-3">
              <h4 className="font-semibold text-gray-900 mb-1">{isRTL ? 'الرسوم والتأمينات' : 'Fees & insurance'}</h4>
              <label className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" checked={lifeInsurance} onChange={(e) => setLifeInsurance(e.target.checked)} /> {isRTL ? 'تأمين الحياة' : 'Life insurance'}</span>
                <span className="text-sm font-semibold text-gray-900">285 {isRTL ? 'ر.س/شهر' : 'SAR/mo'}</span>
              </label>
              <label className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" checked={homeInsurance} onChange={(e) => setHomeInsurance(e.target.checked)} /> {isRTL ? 'تأمين العقار' : 'Home insurance'}</span>
                <span className="text-sm font-semibold text-gray-900">190 {isRTL ? 'ر.س/شهر' : 'SAR/mo'}</span>
              </label>
              <label className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" checked={adminFees} onChange={(e) => setAdminFees(e.target.checked)} /> {isRTL ? 'رسوم إدارية' : 'Admin fee'}</span>
                <span className="text-sm font-semibold text-gray-900">150 {isRTL ? 'ر.س/شهر' : 'SAR/mo'}</span>
              </label>
            </div>

            {/* Embedded FinancingCalculator */}
            <div className="mt-2">
              <FinancingCalculator
                key={calcKey}
                language={language}
                initialValues={{ loanAmount: selectedProperty.price, downPaymentAmount, termYears }}
                onCalculate={(v) => setCalc(v)}
                showCloseButton={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculation Results */}
      <section id="calculation-results" className="px-4 py-4">
        <div className="bg-gradient-to-br from-[#0F4C5C]/5 to-[#D4AF37]/5 rounded-2xl border border-[#0F4C5C]/20">
          <div className="p-4 border-b border-[#0F4C5C]/20">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">{isRTL ? 'نتائج الحساب' : 'Results'}</h2>
          </div>
          <div className="p-4">
            <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-white/50">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#0F4C5C] mb-2">{format(calc.monthlyPayment)} {isRTL ? 'ر.س' : 'SAR'}</h3>
                <p className="text-sm text-gray-600 mb-4">{isRTL ? 'القسط الشهري الأساسي' : 'Base monthly payment'}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <span className="block font-semibold text-gray-900">+ {format(extraMonthly)} {isRTL ? 'ر.س' : 'SAR'}</span>
                    <span className="text-gray-600">{isRTL ? 'التأمينات والرسوم' : 'Fees & insurance'}</span>
                  </div>
                  <div className="text-center p-3 bg-[#0F4C5C]/10 rounded-lg">
                    <span className="block font-semibold text-[#0F4C5C]">{format(computed.totalMonthly)} {isRTL ? 'ر.س' : 'SAR'}</span>
                    <span className="text-[#0F4C5C]">{isRTL ? 'إجمالي القسط' : 'Total monthly'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">{isRTL ? 'تفاصيل التمويل' : 'Financing details'}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">{isRTL ? 'مبلغ التمويل' : 'Financed amount'}</span><span className="font-semibold text-gray-900">{format(computed.financed)} {isRTL ? 'ر.س' : 'SAR'}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">{isRTL ? 'إجمالي المبلغ المستحق' : 'Total to pay'}</span><span className="font-semibold text-gray-900">{format(Math.round(computed.totalPayment))} {isRTL ? 'ر.س' : 'SAR'}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">{isRTL ? 'إجمالي الأرباح' : 'Total interest'}</span><span className="font-semibold text-red-600">{format(Math.round(computed.totalInterest))} {isRTL ? 'ر.س' : 'SAR'}</span></div>
                  <div className="flex justify-between border-t pt-2"><span className="text-gray-600">{isRTL ? 'نسبة القسط للراتب' : 'Payment-to-salary'}</span><span className={`font-semibold ${computed.salaryRatio <= 50 ? 'text-green-600' : 'text-amber-600'}`}>{computed.salaryRatio}%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Options */}
      <section id="bank-options" className="px-4 py-4">
        <div className="bg-white rounded-2xl card-shadow border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">{isRTL ? 'العروض البنكية المتاحة' : 'Available bank offers'}</h2>
          </div>
          <div className="p-4 space-y-3">
            {[{ bank: isRTL ? 'بنك الراجحي' : 'Al Rajhi', best: true, monthly: computed.totalMonthly }, { bank: isRTL ? 'البنك الأهلي' : 'NCB', best: false, monthly: Math.round(computed.totalMonthly * 1.03) }, { bank: isRTL ? 'بنك الرياض' : 'Riyad Bank', best: false, monthly: Math.round(computed.totalMonthly * 1.06) }].map((b, i) => (
              <div key={i} className={`${b.best ? 'bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200' : 'bg-gray-50 border border-gray-200'} p-4 rounded-xl`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{b.bank}</h4>
                    <p className="text-sm text-gray-600">{isRTL ? 'معدل الربح تقديري' : 'Estimated profit rate'}</p>
                  </div>
                  <div className="text-left">
                    <span className={`text-lg font-bold ${b.best ? 'text-green-700' : 'text-gray-700'}`}>{format(b.monthly)} {isRTL ? 'ر.س' : 'SAR'}</span>
                    {b.best && <p className="text-xs text-green-600">{isRTL ? 'أفضل عرض' : 'Best offer'}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center p-2 bg-white rounded-lg"><span className="block font-semibold text-gray-900">{termYears} {isRTL ? 'سنة' : 'years'}</span><span className="text-gray-600">{isRTL ? 'مدة القرض' : 'Term'}</span></div>
                  <div className="text-center p-2 bg-white rounded-lg"><span className="block font-semibold text-gray-900">90%</span><span className="text-gray-600">{isRTL ? 'نسبة التمويل' : 'LTV'}</span></div>
                  <div className="text-center p-2 bg-white rounded-lg"><span className="block font-semibold text-gray-900">7 {isRTL ? 'أيام' : 'days'}</span><span className="text-gray-600">{isRTL ? 'وقت الموافقة' : 'Approval'}</span></div>
                </div>
              </div>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold" onClick={() => window.alert(isRTL ? 'مقارنة جميع البنوك' : 'Compare banks')}>
              {isRTL ? 'مقارنة جميع البنوك' : 'Compare all banks'}
            </button>
          </div>
        </div>
      </section>

      {/* Tips and Recommendations (compact) */}
      <section id="tips-recommendations" className="px-4 py-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
          <div className="p-4 border-b border-blue-200">
            <h2 className="text-lg font-semibold text-gray-900">{isRTL ? 'نصائح وتوصيات' : 'Tips & recommendations'}</h2>
          </div>
          <div className="p-4 space-y-3">
            <div className="bg-white rounded-xl p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{isRTL ? 'توصية: زيادة الدفعة المقدمة' : 'Recommendation: Increase down payment'}</h4>
                  <p className="text-sm text-gray-600">{isRTL ? 'بزيادة الدفعة المقدمة إلى 30% يمكن توفير مبلغ شهري ملحوظ.' : 'Raising down payment to 30% can save monthly cost.'}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">i</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{isRTL ? 'معلومة مهمة' : 'Important info'}</h4>
                  <p className="text-sm text-gray-600">{isRTL ? 'يمكن السداد المبكر دون غرامات بعد مرور 3 سنوات.' : 'Early repayment without penalties after 3 years.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavBar currentScreen="calculator" onNavigate={onNavigate} language={language} variant="business" role="developer" />

      {/* Scoped styles */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
        .card-shadow { box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.06); }
      `}</style>
    </div>
  );
}