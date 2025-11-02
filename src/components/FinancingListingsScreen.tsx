/**
 * QistTech Financing Listings Screen - Premium Design
 * 
 * Features:
 * - Premium glassmorphism header
 * - AI-powered financing calculator
 * - Saudi housing support eligibility checker
 * - Real-time offer filtering
 * - Comparison tools
 * - Modern card designs with gradients
 * - Full RTL support
 */

import { ArrowLeft, ArrowRight, Filter, TrendingDown, Calculator, Info, Home, Banknote, Building2, ShoppingBag, User, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { BottomNavBar } from './BottomNavBar';

interface FinancingListingsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function FinancingListingsScreen({ onNavigate, language }: FinancingListingsScreenProps) {
  const [loanAmount, setLoanAmount] = useState([1000000]);
  const [downPaymentAmount, setDownPaymentAmount] = useState(100000);
  const [termYears, setTermYears] = useState(25);
  const [showCalculator, setShowCalculator] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const isRTL = language === 'ar';

  // Mock customer data from Nafath (should come from API in production)
  const customerData = {
    monthlySalary: 12000, // SAR
    isFirstHome: true,
    isSaudiCitizen: true,
    hasExistingLoans: false,
  };

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

  const filters = [
    { id: 'all', label: isRTL ? 'الكل' : 'All', icon: null },
    { id: 'bank', label: isRTL ? 'البنوك' : 'Banks', icon: null },
    { id: 'company', label: isRTL ? 'شركات التمويل' : 'Finance Co.', icon: null },
    { id: 'best-rate', label: isRTL ? 'أفضل الأسعار' : 'Best Rates', icon: null },
    { id: 'low-down', label: isRTL ? 'دفعة منخفضة' : 'Low Down', icon: null },
  ];

  const allFinancingOffers = [
    {
      id: 1,
      bank: isRTL ? 'البنك الأهلي السعودي' : 'National Commercial Bank',
      logo: 'NCB',
      type: 'bank',
      rate: '3.5%',
      term: isRTL ? '25 سنة' : '25 years',
      monthly: '5,200',
      downPayment: '10%',
      maxLoan: '5,000,000',
      processing: '1%',
      featured: true,
      badge: isRTL ? '⭐ الأفضل' : '⭐ Best',
    },
    {
      id: 2,
      bank: isRTL ? 'مصرف الراجحي' : 'Al Rajhi Bank',
      logo: 'ARB',
      type: 'bank',
      rate: '3.2%',
      term: isRTL ? '20 سنة' : '20 years',
      monthly: '5,450',
      downPayment: '15%',
      maxLoan: '4,500,000',
      processing: '0.5%',
      featured: true,
      badge: isRTL ? '🔥 معدل منخفض' : '🔥 Low Rate',
    },
    {
      id: 3,
      bank: isRTL ? 'بنك الرياض' : 'Riyad Bank',
      logo: 'RIB',
      type: 'bank',
      rate: '3.8%',
      term: isRTL ? '30 سنة' : '30 years',
      monthly: '4,850',
      downPayment: '10%',
      maxLoan: '6,000,000',
      processing: '1.2%',
      featured: false,
      badge: isRTL ? 'مدة طويلة' : 'Long Term',
    },
    {
      id: 4,
      bank: isRTL ? 'بنك الإنماء' : 'Alinma Bank',
      logo: 'ALM',
      type: 'bank',
      rate: '3.6%',
      term: isRTL ? '25 سنة' : '25 years',
      monthly: '5,100',
      downPayment: '12%',
      maxLoan: '5,500,000',
      processing: '0.8%',
      featured: false,
      badge: isRTL ? 'متوازن' : 'Balanced',
    },
    {
      id: 5,
      bank: isRTL ? 'شركة الدار للتمويل' : 'Dar Finance Company',
      logo: 'DAR',
      type: 'company',
      rate: '3.4%',
      term: isRTL ? '20 سنة' : '20 years',
      monthly: '5,350',
      downPayment: '8%',
      maxLoan: '4,000,000',
      processing: '0.7%',
      featured: true,
      badge: isRTL ? '✨ مميز' : '✨ Special',
    },
    {
      id: 6,
      bank: isRTL ? 'شركة إعمار للتمويل' : 'Emaar Finance',
      logo: 'EMR',
      type: 'company',
      rate: '3.3%',
      term: isRTL ? '25 سنة' : '25 years',
      monthly: '5,180',
      downPayment: '10%',
      maxLoan: '5,500,000',
      processing: '0.6%',
      featured: true,
      badge: isRTL ? '💎 حصري' : '💎 Exclusive',
    },
    {
      id: 7,
      bank: isRTL ? 'بنك البلاد' : 'Bank AlBilad',
      logo: 'BLH',
      type: 'bank',
      rate: '3.7%',
      term: isRTL ? '25 سنة' : '25 years',
      monthly: '5,250',
      downPayment: '10%',
      maxLoan: '5,200,000',
      processing: '0.9%',
      featured: false,
      badge: isRTL ? 'موثوق' : 'Trusted',
    },
    {
      id: 8,
      bank: isRTL ? 'شركة سداد للتمويل' : 'Sadad Finance',
      logo: 'SAD',
      type: 'company',
      rate: '3.9%',
      term: isRTL ? '30 سنة' : '30 years',
      monthly: '4,720',
      downPayment: '5%',
      maxLoan: '3,500,000',
      processing: '1.1%',
      featured: false,
      badge: isRTL ? 'مرن' : 'Flexible',
    },
  ];

  // Filter offers based on active filter
  const financingOffers = allFinancingOffers.filter(offer => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bank') return offer.type === 'bank';
    if (activeFilter === 'company') return offer.type === 'company';
    if (activeFilter === 'best-rate') return offer.featured;
    if (activeFilter === 'low-down') return parseInt(offer.downPayment) <= 10;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f2f4f5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Premium Header */}
      <div className="bg-gradient-to-br from-[#0f4c5c] to-[#0a3540] relative overflow-hidden">
        <div className="absolute bg-[rgba(212,175,55,0.15)] blur-3xl filter right-0 rounded-full size-32 -top-8" />
        <div className="absolute bg-[rgba(255,255,255,0.05)] blur-2xl filter left-0 rounded-full size-24 -bottom-4" />
        
        <div className="relative z-10 px-5 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 hover:bg-white/20 transition-colors border border-white/20"
            >
              {isRTL ? <ArrowRight className="w-5 h-5 text-white" /> : <ArrowLeft className="w-5 h-5 text-white" />}
            </button>
            <div className="text-center flex-1 mx-4">
              <h1 className="text-xl text-white mb-1 tracking-[-0.4px]" dir="auto">
                {isRTL ? 'عروض التمويل' : 'Financing Offers'}
              </h1>
              <p className="text-sm text-[rgba(255,255,255,0.8)]" dir="auto">
                {isRTL ? `${financingOffers.length} عرض متاح` : `${financingOffers.length} offers available`}
              </p>
            </div>
            <button 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 hover:bg-white/20 transition-colors border border-white/20"
              onClick={() => setShowCalculator(!showCalculator)}
            >
              <Calculator className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 text-center">
              <p className="text-xs text-[rgba(255,255,255,0.8)] mb-1" dir="auto">{isRTL ? 'أقل معدل' : 'Lowest'}</p>
              <p className="text-lg text-white">3.2%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 text-center">
              <p className="text-xs text-[rgba(255,255,255,0.8)] mb-1" dir="auto">{isRTL ? 'قسط شهري' : 'Monthly'}</p>
              <p className="text-lg text-white">{(monthlyPayment / 1000).toFixed(1)}K</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 text-center">
              <p className="text-xs text-[rgba(255,255,255,0.8)] mb-1" dir="auto">{isRTL ? 'المدة' : 'Term'}</p>
              <p className="text-lg text-white">{termYears}{isRTL ? 'ث' : 'y'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-[rgba(15,76,92,0.08)] px-5 py-4 sticky top-0 z-20 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] font-medium ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#0f4c5c] to-[#0a3540] text-white shadow-[0px_4px_12px_0px_rgba(15,76,92,0.2)]'
                  : 'bg-white text-[#0e1e25] border border-[rgba(15,76,92,0.1)] hover:border-[rgba(15,76,92,0.2)]'
              }`}
            >
              <span dir="auto">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Calculator Card */}
      {showCalculator && (
        <div className="px-5 mt-5">
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
                <button
                  onClick={() => setShowCalculator(false)}
                  className="w-8 h-8 rounded-full bg-[#f2f4f5] hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <span className="text-gray-500">✕</span>
                </button>
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
                    onValueChange={setLoanAmount}
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
        </div>
      )}

      {/* Financing Offers List */}
      <div className="px-5 mt-5 space-y-4 pb-6">
        {financingOffers.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-12 text-center">
            <div className="bg-gradient-to-br from-[#f2f4f5] to-white rounded-3xl size-20 flex items-center justify-center mx-auto mb-4">
              <Banknote className="w-10 h-10 text-gray-300" />
            </div>
            <p className="text-gray-500" dir="auto">
              {isRTL ? 'لا توجد عروض متاحة' : 'No offers available'}
            </p>
          </div>
        ) : (
          financingOffers.map((offer, index) => (
            <button
              key={offer.id}
              onClick={() => onNavigate('financingDetails', offer)}
              className="w-full bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] border border-[rgba(15,76,92,0.08)] p-5 hover:shadow-[0px_12px_32px_0px_rgba(0,0,0,0.1)] transition-all text-left"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-br from-[#0f4c5c] to-[#0a3540] rounded-2xl size-12 flex items-center justify-center border border-[rgba(15,76,92,0.2)] shadow-[0px_4px_12px_0px_rgba(15,76,92,0.15)]">
                      <span className="text-sm font-bold text-white">{offer.logo}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-[#0e1e25] mb-2 tracking-[-0.3px]" dir="auto">{offer.bank}</h3>
                      <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full px-3 py-1 inline-block shadow-[0px_2px_8px_0px_rgba(212,175,55,0.2)]">
                        <span className="text-white text-xs" dir="auto">{offer.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle favorite
                  }}
                  className="w-9 h-9 rounded-full bg-white border border-[rgba(15,76,92,0.1)] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-white rounded-2xl p-3 text-center shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[rgba(15,76,92,0.05)]">
                  <p className="text-xs text-gray-500 mb-1.5" dir="auto">{isRTL ? 'المعدل' : 'Rate'}</p>
                  <p className="text-base text-[#d4af37]">{offer.rate}</p>
                </div>
                <div className="bg-white rounded-2xl p-3 text-center shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[rgba(15,76,92,0.05)]">
                  <p className="text-xs text-gray-500 mb-1.5" dir="auto">{isRTL ? 'المدة' : 'Term'}</p>
                  <p className="text-base text-[#0e1e25]">{offer.term}</p>
                </div>
                <div className="bg-gradient-to-br from-[#0f4c5c]/5 to-[#0f4c5c]/10 rounded-2xl p-3 text-center border border-[rgba(15,76,92,0.1)]">
                  <p className="text-xs text-gray-500 mb-1.5" dir="auto">{isRTL ? 'شهرياً' : 'Monthly'}</p>
                  <p className="text-base text-[#0f4c5c]">{offer.monthly}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-3 gap-3 mb-5 text-xs">
                <div className="text-center">
                  <p className="text-gray-500 mb-1" dir="auto">{isRTL ? 'دفعة أولى' : 'Down'}</p>
                  <p className="text-[#0e1e25]">{offer.downPayment}</p>
                </div>
                <div className="text-center border-x border-[rgba(15,76,92,0.1)]">
                  <p className="text-gray-500 mb-1" dir="auto">{isRTL ? 'حد أقصى' : 'Max'}</p>
                  <p className="text-[#0e1e25]">{(parseInt(offer.maxLoan.replace(/,/g, '')) / 1000000).toFixed(1)}{isRTL ? 'م' : 'M'}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 mb-1" dir="auto">{isRTL ? 'رسوم' : 'Fee'}</p>
                  <p className="text-[#0e1e25]">{offer.processing}</p>
                </div>
              </div>

              {/* Action Button */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('applicationForm', offer);
                }}
                className="w-full bg-gradient-to-r from-[#0f4c5c] to-[#0a3540] rounded-2xl py-3 flex items-center justify-center gap-2 shadow-[0px_4px_12px_0px_rgba(15,76,92,0.15)] cursor-pointer hover:shadow-[0px_6px_16px_0px_rgba(15,76,92,0.2)] transition-all"
              >
                <span className="text-sm text-white" dir="auto">{isRTL ? 'تقديم طلب التمويل' : 'Apply for Financing'}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </button>
          ))
        )}
      </div>

      {/* Info Banner */}
      <div className="px-5 mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
          <div className="flex gap-3">
            <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-full size-8 flex items-center justify-center shrink-0">
              <Info className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-blue-900" dir="auto">
                {isRTL
                  ? 'جميع العروض خاضعة لموافقة الجهة المانحة والتقييم المالي'
                  : 'All offers subject to lender approval & financial assessment'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar currentScreen="financing" onNavigate={onNavigate} language={language} />
    </div>
  );
}
