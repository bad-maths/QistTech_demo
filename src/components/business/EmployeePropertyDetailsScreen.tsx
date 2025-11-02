import { ArrowLeft, ArrowRight, MapPin, Home, Bed, Maximize, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeePropertyDetailsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  propertyData: any;
  employeeData: any;
}

export function EmployeePropertyDetailsScreen({ onNavigate, language, propertyData, employeeData }: EmployeePropertyDetailsScreenProps) {
  const isRTL = language === 'ar';

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => onNavigate('properties')}
          className="p-2 hover:bg-purple-100 rounded-full transition-colors"
        >
          {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
        </button>
        <h1 className="text-xl font-semibold text-gray-900">
          {isRTL ? 'تفاصيل العقار' : 'Property Details'}
        </h1>
      </div>

      <div className="relative h-64">
        <ImageWithFallback
          src={propertyData?.image}
          alt={propertyData?.title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-white/90 text-purple-700">
          {propertyData?.available}/{propertyData?.units} {isRTL ? 'متاحة' : 'available'}
        </Badge>
      </div>

      <div className="px-6 py-6 space-y-6 pb-28">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{propertyData?.title}</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{propertyData?.location}</span>
          </div>
        </div>

        <Card className="p-6 bg-white/80 backdrop-blur-lg border-purple-100">
          <p className="text-3xl font-bold text-purple-600">
            {propertyData?.price} {isRTL ? 'ر.س' : 'SAR'}
          </p>
        </Card>

        <Button
          onClick={() => onNavigate('home')}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          {isRTL ? 'حجز وحدة للعميل' : 'Book Unit for Customer'}
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar
        currentScreen="properties"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />
    </div>
  );
}
