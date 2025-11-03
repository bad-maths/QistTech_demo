import { ArrowLeft, ArrowRight, MapPin, Bed, Bath, Maximize, Calendar, Building2, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeePropertyDetailsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  propertyData: any;
  employeeData: any;
}

export function EmployeePropertyDetailsScreen({ onNavigate, language, propertyData: propPropertyData, employeeData }: EmployeePropertyDetailsScreenProps) {
  const isRTL = language === 'ar';

  // Use passed property data, with fallbacks for safety
  const propertyData = {
    id: propPropertyData?.id || 1,
    title: propPropertyData?.title || (isRTL ? 'شقة فاخرة في وسط المدينة' : 'Luxury Apartment Downtown'),
    location: propPropertyData?.location || (isRTL ? 'الرياض، حي النخيل' : 'Riyadh, Palm District'),
    price: propPropertyData?.price || '1,250,000',
    developer: propPropertyData?.developer || (isRTL ? 'شركة العمران' : 'Omran Development'),
    image: propPropertyData?.image || 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    units: propPropertyData?.units || 10,
    available: propPropertyData?.available || 5,
  };

  const images = [
    propertyData.image,
    'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const features = [
    { icon: Bed, label: isRTL ? '3 غرف نوم' : '3 Bedrooms', value: '3' },
    { icon: Bath, label: isRTL ? '2 حمام' : '2 Bathrooms', value: '2' },
    { icon: Maximize, label: isRTL ? '180 م²' : '180 m²', value: '180' },
    { icon: Calendar, label: isRTL ? 'جاهز 2025' : 'Ready 2025', value: '2025' },
  ];

  const amenities = [
    isRTL ? 'موقف سيارات' : 'Parking',
    isRTL ? 'مسبح' : 'Swimming Pool',
    isRTL ? 'صالة رياضية' : 'Gym',
    isRTL ? 'أمن 24/7' : '24/7 Security',
    isRTL ? 'حديقة' : 'Garden',
    isRTL ? 'ملعب أطفال' : 'Kids Area',
  ];

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-32 text-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Image Gallery */}
      <div className="relative">
        <ImageWithFallback
          src={images[0]}
          alt="Property"
          className="w-full h-80 object-cover"
        />
        <button
          onClick={() => onNavigate('properties')}
          className="absolute top-6 left-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          {isRTL ? <ArrowRight className="w-6 h-6 text-[#0F4C5C]" /> : <ArrowLeft className="w-6 h-6 text-[#0F4C5C]" />}
        </button>
        <div className="absolute top-6 right-6">
            <Badge className="bg-white/90 text-[#0F4C5C] border-0 font-medium py-2 px-3">
              {propertyData?.available}/{propertyData?.units} {isRTL ? 'متاحة' : 'available'}
            </Badge>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <div className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-[#0F4C5C]">1 / 2</div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Title and Price */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h1 className="text-2xl mb-2 text-[#0E1E25] font-bold">
                {propertyData.title}
              </h1>
              <div className="flex items-center text-[#4B5563] mb-2">
                <MapPin className="w-4 h-4 ml-1" />
                <span>{propertyData.location}</span>
              </div>
            </div>
            <Badge className="bg-[#10B981] text-white border-0 font-medium">
              {isRTL ? 'متاح' : 'Available'}
            </Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl text-[#0F4C5C] font-bold">{propertyData.price}</span>
            <span className="text-[#4B5563]">{isRTL ? 'ريال سعودي' : 'SAR'}</span>
          </div>
        </div>

        {/* Features Grid */}
        <Card className="p-4 mb-6 border-teal-100 bg-white">
          <div className="grid grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-teal-50 rounded-lg p-3 mb-2 inline-flex">
                    <Icon className="w-5 h-5 text-[#0F4C5C]" />
                  </div>
                  <p className="text-xs text-[#4B5563]">{feature.label}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">{isRTL ? 'نظرة عامة' : 'Overview'}</TabsTrigger>
            <TabsTrigger value="amenities">{isRTL ? 'المرافق' : 'Amenities'}</TabsTrigger>
            <TabsTrigger value="developer">{isRTL ? 'المطور' : 'Developer'}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-4">
            <div>
              <h3 className="mb-3 text-gray-900">{isRTL ? 'الوصف' : 'Description'}</h3>
              <p className="text-gray-600 leading-relaxed">
                {isRTL
                  ? 'شقة فاخرة بتصميم عصري في موقع متميز في حي النخيل. تتميز بإطلالة رائعة ومساحات واسعة وتشطيبات راقية. قريبة من جميع الخدمات والمرافق الأساسية.'
                  : 'Luxurious apartment with modern design in a prime location in Palm District. Features stunning views, spacious areas, and premium finishes. Close to all essential services and facilities.'}
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-gray-900">{isRTL ? 'الموقع' : 'Location'}</h3>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
                {isRTL ? 'خريطة الموقع' : 'Map View'}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="mt-4">
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 text-[#4B5563]">
                  <div className="w-2 h-2 bg-[#0F4C5C] rounded-full"></div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="developer" className="mt-4">
            <Card className="p-4 border-teal-100 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-teal-50 rounded-full p-4">
                  <Building2 className="w-8 h-8 text-[#0F4C5C]" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-[#0E1E25] font-semibold">{propertyData.developer}</h3>
                  <p className="text-sm text-[#4B5563]">{isRTL ? 'مطور عقاري معتمد' : 'Verified Developer'}</p>
                </div>
              </div>
              <p className="text-[#4B5563] text-sm mb-4">
                {isRTL
                  ? 'شركة رائدة في التطوير العقاري مع أكثر من 20 سنة من الخبرة في السوق السعودي.'
                  : 'Leading real estate developer with over 20 years of experience in the Saudi market.'}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 border-teal-100 text-[#0F4C5C] hover:bg-teal-50">
                  <Phone className="w-4 h-4 ml-2" />
                  {isRTL ? 'اتصال' : 'Call'}
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-teal-100 text-[#0F4C5C] hover:bg-teal-50">
                  <Mail className="w-4 h-4 ml-2" />
                  {isRTL ? 'رسالة' : 'Message'}
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-teal-100 px-6 py-4 z-20 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={() => onNavigate('pullClient', { property: propertyData })}
            className="w-full bg-[#0F4C5C] hover:bg-[#0A3540] text-white h-12 font-semibold"
          >
            <CheckCircle className="w-5 h-5 ml-2" />
            {isRTL ? 'حجز وحدة لعميل' : 'Book Unit for Customer'}
          </Button>
        </div>
      </div>
      
      <BottomNavBar
        currentScreen="properties"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />
    </div>
  );
}
