import { Sparkles, ArrowRight, MapPin, Bed, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SmartRecommendationProps {
  language: 'en' | 'ar';
  onAction: () => void;
}

export function SmartRecommendation({ language, onAction }: SmartRecommendationProps) {
  const isRTL = language === 'ar';

  return (
    <Card className="p-5 mb-6 bg-gradient-to-br from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white border-0 shadow-2xl overflow-hidden relative group">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="relative">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center shadow-glow-gold shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm tracking-tight" dir="auto">{isRTL ? 'توصية ذكية لك' : 'Smart Pick for You'}</h3>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                {isRTL ? 'جديد' : 'New'}
              </Badge>
            </div>
            <p className="text-xs text-white/80" dir="auto">
              {isRTL ? 'بناءً على ميزانيتك وتفضيلاتك' : 'Based on your budget & preferences'}
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 mb-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-1">
              <h4 className="text-sm mb-2" dir="auto">{isRTL ? 'شقة حديثة في حي المال' : 'Modern Apartment in Al Mal'}</h4>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span dir="auto">{isRTL ? 'الرياض' : 'Riyadh'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bed className="w-3 h-3" />
                  <span>3 {isRTL ? 'غرف' : 'BR'}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg">850K</p>
              <p className="text-xs text-white/80">{isRTL ? 'ر.س' : 'SAR'}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-white/10">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <p className="text-xs text-white/90" dir="auto">
              {isRTL ? '95% تطابق مع ميزانيتك' : '95% match with your budget'}
            </p>
          </div>
        </div>

        <Button 
          onClick={onAction}
          className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur-sm"
        >
          <span dir="auto">{isRTL ? 'عرض التفاصيل' : 'View Details'}</span>
          <ArrowRight className={`w-4 h-4 ml-2 ${isRTL ? 'rotate-180' : ''}`} />
        </Button>
      </div>
    </Card>
  );
}
