import { useState } from 'react';
import { ChevronRight, ChevronLeft, Building2, CreditCard, Users, Globe } from 'lucide-react';
import { Button } from './ui/button';

interface OnboardingScreenProps {
  onComplete: () => void;
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

export function OnboardingScreen({ onComplete, language, setLanguage }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Building2,
      titleEn: 'Find Your Dream Property',
      titleAr: 'اعثر على عقارك المثالي',
      descEn: 'Browse thousands of properties from verified developers with QistTech',
      descAr: 'تصفح آلاف العقارات من مطورين موثوقين مع قسط تك',
    },
    {
      icon: CreditCard,
      titleEn: 'Smart Financing Options',
      titleAr: 'خيارات تمويل ذكية',
      descEn: 'Compare and apply for financing from multiple institutions seamlessly',
      descAr: 'قارن وتقدم بطلب التمويل من عدة مؤسسات بكل سهولة',
    },
    {
      icon: Users,
      titleEn: 'Integrated Platform',
      titleAr: 'منصة متكاملة',
      descEn: 'Everything you need for your real estate journey in one place',
      descAr: 'كل ما تحتاجه لرحلة عقارك في مكان واحد',
    },
  ];

  const currentContent = slides[currentSlide];
  const Icon = currentContent.icon;
  const isRTL = language === 'ar';

  return (
    <div className="h-screen bg-gradient-to-br from-[#F2F4F5] via-white to-[#F2F4F5] flex flex-col relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0F4C5C]/5 rounded-full blur-3xl float-subtle"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl float-subtle" style={{ animationDelay: '1s' }}></div>
      
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md rounded-2xl text-[#0F4C5C] hover:bg-white shadow-soft hover:shadow-lifted transition-smooth"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center relative z-10">
        <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-3xl p-10 mb-8 shadow-lifted scale-in">
          <Icon className="w-20 h-20 text-[#D4AF37]" />
        </div>
        <h2 className="text-3xl mb-4 text-[#0E1E25] tracking-tight">
          {isRTL ? currentContent.titleAr : currentContent.titleEn}
        </h2>
        <p className="text-[#4B5563] max-w-sm text-lg leading-relaxed">
          {isRTL ? currentContent.descAr : currentContent.descEn}
        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mb-8 relative z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-smooth ${
              index === currentSlide ? 'w-8 bg-gradient-to-r from-[#0F4C5C] to-[#D4AF37] shadow-glow-gold' : 'w-2 bg-[#0F4C5C]/20'
            }`}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="px-6 pb-8 flex gap-3 relative z-10">
        {currentSlide < slides.length - 1 ? (
          <>
            <Button
              variant="outline"
              onClick={onComplete}
              className="flex-1"
            >
              {isRTL ? 'تخطي' : 'Skip'}
            </Button>
            <Button
              onClick={() => setCurrentSlide(currentSlide + 1)}
              className="flex-1"
            >
              {isRTL ? 'التالي' : 'Next'}
              {isRTL ? <ChevronLeft className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 ml-2" />}
            </Button>
          </>
        ) : (
          <Button
            onClick={onComplete}
            className="flex-1 bg-gradient-to-b from-[#D4AF37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#D4AF37] text-[#0F4C5C] shadow-glow-gold border-0"
          >
            {isRTL ? 'ابدأ الآن' : 'Get Started'}
          </Button>
        )}
      </div>
    </div>
  );
}
