import { Building2, MapPin, Home } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeePropertiesScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeePropertiesScreen({ onNavigate, language, employeeData }: EmployeePropertiesScreenProps) {
  const isRTL = language === 'ar';

  const properties = [
    {
      id: 1,
      title: isRTL ? 'فيلا النرجس الفاخرة' : 'Luxury Narcissus Villa',
      location: isRTL ? 'الرياض، حي النرجس' : 'Riyadh, Narcissus District',
      price: '1,250,000',
      units: 5,
      available: 3,
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: isRTL ? 'شقق البحر الحديثة' : 'Modern Sea Apartments',
      location: isRTL ? 'جدة، كورنيش البحر' : 'Jeddah, Sea Corniche',
      price: '850,000',
      units: 12,
      available: 8,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      </div>

      <div className="relative z-10">
        <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900">
            {isRTL ? 'عقارات الشركة' : 'Company Properties'}
          </h1>
          <p className="text-sm text-gray-500">
            {employeeData?.company}
          </p>
        </div>

        <div className="px-6 py-6 space-y-4">
          {properties.map((property) => (
            <Card
              key={property.id}
              onClick={() => onNavigate('propertyDetails', property)}
              className="overflow-hidden bg-white/80 backdrop-blur-lg border-purple-100 cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-white/90 text-purple-700">
                  {property.available}/{property.units} {isRTL ? 'متاحة' : 'available'}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{property.title}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>
                <p className="text-xl font-bold text-purple-600">
                  {property.price} {isRTL ? 'ر.س' : 'SAR'}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavBar
        currentScreen="properties"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
}
