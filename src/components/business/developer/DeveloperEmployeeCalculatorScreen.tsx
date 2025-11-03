import { useState } from 'react';
import { ArrowLeft, ArrowRight, Calculator, Share2, Bookmark, Home, 
  Bed, Maximize2, Edit3, Building2, ChartLine, ChartPie, Scale,
  FileText, Printer, Send, Save, RotateCcw, Handshake, ShieldCheck, 
  TrendingUp, ThumbsUp, Info, AlertCircle, Check, CheckCircle2, Plus } from 'lucide-react';
import { Card } from '../../ui/card';
import { Slider } from '../../ui/slider';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Checkbox } from '../../ui/checkbox';
import { Progress } from '../../ui/progress';
import { Switch } from '../../ui/switch';
import { BottomNavBar } from '../../BottomNavBar';

interface EmployeeCalculatorScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeeCalculatorScreen({ onNavigate, language, employeeData }: EmployeeCalculatorScreenProps) {
  const isRTL = language === 'ar';
  const [propertyValue, setPropertyValue] = useState(2850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(3.25);
  const [loanTerm, setLoanTerm] = useState(25);
  const [includeLifeInsurance, setIncludeLifeInsurance] = useState(true);
  const [includePropertyInsurance, setIncludePropertyInsurance] = useState(true);
  const [includeAdminFees, setIncludeAdminFees] = useState(false);

  const downPaymentAmount = Math.round((propertyValue * downPaymentPercent) / 100);
  const loanAmount = propertyValue - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const baseMonthlyPayment = Math.round(
    loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  );

  const lifeInsurance = includeLifeInsurance ? 285 : 0;
  const propertyInsurance = includePropertyInsurance ? 190 : 0;
  const adminFees = includeAdminFees ? 150 : 0;
  const totalInsurance = lifeInsurance + propertyInsurance + adminFees;
  const totalMonthlyPayment = baseMonthlyPayment + totalInsurance;

  const salary = 15000;
  const paymentToSalaryRatio = (totalMonthlyPayment / salary) * 100;

  const housingSupportAmount = 500000;
  const isEligibleForSupport = propertyValue <= 850000;

  return (
    <div className="min-h-screen bg-[#F2F4F5] relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{backgroundColor: '#0F4C5C'}}></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10" style={{backgroundColor: '#D4AF37'}}></div>
      </div>
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] px-6 py-4 flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="p-2 hover:bg-[#0A3540] rounded-full transition-colors">
            {isRTL ? <ArrowRight className="w-5 h-5 text-white" /> : <ArrowLeft className="w-5 h-5 text-white" />}
          </button>
          <div>
            <h1 className="text-xl font-semibold text-white">{isRTL ? 'حاسبة التمويل' : 'Financing Calculator'}</h1>
            <p className="text-sm text-white/70">{isRTL ? 'احسب التمويل المناسب للعميل' : 'Calculate suitable financing for customer'}</p>
          </div>
        </div>
        <div className="px-6 py-6 space-y-6 pb-28">
          <Card className="p-6 bg-gradient-to-br from-white to-[#f8f9fa] border border-[rgba(15,76,92,0.08)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] rounded-3xl relative overflow-hidden">
            <div className="absolute bg-[rgba(212,175,55,0.05)] blur-3xl filter right-0 rounded-full size-32 top-0"></div>
            <div className="absolute bg-[rgba(15,76,92,0.03)] blur-2xl filter left-0 rounded-full size-24 bottom-0"></div>
            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-b from-[#d4af37] to-[#b8941f] rounded-2xl size-12 flex items-center justify-center shadow-[0px_4px_16px_0px_rgba(212,175,55,0.25)]"><Calculator className="w-5 h-5 text-white" /></div>
                  <div>
                    <h2 className="text-base text-[#0e1e25] mb-1 tracking-[-0.3px]" dir="auto">{isRTL ? 'حاسبة التمويل الذكية' : 'Smart Calculator'}</h2>
                    <p className="text-xs text-gray-500" dir="auto">{isRTL ? 'احسب قسطك الشهري' : 'Calculate your monthly payment'}</p>
                  </div>
                </div>
                <button onClick={() => onNavigate('home')} className="w-8 h-8 rounded-full bg-[#f2f4f5] hover:bg-gray-200 transition-colors flex items-center justify-center"><span className="text-gray-500">✕</span></button>
              </div>
              <div>
                <Label className="text-sm text-[#0e1e25] mb-3 block" dir="auto">{isRTL ? 'قيمة العقار' : 'Property Value'}</Label>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 bg-white rounded-2xl border border-[rgba(15,76,92,0.1)] px-4 py-3">
                    <span className="text-lg text-[#0f4c5c]">{propertyValue.toLocaleString()}</span>
                  </div>
                  <span className="text-sm text-gray-600" dir="auto">{isRTL ? 'ر.س' : 'SAR'}</span>
                </div>
                <Slider value={[propertyValue]} onValueChange={(value: number[]) => setPropertyValue(value[0])} min={100000} max={10000000} step={50000} className="w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-[#0e1e25] mb-3 block" dir="auto">{isRTL ? 'الدفعة الأولى (%)' : 'Down Payment (%)'}</Label>
                  <div className="flex items-center gap-2 mb-2">
                    <Input 
                      type="number" 
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Math.max(5, Math.min(50, parseInt(e.target.value) || 5)))}
                      min={5}
                      max={50}
                      className="flex-1 bg-white border-[rgba(15,76,92,0.1)] rounded-2xl px-3 py-2 text-base focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c]"
                    />
                  </div>
                  <p className="text-xs text-gray-500">{downPaymentAmount.toLocaleString()} SAR</p>
                </div>
                <div>
                  <Label className="text-sm text-[#0e1e25] mb-3 block" dir="auto">{isRTL ? 'المدة (سنوات)' : 'Term (Years)'}</Label>
                  <Input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Math.max(5, Math.min(30, parseInt(e.target.value) || 5)))}
                    min={5}
                    max={30}
                    className="bg-white border-[rgba(15,76,92,0.1)] rounded-2xl px-3 py-2 text-base focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c]"
                  />
                  <p className="text-xs text-gray-500 mt-2">{loanTerm * 12} {isRTL ? 'شهر' : 'months'}</p>
                </div>
              </div>
              <div className="space-y-3">
                <Label className="text-sm text-[#0e1e25] block" dir="auto">{isRTL ? 'معدل الفائدة' : 'Interest Rate'}</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Math.max(1, Math.min(10, parseFloat(e.target.value) || 1)))}
                    step={0.25}
                    min={1}
                    max={10}
                    className="w-32 bg-white border-[rgba(15,76,92,0.1)] rounded-2xl px-3 py-2 text-base focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c]"
                  />
                  <span className="text-sm text-gray-500">%</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm text-[#0e1e25] font-medium" dir="auto">{isRTL ? 'الرسوم والتأمين' : 'Fees & Insurance'}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-gray-600" dir="auto">{isRTL ? 'تأمين على الحياة' : 'Life Insurance'}</Label>
                    <Switch checked={includeLifeInsurance} onCheckedChange={setIncludeLifeInsurance} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-gray-600" dir="auto">{isRTL ? 'تأمين على العقار' : 'Property Insurance'}</Label>
                    <Switch checked={includePropertyInsurance} onCheckedChange={setIncludePropertyInsurance} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-gray-600" dir="auto">{isRTL ? 'رسوم إدارية' : 'Admin Fees'}</Label>
                    <Switch checked={includeAdminFees} onCheckedChange={setIncludeAdminFees} />
                  </div>
                </div>
              </div>
              {isEligibleForSupport && (
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-4 border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full size-10 flex items-center justify-center shrink-0 shadow-[0px_4px_12px_0px_rgba(16,185,129,0.25)]"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                    <div className="flex-1">
                      <h3 className="text-sm text-emerald-900 mb-1" dir="auto">✓ {isRTL ? 'مؤهل للدعم السكني' : 'Eligible for Housing Support'}</h3>
                      <p className="text-sm text-emerald-700 mb-2" dir="auto">{isRTL ? `دعم متوقع: ${housingSupportAmount.toLocaleString()} ر.س` : `Expected support: ${housingSupportAmount.toLocaleString()} SAR`}</p>
                      <p className="text-xs text-emerald-600" dir="auto">{isRTL ? 'سيتم خصم الدعم من قيمة التمويل' : 'Support will be deducted from financing amount'}</p>
                    </div>
                  </div>
                </div>
              )}
              {!isEligibleForSupport && (
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-4 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-b from-amber-500 to-amber-600 rounded-full size-10 flex items-center justify-center shrink-0 shadow-[0px_4px_12px_0px_rgba(217,119,6,0.25)]"><AlertCircle className="w-5 h-5 text-white" /></div>
                    <div className="flex-1">
                      <h3 className="text-sm text-amber-900 mb-1" dir="auto">{isRTL ? 'غير مؤهل للدعم السكني' : 'Not eligible for Housing Support'}</h3>
                      <p className="text-xs text-amber-700" dir="auto">{isRTL ? 'قيمة العقار تتجاوز حد الدعم السكني (850,000 ر.س)' : 'Property value exceeds housing support limit (850,000 SAR)'}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white border-0 shadow-[0px_8px_24px_0px_rgba(15,76,92,0.15)] rounded-2xl">
            <div className="text-center">
              <p className="text-sm text-white/80 mb-2" dir="auto">{isRTL ? 'القسط الشهري المتوقع' : 'Estimated Monthly Payment'}</p>
              <p className="text-3xl text-white mb-1">{totalMonthlyPayment.toLocaleString()}</p>
              <p className="text-sm text-white/80" dir="auto">{isRTL ? 'ريال سعودي' : 'Saudi Riyal'}</p>
              <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-xs text-white/60" dir="auto">{isRTL ? 'أصل القسط' : 'Base Payment'}</p>
                  <p className="text-sm text-white">{baseMonthlyPayment.toLocaleString()} SAR</p>
                </div>
                <div>
                  <p className="text-xs text-white/60" dir="auto">{isRTL ? 'التأمين والرسوم' : 'Insurance & Fees'}</p>
                  <p className="text-sm text-white">{totalInsurance.toLocaleString()} SAR</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs text-white/70">
                <div className="flex items-center justify-between">
                  <span dir="auto">{isRTL ? 'نسبة الدخل:' : 'Income Ratio:'}</span>
                  <span>{paymentToSalaryRatio.toFixed(1)}%</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-white/70" dir="auto">
                {isRTL ? `معدل الفائدة: ${interestRate}%` : `Interest Rate: ${interestRate}%`}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar
        currentScreen="calculator"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />
    </div>
  );
}
