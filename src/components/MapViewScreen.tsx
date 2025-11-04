import { ArrowLeft, ArrowRight, Search, Filter, Building2, MapPin, Home, ShoppingBag, User, MessageSquare, Banknote, Layers, Navigation } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import MapImage from '../assets/map.png';

interface MapViewScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function MapViewScreen({ onNavigate, language }: MapViewScreenProps) {
  const isRTL = language === 'ar';
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const allProperties = [
    {
      id: 1,
      title: isRTL ? 'شقة فاخرة في وسط المدينة' : 'Luxury Apartment Downtown',
      location: isRTL ? 'الرياض، حي النخيل' : 'Riyadh, Palm District',
      price: '1,250,000',
      bedrooms: 3,
      area: 180,
      lat: 24.7136,
      lng: 46.6753,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: isRTL ? 'فيلا عصرية مع حديقة' : 'Modern Villa with Garden',
      location: isRTL ? 'جدة، حي البحر' : 'Jeddah, Sea District',
      price: '2,800,000',
      bedrooms: 5,
      area: 350,
      lat: 24.7236,
      lng: 46.6653,
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: isRTL ? 'شقة حديثة في برج فاخر' : 'Modern Apartment in Luxury Tower',
      location: isRTL ? 'الرياض، حي المال' : 'Riyadh, Financial District',
      price: '1,650,000',
      bedrooms: 4,
      area: 220,
      lat: 24.7036,
      lng: 46.6853,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: isRTL ? 'دوبلكس واسع مع تراس' : 'Spacious Duplex with Terrace',
      location: isRTL ? 'الرياض، حي السفارات' : 'Riyadh, Embassy District',
      price: '2,100,000',
      bedrooms: 4,
      area: 280,
      lat: 24.7186,
      lng: 46.6703,
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: isRTL ? 'شقة بنتهاوس فاخرة' : 'Luxury Penthouse',
      location: isRTL ? 'الرياض، برج المملكة' : 'Riyadh, Kingdom Tower',
      price: '4,500,000',
      bedrooms: 5,
      area: 450,
      lat: 24.7086,
      lng: 46.6803,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: isRTL ? 'فيلا كبيرة مع مسبح' : 'Large Villa with Pool',
      location: isRTL ? 'الرياض، حي الياسمين' : 'Riyadh, Yasmin District',
      price: '3,200,000',
      bedrooms: 6,
      area: 500,
      lat: 24.6986,
      lng: 46.6903,
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      title: isRTL ? 'شقة استوديو عصرية' : 'Modern Studio Apartment',
      location: isRTL ? 'الرياض، حي العليا' : 'Riyadh, Olaya District',
      price: '750,000',
      bedrooms: 1,
      area: 85,
      lat: 24.7286,
      lng: 46.6603,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 8,
      title: isRTL ? 'شقة عائلية واسعة' : 'Spacious Family Apartment',
      location: isRTL ? 'الرياض، حي الملقا' : 'Riyadh, Malqa District',
      price: '1,450,000',
      bedrooms: 4,
      area: 240,
      lat: 24.7136,
      lng: 46.6553,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 z-20">
        <button
          onClick={() => onNavigate('home')}
          className="p-2 hover:bg-gray-100 rounded-lg -ml-2"
        >
          {isRTL ? <ArrowRight className="w-6 h-6 text-gray-700" /> : <ArrowLeft className="w-6 h-6 text-gray-700" />}
        </button>
        <h1 className="flex-1 text-xl text-gray-900">
          {isRTL ? 'تصفح من الخريطة' : 'Browse on Map'}
        </h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Filter className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 z-20">
        <div className="relative">
          <Search className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-gray-400`} />
          <Input
            placeholder={isRTL ? 'ابحث عن عقار، موقع...' : 'Search property, location...'}
            className={`${isRTL ? 'pr-10' : 'pl-10'} bg-gray-50`}
          />
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        {/* Full Screen Map Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${MapImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Map Controls */}
          <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex flex-col gap-2 z-10`}>
            <button className="bg-white rounded-lg shadow-lg p-3 hover:bg-gray-50 transition-colors">
              <span className="text-gray-700 text-xl">+</span>
            </button>
            <button className="bg-white rounded-lg shadow-lg p-3 hover:bg-gray-50 transition-colors">
              <span className="text-gray-700 text-xl">−</span>
            </button>
            <button className="bg-white rounded-lg shadow-lg p-3 hover:bg-gray-50 transition-colors mt-2">
              <Navigation className="w-5 h-5 text-blue-600" />
            </button>
            <button className="bg-white rounded-lg shadow-lg p-3 hover:bg-gray-50 transition-colors">
              <Layers className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Property Markers */}
          {allProperties.map((property, index) => {
            // Calculate position based on lat/lng (simplified positioning)
            const top = ((24.73 - property.lat) * 1000 + 20) % 80 + 10;
            const left = ((property.lng - 46.65) * 1000 + 15) % 80 + 10;
            const isSelected = selectedProperty === property.id;

            return (
              <button
                key={property.id}
                onClick={() => setSelectedProperty(isSelected ? null : property.id)}
                className={`absolute transform -translate-x-1/2 -translate-y-full transition-all duration-200 ${
                  isSelected ? 'z-30 scale-110' : 'z-10 hover:scale-105'
                }`}
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                }}
              >
                {/* Marker Pin */}
                <div className="relative">
                  <div 
                    className={`${
                      isSelected 
                        ? 'bg-blue-600 shadow-lg scale-110' 
                        : 'bg-white border-2 border-blue-600 shadow-md hover:shadow-lg'
                    } rounded-full p-2.5 mb-1 transition-all duration-200`}
                  >
                    <Building2 className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  {/* Price Label */}
                  {!isSelected && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap shadow-md">
                      {property.price} {isRTL ? 'ر.س' : 'SAR'}
                    </div>
                  )}
                  {/* Pin pointer */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[10px] border-transparent ${
                      isSelected ? 'border-t-blue-600' : 'border-t-white'
                    }`}
                    style={{ top: '100%', marginTop: '-1px' }}
                  />
                </div>

                {/* Property Info Popup */}
                {isSelected && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 w-72 animate-in fade-in slide-in-from-bottom-2 duration-200"
                    style={{ bottom: '100%', marginBottom: '60px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('propertyDetails');
                    }}
                  >
                    <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <button 
                        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 hover:bg-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </button>
                    </div>
                    
                    <h4 className="mb-2 text-gray-900 line-clamp-1">{property.title}</h4>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin className="w-4 h-4 ml-1 flex-shrink-0" />
                      <span className="line-clamp-1">{property.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{isRTL ? 'السعر' : 'Price'}</p>
                        <p className="text-blue-600">{property.price} {isRTL ? 'ر.س' : 'SAR'}</p>
                      </div>
                      <div className="flex gap-3 text-sm text-gray-600">
                        <div className="text-center">
                          <p className="text-xs text-gray-500">{isRTL ? 'غرف' : 'Beds'}</p>
                          <p>{property.bedrooms}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-500">{isRTL ? 'م²' : 'm²'}</p>
                          <p>{property.area}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 h-9"
                      onClick={() => onNavigate('propertyDetails')}
                    >
                      {isRTL ? 'عرض التفاصيل' : 'View Details'}
                    </Button>
                  </div>
                )}
              </button>
            );
          })}

          {/* Map Legend and Stats */}
          <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 max-w-xs`}>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-900">{allProperties.length}</p>
                  <p className="text-xs text-gray-500">{isRTL ? 'عقار متاح' : 'Properties'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-900">5</p>
                  <p className="text-xs text-gray-500">{isRTL ? 'مواقع' : 'Areas'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Message */}
          <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} bg-blue-600 text-white rounded-lg shadow-lg px-4 py-2 max-w-xs`}>
            <p className="text-xs">
              {isRTL 
                ? 'انقر على العلامات لعرض تفاصيل العقارات' 
                : 'Tap markers to view property details'}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-3 z-20">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">{isRTL ? 'الرئيسية' : 'Home'}</span>
          </button>
          <button
            onClick={() => onNavigate('propertyListings')}
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Building2 className="w-6 h-6" />
            <span className="text-xs">{isRTL ? 'العقارات' : 'Properties'}</span>
          </button>
          <button
            onClick={() => onNavigate('financingListings')}
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Banknote className="w-6 h-6" />
            <span className="text-xs">{isRTL ? 'التمويل' : 'Financing'}</span>
          </button>
          <button
            onClick={() => onNavigate('myOrders')}
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xs">{isRTL ? 'طلباتي' : 'Orders'}</span>
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <User className="w-6 h-6" />
            <span className="text-xs">{isRTL ? 'حسابي' : 'Profile'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
