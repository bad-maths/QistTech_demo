import { useEffect } from 'react';
import QistTechLogo from '../assets/Qis-Tech-highris.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="h-screen flex flex-col items-center justify-center text-white overflow-hidden relative" 
      dir="rtl"
      style={{ backgroundColor: '#1f6862' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl float-subtle"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl float-subtle" style={{ animationDelay: '1s' }}></div>
      
      {/* Logo */}
      <div className="relative z-10">
        <div className="w-40 h-40 flex items-center justify-center">
          <img 
            src={QistTechLogo} 
            alt="QistTech Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Loading indicator */}
      <div className="absolute bottom-12">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-bounce shadow-glow-gold" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-bounce shadow-glow-gold" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-bounce shadow-glow-gold" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
