import {
  ArrowLeft,
  ArrowRight,
  Filter,
  MapPin,
  Grid,
  List,
  Search,
  Plus,
  Edit,
  Share2,
  Eye,
  Star,
  Phone,
  ChevronDown,
  BarChart3,
  Upload,
  Settings,
  Users,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Clock,
  Check,
  Home,
  Building2,
  Calculator,
  MessageSquare,
} from 'lucide-react';
import { useState } from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeePropertiesScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeePropertiesScreen({ onNavigate, language, employeeData }: EmployeePropertiesScreenProps) {
  // This screen adopts a static HTML design ported to JSX. Interactive
  // behaviors from the original script are intentionally omitted for
  // safety/cleanliness. Hook specific buttons to app navigation where useful.
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const isRTL = language === 'ar';
  // Note: This port intentionally drops the original DOM-manipulating
  // scripts. Use React state/effects if interactivity is needed later.

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-24 legacy-scope" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header with Gradient and Wave */}
      <header id="header" className="relative gradient-primary text-white">
        <div className="px-4 py-6">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('home')}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                aria-label={isRTL ? 'رجوع' : 'Back'}
              >
                {isRTL ? (
                  <ArrowRight className="w-5 h-5" />
                ) : (
                  <ArrowLeft className="w-5 h-5" />
                )}
              </button>
              <div>
                <h3 className="text-lg font-bold">{isRTL ? 'إدارة العقارات' : 'Property Management'}</h3>
                <p className="text-xs text-white/80">
                  {isRTL ? 'عرض وتعديل العقارات المتاحة' : 'View and edit available properties'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all" aria-label="Filter">
                <Filter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all" aria-label="Add">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Property Stats Overview */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-accent text-lg font-bold">47</div>
              <div className="text-xs text-white/80">{isRTL ? 'إجمالي' : 'Total'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-green-300 text-lg font-bold">32</div>
              <div className="text-xs text-white/80">{isRTL ? 'متاح' : 'Available'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-yellow-300 text-lg font-bold">12</div>
              <div className="text-xs text-white/80">{isRTL ? 'محجوز' : 'Reserved'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-red-300 text-lg font-bold">3</div>
              <div className="text-xs text-white/80">{isRTL ? 'مباع' : 'Sold'}</div>
            </div>
          </div>
        </div>

        {/* Wave SVG Separator */}
        <svg className="w-full h-20 relative z-10" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60C360 30 720 30 1080 60C1260 75 1350 75 1440 60V120H0V60Z" fill="#F2F4F5" />
          <path d="M0 70C240 40 480 40 720 70C960 100 1200 100 1440 70V120H0V70Z" fill="url(#wave-gradient-1)" opacity="0.4" />
          <path d="M0 50C300 20 600 20 900 50C1140 75 1320 75 1440 50V120H0V50Z" fill="#F2F4F5" opacity="0.5" />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5" />
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative Elements */}
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-7 right-1/3 w-2 h-2 bg-accent/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-9 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </header>

      {/* Main Properties Content */}
      <main id="main-properties" className="px-4 pb-24">
        {/* Search and Filter Section */}
        <section id="search-filters" className="mb-6 -mt-6 relative z-20">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder={isRTL ? 'البحث في العقارات...' : 'Search properties...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {[
                { key: 'all', labelAr: 'الكل', labelEn: 'All' },
                { key: 'apartments', labelAr: 'شقق', labelEn: 'Apartments' },
                { key: 'villas', labelAr: 'فيلل', labelEn: 'Villas' },
                { key: 'lands', labelAr: 'أراضي', labelEn: 'Lands' },
                { key: 'commercial', labelAr: 'تجاري', labelEn: 'Commercial' },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-colors ${
                    activeFilter === f.key
                      ? 'bg-primary text-white font-semibold'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {isRTL ? f.labelAr : f.labelEn}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Property Status Overview */}
        <section id="property-status" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'نظرة عامة على الحالة' : 'Status Overview'}</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">68%</span>
                </div>
                <div className="text-green-700 font-bold text-lg">32</div>
                <div className="text-xs text-green-600">{isRTL ? 'عقار متاح' : 'Available properties'}</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="text-yellow-500 w-5 h-5" />
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">26%</span>
                </div>
                <div className="text-yellow-700 font-bold text-lg">12</div>
                <div className="text-xs text-yellow-600">{isRTL ? 'قيد التفاوض' : 'In negotiation'}</div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-3 text-sm">{isRTL ? 'مبيعات العقارات - آخر 6 أشهر' : 'Property sales - last 6 months'}</h3>
              <div className="flex items-end justify-between h-24 gap-2">
                {['يناير','فبراير','مارس','أبريل','مايو','يونيو'].map((m, i) => (
                  <div className="flex flex-col items-center" key={i}>
                    <div className={`${i % 2 === 0 ? 'bg-primary' : 'bg-accent'} w-5 rounded-t mb-1`} style={{ height: `${12 + i * 2}px` }} />
                    <span className="text-xs text-gray-500">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section id="featured-properties" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-primary">{isRTL ? 'العقارات المميزة' : 'Featured Properties'}</h2>
              <span className="bg-accent/10 text-accent-dark px-3 py-1 rounded-full text-sm font-semibold">{isRTL ? '5 عقارات' : '5 properties'}</span>
            </div>

            {/* Featured Property Cards */}
            <div className="space-y-4">
              <div className="property-card border-2 border-accent/20 rounded-xl overflow-hidden bg-gradient-to-r from-accent/5 to-transparent">
                <div className="h-40 overflow-hidden relative">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/59123bf191-9c4bc833a7e59e2211d2.png" alt="luxury penthouse apartment in Riyadh with panoramic city view modern interior design" />
                  <div className="absolute top-3 right-3 bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" /> {isRTL ? 'مميز' : 'Featured'}
                  </div>
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {isRTL ? 'متاح' : 'Available'}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800">{isRTL ? 'بنتهاوس فاخر - الرياض' : 'Luxury Penthouse - Riyadh'}</h3>
                    <div className="flex gap-1">
                      <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors" aria-label="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors" aria-label="Share">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{isRTL ? '4 غرف نوم • 3 حمام • 250 م² • إطلالة بانورامية' : '4 BD • 3 BA • 250 m² • Panoramic view'}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-accent font-bold text-lg">3,500,000 {isRTL ? 'ريال' : 'SAR'}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span>{isRTL ? '124 مشاهدة' : '124 views'}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 gradient-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      {isRTL ? 'عرض التفاصيل' : 'View details'}
                    </button>
                    <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors" aria-label="Call">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="property-card border border-gray-200 rounded-xl overflow-hidden">
                <div className="h-40 overflow-hidden relative">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f9a28ce848-a35b0faeebdab9a134a8.png" alt="modern villa with swimming pool in Jeddah Saudi Arabia luxury residential architecture" />
                  <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {isRTL ? 'جديد' : 'New'}
                  </div>
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {isRTL ? 'متاح' : 'Available'}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800">{isRTL ? 'فيلا مع مسبح - جدة' : 'Villa with Pool - Jeddah'}</h3>
                    <div className="flex gap-1">
                      <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors" aria-label="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors" aria-label="Share">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{isRTL ? '6 غرف نوم • 5 حمام • 500 م² • حديقة ومسبح' : '6 BD • 5 BA • 500 m² • Garden & Pool'}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-accent font-bold text-lg">4,200,000 {isRTL ? 'ريال' : 'SAR'}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span>{isRTL ? '89 مشاهدة' : '89 views'}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 gradient-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      {isRTL ? 'عرض التفاصيل' : 'View details'}
                    </button>
                    <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors" aria-label="Call">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Properties Grid (list-style items) */}
        <section id="all-properties" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-primary">{isRTL ? 'جميع العقارات' : 'All Properties'}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className={`w-4 h-4 ${viewMode === 'grid' ? '' : 'text-gray-500'}`} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-primary/10 text-primary' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  aria-label="List view"
                >
                  <List className={`w-4 h-4 ${viewMode === 'list' ? '' : 'text-gray-500'}`} />
                </button>
              </div>
            </div>
            {(() => {
              const data = [
                {
                  id: 1,
                  img: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d13f0792a2-1b4736adebd8320b7b63.png',
                  titleAr: 'شقة عائلية - الدمام',
                  titleEn: 'Family Apartment - Dammam',
                  descAr: '3 غرف • 2 حمام • 180 م²',
                  descEn: '3 BD • 2 BA • 180 m²',
                  price: '1,450,000',
                  priceSuffixAr: 'ريال',
                  priceSuffixEn: 'SAR',
                  statusAr: 'متاح',
                  statusEn: 'Available',
                  statusColor: 'green',
                  category: 'apartments',
                },
                {
                  id: 2,
                  img: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3a3e4628e2-ec5ef6e5a76d35ad4ba1.png',
                  titleAr: 'فيلا تراثية - مكة',
                  titleEn: 'Heritage Villa - Mecca',
                  descAr: '5 غرف • 4 حمام • 350 م²',
                  descEn: '5 BD • 4 BA • 350 m²',
                  price: '2,800,000',
                  priceSuffixAr: 'ريال',
                  priceSuffixEn: 'SAR',
                  statusAr: 'محجوز',
                  statusEn: 'Reserved',
                  statusColor: 'yellow',
                  category: 'villas',
                },
                {
                  id: 3,
                  img: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5e49a8b395-584ad725a33357ad1ba3.png',
                  titleAr: 'مكتب تجاري - الرياض',
                  titleEn: 'Office - Riyadh',
                  descAr: '6 مكاتب • 2 قاعة اجتماع • 300 م²',
                  descEn: '6 offices • 2 meeting rooms • 300 m²',
                  price: isRTL ? '15,000 ريال/شهر' : '15,000 SAR/mo',
                  priceSuffixAr: '',
                  priceSuffixEn: '',
                  statusAr: 'للإيجار',
                  statusEn: 'For Rent',
                  statusColor: 'blue',
                  category: 'commercial',
                },
                {
                  id: 4,
                  img: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/67c7b90714-56b7630c3a578e2d875a.png',
                  titleAr: 'أرض سكنية - المدينة',
                  titleEn: 'Residential Land - Medina',
                  descAr: 'زاوية • 600 م² • رخصة بناء',
                  descEn: 'Corner • 600 m² • Building permit',
                  price: '950,000',
                  priceSuffixAr: 'ريال',
                  priceSuffixEn: 'SAR',
                  statusAr: 'متاح',
                  statusEn: 'Available',
                  statusColor: 'green',
                  category: 'lands',
                },
                {
                  id: 5,
                  img: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/45ed5348ee-e46526c3163bb7a833ff.png',
                  titleAr: 'دوبلكس بإطلالة بحرية - الخبر',
                  titleEn: 'Sea View Duplex - Khobar',
                  descAr: '4 غرف • 3 حمام • 220 م²',
                  descEn: '4 BD • 3 BA • 220 m²',
                  price: '1,850,000',
                  priceSuffixAr: 'ريال',
                  priceSuffixEn: 'SAR',
                  statusAr: 'متاح',
                  statusEn: 'Available',
                  statusColor: 'green',
                  category: 'apartments',
                },
              ];

              const norm = (s: string) => s.toLowerCase();
              const filtered = data.filter((p) => {
                const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
                const text = isRTL ? `${p.titleAr} ${p.descAr}` : `${p.titleEn} ${p.descEn}`;
                const matchesSearch = norm(text).includes(norm(searchTerm));
                return matchesFilter && (searchTerm.trim() === '' || matchesSearch);
              });

              if (viewMode === 'grid') {
                return (
                  <div className="grid grid-cols-2 gap-3">
                    {filtered.map((p) => (
                      <div key={p.id} className="property-card border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                        <div className="h-28 overflow-hidden relative">
                          <img className="w-full h-full object-cover" src={p.img} alt={isRTL ? p.titleAr : p.titleEn} />
                          <div className={`absolute top-2 ${isRTL ? 'left-2' : 'right-2'} px-2 py-1 rounded-full text-[10px] font-semibold ${
                            p.statusColor === 'green'
                              ? 'bg-green-100 text-green-700'
                              : p.statusColor === 'yellow'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {isRTL ? p.statusAr : p.statusEn}
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{isRTL ? p.titleAr : p.titleEn}</h3>
                          <p className="text-xs text-gray-500 mb-2 line-clamp-1">{isRTL ? p.descAr : p.descEn}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-accent font-bold text-sm">
                              {p.price} {isRTL ? p.priceSuffixAr : p.priceSuffixEn}
                            </span>
                            <div className="flex gap-1">
                              <button className="p-1 text-primary hover:text-primary-dark" aria-label="Edit">
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1 text-primary hover:text-primary-dark" aria-label="View">
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1 text-primary hover:text-primary-dark" aria-label="Share">
                                <Share2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <div className="space-y-4">
                  {filtered.map((p) => (
                    <div key={p.id} className="property-card flex border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                      <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                        <img className="w-full h-full object-cover" src={p.img} alt={isRTL ? p.titleAr : p.titleEn} />
                      </div>
                      <div className="flex-1 p-3">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="font-semibold text-gray-800 text-sm">{isRTL ? p.titleAr : p.titleEn}</h3>
                            <p className="text-xs text-gray-500">{isRTL ? p.descAr : p.descEn}</p>
                          </div>
                          <div className="flex gap-1">
                            <span className={`${
                              p.statusColor === 'green'
                                ? 'bg-green-100 text-green-700'
                                : p.statusColor === 'yellow'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-blue-100 text-blue-700'
                            } px-2 py-1 rounded-full text-xs font-semibold`}>{isRTL ? p.statusAr : p.statusEn}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-accent font-bold text-sm">
                            {p.price} {isRTL ? p.priceSuffixAr : p.priceSuffixEn}
                          </span>
                          <div className="flex gap-1">
                            <button className="p-1 text-primary hover:text-primary-dark" aria-label="Edit">
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button className="p-1 text-primary hover:text-primary-dark" aria-label="View">
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button className="p-1 text-primary hover:text-primary-dark" aria-label="Share">
                              <Share2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* Load More Button */}
            <button className="w-full mt-4 py-3 text-primary font-semibold border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
              {isRTL ? 'تحميل المزيد من العقارات' : 'Load more properties'}{' '}
              <ChevronDown className="inline w-4 h-4 mr-1 align-middle" />
            </button>
          </div>
        </section>

        {/* Property Management Tools */}
        <section id="management-tools" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'أدوات الإدارة' : 'Management Tools'}</h2>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 hover:shadow-md transition-all">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-2">
                  <Plus className="text-white w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-primary">{isRTL ? 'إضافة عقار' : 'Add Property'}</span>
              </button>

              <button className="flex flex-col items-center p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20 hover:shadow-md transition-all">
                <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mb-2">
                  <Upload className="text-white w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-accent-dark">{isRTL ? 'استيراد عقارات' : 'Import Properties'}</span>
              </button>

              <button className="flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                  <BarChart3 className="text-white w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-green-700">{isRTL ? 'تقارير المبيعات' : 'Sales Reports'}</span>
              </button>

              <button className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                  <Settings className="text-white w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-blue-700">{isRTL ? 'إعدادات العقارات' : 'Property Settings'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Price Range Analysis */}
        <section id="price-analysis" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'تحليل الأسعار' : 'Price Analysis'}</h2>

            {/* Price Distribution */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{isRTL ? 'أقل من مليون ريال' : 'Under 1M SAR'}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-3/5 h-2 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm font-semibold">12</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{isRTL ? '1-2 مليون ريال' : '1-2M SAR'}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-4/5 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-sm font-semibold">18</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{isRTL ? '2-3 مليون ريال' : '2-3M SAR'}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-2/5 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-sm font-semibold">9</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{isRTL ? 'أكثر من 3 مليون' : 'Over 3M'}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-1/5 h-2 bg-red-500 rounded-full" />
                  </div>
                  <span className="text-sm font-semibold">8</span>
                </div>
              </div>
            </div>

            {/* Average Prices by Type */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-3 text-sm">{isRTL ? 'متوسط الأسعار حسب النوع' : 'Average prices by type'}</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-center">
                  <div className="text-primary font-bold">{isRTL ? '1.4م ريال' : 'SAR 1.4M'}</div>
                  <div className="text-gray-600">{isRTL ? 'شقق' : 'Apartments'}</div>
                </div>
                <div className="text-center">
                  <div className="text-accent font-bold">{isRTL ? '2.8م ريال' : 'SAR 2.8M'}</div>
                  <div className="text-gray-600">{isRTL ? 'فيلل' : 'Villas'}</div>
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-bold">{isRTL ? '850ألف ريال' : 'SAR 850K'}</div>
                  <div className="text-gray-600">{isRTL ? 'أراضي' : 'Lands'}</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 font-bold">{isRTL ? '12ألف/شهر' : '12K/mo'}</div>
                  <div className="text-gray-600">{isRTL ? 'تجاري' : 'Commercial'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section id="recent-activity" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'النشاطات الأخيرة' : 'Recent activity'}</h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Plus className="text-white w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm">{isRTL ? 'تم إضافة عقار جديد' : 'New property added'}</h3>
                  <p className="text-xs text-gray-500">{isRTL ? 'شقة فاخرة في الرياض - منذ ساعتين' : 'Riyadh luxury apt - 2h ago'}</p>
                </div>
                <button className="text-green-600 hover:text-green-700" aria-label="View">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Edit className="text-white w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm">{isRTL ? 'تم تحديث السعر' : 'Price updated'}</h3>
                  <p className="text-xs text-gray-500">{isRTL ? 'فيلا في جدة - تخفيض 200,000 ريال' : 'Jeddah villa - 200K off'}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700" aria-label="View">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-white w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm">{isRTL ? 'تم حجز عقار' : 'Property reserved'}</h3>
                  <p className="text-xs text-gray-500">{isRTL ? 'شقة في الدمام - العميل: سارة أحمد' : 'Dammam apt - Client: Sarah Ahmad'}</p>
                </div>
                <button className="text-yellow-600 hover:text-yellow-700" aria-label="View">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Check className="text-white w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm">{isRTL ? 'تم بيع عقار' : 'Property sold'}</h3>
                  <p className="text-xs text-gray-500">{isRTL ? 'فيلا في مكة - العمولة: 35,000 ريال' : 'Mecca villa - 35,000 SAR commission'}</p>
                </div>
                <button className="text-red-600 hover:text-red-700" aria-label="View">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Analytics Dashboard */}
        <section id="analytics-dashboard" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'لوحة التحليلات' : 'Analytics Dashboard'}</h2>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
                <div className="flex items-center justify-between mb-1">
                  <TrendingUp className="text-purple-500 w-5 h-5" />
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">+12%</span>
                </div>
                <div className="text-purple-700 font-bold">2,847</div>
                <div className="text-xs text-purple-600">{isRTL ? 'إجمالي المشاهدات' : 'Total views'}</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 border border-orange-200">
                <div className="flex items-center justify-between mb-1">
                  <Users className="text-orange-500 w-5 h-5" />
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">+8%</span>
                </div>
                <div className="text-orange-700 font-bold">156</div>
                <div className="text-xs text-orange-600">{isRTL ? 'استفسارات جديدة' : 'New inquiries'}</div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{isRTL ? 'معدل المشاهدة' : 'View rate'}</span>
                  <span className="text-sm font-semibold text-primary">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{isRTL ? 'معدل الاستفسار' : 'Inquiry rate'}</span>
                  <span className="text-sm font-semibold text-accent">62%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '62%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{isRTL ? 'معدل الإغلاق' : 'Close rate'}</span>
                  <span className="text-sm font-semibold text-green-600">28%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section id="market-insights" className="mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
            <h2 className="text-lg font-bold text-primary mb-4">{isRTL ? 'رؤى السوق' : 'Market Insights'}</h2>

            <div className="space-y-4">
              {/* Market Trend */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-green-500 w-5 h-5" />
                  <h3 className="font-semibold text-green-700">{isRTL ? 'اتجاه السوق إيجابي' : 'Market trend is positive'}</h3>
                </div>
                <p className="text-sm text-green-600">{isRTL ? 'ارتفاع في أسعار العقارات السكنية بنسبة 5.2% هذا الشهر' : 'Residential prices up 5.2% this month'}</p>
              </div>

              {/* Popular Areas */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">{isRTL ? 'المناطق الأكثر طلباً' : 'Most demanded areas'}</h3>
                <div className="space-y-2">
                  {[{ label: isRTL ? 'شمال الرياض' : 'North Riyadh', pct: 80, color: 'primary' }, { label: isRTL ? 'شرق جدة' : 'East Jeddah', pct: 65, color: 'accent' }, { label: isRTL ? 'الكورنيش - الدمام' : 'Corniche - Dammam', pct: 50, color: 'green' }].map((item, idx) => (
                    <div className="flex items-center justify-between" key={idx}>
                      <span className="text-sm text-gray-600">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                          <div className={`${item.color === 'primary' ? 'bg-primary' : item.color === 'accent' ? 'bg-accent' : 'bg-green-500'} h-1.5 rounded-full`} style={{ width: `${item.pct}%` }} />
                        </div>
                        <span className={`${item.color === 'primary' ? 'text-primary' : item.color === 'accent' ? 'text-accent' : 'text-green-600'} text-xs font-semibold`}>{item.pct}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="text-blue-500 w-5 h-5" />
                  <h3 className="font-semibold text-blue-700">{isRTL ? 'توصيات ذكية' : 'Smart recommendations'}</h3>
                </div>
                <ul className="space-y-1 text-sm text-blue-600">
                  <li>• {isRTL ? 'فكر في تخفيض أسعار العقارات في المنطقة الجنوبية' : 'Consider lowering prices in the south region'}</li>
                  <li>• {isRTL ? 'اعرض المزيد من الشقق العائلية في شمال الرياض' : 'List more family apartments in North Riyadh'}</li>
                  <li>• {isRTL ? 'استهدف العملاء الباحثين عن عقارات استثمارية' : 'Target investment-oriented buyers'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Use the app's bottom navigation for consistency */}
      <BottomNavBar currentScreen="properties" onNavigate={onNavigate} language={language} variant="business" />

      {/* Scoped styles to support custom utility colors and gradients */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .gradient-primary { background: linear-gradient(135deg, #0F4C5C 0%, #0A3540 100%); }
        .gradient-accent { background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%); }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

        /* Scoped custom color utilities to avoid global bleed */
        .legacy-scope .text-primary { color: #0F4C5C; }
        .legacy-scope .text-primary-dark { color: #0A3540; }
        .legacy-scope .text-accent { color: #D4AF37; }
        .legacy-scope .text-accent-dark { color: #B8941F; }
        .legacy-scope .bg-bg-light { background-color: #F2F4F5; }

        .legacy-scope .bg-primary { background-color: #0F4C5C; }
        .legacy-scope .bg-primary\/5 { background-color: rgba(15,76,92,0.05); }
        .legacy-scope .bg-primary\/10 { background-color: rgba(15,76,92,0.10); }
        .legacy-scope .bg-primary\/20 { background-color: rgba(15,76,92,0.20); }
        .legacy-scope .text-primary-dark { color: #0A3540; }
        .legacy-scope .border-primary { border-color: #0F4C5C; }
        .legacy-scope .border-primary\/20 { border-color: rgba(15,76,92,0.20); }

        .legacy-scope .bg-accent { background-color: #D4AF37; }
        .legacy-scope .bg-accent\/10 { background-color: rgba(212,175,55,0.10); }
        .legacy-scope .bg-accent\/20 { background-color: rgba(212,175,55,0.20); }
        .legacy-scope .border-accent\/20 { border-color: rgba(212,175,55,0.20); }

        /* Tailwind gradient stop helpers for custom colors */
        .legacy-scope .from-accent\/5 { --tw-gradient-from: rgba(212,175,55,0.05) var(--tw-gradient-from-position); --tw-gradient-to: rgba(212,175,55,0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }

        /* Hover interaction similar to original script */
        .legacy-scope .property-card { transition: all 0.3s ease; }
        .legacy-scope .property-card:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(15,76,92,0.15); }
      `}</style>
    </div>
  );
}
