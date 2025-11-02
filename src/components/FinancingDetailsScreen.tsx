/**
 * QistTech Financing Details Screen - Premium Design
 * 
 * Features:
 * - Premium header with bank logo background and overlay effect
 * - Nafath auto-calculated financial data display
 * - Smart financing calculator
 * - Suitable properties matcher
 * - Benefits and eligibility checker
 * - FAQ accordion
 * - Full RTL support
 */

import { ArrowLeft, ArrowRight, TrendingDown, Check, AlertCircle, FileText, Calculator, ChevronDown, Shield, Sparkles, Home as HomeIcon, Bed, Bath, Maximize, MapPin, Info, CheckCircle2, Award, Clock, DollarSign, Building2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface FinancingDetailsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function FinancingDetailsScreen({ onNavigate, language }: FinancingDetailsScreenProps) {
  const isRTL = language === 'ar';
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [loanAmount, setLoanAmount] = useState([1250000]);
  const [downPaymentAmount, setDownPaymentAmount] = useState(125000);
  const [termYears, setTermYears] = useState(25);

  // Mock customer data from Nafath
  const customerData = {
    monthlySalary: 15000, // SAR (shown in Nafath section)
    isFirstHome: true,
    isSaudiCitizen: true,
    hasExistingLoans: false,
  };

  // Calculate monthly payment
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

  const eligibilityCriteria = [
    { label: isRTL ? 'الحد الأدنى للراتب' : 'Minimum Salary', value: isRTL ? '10,000 ر.س' : '10,000 SAR', met: true },
    { label: isRTL ? 'الحد الأدنى للعمر' : 'Minimum Age', value: isRTL ? '21 سنة' : '21 years', met: true },
    { label: isRTL ? 'الحد الأقصى للعمر' : 'Maximum Age', value: isRTL ? '65 سنة' : '65 years', met: true },
    { label: isRTL ? 'نسبة الالتزامات' : 'DBR Ratio', value: isRTL ? 'أقل من 55%' : 'Below 55%', met: true },
  ];

  const requiredDocuments = [
    isRTL ? 'هوية وطنية سارية' : 'Valid National ID',
    isRTL ? 'إثبات الدخل (آخر 3 أشهر)' : 'Proof of Income (Last 3 months)',
    isRTL ? 'كشف حساب بنكي' : 'Bank Statement',
    isRTL ? 'تعريف من جهة العمل' : 'Employment Certificate',
    isRTL ? 'نموذج الطلب المكتمل' : 'Completed Application Form',
  ];

  const benefits = [
    { 
      title: isRTL ? 'معدل فائدة منخفض' : 'Low Interest Rate', 
      desc: isRTL ? '3.5% سنوياً' : '3.5% annually',
      icon: TrendingDown,
      color: 'from-emerald-500 to-emerald-600'
    },
    { 
      title: isRTL ? 'مرونة في السداد' : 'Flexible Repayment', 
      desc: isRTL ? 'حتى 25 سنة' : 'Up to 25 years',
      icon: Clock,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: isRTL ? 'موافقة سريعة' : 'Quick Approval', 
      desc: isRTL ? 'خلال 3 أيام عمل' : 'Within 3 business days',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      title: isRTL ? 'بدون رسوم إضافية' : 'No Hidden Fees', 
      desc: isRTL ? 'شفافية كاملة' : 'Full transparency',
      icon: Shield,
      color: 'from-amber-500 to-amber-600'
    },
  ];

  // Properties suitable for this financing offer (within buying power of 750,000 SAR)
  const suitableProperties = [
    {
      id: 1,
      title: isRTL ? 'شقة عصرية في حي النخيل' : 'Modern Apartment in Palm District',
      developer: isRTL ? 'شركة العمران' : 'Omran Development',
      location: isRTL ? 'الرياض، حي النخيل' : 'Riyadh, Palm District',
      price: '650,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 110,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      monthlyPayment: '3,800',
      downPayment: '65,000',
    },
    {
      id: 2,
      title: isRTL ? 'شقة بغرفتين في حي الياسمين' : '2BR Apartment in Yasmin District',
      developer: isRTL ? 'مجموعة دار' : 'Dar Group',
      location: isRTL ? 'الرياض، حي الياسمين' : 'Riyadh, Yasmin District',
      price: '720,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 125,
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      monthlyPayment: '4,100',
      downPayment: '72,000',
    },
    {
      id: 3,
      title: isRTL ? 'شقة 3 غرف في المروج' : '3BR Apartment in Al Murooj',
      developer: isRTL ? 'شركة إعمار' : 'Emaar Company',
      location: isRTL ? 'الرياض، المروج' : 'Riyadh, Al Murooj',
      price: '750,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 140,
      image: 'https://images.unsplash.com/photo-1557813282-bcd50093e38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYxNzM0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      monthlyPayment: '4,200',
      downPayment: '75,000',
    },
  ];

  const handleApplyWithProperty = () => {
    if (selectedProperty) {
      const property = suitableProperties.find(p => p.id === selectedProperty);
      onNavigate('applicationForm', { 
        applicationType: 'app-property',
        chatType: 'combined',
        property: property,
        financingOffer: {
          bank: isRTL ? 'البنك الأهلي' : 'National Bank',
          program: isRTL ? 'برنامج التمويل العقاري' : 'Home Financing Program',
          rate: '3.5%',
        },
      });
    }
  };

  const handleApplyExternalProperty = () => {
    onNavigate('applicationForm', { 
      applicationType: 'external-property',
      chatType: 'single-bank',
      financingOffer: {
        bank: isRTL ? 'البنك الأهلي' : 'National Bank',
        program: isRTL ? 'برنامج التمويل العقاري' : 'Home Financing Program',
        rate: '3.5%',
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f2f4f5] pb-32" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Premium Header with Bank Logo Background */}
      <div className="relative overflow-hidden">
        {/* Large Background Shape with Blur */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Building2 className="w-80 h-80 text-white" strokeWidth={0.5} />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c5c]/95 via-[#0a3540]/90 to-[#0f4c5c]/95" />
        
        {/* Decorative Blurs */}
        <div className="absolute bg-[rgba(212,175,55,0.15)] blur-3xl filter right-0 rounded-full size-40 -top-12" />
        <div className="absolute bg-[rgba(255,255,255,0.08)] blur-2xl filter left-0 rounded-full size-32 bottom-0" />
        
        {/* Content */}
        <div className="relative z-10 px-5 py-6">
          <button
            onClick={() => onNavigate('financingListings')}
            className="mb-6 bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 hover:bg-white/20 transition-colors border border-white/20 inline-flex"
          >
            {isRTL ? <ArrowRight className="w-5 h-5 text-white" /> : <ArrowLeft className="w-5 h-5 text-white" />}
          </button>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-3xl p-4 border border-[rgba(212,175,55,0.3)] shadow-[0px_8px_24px_0px_rgba(212,175,55,0.25)] flex items-center justify-center w-24 h-24 flex-shrink-0">
              <span className="text-2xl font-bold text-white">NCB</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl text-white mb-2 tracking-[-0.5px]" dir="auto">
                {isRTL ? 'البنك الأهلي السعودي' : 'National Commercial Bank'}
              </h1>
              <p className="text-sm text-[rgba(255,255,255,0.9)] mb-3" dir="auto">
                {isRTL ? 'برنامج التمويل العقاري المتطور' : 'Advanced Home Financing Program'}
              </p>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full px-3 py-1.5 shadow-[0px_4px_12px_0px_rgba(212,175,55,0.3)]">
                <TrendingDown className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs" dir="auto">{isRTL ? '⭐ أفضل معدل' : '⭐ Best Rate'}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
              <p className="text-xs text-[rgba(255,255,255,0.8)] mb-2" dir="auto">{isRTL ? 'المعدل' : 'Rate'}</p>
              <p className="text-xl text-white">3.5%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
              <p className="text-xs text-[rgba(255,255,255,0.8)] mb-2" dir="auto">{isRTL ? 'المدة' : 'Term'}</p>
              <p className="text-xl text-white">{isRTL ? '25 سنة' : '25 yrs'}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
              <p className="text-xs text-[rgba(255,255,255,0.8)] mb-2" dir="auto">{isRTL ? 'شهرياً' : 'Monthly'}</p>
              <p className="text-xl text-white">5,200</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-6 space-y-5">
        {/* Nafath Auto-calculated Info */}
        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-5 relative overflow-hidden">
          <div className="absolute bg-[rgba(212,175,55,0.05)] blur-3xl filter right-0 rounded-full size-32 top-0" />
          <div className="absolute bg-[rgba(16,185,129,0.05)] blur-2xl filter left-0 rounded-full size-24 bottom-0" />
          
          <div className="relative z-10">
            <div className="flex items-start gap-3 mb-5">
              <div className="bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-2xl size-12 flex items-center justify-center shrink-0 shadow-[0px_4px_16px_0px_rgba(16,185,129,0.25)]">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base text-[#0e1e25] tracking-[-0.3px]" dir="auto">
                    {isRTL ? 'حسابات تلقائية من نفاذ' : 'Auto-calculated from Nafath'}
                  </h3>
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                </div>
                <p className="text-sm text-gray-600" dir="auto">
                  {isRTL 
                    ? 'تم حساب أفضل خيارات التمويل بناءً على بياناتك' 
                    : 'Best options calculated from your data'}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[rgba(15,76,92,0.05)]">
                <p className="text-xs text-gray-500 mb-2" dir="auto">{isRTL ? 'راتبك الشهري' : 'Monthly Salary'}</p>
                <p className="text-lg text-[#0e1e25]">15,000 <span className="text-sm text-gray-500">{isRTL ? 'ر.س' : 'SAR'}</span></p>
              </div>
              <div className="bg-gradient-to-br from-[#0f4c5c]/5 to-[#0f4c5c]/10 rounded-2xl p-4 border border-[rgba(15,76,92,0.1)]">
                <p className="text-xs text-gray-500 mb-2" dir="auto">{isRTL ? 'القدرة الشرائية' : 'Buying Power'}</p>
                <p className="text-lg text-[#0f4c5c]">750,000 <span className="text-sm text-gray-600">{isRTL ? 'ر.س' : 'SAR'}</span></p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[rgba(15,76,92,0.05)]">
                <p className="text-xs text-gray-500 mb-2" dir="auto">{isRTL ? 'الالتزامات الحالية' : 'Current Obligations'}</p>
                <p className="text-lg text-[#0e1e25]">2,500 <span className="text-sm text-gray-500">{isRTL ? 'ر.س' : 'SAR'}</span></p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-4 border border-emerald-200">
                <p className="text-xs text-emerald-700 mb-2" dir="auto">{isRTL ? 'القسط الموصى به' : 'Recommended Payment'}</p>
                <p className="text-lg text-emerald-600">4,200 <span className="text-sm text-emerald-600">{isRTL ? 'ر.س' : 'SAR'}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Calculator */}
        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-5 relative overflow-hidden">
          <div className="absolute bg-[rgba(212,175,55,0.05)] blur-3xl filter right-0 rounded-full size-32 top-0" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-b from-[#d4af37] to-[#b8941f] rounded-2xl size-12 flex items-center justify-center shadow-[0px_4px_16px_0px_rgba(212,175,55,0.25)]">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base text-[#0e1e25] tracking-[-0.3px]" dir="auto">{isRTL ? 'حاسبة التمويل' : 'Calculator'}</h3>
                  <p className="text-xs text-gray-500" dir="auto">{isRTL ? 'احسب قسطك الشهري' : 'Calculate payment'}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-5">
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
                  onValueChange={setLoanAmount}
                  min={100000}
                  max={10000000}
                  step={50000}
                  className="mt-2"
                />
              </div>

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
                          ? 'متاح للمواطنين للمسكن الأول ≤ 1.5م ريال'
                          : 'Available for citizens, first home ≤ 1.5M SAR'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

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

        {/* Suitable Properties */}
        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base text-[#0e1e25] mb-1 tracking-[-0.3px]" dir="auto">
                {isRTL ? 'عقارات مناسبة' : 'Suitable Properties'}
              </h3>
              <p className="text-xs text-gray-500" dir="auto">
                {isRTL ? 'بناءً على قدرتك الشرائية' : 'Based on your buying power'}
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-full px-3 py-1.5 border border-emerald-200">
              <span className="text-sm text-emerald-700">{suitableProperties.length} {isRTL ? 'عقار' : 'properties'}</span>
            </div>
          </div>

          <div className="space-y-3">
            {suitableProperties.map((property) => (
              <button
                key={property.id}
                className={`w-full bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] overflow-hidden transition-all text-left ${
                  selectedProperty === property.id 
                    ? 'ring-2 ring-[#0f4c5c] shadow-[0px_8px_20px_0px_rgba(15,76,92,0.15)]' 
                    : 'hover:shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)]'
                }`}
                onClick={() => setSelectedProperty(property.id)}
              >
                <div className="flex gap-4 p-4">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    {selectedProperty === property.id && (
                      <div className="absolute inset-0 bg-[#0f4c5c]/30 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-gradient-to-b from-[#0f4c5c] to-[#0a3540] rounded-full p-2 shadow-[0px_4px_12px_0px_rgba(15,76,92,0.3)]">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm text-[#0e1e25] mb-2 truncate tracking-[-0.2px]" dir="auto">{property.title}</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate" dir="auto">{property.location}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize className="w-3.5 h-3.5" />
                        <span>{property.area}{isRTL ? 'م²' : 'm²'}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base text-[#0f4c5c] mb-1">{property.price} <span className="text-xs">{isRTL ? 'ر.س' : 'SAR'}</span></p>
                        <p className="text-xs text-gray-500" dir="auto">
                          {isRTL ? 'شهرياً: ' : 'Monthly: '}{property.monthlyPayment} {isRTL ? 'ر.س' : 'SAR'}
                        </p>
                      </div>
                      {selectedProperty === property.id && (
                        <div className="bg-gradient-to-r from-[#0f4c5c] to-[#0a3540] rounded-full px-3 py-1.5 shadow-[0px_2px_8px_0px_rgba(15,76,92,0.2)]">
                          <span className="text-white text-xs" dir="auto">{isRTL ? '✓ محدد' : '✓ Selected'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button 
            onClick={() => onNavigate('propertyListings')}
            className="w-full mt-4 bg-white rounded-2xl border border-[rgba(15,76,92,0.15)] py-3 text-sm text-[#0f4c5c] hover:bg-[#f2f4f5] transition-colors"
          >
            <span dir="auto">{isRTL ? 'عرض جميع العقارات' : 'View All Properties'}</span>
          </button>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-5">
          <h3 className="mb-5 text-base text-[#0e1e25] tracking-[-0.3px]" dir="auto">{isRTL ? 'المزايا الرئيسية' : 'Key Benefits'}</h3>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[rgba(15,76,92,0.05)]">
                  <div className={`bg-gradient-to-b ${benefit.color} rounded-xl size-10 flex items-center justify-center mb-3 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-[#0e1e25] mb-1 tracking-[-0.2px]" dir="auto">{benefit.title}</p>
                  <p className="text-xs text-gray-500" dir="auto">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-5">
          <h3 className="mb-4 text-base text-[#0e1e25] tracking-[-0.3px]" dir="auto">{isRTL ? 'معايير الأهلية' : 'Eligibility Criteria'}</h3>
          <div className="space-y-3">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-xl p-3 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3">
                  {criteria.met ? (
                    <div className="bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full size-6 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-b from-amber-500 to-amber-600 rounded-full size-6 flex items-center justify-center">
                      <AlertCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <span className="text-sm text-[#0e1e25]" dir="auto">{criteria.label}</span>
                </div>
                <span className="text-xs text-gray-500" dir="auto">{criteria.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-5">
          <h3 className="mb-4 text-base text-[#0e1e25] tracking-[-0.3px]" dir="auto">{isRTL ? 'المستندات المطلوبة' : 'Required Documents'}</h3>
          <div className="space-y-2">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="flex items-center gap-3 text-sm text-[#0e1e25] bg-white rounded-xl p-3 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
                <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg size-8 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span dir="auto">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-5">
          <h3 className="mb-4 text-base text-[#0e1e25] tracking-[-0.3px]" dir="auto">{isRTL ? 'الأسئلة الشائعة' : 'FAQs'}</h3>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border-0 px-4">
              <AccordionTrigger className="hover:no-underline text-sm" dir="auto">
                {isRTL ? 'كم تستغرق عملية الموافقة؟' : 'How long does approval take?'}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600" dir="auto">
                {isRTL
                  ? 'عادة ما تستغرق عملية الموافقة من 3 إلى 5 أيام عمل بعد تقديم جميع المستندات المطلوبة.'
                  : 'The approval process typically takes 3-5 business days after submitting all required documents.'}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border-0 px-4">
              <AccordionTrigger className="hover:no-underline text-sm" dir="auto">
                {isRTL ? 'هل يمكن السداد المبكر؟' : 'Can I make early repayment?'}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600" dir="auto">
                {isRTL
                  ? 'نعم، يمكنك السداد المبكر بدون أي رسوم إضافية بعد مرور سنتين من القرض.'
                  : 'Yes, early repayment is allowed without any additional fees after 2 years of the loan.'}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border-0 px-4">
              <AccordionTrigger className="hover:no-underline text-sm" dir="auto">
                {isRTL ? 'هل هناك رسوم إدارية؟' : 'Are there any admin fees?'}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600" dir="auto">
                {isRTL
                  ? 'رسوم إدارية بنسبة 1% من قيمة القرض، تدفع مرة واحدة عند الموافقة.'
                  : 'Administrative fee of 1% of the loan amount, paid once upon approval.'}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-[rgba(15,76,92,0.08)] px-5 py-4 space-y-3 shadow-[0px_-4px_16px_0px_rgba(0,0,0,0.04)]" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-md mx-auto space-y-3">
          {/* Apply with selected property */}
          <button
            onClick={() => {
              if (selectedProperty) {
                const property = suitableProperties.find(p => p.id === selectedProperty);
                onNavigate('chat', {
                  newChat: true,
                  chatType: 'combined',
                  participants: [
                    {
                      id: 'bank',
                      name: isRTL ? 'أحمد الأحمدي - البنك الأهلي' : 'Ahmad Al-Ahmadi - National Bank',
                      type: 'bank',
                      avatar: 'AA',
                      color: 'bg-blue-600',
                      property: property?.title,
                    },
                    {
                      id: 'developer',
                      name: isRTL ? `محمد السعيد - ${property?.developer}` : `Mohammed Al-Saeed - ${property?.developer}`,
                      type: 'developer',
                      avatar: 'MS',
                      color: 'bg-green-600',
                      property: property?.title,
                    },
                  ],
                  property: property?.title,
                  applicationId: `#REQ-${Date.now()}`,
                });
              }
            }}
            disabled={!selectedProperty}
            className={`w-full bg-gradient-to-r from-[#0f4c5c] to-[#0a3540] rounded-2xl py-3.5 flex items-center justify-center gap-2 shadow-[0px_4px_12px_0px_rgba(15,76,92,0.2)] transition-all ${
              selectedProperty 
                ? 'hover:shadow-[0px_6px_16px_0px_rgba(15,76,92,0.25)]' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <HomeIcon className="w-4 h-4 text-white" />
            <span className="text-sm text-white" dir="auto">
              {isRTL ? 'تطبيق التمويل على العقار المحدد' : 'Apply Financing on Selected Property'}
            </span>
          </button>

          {/* Apply for external property */}
          <button
            onClick={handleApplyExternalProperty}
            className="w-full bg-white rounded-2xl border border-[rgba(15,76,92,0.15)] py-3.5 flex items-center justify-center gap-2 hover:bg-[#f2f4f5] transition-colors"
          >
            <span className="text-sm text-[#0f4c5c]" dir="auto">
              {isRTL ? 'تقديم طلب لعقار خارجي' : 'Apply for External Property'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
