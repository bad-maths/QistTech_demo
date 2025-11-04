import {
  ArrowLeft,
  ArrowRight,
  Settings as Cog,
  Trophy,
  Medal,
  Star,
  Phone,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Building2,
  CheckCircle2,
  Handshake,
  FileText,
  Bell,
  Shield,
  Clock,
  HelpCircle,
  LogOut,
  GraduationCap,
  Award,
  BadgeCheck,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card } from '../../ui/card';
import { BottomNavBar } from '../../BottomNavBar';

interface ProfileScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function ProfileScreen({ onNavigate, language }: ProfileScreenProps) {
  const isRTL = language === 'ar';
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Float-in stagger for stat/service cards
  useEffect(() => {
    const floating = document.querySelectorAll('.stat-card, .service-card');
    floating.forEach((el, idx) => {
      (el as HTMLElement).style.animationDelay = `${idx * 0.1}s`;
    });
  }, []);

  // IntersectionObserver animation for performance stat-cards
  useEffect(() => {
    const cards = document.querySelectorAll('#performance-metrics .stat-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.style.transform = 'translateY(0)';
          target.style.opacity = '1';
        }
      });
    });
    cards.forEach((c) => {
      const el = c as HTMLElement;
      el.style.transform = 'translateY(20px)';
      el.style.opacity = '0';
      el.style.transition = 'all 0.6s ease';
      observer.observe(c);
    });
    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey((prev) => (prev === key ? null : prev)), 2000);
    } catch (e) {
      console.warn('Copy failed', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-24 legacy-scope" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header with Gradient and Wave */}
      <header id="header" className="relative gradient-primary text-white">
        <div className="px-4 py-6">
          {/* Navigation Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label={isRTL ? 'رجوع' : 'Back'}
            >
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            </button>
            <h1 className="text-xl font-bold">{isRTL ? 'الملف الشخصي' : 'Profile'}</h1>
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all" aria-label="Settings">
              <Cog className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Header */}
          <div className="text-center mb-6">
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-red-500/30 pulse-ring" />
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-[3px] border-red-500">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                <Check className="text-white w-3 h-3" />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-1">{isRTL ? 'محمد أحمد السعيد' : 'Mohammed AlSaeed'}</h2>
            <p className="text-white/80 text-sm mb-3">{isRTL ? 'مستشار تمويل معتمد' : 'Certified Finance Advisor'}</p>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full border border-red-500/40">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold">{isRTL ? 'غير متاح الآن' : 'Not available now'}</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-accent text-lg font-bold">156</div>
              <div className="text-xs text-white/80">{isRTL ? 'طلب تمويل' : 'Finance requests'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-accent text-lg font-bold">98%</div>
              <div className="text-xs text-white/80">{isRTL ? 'معدل الموافقة' : 'Approval rate'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-accent text-lg font-bold">4.9</div>
              <div className="text-xs text-white/80">{isRTL ? 'تقييم العملاء' : 'Customer rating'}</div>
            </div>
          </div>
        </div>

        {/* Wave SVG Separator */}
        <svg className="w-full h-20 relative z-10" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60C360 30 720 30 1080 60C1260 75 1350 75 1440 60V120H0V60Z" fill="#F2F4F5" />
          <path d="M0 70C240 40 480 40 720 70C960 100 1200 100 1440 70V120H0V70Z" fill="url(#wave-gradient-1)" opacity="0.4" />
          <path d="M0 50C300 20 600 20 900 50C1140 75 1320 75 1440 50V120H0V50Z" fill="#F2F4F5" opacity="0.5" />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5" />
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative Elements */}
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-7 right-1/3 w-2 h-2 bg-accent/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-9 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </header>

      {/* Main Content */}
      <main id="main-content" className="px-4 pb-24 -mt-6 relative z-20">
        {/* Current Status Section */}
        <section id="current-status" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-primary">{isRTL ? 'الحالة الحالية' : 'Current status'}</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-600 font-semibold">{isRTL ? 'متاح للعمل' : 'Available'}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="stat-card bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <FileText className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800">{isRTL ? 'طلبات التمويل النشطة' : 'Active finance requests'}</h3>
                      <p className="text-sm text-green-600">{isRTL ? 'قيد المراجعة والمعالجة' : 'Under review and processing'}</p>
                    </div>
                  </div>
                  <div className="text-green-700 font-bold text-2xl">12</div>
                </div>
                <div className="mt-3 pt-3 border-t border-green-200">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-green-700 font-bold">8</div>
                      <div className="text-green-600 text-xs">{isRTL ? 'جديد' : 'New'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-700 font-bold">3</div>
                      <div className="text-green-600 text-xs">{isRTL ? 'قيد المراجعة' : 'Review'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-700 font-bold">1</div>
                      <div className="text-green-600 text-xs">{isRTL ? 'في الانتظار' : 'Pending'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stat-card bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Handshake className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800">{isRTL ? 'مواعيد اليوم' : 'Today’s appointments'}</h3>
                      <p className="text-sm text-blue-600">{isRTL ? 'استشارات ومقابلات عملاء' : 'Client consultations & meetings'}</p>
                    </div>
                  </div>
                  <div className="text-blue-700 font-bold text-2xl">5</div>
                </div>
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600">{isRTL ? 'الموعد التالي' : 'Next appointment'}</span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">2:30 {isRTL ? 'م' : 'PM'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section id="performance-metrics" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'مؤشرات الأداء' : 'Performance indicators'}</h2>

            {/* Monthly Performance */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">{isRTL ? 'هذا الشهر' : 'This month'}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-4 text-center border border-accent/20">
                  <div className="text-accent-dark text-2xl font-bold">42</div>
                  <div className="text-xs text-accent-dark">{isRTL ? 'طلب مُعالج' : 'Processed requests'}</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-green-500 text-xs">+15%</span>
                  </div>
                </div>
                <div className="stat-card bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 text-center border border-primary/20">
                  <div className="text-primary text-2xl font-bold">95%</div>
                  <div className="text-xs text-primary">{isRTL ? 'معدل النجاح' : 'Success rate'}</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-green-500 text-xs">+3%</span>
                  </div>
                </div>
                <div className="stat-card bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200">
                  <div className="text-green-600 text-2xl font-bold">2.1م</div>
                  <div className="text-xs text-green-600">{isRTL ? 'إجمالي التمويل' : 'Total financing'}</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-green-500 text-xs">+22%</span>
                  </div>
                </div>
                <div className="stat-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
                  <div className="text-blue-600 text-2xl font-bold">1.8د</div>
                  <div className="text-xs text-blue-600">{isRTL ? 'متوسط المعالجة' : 'Avg. processing time'}</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-green-500 text-xs">-0.3د</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Performance */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">{isRTL ? 'الأداء الأسبوعي' : 'Weekly performance'}</h3>
              <div className="flex items-end justify-between h-32 gap-2 bg-gray-50 rounded-lg p-4">
                {[
                  { labelAr: 'الأحد', h: '70%' },
                  { labelAr: 'الاثنين', h: '85%' },
                  { labelAr: 'الثلاثاء', h: '90%' },
                  { labelAr: 'الأربعاء', h: '95%', accent: true },
                  { labelAr: 'الخميس', h: '80%' },
                  { labelAr: 'الجمعة', h: '60%' },
                  { labelAr: 'السبت', h: '25%', gray: true },
                ].map((d, i) => (
                  <div className="flex flex-col items-center" key={i}>
                    <div
                      className={`${d.gray ? 'bg-gray-300' : d.accent ? 'bg-accent' : 'bg-primary'} w-6 rounded-t mb-1`}
                      style={{ height: d.h }}
                    />
                    <span className="text-xs text-gray-500">{d.labelAr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-accent/5 rounded-lg p-3 text-center border border-accent/20 achievement-badge">
                <Trophy className="text-accent w-5 h-5 mb-1 mx-auto" />
                <div className="text-xs text-accent-dark font-semibold">{isRTL ? 'أفضل موظف' : 'Top Employee'}</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                <Medal className="text-green-500 w-5 h-5 mb-1 mx-auto" />
                <div className="text-xs text-green-600 font-semibold">{isRTL ? '100 طلب' : '100 Requests'}</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                <Star className="text-blue-500 w-5 h-5 mb-1 mx-auto" />
                <div className="text-xs text-blue-600 font-semibold">{isRTL ? '5 نجوم' : '5 Stars'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section id="client-reviews" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-primary">{isRTL ? 'تقييمات العملاء' : 'Client reviews'}</h2>
              <div className="flex items-center gap-1">
                <Star className="text-accent w-4 h-4" />
                <span className="font-bold text-gray-800">4.9</span>
                <span className="text-sm text-gray-500">{isRTL ? '(127 تقييم)' : '(127 reviews)'}</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: 'سارة أحمد', time: 'منذ أسبوع', img: 'avatar-5.jpg', text: '"خدمة ممتازة وسرعة في الإنجاز. محمد كان متعاوناً جداً وساعدني في الحصول على أفضل عرض تمويل لشراء منزلي الأول."' },
                { name: 'عبدالله محمد', time: 'منذ أسبوعين', img: 'avatar-4.jpg', text: '"أفضل مستشار تمويل تعاملت معه. الشرح واضح والمتابعة مستمرة حتى اكتمال الإجراءات. أنصح به بشدة."' },
                { name: 'نورا سالم', time: 'منذ شهر', img: 'avatar-7.jpg', text: '"تجربة رائعة في تمويل السيارة. الإجراءات سهلة والموافقة كانت سريعة. شكراً لك محمد على الخدمة المميزة."' },
              ].map((r, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${r.img}`}
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{r.name}</h3>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="text-accent w-3.5 h-3.5" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{r.time}</span>
                  </div>
                  <p className="text-sm text-gray-700" dir="auto">{r.text}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-primary font-semibold text-sm hover:bg-primary/5 rounded-lg transition-colors">
              {isRTL ? 'عرض جميع التقييمات' : 'View all reviews'}
            </button>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact-info" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'معلومات التواصل' : 'Contact info'}</h2>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="text-white w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{isRTL ? 'رقم الهاتف' : 'Phone'}</h3>
                  <p className="text-sm text-gray-600 text-left">+966 50 123 4567</p>
                </div>
                <button
                  className={`p-2 rounded-lg ${copiedKey === 'phone' ? 'text-green-600 bg-green-100' : 'bg-primary/10 text-primary hover:bg-primary/20'} transition-colors`}
                  onClick={() => copyToClipboard('phone', '+966 50 123 4567')}
                  aria-label="Copy phone"
                >
                  {copiedKey === 'phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="text-white w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{isRTL ? 'البريد الإلكتروني' : 'Email'}</h3>
                  <p className="text-sm text-gray-600 text-left">m.alsaeed@qisttech.com</p>
                </div>
                <button
                  className={`p-2 rounded-lg ${copiedKey === 'email' ? 'text-green-600 bg-green-100' : 'bg-accent/10 text-accent-dark hover:bg-accent/20'} transition-colors`}
                  onClick={() => copyToClipboard('email', 'm.alsaeed@qisttech.com')}
                  aria-label="Copy email"
                >
                  {copiedKey === 'email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">واتساب</h3>
                  <p className="text-sm text-gray-600 text-left">+966 50 123 4567</p>
                </div>
                <button
                  className={`p-2 rounded-lg ${copiedKey === 'whatsapp' ? 'text-green-600 bg-green-100' : 'bg-green-100 text-green-600 hover:bg-green-200'} transition-colors`}
                  onClick={() => copyToClipboard('whatsapp', '+966 50 123 4567')}
                  aria-label="Copy WhatsApp"
                >
                  {copiedKey === 'whatsapp' ? <Check className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                </button>
              </div>

              {/* Office */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Building2 className="text-white w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{isRTL ? 'المكتب' : 'Office'}</h3>
                  <p className="text-sm text-gray-600">{isRTL ? 'الرياض، حي العليا، برج المملكة' : 'Riyadh, Olaya District, Kingdom Tower'}</p>
                </div>
                <button
                  className={`p-2 rounded-lg ${copiedKey === 'office' ? 'text-green-600 bg-green-100' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-colors`}
                  onClick={() => copyToClipboard('office', isRTL ? 'الرياض، حي العليا، برج المملكة' : 'Riyadh, Olaya District, Kingdom Tower')}
                  aria-label="Copy address"
                >
                  {copiedKey === 'office' ? <Check className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <h3 className="font-semibold text-primary mb-3">{isRTL ? 'ساعات العمل' : 'Working hours'}</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">{isRTL ? 'الأحد - الخميس:' : 'Sun - Thu:'}</span><span className="font-semibold">9:00 {isRTL ? 'ص' : 'AM'} - 6:00 {isRTL ? 'م' : 'PM'}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">{isRTL ? 'الجمعة:' : 'Fri:'}</span><span className="font-semibold">2:00 {isRTL ? 'م' : 'PM'} - 5:00 {isRTL ? 'م' : 'PM'}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">{isRTL ? 'السبت:' : 'Sat:'}</span><span className="font-semibold text-red-500">{isRTL ? 'مغلق' : 'Closed'}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">{isRTL ? 'الطوارئ:' : 'Emergency:'}</span><span className="font-semibold text-green-600">24/7</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Information Section */}
        <section id="professional-info" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'المعلومات المهنية' : 'Professional info'}</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-4 border border-primary/20">
                <h3 className="font-semibold text-primary mb-3">{isRTL ? 'الخبرة والمؤهلات' : 'Experience & qualifications'}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3"><GraduationCap className="text-primary w-4 h-4" /><span className="text-gray-700">{isRTL ? 'بكالوريوس إدارة أعمال - جامعة الملك سعود' : 'BSc Business Administration - KSU'}</span></div>
                  <div className="flex items-center gap-3"><BadgeCheck className="text-accent w-4 h-4" /><span className="text-gray-700">{isRTL ? 'شهادة مستشار تمويل معتمد (CFC)' : 'Certified Finance Consultant (CFC)'}</span></div>
                  <div className="flex items-center gap-3"><Award className="text-green-500 w-4 h-4" /><span className="text-gray-700">{isRTL ? 'خبرة 8 سنوات في مجال التمويل' : '8 years experience in finance'}</span></div>
                  <div className="flex items-center gap-3"><Medal className="text-blue-500 w-4 h-4" /><span className="text-gray-700">{isRTL ? 'عضو الجمعية السعودية للتمويل' : 'Member, Saudi Finance Association'}</span></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl p-4 border border-accent/20">
                <h3 className="font-semibold text-accent-dark mb-3">{isRTL ? 'التخصصات' : 'Specialties'}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    isRTL ? 'التمويل العقاري' : 'Real estate finance',
                    isRTL ? 'تمويل السيارات' : 'Auto finance',
                    isRTL ? 'التمويل التجاري' : 'Commercial finance',
                    isRTL ? 'القروض الشخصية' : 'Personal loans',
                    isRTL ? 'إعادة التمويل' : 'Refinancing',
                    isRTL ? 'الاستشارات المالية' : 'Financial consulting',
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="text-green-500 w-3.5 h-3.5" />
                      <span className="text-gray-700">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-3">{isRTL ? 'الإنجازات المهنية' : 'Professional achievements'}</h3>
                <div className="space-y-2 text-sm">
                  {[{ n: 1, textAr: 'أفضل مستشار تمويل لعام 2023', textEn: 'Top finance consultant 2023' }, { n: 2, textAr: 'تحقيق أعلى معدل رضا عملاء (98%)', textEn: 'Achieved highest customer satisfaction (98%)' }, { n: 3, textAr: 'معالجة أكثر من 1000 طلب تمويل', textEn: 'Processed over 1000 finance requests' }].map((a, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`${i === 1 ? 'bg-accent' : i === 2 ? 'bg-green-500' : 'bg-blue-500'} w-6 h-6 rounded-full flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">{a.n}</span>
                      </div>
                      <span className="text-gray-700">{isRTL ? a.textAr : a.textEn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Settings Section */}
        <section id="settings" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'إعدادات الحساب' : 'Account settings'}</h2>
            <div className="space-y-3">
              {[
                { icon: FileText, labelAr: 'تعديل الملف الشخصي', labelEn: 'Edit profile', color: 'text-primary' },
                { icon: Bell, labelAr: 'إعدادات التنبيهات', labelEn: 'Notification settings', color: 'text-accent' },
                { icon: Clock, labelAr: 'ساعات العمل', labelEn: 'Working hours', color: 'text-green-500' },
                { icon: Shield, labelAr: 'الأمان والخصوصية', labelEn: 'Security & privacy', color: 'text-blue-500' },
                { icon: HelpCircle, labelAr: 'المساعدة والدعم', labelEn: 'Help & support', color: 'text-purple-500' },
                { icon: LogOut, labelAr: 'تسجيل الخروج', labelEn: 'Logout', color: 'text-red-500', isLogout: true },
              ].map((s, i) => {
                const Icon = s.icon as any;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (s.isLogout) {
                        if (window.confirm(isRTL ? 'هل أنت متأكد من تسجيل الخروج؟' : 'Are you sure you want to logout?')) {
                          onNavigate('auth');
                        }
                      } else {
                        // Placeholder for settings navigations
                        // eslint-disable-next-line no-console
                        console.log('Navigate to', isRTL ? s.labelAr : s.labelEn);
                      }
                    }}
                    className={`w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors ${s.isLogout ? 'bg-red-50 hover:bg-red-100' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`${s.color}`} />
                      <span className={`font-semibold ${s.isLogout ? 'text-red-600' : 'text-gray-800'}`}>{isRTL ? s.labelAr : s.labelEn}</span>
                    </div>
                    <ArrowRight className="text-gray-400 w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>

  {/* Bottom Navigation - keep original app navbar, business variant */}
  <BottomNavBar currentScreen="profile" onNavigate={onNavigate} language={language} variant="business" />

      {/* Scoped styles to match imported HTML tokens without global bleed */}
      <style>{`
        .gradient-primary { background: linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%); }
        .gradient-accent { background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%); }
        .pulse-ring { animation: pulse-ring 2s infinite; }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
        .stat-card { transition: all 0.3s ease; transform: translateY(0); }
        .stat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(15,76,92,0.1); }
        .service-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); transform: translateY(0); }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(15,76,92,0.15); }
        .achievement-badge { animation: glow 2s ease-in-out infinite alternate; }
        .achievement-badge:hover { animation-duration: 1s; }
        @keyframes glow { from { box-shadow: 0 0 5px rgba(212,175,55,0.3); } to { box-shadow: 0 0 20px rgba(212,175,55,0.6); } }
        /* Fallback token utilities within legacy scope */
        .legacy-scope .text-primary { color: #0F4C5C; }
        .legacy-scope .bg-primary { background-color: #0F4C5C; }
        .legacy-scope .text-accent { color: #D4AF37; }
        .legacy-scope .text-accent-dark { color: #B8941F; }
        .legacy-scope .bg-accent { background-color: #D4AF37; }
      `}</style>
    </div>
  );
}
