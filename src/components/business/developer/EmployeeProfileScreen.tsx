import React from 'react';
import { cn } from '../../../lib/utils';
import {
  ArrowLeft, ArrowRight, Check, Clock, Coffee, Moon, Sun, Bell,
  Users, Car, Power, Save, Undo, Home, ClipboardList,
  Calculator, MessageSquare, User, CheckCircle2, Bolt, Phone, 
  Calendar, MessageCircle, Settings
} from 'lucide-react';
import { Card } from '../../ui/card';
import { Switch } from '../../ui/switch';
import { BottomNavBar } from '../../BottomNavBar';
import { Label } from '../../ui/label';

interface EmployeeProfileScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData?: any;
  onLogout?: () => void;
}

export const EmployeeProfileScreen: React.FC<EmployeeProfileScreenProps> = ({ onNavigate, language }) => {
  const isRTL = language === 'ar';
  const [masterToggle, setMasterToggle] = React.useState(true);
  const [selectedStatus, setSelectedStatus] = React.useState<'available' | 'busy' | 'away' | 'offline'>('available');
  const [customMessage, setCustomMessage] = React.useState("متاح الآن للرد على جميع استفساراتكم العقارية. يسعدني مساعدتكم في العثور على العقار المناسب!");

  return (
    <div 
      className={cn("min-h-screen bg-[#F2F4F5] font-arabic overflow-hidden animate-[fadeIn_0.5s_ease-out]")} 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white">
        <div className="px-4 py-6">
          {/* Navigation Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            </button>
            <h1 className="text-xl font-bold">{isRTL ? 'الملف الشخصي' : 'Profile'}</h1>
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Current Status Display */}
          <div className="text-center mb-6">
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <div className="absolute inset-0 rounded-full bg-green-400/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-green-400/30 animate-[pulse-ring_2s_infinite]"></div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-green-400">
                <img 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-1">{isRTL ? 'أحمد محمد' : 'Ahmed Mohammed'}</h2>
            <p className="text-white/80 text-sm mb-3">{isRTL ? 'وسيط عقاري معتمد' : 'Certified Real Estate Agent'}</p>

            {/* Current Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/20 rounded-full border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-200 text-sm font-semibold">
                {isRTL ? 'متاح الآن للعملاء' : 'Available for Clients'}
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-green-300 text-lg font-bold">24</div>
              <div className="text-xs text-white/80">{isRTL ? 'عميل نشط' : 'Active Clients'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-green-300 text-lg font-bold">8</div>
              <div className="text-xs text-white/80">{isRTL ? 'محادثات مفتوحة' : 'Open Chats'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-green-300 text-lg font-bold">12{isRTL ? 'د' : 'm'}</div>
              <div className="text-xs text-white/80">{isRTL ? 'متوسط الرد' : 'Avg Response'}</div>
            </div>
          </div>
        </div>

        {/* Wave SVG with gradient */}
        <svg className="w-full h-20 relative z-10" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 40C360 20 720 20 1080 40C1260 50 1350 50 1440 40V80H0V40Z" fill="#F2F4F5"/>
          <path d="M0 50C240 30 480 30 720 50C960 70 1200 70 1440 50V80H0V50Z" fill="url(#wave-gradient-1)" fillOpacity="0.3"/>
          <defs>
            <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F4C5C" stopOpacity="0.4"/>
              <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.5"/>
              <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative Elements */}
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-[#0F4C5C]/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-7 right-1/3 w-2 h-2 bg-[#D4AF37]/25 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-9 right-1/4 w-1.5 h-1.5 bg-[#0F4C5C]/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-24 -mt-6 relative z-20">
        {/* Master Toggle Section */}
        <section className="mb-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-[#0F4C5C] mb-1">{isRTL ? 'التوفر العام' : 'General Availability'}</h2>
                <p className="text-sm text-gray-500">{isRTL ? 'تحكم في إمكانية وصول العملاء إليك' : 'Control client access'}</p>
              </div>
              <Switch 
                checked={masterToggle}
                onCheckedChange={setMasterToggle}
                className="toggle-switch"
              />
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative">
                <Users className="w-5 h-5 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-700">{isRTL ? 'نشط ومتاح' : 'Active and Available'}</h3>
                <p className="text-sm text-green-600">{isRTL ? 'يمكن للعملاء التواصل معك الآن' : 'Clients can reach you now'}</p>
              </div>
              <div className="text-green-600 font-bold text-lg">24</div>
            </div>
          </Card>
        </section>

        {/* Status Options Section */}
        <section className="mb-6">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-[#0F4C5C] mb-4">{isRTL ? 'اختر حالة التوفر' : 'Choose Availability Status'}</h2>
            <div className="space-y-4">
              {/* Available Status */}
              <div 
                className={cn(
                  "status-card bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border-2 cursor-pointer",
                  selectedStatus === 'available' ? 'border-green-300' : 'border-green-200 hover:border-green-300'
                )}
                onClick={() => setSelectedStatus('available')}
              >
                {/* Status content */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800 text-lg">{isRTL ? 'متاح' : 'Available'}</h3>
                      <p className="text-sm text-green-600">{isRTL ? 'جاهز للرد الفوري' : 'Ready for instant response'}</p>
                    </div>
                  </div>
                  <Check className={cn(
                    "w-6 h-6",
                    selectedStatus === 'available' ? "text-green-600" : "text-gray-300"
                  )} />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Bolt className="w-4 h-4 text-green-500" />
                    <span className="text-green-700">{isRTL ? 'رد فوري' : 'Instant Reply'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-500" />
                    <span className="text-green-700">{isRTL ? 'مكالمات مفتوحة' : 'Open Calls'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-700">{isRTL ? 'محادثات نشطة' : 'Active Chats'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span className="text-green-700">{isRTL ? 'حجز مواعيد' : 'Appointments'}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-600">{isRTL ? 'العملاء المتصلين الآن' : 'Connected Clients'}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">24</span>
                  </div>
                </div>
              </div>

              {/* Busy Status */}
              <div 
                className={cn(
                  "status-card bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 border-2 cursor-pointer",
                  selectedStatus === 'busy' ? 'border-yellow-300' : 'border-yellow-200 hover:border-yellow-300'
                )}
                onClick={() => setSelectedStatus('busy')}
              >
                {/* Similar structure for busy status */}
                {/* Add other status cards similarly */}
              </div>
            </div>
          </Card>
        </section>

        {/* Additional sections would go here */}
        {/* Bottom Navigation */}
        <div className="py-4">
          <BottomNavBar
            currentScreen="profile"
            onNavigate={onNavigate}
            language={language}
            variant="business"
          />
        </div>
      </main>
    </div>
  );
};