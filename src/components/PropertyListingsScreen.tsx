import { ArrowLeft, ArrowRight, Filter, MapPin, Heart, Grid, List, Search, Home, Banknote, Building2, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BottomNavBar } from './BottomNavBar';

interface PropertyListingsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function PropertyListingsScreen({ onNavigate, language }: PropertyListingsScreenProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [activeFilter, setActiveFilter] = useState('all');
  const isRTL = language === 'ar';

  const allProperties = [
    {
      id: 1,
      title: isRTL ? 'شقة فاخرة في وسط المدينة' : 'Luxury Apartment Downtown',
      developer: isRTL ? 'شركة العمران' : 'Omran Development',
      location: isRTL ? 'الرياض، حي النخيل' : 'Riyadh, Palm District',
      price: '1,250,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: isRTL ? 'متاح' : 'Available',
      featured: true,
      category: 'apartments',
    },
    {
      id: 2,
      title: isRTL ? 'فيلا عصرية مع حديقة' : 'Modern Villa with Garden',
      developer: isRTL ? 'مجموعة دار' : 'Dar Group',
      location: isRTL ? 'جدة، حي البحر' : 'Jeddah, Sea District',
      price: '2,800,000',
      bedrooms: 5,
      bathrooms: 4,
      area: 350,
      image: 'https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3MjUwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: isRTL ? 'متاح' : 'Available',
      featured: false,
      category: 'villas',
    },
    {
      id: 3,
      title: isRTL ? 'شقة بغرفتين مطلة على البحر' : 'Sea View 2BR Apartment',
      developer: isRTL ? 'شركة العمران' : 'Omran Development',
      location: isRTL ? 'الدمام، الكورنيش' : 'Dammam, Corniche',
      price: '890,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1557813282-bcd50093e38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYxNzM0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: isRTL ? 'متاح' : 'Available',
      featured: false,
      category: 'apartments',
    },
    {
      id: 4,
      title: isRTL ? 'مشروع أبراج السماء' : 'Sky Towers Project',
      developer: isRTL ? 'شركة إعمار العقارية' : 'Emaar Properties',
      location: isRTL ? 'الرياض، حي الملقا' : 'Riyadh, Malqa District',
      price: '980,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 140,
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lzY3JhcGVyJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTc2NDk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      status: isRTL ? 'تحت الإنشاء' : 'Under Construction',
      featured: true,
      category: 'off-plan',
      deliveryDate: isRTL ? 'Q2 2026' : 'Q2 2026',
    },
    {
      id: 5,
      title: isRTL ? 'مشروع الواحة السكنية' : 'Oasis Residential Project',
      developer: isRTL ? 'مجموعة دار' : 'Dar Group',
      location: isRTL ? 'جدة، حي الفيصلية' : 'Jeddah, Faisaliah District',
      price: '750,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 160,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbXBsZXh8ZW58MXx8fHwxNzYxNzY0OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: isRTL ? 'تحت الإنشاء' : 'Under Construction',
      featured: false,
      category: 'off-plan',
      deliveryDate: isRTL ? 'Q4 2025' : 'Q4 2025',
    },
    {
      id: 6,
      title: isRTL ? 'شقة من برنامج سكني - NHC' : 'Sakani Program Apartment - NHC',
      developer: isRTL ? 'الشركة الوطنية للإسكان' : 'National Housing Company',
      location: isRTL ? 'الرياض، حي النرجس' : 'Riyadh, Narjis District',
      price: '450,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 110,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmZvcmRhYmxlJTIwaG91c2luZ3xlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: isRTL ? 'متاح' : 'Available',
      featured: true,
      category: 'nhc',
      isSubsidized: true,
    },
    {
      id: 7,
      title: isRTL ? 'فيلا سكنية بسعر مدعوم' : 'Subsidized Residential Villa',
      developer: isRTL ? 'الشركة الوطنية للإسكان' : 'National Housing Company',
      location: isRTL ? 'جدة، حي السلامة' : 'Jeddah, Salamah District',
      price: '650,000',
      bedrooms: 3,
      bathrooms: 3,
      area: 220,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjE3NjQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      status: isRTL ? 'متاح' : 'Available',
      featured: false,
      category: 'nhc',
      isSubsidized: true,
    },
    {
      id: 8,
      title: isRTL ? 'دوبلكس فاخر' : 'Luxury Duplex',
      developer: isRTL ? 'شركة العمران' : 'Omran Development',
      location: isRTL ? 'الدمام، حي الشاطئ' : 'Dammam, Beach District',
      price: '1,450,000',
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNzY0OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: isRTL ? 'متاح' : 'Available',
      featured: false,
      category: 'duplex',
    },
  ];

  // Filter properties based on active filter
  const properties = activeFilter === 'all' 
    ? allProperties 
    : allProperties.filter(p => p.category === activeFilter);

  const filters = [
    { label: isRTL ? 'الكل' : 'All', value: 'all' },
    { label: isRTL ? 'شقق' : 'Apartments', value: 'apartments' },
    { label: isRTL ? 'فلل' : 'Villas', value: 'villas' },
    { label: isRTL ? 'دوبلكس' : 'Duplex', value: 'duplex' },
    { label: isRTL ? 'البيع على الخارطة' : 'Off-Plan', value: 'off-plan' },
    { label: 'NHC', value: 'nhc' },
  ];

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-white border-b border-teal-100 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-teal-50 rounded-lg transition-colors"
          >
            {isRTL ? <ArrowRight className="w-6 h-6 text-[#0F4C5C]" /> : <ArrowLeft className="w-6 h-6 text-[#0F4C5C]" />}
          </button>
          <h1 className="text-xl font-semibold text-[#0E1E25]">{isRTL ? 'العقارات المتاحة' : 'Properties'}</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-teal-50 text-[#0F4C5C]' : 'text-[#4B5563]'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-teal-50 text-[#0F4C5C]' : 'text-[#4B5563]'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-[#4B5563]`} />
          <Input
            placeholder={isRTL ? 'ابحث عن عقارات...' : 'Search properties...'}
            className={`${isRTL ? 'pr-10' : 'pl-10'} border-teal-100 focus:border-teal-300 focus:ring-teal-200`}
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-[#0f4c5c] to-[#0a3540] text-white shadow-[0px_4px_12px_0px_rgba(15,76,92,0.2)]'
                  : 'bg-white text-[#4B5563] border border-[rgba(15,76,92,0.1)] hover:border-[rgba(15,76,92,0.2)]'
              }`}
            >
              {filter.label}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full bg-white text-[#4B5563] border border-teal-100 hover:border-[#D4AF37] whitespace-nowrap text-sm flex items-center gap-2 font-medium">
            <Filter className="w-4 h-4" />
            {isRTL ? 'فلترة' : 'Filter'}
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="px-6 py-4">
        <p className="text-[#4B5563] font-medium">
          {isRTL ? `${properties.length} عقار متاح` : `${properties.length} properties found`}
        </p>
      </div>

      {/* Property List */}
      <div className="px-6 space-y-4">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border-teal-100 bg-white"
            onClick={() => onNavigate('propertyDetails')}
          >
            {viewMode === 'list' ? (
              <div className="flex gap-4">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {property.featured && (
                      <Badge className="bg-[#D4AF37] text-[#0E1E25] text-xs font-semibold border border-[#B8941F]">
                        {isRTL ? 'مميز' : 'Featured'}
                      </Badge>
                    )}
                    {(property as any).category === 'off-plan' && (
                      <Badge className="bg-[#0F4C5C]/80 text-white text-xs font-medium border border-[#0F4C5C]">
                        {isRTL ? 'على الخارطة' : 'Off-Plan'}
                      </Badge>
                    )}
                    {(property as any).category === 'nhc' && (
                      <Badge className="bg-[#10B981] text-white text-xs font-medium border border-[#059669]">
                        NHC
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex-1 py-2">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[#0E1E25] line-clamp-1 font-semibold">{property.title}</h3>
                    <button className="p-1">
                      <Heart className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                  <p className="text-sm text-[#4B5563] mb-2">{property.developer}</p>
                  <div className="flex items-center text-xs text-[#4B5563] mb-2">
                    <MapPin className="w-3 h-3 ml-1" />
                    {property.location}
                  </div>
                  {(property as any).deliveryDate && (
                    <p className="text-xs text-purple-600 mb-2">
                      {isRTL ? 'التسليم: ' : 'Delivery: '}{(property as any).deliveryDate}
                    </p>
                  )}
                  {(property as any).isSubsidized && (
                    <p className="text-xs text-[#10B981] mb-2">
                      {isRTL ? '✓ مؤهل للدعم السكني' : '✓ Eligible for Housing Support'}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#0F4C5C] font-semibold">{property.price}</span>
                      <span className="text-[#4B5563] text-xs mr-1">{isRTL ? 'ر.س' : 'SAR'}</span>
                    </div>
                    <div className="flex gap-2 text-xs text-[#4B5563]">
                      <span>{property.bedrooms} {isRTL ? 'غرف' : 'BD'}</span>
                      <span>•</span>
                      <span>{property.bathrooms} {isRTL ? 'حمام' : 'BA'}</span>
                      <span>•</span>
                      <span>{property.area} {isRTL ? 'م²' : 'm²'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="relative h-40">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <button className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} bg-white rounded-full p-2 shadow-lg`}>
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <div className="absolute bottom-3 left-3 flex flex-col gap-1">
                    {property.featured && (
                      <Badge className="bg-[#D4AF37] text-[#0E1E25] text-xs font-semibold border border-[#B8941F]">
                        {isRTL ? 'مميز' : 'Featured'}
                      </Badge>
                    )}
                    {(property as any).category === 'off-plan' && (
                      <Badge className="bg-[#0F4C5C]/80 text-white text-xs font-medium border border-[#0F4C5C]">
                        {isRTL ? 'على الخارطة' : 'Off-Plan'}
                      </Badge>
                    )}
                    {(property as any).category === 'nhc' && (
                      <Badge className="bg-[#10B981] text-white text-xs font-medium border border-[#059669]">
                        NHC
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm mb-1 text-[#0E1E25] line-clamp-1 font-semibold">{property.title}</h3>
                  <p className="text-xs text-[#4B5563] mb-2">{property.developer}</p>
                  <div className="flex items-center text-xs text-[#4B5563] mb-2">
                    <MapPin className="w-3 h-3 ml-1" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>
                  {(property as any).deliveryDate && (
                    <p className="text-xs text-purple-600 mb-2">
                      {isRTL ? 'التسليم: ' : 'Delivery: '}{(property as any).deliveryDate}
                    </p>
                  )}
                  {(property as any).isSubsidized && (
                    <p className="text-xs text-[#10B981] mb-2">
                      {isRTL ? '✓ مؤهل للدعم السكني' : '✓ Eligible for Housing Support'}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#0F4C5C] text-sm font-semibold">{property.price}</span>
                      <span className="text-[#4B5563] text-xs mr-1">{isRTL ? 'ر.س' : 'SAR'}</span>
                    </div>
                    <div className="flex gap-2 text-xs text-[#4B5563]">
                      <span>{property.bedrooms} {isRTL ? 'غرف' : 'BD'}</span>
                      <span>•</span>
                      <span>{property.area} {isRTL ? 'م²' : 'm²'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar currentScreen="properties" onNavigate={onNavigate} language={language} />

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
