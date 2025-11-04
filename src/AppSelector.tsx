import { useState } from 'react';
import { Building2, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import QistTechLogo from './assets/Qis-Tech-highris.png';

interface AppSelectorProps {
  onSelectApp: (app: 'customer' | 'business') => void;
}

export function AppSelector({ onSelectApp }: AppSelectorProps) {
  const [language] = useState<'en' | 'ar'>('ar');
  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-orange-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="mb-4 flex flex-col items-center">
            <img 
              src={QistTechLogo} 
              alt="QistTech Logo" 
              className="w-32 h-32 object-contain rounded-2xl shadow-lg"
            />
            <p className="text-sm text-teal-600 mt-2 font-semibold">QistTech Platform</p>
          </div>
          <p className="text-gray-600 mt-4">
            {isRTL ? 'اختر التطبيق المناسب' : 'Choose Your App'}
          </p>
        </div>

        {/* App Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Customer App */}
          <Card 
            onClick={() => onSelectApp('customer')}
            className="p-8 bg-white/80 backdrop-blur-lg border-2 border-teal-100 hover:border-teal-300 transition-all cursor-pointer hover:shadow-2xl hover:scale-105 duration-300"
          >
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-teal-500 to-teal-600 rounded-full p-6 mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isRTL ? 'تطبيق العملاء' : 'Customer App'}
              </h2>
              <p className="text-gray-600 mb-6">
                {isRTL 
                  ? 'للعملاء الراغبين في شراء وتمويل العقارات'
                  : 'For customers looking to purchase and finance properties'}
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span>{isRTL ? 'تصفح العقارات' : 'Browse Properties'}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span>{isRTL ? 'طلبات التمويل' : 'Financing Requests'}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                  <span>{isRTL ? 'متابعة الطلبات' : 'Track Orders'}</span>
                </div>
              </div>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                {isRTL ? 'دخول تطبيق العملاء' : 'Enter Customer App'}
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4 mr-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
              </Button>
            </div>
          </Card>

          {/* Business App */}
          <Card 
            onClick={() => onSelectApp('business')}
            className="p-8 bg-white/80 backdrop-blur-lg border-2 border-purple-100 hover:border-purple-300 transition-all cursor-pointer hover:shadow-2xl hover:scale-105 duration-300"
          >
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-6 mb-4">
                <Building2 className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isRTL ? 'قسط تك أعمال' : 'QistTech Business'}
              </h2>
              <p className="text-gray-600 mb-6">
                {isRTL 
                  ? 'للموظفين من المطورين العقاريين والتمويل'
                  : 'For employees from developers and finance institutions'}
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>{isRTL ? 'إدارة الطلبات' : 'Manage Requests'}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>{isRTL ? 'سحب عملاء جدد' : 'Pull New Clients'}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>{isRTL ? 'محفظة العمولات' : 'Commission Wallet'}</span>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                {isRTL ? 'دخول تطبيق الموظفين' : 'Enter Business App'}
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4 mr-2" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-8 text-center">
          {isRTL 
            ? 'منصة قسط تك الذكية لربط العملاء مع المطورين العقاريين ومؤسسات التمويل'
            : 'QistTech smart platform connecting customers with developers and finance institutions'}
        </p>
      </div>

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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
