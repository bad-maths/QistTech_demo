import { User, Mail, Phone, Building2, LogOut, Settings, HelpCircle, Shield } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeeProfileScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
  onLogout: () => void;
}

export function EmployeeProfileScreen({ onNavigate, language, employeeData, onLogout }: EmployeeProfileScreenProps) {
  const isRTL = language === 'ar';

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="bg-white/80 backdrop-blur-lg border-b border-purple-100 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">
          {isRTL ? 'الملف الشخصي' : 'Profile'}
        </h1>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="p-6 bg-white/80 backdrop-blur-lg border-purple-100 text-center">
          <div className="inline-block bg-purple-100 rounded-full p-6 mb-4">
            <User className="w-12 h-12 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">{employeeData?.name}</h2>
          <p className="text-gray-600 mb-2">{employeeData?.company}</p>
          <Badge className="bg-purple-100 text-purple-700">
            {employeeData?.type === 'developer' 
              ? (isRTL ? 'موظف عقاري' : 'Property Agent')
              : (isRTL ? 'موظف تمويل' : 'Finance Agent')}
          </Badge>
        </Card>

        {/* Contact Info */}
        <Card className="p-6 bg-white/80 backdrop-blur-lg border-purple-100">
          <h3 className="font-semibold text-gray-900 mb-4">
            {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700" dir="ltr">{employeeData?.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700" dir="ltr">{employeeData?.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">{employeeData?.company}</span>
            </div>
          </div>
        </Card>

        {/* Settings Options */}
        <div className="space-y-2">
          <Card className="p-4 bg-white/80 backdrop-blur-lg border-purple-100 cursor-pointer hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-gray-600" />
              <span className="text-gray-900">{isRTL ? 'الإعدادات' : 'Settings'}</span>
            </div>
          </Card>

          <Card className="p-4 bg-white/80 backdrop-blur-lg border-purple-100 cursor-pointer hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <span className="text-gray-900">{isRTL ? 'المساعدة والدعم' : 'Help & Support'}</span>
            </div>
          </Card>

          <Card className="p-4 bg-white/80 backdrop-blur-lg border-purple-100 cursor-pointer hover:shadow-lg transition-all">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="text-gray-900">{isRTL ? 'الخصوصية والأمان' : 'Privacy & Security'}</span>
            </div>
          </Card>
        </div>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full border-red-300 text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5 mr-2" />
          {isRTL ? 'تسجيل الخروج' : 'Logout'}
        </Button>
      </div>

      <BottomNavBar
        currentScreen="profile"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />
    </div>
  );
}
