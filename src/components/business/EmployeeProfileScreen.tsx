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
      className="min-h-screen bg-[#F2F4F5] pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 pt-12 pb-6 shadow-sm">
        <h1 className="text-2xl font-bold">
          {isRTL ? 'الملف الشخصي' : 'Profile'}
        </h1>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="p-6 bg-white border-teal-100 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="inline-block bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-full p-6 mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#0E1E25] mb-1">{employeeData?.name}</h2>
          <p className="text-[#4B5563] mb-3">{employeeData?.company}</p>
          <Badge className="bg-[#D4AF37] text-[#0E1E25] border-[#B8941F]">
            {employeeData?.type === 'developer' 
              ? (isRTL ? 'موظف عقاري' : 'Property Agent')
              : (isRTL ? 'موظف تمويل' : 'Finance Agent')}
          </Badge>
        </Card>

        {/* Contact Info */}
        <Card className="p-6 bg-white border-teal-100 shadow-sm">
          <h3 className="font-semibold text-[#0E1E25] mb-4">
            {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg border border-teal-100">
              <div className="bg-[#0F4C5C] p-2 rounded-lg">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#0E1E25]" dir="ltr">{employeeData?.email}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg border border-teal-100">
              <div className="bg-[#0F4C5C] p-2 rounded-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#0E1E25]" dir="ltr">{employeeData?.phone}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg border border-teal-100">
              <div className="bg-[#0F4C5C] p-2 rounded-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#0E1E25]">{employeeData?.company}</span>
            </div>
          </div>
        </Card>

        {/* Settings Options */}
        <div className="space-y-3">
          <Card className="p-4 bg-white border-teal-100 cursor-pointer hover:shadow-md transition-all hover:border-teal-200">
            <div className="flex items-center gap-3">
              <div className="bg-teal-50 p-2 rounded-lg">
                <Settings className="w-5 h-5 text-[#0F4C5C]" />
              </div>
              <span className="text-[#0E1E25] font-medium">{isRTL ? 'الإعدادات' : 'Settings'}</span>
            </div>
          </Card>

          <Card className="p-4 bg-white border-teal-100 cursor-pointer hover:shadow-md transition-all hover:border-teal-200">
            <div className="flex items-center gap-3">
              <div className="bg-teal-50 p-2 rounded-lg">
                <HelpCircle className="w-5 h-5 text-[#0F4C5C]" />
              </div>
              <span className="text-[#0E1E25] font-medium">{isRTL ? 'المساعدة والدعم' : 'Help & Support'}</span>
            </div>
          </Card>

          <Card className="p-4 bg-white border-teal-100 cursor-pointer hover:shadow-md transition-all hover:border-teal-200">
            <div className="flex items-center gap-3">
              <div className="bg-teal-50 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-[#0F4C5C]" />
              </div>
              <span className="text-[#0E1E25] font-medium">{isRTL ? 'الخصوصية والأمان' : 'Privacy & Security'}</span>
            </div>
          </Card>
        </div>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 transition-colors"
        >
          <LogOut className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
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
