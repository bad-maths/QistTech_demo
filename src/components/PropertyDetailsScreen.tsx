import { ArrowLeft, ArrowRight, Heart, Share2, MapPin, Bed, Bath, Maximize, Calendar, Building2, Phone, Mail, Calculator, Shield, Sparkles, Check, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AlAhliLogo from '../assets/شعار البنك الأهلي التجاري.svg';
import AlRajhiLogo from '../assets/شعار مصرف الراجحي الجديد.svg';
import RiyadBankLogo from '../assets/شعار بنك الرياض الجديد.svg';
import MapImage from '../assets/map.png';

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
      logo: AlAhliLogo,
      rate: '3.2%',
      monthly: '4,200',
      downPayment: '125,000',
      term: isRTL ? '25 سنة' : '25 years',
      recommended: true,
    },
    {
      id: 2,
      bank: isRTL ? 'بنك الراجحي' : 'Al Rajhi Bank',
      logo: AlRajhiLogo,
      rate: '3.5%',
      monthly: '4,450',
      downPayment: '125,000',
      term: isRTL ? '25 سنة' : '25 years',
      recommended: false,
    },
    {
      id: 3,
      bank: isRTL ? 'بنك الرياض' : 'Riyadh Bank',
      logo: RiyadBankLogo,
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
      <div 
        className="min-h-screen pb-32" 
        dir={isRTL ? 'rtl' : 'ltr'}
        style={{
          backgroundColor: '#F2F4F5',
        }}
      >
      {/* Image Gallery */}
      <div className="relative">
        <ImageWithFallback
          src={images[0]}
          alt="Property"
          className="w-full h-80 object-cover"
        />
        <button
          onClick={() => onNavigate('propertyListings')}
          className="absolute top-6 left-6 rounded-full p-2 shadow-lg transition-shadow"
          style={{
            backgroundColor: '#FFFFFF',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
          }}
        >
          {isRTL ? <ArrowRight className="w-6 h-6" style={{ color: '#0F4C5C' }} /> : <ArrowLeft className="w-6 h-6" style={{ color: '#0F4C5C' }} />}
        </button>
        <div className="absolute top-6 right-6 flex gap-2">
          <button 
            className="rounded-full p-2 shadow-lg transition-shadow"
            style={{
              backgroundColor: '#FFFFFF',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
          >
            <Share2 className="w-6 h-6" style={{ color: '#0F4C5C' }} />
          </button>
          <button 
            className="rounded-full p-2 shadow-lg transition-shadow"
            style={{
              backgroundColor: '#FFFFFF',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
          >
            <Heart className="w-6 h-6" style={{ color: '#0F4C5C' }} />
          </button>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <div 
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#0F4C5C',
            }}
          >
            1 / 8
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Title and Price */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h1 className="text-2xl mb-2 font-bold" style={{ color: '#0E1E25' }}>
                {propertyData.title}
              </h1>
              <div className="flex items-center mb-2" style={{ color: '#4B5563' }}>
                <MapPin className="w-4 h-4 ml-1" />
                <span>{propertyData.location}</span>
              </div>
            </div>
            <Badge 
              className="border-0 font-medium"
              style={{
                backgroundColor: '#10B981',
                color: '#FFFFFF',
              }}
            >
              {isRTL ? 'متاح' : 'Available'}
            </Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold" style={{ color: '#0F4C5C' }}>{propertyData.price}</span>
            <span style={{ color: '#4B5563' }}>{isRTL ? 'ريال سعودي' : 'SAR'}</span>
          </div>
        </div>

        {/* Features Grid */}
        <Card 
          className="p-4 mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            borderWidth: '1px',
            borderColor: '#CCFBF1',
            borderStyle: 'solid',
          }}
        >
          <div className="grid grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div 
                    className="rounded-lg p-3 mb-2 inline-flex"
                    style={{
                      backgroundColor: '#F0FDFA',
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#0F4C5C' }} />
                  </div>
                  <p className="text-xs" style={{ color: '#4B5563' }}>{feature.label}</p>
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
              <h3 className="mb-3" style={{ color: '#111827' }}>{isRTL ? 'الوصف' : 'Description'}</h3>
              <p className="leading-relaxed" style={{ color: '#4B5563' }}>
                {isRTL
                  ? 'شقة فاخرة بتصميم عصري في موقع متميز في حي النخيل. تتميز بإطلالة رائعة ومساحات واسعة وتشطيبات راقية. قريبة من جميع الخدمات والمرافق الأساسية.'
                  : 'Luxurious apartment with modern design in a prime location in Palm District. Features stunning views, spacious areas, and premium finishes. Close to all essential services and facilities.'}
              </p>
            </div>
            <div>
              <h3 className="mb-3" style={{ color: '#111827' }}>{isRTL ? 'الموقع' : 'Location'}</h3>
              <div
                className="relative h-48 rounded-lg overflow-hidden"
                style={{
                  borderWidth: '1px',
                  borderColor: '#CCFBF1',
                  borderStyle: 'solid',
                }}
              >
                <ImageWithFallback
                  src={MapImage}
                  alt={isRTL ? 'خريطة الموقع' : 'Map View'}
                  className="w-full h-full object-cover"
                />

                {/* Centered location pin placeholder */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-[#D4AF37]/30 animate-ping"></div>
                    <div className="rounded-full bg-white/90 p-2 shadow-md border border-[#0F4C5C]/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" style={{ color: '#0F4C5C' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="mt-4">
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2" style={{ color: '#4B5563' }}>
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: '#0F4C5C',
                    }}
                  ></div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="developer" className="mt-4">
            <Card 
              className="p-4"
              style={{
                backgroundColor: '#FFFFFF',
                borderWidth: '1px',
                borderColor: '#CCFBF1',
                borderStyle: 'solid',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="rounded-full p-4"
                  style={{
                    backgroundColor: '#F0FDFA',
                  }}
                >
                  <Building2 className="w-8 h-8" style={{ color: '#0F4C5C' }} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold" style={{ color: '#0E1E25' }}>{propertyData.developer}</h3>
                  <p className="text-sm" style={{ color: '#4B5563' }}>{isRTL ? 'مطور عقاري معتمد' : 'Verified Developer'}</p>
                </div>
              </div>
              <p className="text-sm mb-4" style={{ color: '#4B5563' }}>
                {isRTL
                  ? 'شركة رائدة في التطوير العقاري مع أكثر من 20 سنة من الخبرة في السوق السعودي.'
                  : 'Leading real estate developer with over 20 years of experience in the Saudi market.'}
              </p>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  style={{
                    borderColor: '#CCFBF1',
                    color: '#0F4C5C',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = '#F0FDFA';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Phone className="w-4 h-4 ml-2" />
                  {isRTL ? 'اتصال' : 'Call'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  style={{
                    borderColor: '#CCFBF1',
                    color: '#0F4C5C',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = '#F0FDFA';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Mail className="w-4 h-4 ml-2" />
                  {isRTL ? 'رسالة' : 'Message'}
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Financing Choice */}
        <Card 
          className="p-5 mb-4"
          style={{
            background: 'linear-gradient(to bottom right, #F0FDFA, #FEF3C7)',
            borderWidth: '1px',
            borderColor: '#5EEAD4',
            borderStyle: 'solid',
          }}
        >
          <h3 className="mb-4 flex items-center gap-2 font-semibold" style={{ color: '#0E1E25' }}>
            <Calculator className="w-5 h-5" style={{ color: '#0F4C5C' }} />
            {isRTL ? 'هل تحتاج تمويل عقاري؟' : 'Do you need property financing?'}
          </h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => {
                setNeedsFinancing(true);
                setSelectedFinancing(null);
              }}
              className="p-4 rounded-xl transition-all"
              style={{
                backgroundColor: needsFinancing === true ? '#F0FDFA' : '#FFFFFF',
                borderWidth: '2px',
                borderColor: needsFinancing === true ? '#0F4C5C' : '#CCFBF1',
                borderStyle: 'solid',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (needsFinancing !== true) {
                  e.currentTarget.style.borderColor = '#99F6E4';
                }
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (needsFinancing !== true) {
                  e.currentTarget.style.borderColor = '#CCFBF1';
                }
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium" style={{ color: '#0E1E25' }}>{isRTL ? 'نعم، أريد تمويل' : 'Yes, I need financing'}</span>
                {needsFinancing === true && <Check className="w-5 h-5" style={{ color: '#0F4C5C' }} />}
              </div>
              <p className="text-xs text-start" style={{ color: '#4B5563' }}>
                {isRTL ? 'عرض خيارات التمويل المناسبة' : 'Show suitable financing options'}
              </p>
            </button>

            <button
              onClick={() => {
                setNeedsFinancing(false);
                setSelectedFinancing(null);
              }}
              className="p-4 rounded-xl transition-all"
              style={{
                backgroundColor: needsFinancing === false ? '#F0FDF4' : '#FFFFFF',
                borderWidth: '2px',
                borderColor: needsFinancing === false ? '#10B981' : '#D1FAE5',
                borderStyle: 'solid',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (needsFinancing !== false) {
                  e.currentTarget.style.borderColor = '#86EFAC';
                }
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (needsFinancing !== false) {
                  e.currentTarget.style.borderColor = '#D1FAE5';
                }
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium" style={{ color: '#0E1E25' }}>{isRTL ? 'لا، دفع كامل' : 'No, full payment'}</span>
                {needsFinancing === false && <Check className="w-5 h-5" style={{ color: '#10B981' }} />}
              </div>
              <p className="text-xs text-start" style={{ color: '#4B5563' }}>
                {isRTL ? 'دفع كامل المبلغ دفعة واحدة' : 'Pay full amount at once'}
              </p>
            </button>
          </div>
        </Card>

        {/* Financing Options - Show only if user needs financing */}
        {needsFinancing === true && (
          <div className="mb-4">
              <Card 
                className="p-4 mb-3"
                style={{
                  background: 'linear-gradient(to right, rgba(16, 185, 129, 0.1), #F0FDFA)',
                  borderWidth: '1px',
                  borderColor: 'rgba(16, 185, 129, 0.2)',
                  borderStyle: 'solid',
                }}
              >
              <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <div className="flex-1">
                    <h3 className="mb-1 flex items-center gap-2 font-semibold" style={{ color: '#0E1E25' }}>
                    {isRTL ? 'عروض تمويل مناسبة لك' : 'Financing offers suitable for you'}
                      <Sparkles className="w-4 h-4" style={{ color: '#10B981' }} />
                  </h3>
                    <p className="text-xs" style={{ color: '#4B5563' }}>
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
                  className="p-4 cursor-pointer transition-all"
                  style={{
                    backgroundColor: selectedFinancing === option.id ? '#F0FDFA' : '#FFFFFF',
                    borderWidth: selectedFinancing === option.id ? '2px' : '1px',
                    borderColor: selectedFinancing === option.id ? '#0F4C5C' : '#CCFBF1',
                    borderStyle: 'solid',
                    boxShadow: option.recommended ? '0 0 0 2px rgba(212, 175, 55, 0.3)' : 'none',
                  }}
                >
                  {option.recommended && (
                    <Badge 
                      className="mb-2 font-semibold"
                      style={{
                        backgroundColor: '#D4AF37',
                        color: '#0E1E25',
                        borderWidth: '1px',
                        borderColor: '#B8941F',
                        borderStyle: 'solid',
                      }}
                    >
                      {isRTL ? '⭐ الأنسب لك' : '⭐ Best for you'}
                    </Badge>
                  )}
                  
                    <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-lg" style={{ color: '#0E1E25' }}>{option.bank}</h4>
                    </div>
                    {selectedFinancing === option.id && (
                      <div className="rounded-full p-1" style={{ backgroundColor: '#0F4C5C' }}>
                      <Check className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                      </div>
                    )}
                    </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded p-2 text-center" style={{ backgroundColor: '#FFFFFF' }}>
                      <p className="text-sm mb-1" style={{ color: '#4B5563' }}>{isRTL ? 'قسط شهري' : 'Monthly'}</p>
                      <p className="font-semibold text-base" style={{ color: '#0F4C5C' }}>{option.monthly} {isRTL ? 'ر.س' : 'SAR'}</p>
                    </div>
                    <div className="rounded p-2 text-center" style={{ backgroundColor: '#FFFFFF' }}>
                      <p className="text-sm mb-1" style={{ color: '#4B5563' }}>{isRTL ? 'معدل' : 'Rate'}</p>
                      <p className="font-semibold text-base" style={{ color: '#0F4C5C' }}>{option.rate}</p>
                    </div>
                    <div className="rounded p-2 text-center" style={{ backgroundColor: '#FFFFFF' }}>
                      <p className="text-sm mb-1" style={{ color: '#4B5563' }}>{isRTL ? 'مدة' : 'Term'}</p>
                      <p className="font-semibold text-base" style={{ color: '#0F4C5C' }}>{option.term}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div 
        className="fixed bottom-0 left-0 right-0 px-6 py-4 z-20"
        style={{
          backgroundColor: '#FFFFFF',
          borderTopWidth: '1px',
          borderTopColor: '#CCFBF1',
          borderTopStyle: 'solid',
          boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="max-w-md mx-auto">
          {needsFinancing === null && (
            <div className="text-center text-sm py-2" style={{ color: '#4B5563' }}>
              {isRTL ? 'الرجاء اختيار طريقة الدفع أولاً' : 'Please choose payment method first'}
            </div>
          )}
          
          {needsFinancing === false && (
            <Button
              onClick={handleBooking}
              className="w-full h-12 font-semibold"
              style={{
                backgroundColor: '#0F4C5C',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#0A3540'}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#0F4C5C'}
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
                className="w-full h-12 font-semibold"
                style={{
                  backgroundColor: selectedFinancing === null ? '#4B5563' : '#0F4C5C',
                  color: '#FFFFFF',
                  cursor: selectedFinancing === null ? 'not-allowed' : 'pointer',
                  opacity: selectedFinancing === null ? 0.6 : 1,
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (selectedFinancing !== null) {
                    e.currentTarget.style.backgroundColor = '#0A3540';
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (selectedFinancing !== null) {
                    e.currentTarget.style.backgroundColor = '#0F4C5C';
                  }
                }}
              >
                <Calculator className="w-5 h-5 ml-2" />
                {isRTL ? 'احجز ومول الآن' : 'Book & Finance Now'}
              </Button>
              {selectedFinancing === null && (
                <p className="text-xs text-center" style={{ color: '#4B5563' }}>
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
