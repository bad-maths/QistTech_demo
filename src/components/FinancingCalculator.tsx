import { useState, useEffect } from 'react';
import { Calculator, CheckCircle2, Info } from 'lucide-react';
import { Slider } from './ui/slider';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface FinancingCalculatorProps {
  language: 'en' | 'ar';
  initialValues?: {
    loanAmount?: number;
    downPaymentAmount?: number;
    termYears?: number;
  };
  customerData?: {
    monthlySalary: number;
    isFirstHome: boolean;
    isSaudiCitizen: boolean;
    hasExistingLoans: boolean;
  };
  onClose?: () => void;
  onCalculate?: (values: {
    loanAmount: number;
    downPaymentAmount: number;
    termYears: number;
    monthlyPayment: number;
    isEligible: boolean;
    supportAmount: number;
  }) => void;
  showCloseButton?: boolean;
}

export function FinancingCalculator({ 
  language, 
  initialValues = {},
  customerData = {
    monthlySalary: 12000,
    isFirstHome: true,
    isSaudiCitizen: true,
    hasExistingLoans: false,
  },
  onClose,
  onCalculate,
  showCloseButton = true,
}: FinancingCalculatorProps) {
  const isRTL = language === 'ar';
  const [loanAmount, setLoanAmount] = useState([initialValues.loanAmount || 1000000]);
  const [downPaymentAmount, setDownPaymentAmount] = useState(initialValues.downPaymentAmount || 100000);
  const [termYears, setTermYears] = useState(initialValues.termYears || 25);

  // Calculate monthly payment based on inputs
  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0];
    const loanAfterDown = principal - downPaymentAmount;
    const annualRate = 3.5; // 3.5% annual interest rate
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    
    if (monthlyRate === 0) {
      return Math.round(loanAfterDown / numberOfPayments);
    }
    
    const monthlyPayment = loanAfterDown * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateMonthlyPayment();

  // Check housing support eligibility
  const checkSupportEligibility = () => {
    const { monthlySalary, isFirstHome, isSaudiCitizen } = customerData;
    const propertyValue = loanAmount[0];
    
    // Eligibility criteria for Saudi housing support program
    const isEligible = 
      isSaudiCitizen && 
      isFirstHome && 
      monthlySalary <= 14000 && 
      propertyValue <= 1500000;
    
    // Calculate support amount (up to 500,000 SAR or 50% of property value)
    let supportAmount = 0;
    if (isEligible) {
      supportAmount = Math.min(500000, propertyValue * 0.5);
    }
    
    return { isEligible, supportAmount };
  };

  const { isEligible, supportAmount } = checkSupportEligibility();

  // Notify parent component of changes
  const notifyCalculation = () => {
    onCalculate?.({
      loanAmount: loanAmount[0],
      downPaymentAmount,
      termYears,
      monthlyPayment,
      isEligible,
      supportAmount
    });
  };

  // Call notifyCalculation whenever values change
  useEffect(() => {
    notifyCalculation();
  }, [loanAmount[0], downPaymentAmount, termYears]);

  return (
    <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-6 relative overflow-hidden">
      <div className="absolute bg-[rgba(212,175,55,0.05)] blur-3xl filter right-0 rounded-full size-32 top-0" />
      <div className="absolute bg-[rgba(15,76,92,0.03)] blur-2xl filter left-0 rounded-full size-24 bottom-0" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-b from-[#d4af37] to-[#b8941f] rounded-2xl size-12 flex items-center justify-center shadow-[0px_4px_16px_0px_rgba(212,175,55,0.25)]">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base text-[#0e1e25] mb-1 tracking-[-0.3px]" dir="auto">
                {isRTL ? 'حاسبة التمويل الذكية' : 'Smart Calculator'}
              </h2>
              <p className="text-xs text-gray-500" dir="auto">
                {isRTL ? 'احسب قسطك الشهري' : 'Calculate monthly payment'}
              </p>
            </div>
          </div>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f2f4f5] hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <span className="text-gray-500">✕</span>
            </button>
          )}
        </div>

        <div className="space-y-5">
          {/* Loan Amount */}
          <div>
            <Label className="mb-3 block text-sm text-[#0e1e25]">
              {isRTL ? 'قيمة العقار' : 'Property Value'}
            </Label>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 bg-white rounded-2xl border border-[rgba(15,76,92,0.1)] px-4 py-3">
                <span className="text-lg text-[#0f4c5c]">{loanAmount[0].toLocaleString()}</span>
              </div>
              <span className="text-sm text-gray-600" dir="auto">{isRTL ? 'ر.س' : 'SAR'}</span>
            </div>
            <Slider
              value={loanAmount}
              onValueChange={(value: number[]) => {
                setLoanAmount(value);
                notifyCalculation();
              }}
              min={100000}
              max={10000000}
              step={50000}
              className="mt-2"
            />
          </div>

          {/* Down Payment & Term */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="mb-3 block text-sm text-[#0e1e25]">{isRTL ? 'الدفعة الأولى' : 'Down Payment'}</Label>
              <div className="flex items-center gap-2 mb-2">
                <Input 
                  type="number" 
                  value={downPaymentAmount}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0;
                    setDownPaymentAmount(Math.min(Math.max(val, 0), loanAmount[0]));
                    notifyCalculation();
                  }}
                  className="flex-1 bg-white border-[rgba(15,76,92,0.1)] rounded-2xl"
                  min="0"
                  max={loanAmount[0]}
                />
              </div>
              <p className="text-xs text-gray-500">
                {((downPaymentAmount / loanAmount[0]) * 100).toFixed(1)}%
              </p>
            </div>
            <div>
              <Label className="mb-3 block text-sm text-[#0e1e25]">{isRTL ? 'المدة (سنوات)' : 'Term (years)'}</Label>
              <Input 
                type="number" 
                value={termYears}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 1;
                  setTermYears(Math.min(Math.max(val, 1), 30));
                  notifyCalculation();
                }}
                min="1"
                max="30"
                className="bg-white border-[rgba(15,76,92,0.1)] rounded-2xl"
              />
              <p className="text-xs text-gray-500 mt-2">
                {termYears * 12} {isRTL ? 'شهر' : 'months'}
              </p>
            </div>
          </div>

          {/* Housing Support Indicator */}
          {isEligible ? (
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-4 border border-emerald-200">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full size-10 flex items-center justify-center shrink-0 shadow-[0px_4px_12px_0px_rgba(16,185,129,0.25)]">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-emerald-900 mb-1" dir="auto">
                    {isRTL ? '✓ مؤهل للدعم السكني' : '✓ Housing Support Eligible'}
                  </h3>
                  <p className="text-sm text-emerald-700 mb-2" dir="auto">
                    {isRTL 
                      ? `دعم متوقع: ${supportAmount.toLocaleString()} ر.س`
                      : `Expected: ${supportAmount.toLocaleString()} SAR`}
                  </p>
                  <p className="text-xs text-emerald-600" dir="auto">
                    {isRTL 
                      ? 'سيتم خصم الدعم من قيمة التمويل'
                      : 'Will be deducted from financing'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-4 border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-b from-amber-500 to-amber-600 rounded-full size-10 flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-amber-900 mb-1" dir="auto">
                    {isRTL ? 'معلومات الدعم السكني' : 'Housing Support Info'}
                  </h3>
                  <p className="text-xs text-amber-700" dir="auto">
                    {isRTL 
                      ? 'متاح للمواطنين للمسكن الأول بسعر ≤ 1.5م ريال'
                      : 'Available for citizens, first home ≤ 1.5M SAR'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Result Card */}
          <div className="bg-gradient-to-br from-[#0f4c5c] to-[#0a3540] rounded-2xl p-5 shadow-[0px_8px_24px_0px_rgba(15,76,92,0.15)]">
            <div className="text-center">
              <p className="text-sm text-[rgba(255,255,255,0.8)] mb-2" dir="auto">
                {isRTL ? 'القسط الشهري المتوقع' : 'Expected Monthly Payment'}
              </p>
              <p className="text-3xl text-white mb-1">
                {monthlyPayment.toLocaleString()}
              </p>
              <p className="text-sm text-[rgba(255,255,255,0.8)]" dir="auto">
                {isRTL ? 'ريال سعودي' : 'SAR'}
              </p>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs text-[rgba(255,255,255,0.7)]" dir="auto">
                {isRTL ? 'بناءً على معدل 3.5%' : 'Based on 3.5% rate'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}