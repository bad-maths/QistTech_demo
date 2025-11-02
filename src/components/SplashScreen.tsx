import { useEffect } from 'react';
import { Building2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen bg-gradient-to-br from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] flex flex-col items-center justify-center text-white overflow-hidden relative" dir="rtl">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl float-subtle"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl float-subtle" style={{ animationDelay: '1s' }}></div>
      
      {/* Logo with glassmorphism */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lifted mb-8">
        <div className="animate-pulse">
          <Building2 className="w-24 h-24 text-[#D4AF37] drop-shadow-[0_0_24px_rgba(212,175,55,0.4)]" />
        </div>
      </div>
      
      {/* Brand Name */}
      <h1 className="text-5xl mb-2 tracking-tight relative z-10">قسط تك</h1>
      <h2 className="text-2xl mb-2 text-white/80 tracking-wide relative z-10">QistTech</h2>
      <p className="text-white/60 text-sm tracking-wide relative z-10">منصة عقارية ذكية</p>
      
      {/* Loading indicator */}
      <div className="absolute bottom-12">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-bounce shadow-glow-gold" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-bounce shadow-glow-gold" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-bounce shadow-glow-gold" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
