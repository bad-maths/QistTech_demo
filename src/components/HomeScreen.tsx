import { useState } from 'react';
import { Search, Bell, Calculator, TrendingUp, MapPin, Heart, Building2, MessageSquare, UserPlus, Map, ArrowRight, ArrowLeft, Sparkles, Zap, Award, ChevronRight, Clock, CheckCircle2, TrendingDown, FileText, BarChart3 } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BottomNavBar } from './BottomNavBar';
import { FeaturedPropertyCard } from './FeaturedPropertyCard';
import { FinancialInsightCard } from './FinancialInsightCard';
import { ActivityTimeline } from './ActivityTimeline';
import { MarketTrendCard } from './MarketTrendCard';
import { SmartRecommendation } from './SmartRecommendation';
import AlAhliLogo from '../assets/شعار البنك الأهلي التجاري.svg';
import AlRajhiLogo from '../assets/شعار مصرف الراجحي الجديد.svg';

interface HomeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function HomeScreen({ onNavigate, language }: HomeScreenProps) {
  const isRTL = language === 'ar';
  const [showCalculatorDrawer, setShowCalculatorDrawer] = useState(false);
  const [loanAmount, setLoanAmount] = useState([1000000]);
  const [downPaymentAmount, setDownPaymentAmount] = useState(100000);
  const [termYears, setTermYears] = useState(25);

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0];
    const loanAfterDown = principal - downPaymentAmount;
    const annualRate = 3.5;
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    
    if (monthlyRate === 0) {
      return Math.round(loanAfterDown / numberOfPayments);
    }
    
    const monthlyPayment =
      (loanAfterDown * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const downPaymentPercentage = ((downPaymentAmount / loanAmount[0]) * 100).toFixed(0);

  // Featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: isRTL ? 'شقة حديثة في برج فاخر' : 'Modern Apartment',
      location: isRTL ? 'الرياض، حي المال' : 'Riyadh, Al Mal',
      price: '1,650,000',
      bedrooms: 4,
      area: 220,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: isRTL ? 'حصري' : 'Exclusive',
    },
    {
      id: 2,
      title: isRTL ? 'فيلا عصرية مع حديقة' : 'Modern Villa with Garden',
      location: isRTL ? 'جدة، حي البحر' : 'Jeddah, Al Bahr',
      price: '2,800,000',
      bedrooms: 5,
      area: 350,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: isRTL ? 'مميز' : 'Featured',
    },
    {
      id: 3,
      title: isRTL ? 'شقة فاخرة في وسط المدينة' : 'Luxury Downtown Apartment',
      location: isRTL ? 'الرياض، حي النخيل' : 'Riyadh, Al Nakheel',
      price: '1,250,000',
      bedrooms: 3,
      area: 180,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      badge: isRTL ? 'جديد' : 'New',
    },
  ];

  // Financing offers data
  const financingOffers = [
    {
      id: 1,
      bank: isRTL ? 'البنك الأهلي' : 'Al Ahli Bank',
      rate: '3.5%',
      term: isRTL ? '25 سنة' : '25 years',
      monthly: '5,200',
      badge: isRTL ? 'الأفضل' : 'Best',
      logo: AlAhliLogo,
    },
    {
      id: 2,
      bank: isRTL ? 'بنك الراجحي' : 'Al Rajhi Bank',
      rate: '3.2%',
      term: isRTL ? '20 سنة' : '20 years',
      monthly: '5,450',
      badge: isRTL ? 'معدل منخفض' : 'Low Rate',
      logo: AlRajhiLogo,
    },
  ];

  // Quick actions data
  const quickActionsData = [
    {
      id: 1,
      title: isRTL ? 'عروض التمويل' : 'Financing Offers',
      subtitle: isRTL ? 'ابدأ من 3.2%' : 'From 3.2%',
      icon: TrendingUp,
      gradient: 'from-[#D4AF37] to-[#B8941F]',
      bgGradient: 'from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/3',
      action: () => onNavigate('financingListings'),
      accentIcon: Zap,
      accentColor: '#D4AF37',
    },
    {
      id: 2,
      title: isRTL ? 'تصفح العقارات' : 'Browse Properties',
      subtitle: isRTL ? '200+ عقار متاح' : '200+ available',
      icon: Building2,
      gradient: 'from-[#0F4C5C] to-[#0A3540]',
      bgGradient: 'from-[#0F4C5C]/10 via-[#0F4C5C]/5 to-[#0F4C5C]/3',
      action: () => onNavigate('propertyListings'),
      showDot: true,
    },
    {
      id: 3,
      title: isRTL ? 'إحالة موظف' : 'Refer Employee',
      subtitle: isRTL ? 'دعم احترافي' : 'Professional support',
      icon: UserPlus,
      gradient: 'from-[#D4AF37] to-[#B8941F]',
      bgGradient: 'from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/3',
      action: () => onNavigate('employeeReferral'),
      accentIcon: Award,
      accentColor: '#D4AF37',
    },
    {
      id: 4,
      title: isRTL ? 'عرض الخريطة' : 'Map View',
      subtitle: isRTL ? 'اكتشف حسب الموقع' : 'Explore locations',
      icon: Map,
      gradient: 'from-[#0F4C5C] to-[#0A3540]',
      bgGradient: 'from-[#0F4C5C]/10 via-[#0F4C5C]/5 to-[#0F4C5C]/3',
      action: () => onNavigate('mapView'),
      accentIcon: MapPin,
      accentColor: '#0F4C5C',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2F4F5] via-[#F2F4F5] to-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ========== PREMIUM HEADER ========== */}
      <div className="relative h-[220px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672757685171-190853353acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Header Background"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C5C]/95 via-[#0A3540]/90 to-[#0F4C5C]/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C5C] via-transparent to-transparent"></div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute top-10 right-[10%] w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 left-[15%] w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-[20%] w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric Decorations */}
        <div className="absolute top-16 right-8 w-16 h-16 border border-[#D4AF37]/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute bottom-16 left-8 w-12 h-12 border border-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative z-10 h-full px-6 pt-6 pb-6 flex flex-col">
          {/* Top Bar - Logo, Search, Notifications */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center shadow-glow-gold">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm tracking-tight">QistTech</span>
                <span className="text-[#D4AF37] text-xs">قسط تك</span>
              </div>
            </div>

            {/* Search & Notifications */}
            <div className="flex items-center gap-2">
              {/* Search by Location */}
              <button 
                onClick={() => onNavigate('mapView')}
                className="bg-white/15 backdrop-blur-xl rounded-xl px-3 py-2 hover:bg-white/25 transition-all duration-300 border border-white/10 flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-white" />
                <Search className="w-4 h-4 text-white" />
              </button>

              {/* Referral */}
              <button 
                onClick={() => onNavigate('employeeReferral')}
                className="bg-white/15 backdrop-blur-xl rounded-xl p-2 hover:bg-white/25 transition-all duration-300 border border-white/10"
              >
                <UserPlus className="w-4.5 h-4.5 text-white" />
              </button>

              {/* Notifications */}
              <button 
                onClick={() => onNavigate('notifications')}
                className="bg-white/15 backdrop-blur-xl rounded-xl p-2 relative hover:bg-white/25 transition-all duration-300 border border-white/10"
              >
                <Bell className="w-4.5 h-4.5 text-white" />
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full shadow-glow-gold flex items-center justify-center">
                  <span className="text-[9px] text-white">5</span>
                </span>
              </button>

              {/* Messages */}
              <button 
                onClick={() => onNavigate('chat')}
                className="bg-white/15 backdrop-blur-xl rounded-xl p-2 relative hover:bg-white/25 transition-all duration-300 border border-white/10"
              >
                <MessageSquare className="w-4.5 h-4.5 text-white" />
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full shadow-glow-gold flex items-center justify-center">
                  <span className="text-[9px] text-white">3</span>
                </span>
              </button>
            </div>
          </div>

          {/* Promotional Tagline */}
          <div className="absolute top-20 left-0 right-0 w-full px-6">
            <div className="text-center">
              <h2 className="text-white text-3xl font-bold tracking-tight">
                {isRTL ? 'تواصل أسرع. تمويل أذكى. تجربة أسهل' : 'Faster Communication. Smarter Financing. Easier Experience'}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ========== WAVE TRANSITION ========== */}
      <div className="relative -mt-16 overflow-hidden">
        {/* Floating gradient orbs for depth */}
        <div className="absolute top-4 left-[10%] w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-6 right-[20%] w-20 h-20 bg-[#0F4C5C]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Wave SVG with gradient */}
        <svg className="w-full h-28 relative z-10" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">

          <path d="M0 60C360 30 720 30 1080 60C1260 75 1350 75 1440 60V120H0V60Z" fill="#F2F4F5"/>
          

          <path d="M0 70C240 40 480 40 720 70C960 100 1200 100 1440 70V120H0V70Z" fill="url(#wave-gradient-1)" opacity="0.4" className="animate-gentle-float"/>
          

          <path d="M0 50C300 20 600 20 900 50C1140 75 1320 75 1440 50V120H0V50Z" fill="#F2F4F5" opacity="0.5" className="animate-gentle-float"/>
          
          <defs>
            <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4"/>
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5"/>
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative dots pattern */}
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-[#0F4C5C]/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-7 right-1/3 w-2 h-2 bg-[#D4AF37]/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-9 right-1/4 w-1.5 h-1.5 bg-[#0F4C5C]/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="px-6 pt-4">
      

        {/* ========== FEATURED PROPERTIES ========== */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg text-[#0E1E25] tracking-tight flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4AF37]" />
                <span dir="auto">{isRTL ? 'عقارات مميزة' : 'Featured Properties'}</span>
              </h2>
              <p className="text-xs text-[#4B5563] mt-1" dir="auto">{isRTL ? 'مختارة خصيصاً لك' : 'Handpicked for you'}</p>
            </div>
            <button
              onClick={() => onNavigate('propertyListings')}
              className="text-[#0F4C5C] text-sm font-medium hover:text-[#D4AF37] transition-smooth flex items-center gap-1"
            >
              <span dir="auto">{isRTL ? 'الكل' : 'All'}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar -mx-6 px-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {featuredProperties.map((property) => (
              <FeaturedPropertyCard
                key={property.id}
                property={property}
                onClick={() => onNavigate('propertyDetails')}
                language={language}
              />
            ))}
          </div>
        </div>

  {/* ========== QUICK ACTIONS CAROUSEL ========== */}
        <Card className="p-5 mb-6 shadow-lifted border-[#0F4C5C]/5 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl flex items-center justify-center shadow-soft">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm text-[#0E1E25] tracking-tight" dir="auto">{isRTL ? 'إجراءات سريعة' : 'Quick Actions'}</h3>
            </div>
            <Badge variant="accent" className="text-xs">{isRTL ? 'جديد' : 'New'}</Badge>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar -mx-5 px-5" dir={isRTL ? 'rtl' : 'ltr'}>
            {quickActionsData.map((action) => {
              const IconComponent = action.icon;
              const AccentIcon = action.accentIcon;
              return (
                <button
                  key={action.id}
                  onClick={action.action}
                  className={`group relative bg-gradient-to-br ${action.bgGradient} rounded-3xl p-5 text-start hover:scale-[1.03] transition-all duration-300 border border-[#0F4C5C]/10 hover:border-[#0F4C5C]/20 overflow-hidden shadow-soft hover:shadow-lifted flex-shrink-0 w-[160px]`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#0F4C5C]/5 rounded-full blur-2xl group-hover:bg-[#0F4C5C]/10 transition-all"></div>
                  <div className="relative">
                    <div className={`w-12 h-12 mb-3 bg-gradient-to-br ${action.gradient} rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow-gold transition-all group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-[#0E1E25] mb-1.5" dir="auto">{action.title}</p>
                    <div className="flex items-center gap-1.5">
                      {action.showDot && (
                        <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse"></div>
                      )}
                      {AccentIcon && <AccentIcon className="w-3 h-3" style={{ color: action.accentColor }} />}
                      <p className="text-xs text-[#4B5563]" dir="auto">{action.subtitle}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* ========== FINANCIAL INSIGHT CARD ========== */}
        <FinancialInsightCard language={language} />

        {/* ========== CALCULATOR CTA CARD ========== */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white border-0 shadow-2xl overflow-hidden relative group cursor-pointer" onClick={() => setShowCalculatorDrawer(true)}>
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-all duration-500"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37] rounded-3xl blur-md opacity-50 group-hover:opacity-75 transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#B8941F] backdrop-blur-sm rounded-3xl p-4 shadow-glow-gold group-hover:scale-110 transition-all">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="mb-1.5 tracking-tight flex items-center gap-2">
                  <span dir="auto">{isRTL ? 'احسب قدرتك الشرائية' : 'Calculate Your Budget'}</span>
                  <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                </h3>
                <p className="text-sm text-white/80" dir="auto">
                  {isRTL ? 'اكتشف كم يمكنك الاقتراض بسهولة' : 'Find out how much you can borrow'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {isRTL ? 'مجاناً' : 'Free'}
              </Badge>
              <ChevronRight className={`w-7 h-7 text-[#D4AF37] group-hover:translate-x-2 transition-all ${isRTL ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </Card>

        {/* ========== SMART RECOMMENDATION ========== */}
        <SmartRecommendation
          language={language}
          onAction={() => onNavigate('propertyListings')}
        />

        {/* ========== FINANCING OFFERS CAROUSEL ========== */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg text-[#0E1E25] tracking-tight flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-[#0F4C5C]" />
                <span dir="auto">{isRTL ? 'أفضل عروض التمويل' : 'Best Financing Offers'}</span>
              </h2>
              <p className="text-xs text-[#4B5563] mt-1" dir="auto">{isRTL ? 'معدلات تنافسية' : 'Competitive rates'}</p>
            </div>
            <button
              onClick={() => onNavigate('financingListings')}
              className="text-[#0F4C5C] text-sm font-medium hover:text-[#D4AF37] transition-smooth flex items-center gap-1"
            >
              <span dir="auto">{isRTL ? 'المزيد' : 'More'}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar -mx-6 px-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {financingOffers.map((offer) => (
              <Card
                key={offer.id}
                className="p-4 cursor-pointer hover:scale-[1.01] transition-smooth border-[#0F4C5C]/10 bg-gradient-to-br from-white to-[#F2F4F5]/30 group flex-shrink-0 w-[280px]"
                onClick={() => onNavigate('financingDetails')}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm text-[#0E1E25] truncate tracking-tight" dir="auto">{offer.bank}</h3>
                    <Badge variant="accent" className="mt-1 text-xs">
                      {offer.badge}
                    </Badge>
                  </div>
                  <img 
                    src={offer.logo} 
                    alt={offer.bank}
                    className="w-20 h-20 object-contain flex-shrink-0"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[rgba(242,244,245,0.7)] rounded-2xl p-2 text-center">
                    <p className="text-xs text-[#4B5563] mb-0.5" dir="auto">{isRTL ? 'شهرياً' : 'Monthly'}</p>
                    <p className="text-sm text-[#0F4C5C]">{offer.monthly}</p>
                  </div>
                  <div className="bg-[rgba(242,244,245,0.7)] rounded-2xl p-2 text-center">
                    <p className="text-xs text-[#4B5563] mb-0.5" dir="auto">{isRTL ? 'المدة' : 'Term'}</p>
                    <p className="text-sm text-[#0E1E25]">{offer.term}</p>
                  </div>
                  <div className="bg-[rgba(242,244,245,0.7)] rounded-2xl p-2 text-center">
                    <p className="text-xs text-[#4B5563] mb-0.5" dir="auto">{isRTL ? 'المعدل' : 'Rate'}</p>
                    <p className="text-sm text-[#0E1E25]">{offer.rate}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ========== CALCULATOR OVERLAY ========== */}
      {showCalculatorDrawer && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={() => setShowCalculatorDrawer(false)}>
          <div className="w-full max-w-md mx-auto bg-white rounded-t-2xl p-4 overflow-y-auto" style={{ maxHeight: '50vh' }} onClick={(e) => e.stopPropagation()} dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#D4AF37]" />
                <h4 className="text-sm font-semibold text-[#0E1E25]" dir="auto">{isRTL ? 'حاسبة التمويل العقاري' : 'Mortgage Calculator'}</h4>
              </div>
              <button className="text-[#4B5563] text-sm" onClick={() => setShowCalculatorDrawer(false)}>✕</button>
            </div>
            
            <div className="space-y-6">
              {/* Loan Amount */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label dir="auto">{isRTL ? 'مبلغ القرض' : 'Loan Amount'}</Label>
                  <span className="text-lg text-[#0F4C5C]">{loanAmount[0].toLocaleString()} <span className="text-sm">{isRTL ? 'ر.س' : 'SAR'}</span></span>
                </div>
                <Slider
                  value={loanAmount}
                  onValueChange={setLoanAmount}
                  max={5000000}
                  min={100000}
                  step={50000}
                  className="w-full"
                />
              </div>

              {/* Down Payment */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label dir="auto">{isRTL ? 'الدفعة المقدمة' : 'Down Payment'}</Label>
                  <span className="text-lg text-[#0F4C5C]">
                    {downPaymentAmount.toLocaleString()} <span className="text-sm">{isRTL ? 'ر.س' : 'SAR'}</span>
                    <span className="text-xs text-[#4B5563] mr-1">({downPaymentPercentage}%)</span>
                  </span>
                </div>
                <Slider
                  value={[downPaymentAmount]}
                  onValueChange={(v: number[]) => setDownPaymentAmount(v[0])}
                  max={loanAmount[0] * 0.5}
                  min={loanAmount[0] * 0.05}
                  step={10000}
                  className="w-full"
                />
              </div>

              {/* Term Years */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label dir="auto">{isRTL ? 'مدة القرض' : 'Loan Term'}</Label>
                  <span className="text-lg text-[#0F4C5C]">{termYears} <span className="text-sm">{isRTL ? 'سنة' : 'years'}</span></span>
                </div>
                <Slider
                  value={[termYears]}
                  onValueChange={(v: number[]) => setTermYears(v[0])}
                  max={30}
                  min={5}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Results */}
              <Card className="p-6 bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white border-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80" dir="auto">{isRTL ? 'القسط الشهري المتوقع' : 'Estimated Monthly Payment'}</span>
                  </div>
                  <div className="text-3xl">{monthlyPayment.toLocaleString()} <span className="text-lg">{isRTL ? 'ر.س' : 'SAR'}</span></div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-xs text-white/60 mb-1" dir="auto">{isRTL ? 'الفائدة السنوية' : 'Annual Rate'}</p>
                      <p className="text-lg">3.5%</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60 mb-1" dir="auto">{isRTL ? 'إجمالي الدفعات' : 'Total Payments'}</p>
                      <p className="text-lg">{(monthlyPayment * termYears * 12).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Button 
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-white"
                onClick={() => {
                  setShowCalculatorDrawer(false);
                  onNavigate('financingListings');
                }}
              >
                <span dir="auto">{isRTL ? 'تقدم بطلب تمويل' : 'Apply for Financing'}</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ========== BOTTOM NAVIGATION ========== */}
      <BottomNavBar language={language} onNavigate={onNavigate} currentScreen="home" />
    </div>
  );
}
