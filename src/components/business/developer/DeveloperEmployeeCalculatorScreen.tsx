import React, { useState } from 'react';
import { cn } from '../../../lib/utils';
import {
  ArrowLeft, ArrowRight, Share2, Bookmark, Home,
  Bed, Maximize2, ChartLine, Check, Plus
} from 'lucide-react';
import { Card } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { FinancingCalculator } from '../../FinancingCalculator';
import { BottomNavBar } from '../../BottomNavBar';

interface EmployeeCalculatorScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData?: any;
}

type CalculatorState = {
  propertyValue: number;
  downPaymentPercent: number;
  loanTerm: number;
  interestRate: number;
  includeLifeInsurance: boolean;
  includePropertyInsurance: boolean;
  includeAdminFees: boolean;
};

const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    propertyValue: 2850000,
    downPaymentPercent: 20,
    loanTerm: 25,
    interestRate: 3.5,
    includeLifeInsurance: true,
    includePropertyInsurance: true,
    includeAdminFees: false
  });

  return {
    state,
    setState,
    results: {
      loanAmount: state.propertyValue,
      monthlyPayment: 0 // This will be calculated by FinancingCalculator
    }
  };
};

export const EmployeeCalculatorScreen: React.FC<EmployeeCalculatorScreenProps> = ({ 
  onNavigate, 
  language, 
  employeeData 
}) => {
  const isRTL = language === 'ar';
  const { state, setState, results } = useCalculator();
  const housingSupportAmount = 500000;

  // Animation states
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const [showResults, setShowResults] = useState(false);

  React.useEffect(() => {
    setIsCalculatorVisible(true);
    setTimeout(() => setShowResults(true), 500);
  }, []);

  return (
    <div 
      className={cn("min-h-screen bg-gray-50 font-arabic relative overflow-hidden animate-[fadeIn_0.5s_ease-out]")} 
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        // keep inline styles typed
      } as React.CSSProperties}
    >
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] overflow-hidden transition-transform duration-500 transform translate-y-0">
        <div className="relative z-20 px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <button onClick={() => onNavigate('home')} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                {isRTL ? <ArrowRight className="w-5 h-5 text-white" /> : <ArrowLeft className="w-5 h-5 text-white" />}
              </button>
              <div>
                <h1 className="text-white text-lg font-semibold">{isRTL ? 'حاسبة التمويل العقاري' : 'Mortgage Calculator'}</h1>
                <p className="text-teal-100 text-sm">{isRTL ? 'أداة حساب خيارات التمويل' : 'Financing Options Calculator'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Share2 className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bookmark className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Wave SVG with gradient */}
        <svg className="w-full h-20 relative z-10" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 40C360 20 720 20 1080 40C1260 50 1350 50 1440 40V80H0V40Z" fill="#F9FAFB"/>
          <path d="M0 50C240 30 480 30 720 50C960 70 1200 70 1440 50V80H0V50Z" fill="url(#wave-gradient-1)" fillOpacity="0.3"/>
          <defs>
            <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4"/>
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5"/>
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative elements */}
        <div className="absolute top-4 left-6 w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-6 right-8 w-2 h-2 bg-[#D4AF37]/25 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </header>

      <div className="space-y-4 p-4">
        {/* Client Selection Section */}
        <section className="relative z-30">
          <Card className="bg-white">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{isRTL ? 'اختيار العميل' : 'Client Selection'}</h3>
                <button className="text-[#0F4C5C] text-sm font-medium">
                  <Plus className="w-4 h-4 inline-block ml-1" />
                  {isRTL ? 'عميل جديد' : 'New Client'}
                </button>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse p-3 bg-gradient-to-r from-[#0F4C5C]/5 to-[#D4AF37]/5 rounded-xl border border-[#0F4C5C]/20">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{isRTL ? 'سارة أحمد محمد' : 'Sarah Ahmed Mohammed'}</h4>
                  <p className="text-sm text-gray-600">{isRTL ? 'الراتب: 15,000 ر.س | العمر: 32 سنة' : 'Salary: 15,000 SAR | Age: 32 years'}</p>
                  <div className="flex items-center space-x-2 space-x-reverse mt-1">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {isRTL ? 'مؤهل للتمويل' : 'Eligible'}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {isRTL ? 'عميل نشط' : 'Active Client'}
                    </span>
                  </div>
                </div>
                <button className="w-8 h-8 bg-[#0F4C5C] rounded-lg flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </Card>
        </section>

        {/* Property Selection Section */}
        <section>
          <Card className="bg-white">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Home className="w-5 h-5 text-[#D4AF37] mr-2" />
                {isRTL ? 'اختيار العقار' : 'Property Selection'}
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse p-3 bg-gradient-to-r from-[#D4AF37]/5 to-[#0F4C5C]/5 rounded-xl border-2 border-[#D4AF37]/30">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fccaea5c53-10cb0632546a88784036.png" alt="Modern luxury villa with Saudi Arabian architecture" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{isRTL ? 'فيلا الواحة الذهبية' : 'Golden Oasis Villa'}</h4>
                    <p className="text-sm text-gray-600">{isRTL ? 'الرياض - حي الملقا' : 'Riyadh - Al Malqa'}</p>
                    <div className="flex items-center space-x-3 space-x-reverse text-sm text-gray-500 mt-1">
                      <span className="flex items-center space-x-1 space-x-reverse">
                        <Bed className="w-4 h-4" />
                        <span>5</span>
                      </span>
                      <span className="flex items-center space-x-1 space-x-reverse">
                        <Maximize2 className="w-4 h-4" />
                        <span>450م²</span>
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-lg font-bold text-[#0F4C5C]">2,850,000 ر.س</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Main Calculator Section */}
        <section>
          <FinancingCalculator
            language={language}
            initialValues={{
              loanAmount: state.propertyValue,
              downPaymentAmount: (state.propertyValue * state.downPaymentPercent) / 100,
              termYears: state.loanTerm
            }}
            customerData={{
              monthlySalary: 15000,
              isFirstHome: true,
              isSaudiCitizen: true,
              hasExistingLoans: false
            }}
            onCalculate={(values) => {
              setState({
                ...state,
                propertyValue: values.loanAmount,
                downPaymentPercent: Math.round((values.downPaymentAmount / values.loanAmount) * 100),
                loanTerm: values.termYears,
                includeLifeInsurance: true,
                includePropertyInsurance: true,
                includeAdminFees: false,
                interestRate: 3.5
              });
            }}
            showCloseButton={false}
          />
        </section>

        {/* Results Section */}
        <section>
          <Card className="bg-gradient-to-br from-[#0F4C5C]/5 to-[#D4AF37]/5 border border-[#0F4C5C]/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0F4C5C]/10 rounded-full blur-2xl transform translate-x-1/4 translate-y-1/4"></div>
            <div className="relative z-10">
              <div className="p-4 border-b border-[#0F4C5C]/20">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <ChartLine className="w-5 h-5 text-[#D4AF37] mr-2" />
                  {isRTL ? 'تفاصيل التحليل' : 'Analysis Details'}
                </h2>
              </div>
              
              <div className="p-4">
                {/* Payment to Salary Analysis */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">{isRTL ? 'نسبة القسط من الراتب' : 'Payment to Salary Ratio'}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {((results.loanAmount / (15000 * 12 * state.loanTerm)) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress
                    value={((results.loanAmount / (15000 * 12 * state.loanTerm)) * 100)}
                    max={100}
                    className="h-2 bg-gradient-to-r from-[#0F4C5C] to-[#0A3540]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>{isRTL ? 'المعدل الآمن: ≤ 33%' : 'Safe ratio: ≤ 33%'}</span>
                    <span>{isRTL ? 'الحد الأقصى: 45%' : 'Max ratio: 45%'}</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-[#0F4C5C]/10">
                    <p className="text-sm text-gray-500 mb-1">{isRTL ? 'إجمالي التمويل' : 'Total Financing'}</p>
                    <p className="text-lg font-semibold text-[#0F4C5C]">
                      {(results.loanAmount - (results.loanAmount * 0.2)).toLocaleString()} {isRTL ? 'ر.س' : 'SAR'}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#0F4C5C]/10">
                    <p className="text-sm text-gray-500 mb-1">{isRTL ? 'مدة السداد' : 'Payment Period'}</p>
                    <p className="text-lg font-semibold text-[#0F4C5C]">
                      {state.loanTerm} {isRTL ? 'سنة' : 'Years'}
                    </p>
                  </div>
                </div>

                {/* Employee Notes */}
                <div className="bg-[#0F4C5C]/5 rounded-xl p-4 border border-[#0F4C5C]/10">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{isRTL ? 'ملاحظات للموظف' : 'Employee Notes'}</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F4C5C] mt-1.5"></div>
                      <span>{isRTL ? 'تأكد من توثيق مصادر الدخل الإضافية للعميل' : 'Verify additional income sources'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F4C5C] mt-1.5"></div>
                      <span>{isRTL ? 'راجع تقرير السجل الائتماني' : 'Review credit report'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F4C5C] mt-1.5"></div>
                      <span>{isRTL ? 'تحقق من أهلية الدعم السكني' : 'Check housing support eligibility'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Bottom Navigation */}
        <div className="py-4">
          <BottomNavBar
            currentScreen="calculator"
            onNavigate={onNavigate}
            language={language}
            variant="business"
            role="developer"
          />
        </div>
      </div>
    </div>
  );
};
