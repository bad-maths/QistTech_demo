import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedPropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: string;
    bedrooms: number;
    area: number;
    image: string;
    badge: string;
  };
  onClick: () => void;
  language: 'en' | 'ar';
}

export function FeaturedPropertyCard({ property, onClick, language }: FeaturedPropertyCardProps) {
  const isRTL = language === 'ar';

  return (
    <Card
      className="flex-shrink-0 w-[280px] overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 border-[#0F4C5C]/10 bg-gradient-to-br from-white to-[#F2F4F5]/30 shadow-soft hover:shadow-lifted group"
      onClick={onClick}
    >
      <div className="relative h-[160px] overflow-hidden">
        <ImageWithFallback
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] border-0 text-white shadow-glow-gold">
          {property.badge}
        </Badge>
        
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-soft">
          <Heart className="w-4 h-4 text-[#0F4C5C]" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-sm text-[#0E1E25] mb-2 truncate tracking-tight" dir="auto">{property.title}</h3>
        
        <div className="flex items-center gap-1.5 text-xs text-[#4B5563] mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span className="truncate" dir="auto">{property.location}</span>
        </div>

        <div className="flex items-center gap-3 mb-3 text-xs text-[#4B5563]">
          <div className="flex items-center gap-1">
            <Bed className="w-3.5 h-3.5" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-3.5 h-3.5" />
            <span>{property.area}{isRTL ? 'م²' : 'm²'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#0F4C5C]/5">
          <div>
            <p className="text-xs text-[#4B5563] mb-0.5" dir="auto">{isRTL ? 'السعر' : 'Price'}</p>
            <p className="text-base text-[#0F4C5C]">{property.price} <span className="text-xs">{isRTL ? 'ر.س' : 'SAR'}</span></p>
          </div>
        </div>
      </div>
    </Card>
  );
}
