import { ArrowLeft, ArrowRight, Heart, Share2, MapPin, Bed, Bath, Maximize, Calendar, Building2, Phone, Mail, Calculator, Shield, Sparkles, Check, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyDetailsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function PropertyDetailsScreen({ onNavigate, language }: PropertyDetailsScreenProps) {
  const isRTL = language === 'ar';
  const [needsFinancing, setNeedsFinancing] = useState<boolean | null>(null);
  const [selectedFinancing, setSelectedFinancing] = useState<number | null>(null);

  const propertyData = {
    id: 1,
    title: isRTL ? 'شقة فاخرة في وسط المدينة' : 'Luxury Apartment Downtown',
    location: isRTL ? 'الرياض، حي النخيل' : 'Riyadh, Palm District',
    price: '1,250,000',
    developer: isRTL ? 'شركة العمران' : 'Omran Development',
  };

  const images = [
    'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
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

  const financingOptions = [
    {
      id: 1,
      bank: isRTL ? 'البنك الأهلي' : 'National Bank',
      rate: '3.2%',
      monthly: '4,200',
      downPayment: '125,000',
      term: isRTL ? '25 سنة' : '25 years',
      recommended: true,
    },
    {
      id: 2,
      bank: isRTL ? 'بنك الراجحي' : 'Al Rajhi Bank',
      rate: '3.5%',
      monthly: '4,450',
      downPayment: '125,000',
      term: isRTL ? '25 سنة' : '25 years',
      recommended: false,
    },
    {
      id: 3,
      bank: isRTL ? 'بنك الرياض' : 'Riyadh Bank',
      rate: '3.8%',
      monthly: '4,680',
      downPayment: '125,000',
      term: isRTL ? '25 سنة' : '25 years',
      recommended: false,
    },
  ];

  const handleBooking = () => {
    if (needsFinancing === false) {
      // دفع كامل - انتقال لدردشة المطور فقط
      onNavigate('chat', {
        openChats: [
          {
            type: 'developer',
            name: propertyData.developer,
            property: propertyData.title,
            bookingType: 'cash',
          }
        ]
      });
    } else if (needsFinancing === true && selectedFinancing !== null) {
      // تمويل - انتقال لدردشتين (بنك + مطور)
      const selectedBank = financingOptions.find(f => f.id === selectedFinancing);
      onNavigate('chat', {
        openChats: [
          {
            type: 'bank',
            name: selectedBank?.bank || '',
            property: propertyData.title,
            bookingType: 'financing',
            financingDetails: selectedBank,
          },
          {
            type: 'developer',
            name: propertyData.developer,
            property: propertyData.title,
            bookingType: 'financing',
          }
        ]
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-32" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Image Gallery */}
      <div className="relative">
        <ImageWithFallback
          src={images[0]}
          alt="Property"
          className="w-full h-80 object-cover"
        />
        <button
          onClick={() => onNavigate('propertyListings')}
          className="absolute top-6 left-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          {isRTL ? <ArrowRight className="w-6 h-6 text-[#0F4C5C]" /> : <ArrowLeft className="w-6 h-6 text-[#0F4C5C]" />}
        </button>
        <div className="absolute top-6 right-6 flex gap-2">
          <button className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
            <Share2 className="w-6 h-6 text-[#0F4C5C]" />
          </button>
          <button className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="w-6 h-6 text-[#0F4C5C]" />
          </button>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <div className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-[#0F4C5C]">1 / 8</div>
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

        {/* Financing Choice */}
        <Card className="p-5 mb-4 bg-gradient-to-br from-teal-50 to-amber-50 border-teal-200">
          <h3 className="text-[#0E1E25] mb-4 flex items-center gap-2 font-semibold">
            <Calculator className="w-5 h-5 text-[#0F4C5C]" />
            {isRTL ? 'هل تحتاج تمويل عقاري؟' : 'Do you need property financing?'}
          </h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => {
                setNeedsFinancing(true);
                setSelectedFinancing(null);
              }}
              className={`p-4 rounded-xl border-2 transition-all ${
                needsFinancing === true
                  ? 'border-[#0F4C5C] bg-teal-50'
                  : 'border-teal-100 bg-white hover:border-teal-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#0E1E25] font-medium">{isRTL ? 'نعم، أريد تمويل' : 'Yes, I need financing'}</span>
                {needsFinancing === true && <Check className="w-5 h-5 text-[#0F4C5C]" />}
              </div>
              <p className="text-xs text-[#4B5563] text-start">
                {isRTL ? 'عرض خيارات التمويل المناسبة' : 'Show suitable financing options'}
              </p>
            </button>

            <button
              onClick={() => {
                setNeedsFinancing(false);
                setSelectedFinancing(null);
              }}
              className={`p-4 rounded-xl border-2 transition-all ${
                needsFinancing === false
                  ? 'border-[#10B981] bg-green-50'
                  : 'border-green-100 bg-white hover:border-green-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#0E1E25] font-medium">{isRTL ? 'لا، دفع كامل' : 'No, full payment'}</span>
                {needsFinancing === false && <Check className="w-5 h-5 text-[#10B981]" />}
              </div>
              <p className="text-xs text-[#4B5563] text-start">
                {isRTL ? 'دفع كامل المبلغ دفعة واحدة' : 'Pay full amount at once'}
              </p>
            </button>
          </div>
        </Card>

        {/* Financing Options - Show only if user needs financing */}
        {needsFinancing === true && (
          <div className="mb-4">
            <Card className="p-4 mb-3 bg-gradient-to-r from-[#10B981]/10 to-teal-50 border-[#10B981]/20">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-[#0E1E25] mb-1 flex items-center gap-2 font-semibold">
                    {isRTL ? 'عروض تمويل مناسبة لك' : 'Financing offers suitable for you'}
                    <Sparkles className="w-4 h-4 text-[#10B981]" />
                  </h3>
                  <p className="text-xs text-[#4B5563]">
                    {isRTL 
                      ? 'بناءً على راتبك والتزاماتك من نفاذ' 
                      : 'Based on your Nafath salary & obligations'}
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              {financingOptions.map((option) => (
                <Card
                  key={option.id}
                  onClick={() => setSelectedFinancing(option.id)}
                  className={`p-4 cursor-pointer transition-all border-teal-100 ${
                    selectedFinancing === option.id
                      ? 'border-2 border-[#0F4C5C] bg-teal-50'
                      : 'border border-teal-100 hover:border-teal-300'
                  } ${option.recommended ? 'ring-2 ring-[#D4AF37]/30' : ''}`}
                >
                  {option.recommended && (
                    <Badge className="bg-[#D4AF37] text-[#0E1E25] mb-2 font-semibold border border-[#B8941F]">
                      {isRTL ? '⭐ الأنسب لك' : '⭐ Best for you'}
                    </Badge>
                  )}
                  
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-[#0E1E25] font-semibold">{option.bank}</h4>
                    {selectedFinancing === option.id && (
                      <div className="bg-[#0F4C5C] rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white rounded p-2 text-center">
                      <p className="text-xs text-[#4B5563] mb-1">{isRTL ? 'قسط شهري' : 'Monthly'}</p>
                      <p className="text-[#0F4C5C] font-semibold">{option.monthly} {isRTL ? 'ر.س' : 'SAR'}</p>
                    </div>
                    <div className="bg-white rounded p-2 text-center">
                      <p className="text-xs text-[#4B5563] mb-1">{isRTL ? 'معدل' : 'Rate'}</p>
                      <p className="text-[#0F4C5C] font-semibold">{option.rate}</p>
                    </div>
                    <div className="bg-white rounded p-2 text-center">
                      <p className="text-xs text-[#4B5563] mb-1">{isRTL ? 'مدة' : 'Term'}</p>
                      <p className="text-[#0F4C5C] font-semibold">{option.term}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-teal-100 px-6 py-4 z-20 shadow-lg">
        <div className="max-w-md mx-auto">
          {needsFinancing === null && (
            <div className="text-center text-[#4B5563] text-sm py-2">
              {isRTL ? 'الرجاء اختيار طريقة الدفع أولاً' : 'Please choose payment method first'}
            </div>
          )}
          
          {needsFinancing === false && (
            <Button
              onClick={handleBooking}
              className="w-full bg-[#0F4C5C] hover:bg-[#0A3540] text-white h-12 font-semibold"
            >
              <Building2 className="w-5 h-5 ml-2" />
              {isRTL ? 'احجز الآن وتواصل مع موظف المبيعات' : 'Book Now & Contact Sales'}
            </Button>
          )}

          {needsFinancing === true && (
            <div className="space-y-2">
              <Button
                onClick={handleBooking}
                disabled={selectedFinancing === null}
                className="w-full bg-[#0F4C5C] hover:bg-[#0A3540] text-white h-12 font-semibold disabled:bg-[#4B5563] disabled:cursor-not-allowed"
              >
                <Calculator className="w-5 h-5 ml-2" />
                {isRTL ? 'احجز ومول الآن' : 'Book & Finance Now'}
              </Button>
              {selectedFinancing === null && (
                <p className="text-xs text-center text-[#4B5563]">
                  {isRTL ? 'الرجاء اختيار عرض تمويل' : 'Please select a financing offer'}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
