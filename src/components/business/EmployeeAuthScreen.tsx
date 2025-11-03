import { useState } from 'react';
import { Mail, Lock, ArrowLeft, ArrowRight, Building2, UserCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface EmployeeAuthScreenProps {
  onComplete: (employeeData: any) => void;
  language: 'en' | 'ar';
  onBack: () => void;
}

export function EmployeeAuthScreen({ onComplete, language, onBack }: EmployeeAuthScreenProps) {
  const isRTL = language === 'ar';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [employeeType, setEmployeeType] = useState<'developer' | 'finance'>('developer');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - في التطبيق الفعلي سيتم التحقق من API
    setTimeout(() => {
      const mockEmployeeData = {
        id: 'EMP-001',
        name: employeeType === 'developer' 
          ? (isRTL ? 'أحمد محمد السالم' : 'Ahmad Mohammed Al-Salem')
          : (isRTL ? 'خالد عبدالله الشمري' : 'Khalid Abdullah Al-Shamri'),
        email: email || (employeeType === 'developer' ? 'developer@emaar.com' : 'finance@bank.com'),
        type: employeeType,
        company: employeeType === 'developer'
          ? (isRTL ? 'شركة إعمار العقارية' : 'Emaar Properties')
          : (isRTL ? 'بنك الرياض' : 'Riyad Bank'),
        phone: '0501234567',
        avatar: null,
      };
      
      onComplete(mockEmployeeData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#F2F4F5] via-white to-[#F2F4F5] p-6 flex flex-col relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0F4C5C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full relative z-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'} p-2 hover:bg-white/50 rounded-full transition-colors`}
        >
          {isRTL ? (
            <ArrowRight className="w-5 h-5 text-[#0F4C5C]" />
          ) : (
            <ArrowLeft className="w-5 h-5 text-[#0F4C5C]" />
          )}
        </button>

        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-3xl p-5 w-20 h-20 mx-auto mb-4 shadow-lg flex items-center justify-center">
            <Building2 className="w-10 h-10 text-[#D4AF37]" />
          </div>
          <h1 className="text-3xl mb-2 text-[#0E1E25] font-bold tracking-tight">{isRTL ? 'قسط تك أعمال' : 'QistTech Business'}</h1>
          <p className="text-[#4B5563]">
            {isRTL ? 'منصة الموظفين الذكية' : 'Smart Employee Platform'}
          </p>
        </div>

        {/* Login Form */}
        <Card className="p-6 bg-white/95 backdrop-blur-lg border border-teal-100 shadow-lg">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Employee Type Selection */}
            <div>
              <Label className="mb-3 block text-[#0E1E25] font-semibold">
                {isRTL ? 'نوع الموظف' : 'Employee Type'}
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setEmployeeType('developer')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    employeeType === 'developer'
                       ? 'border-[#0F4C5C]'
                       : 'border-teal-100 hover:border-teal-200'
                  }`}
                  style={{
                    background:
                      employeeType === 'developer'
                        ? 'linear-gradient(to bottom right, rgba(15, 76, 92, 0.1), rgba(15, 76, 92, 0.05), rgba(15, 76, 92, 0.03))'
                        : '#FFFFFF',
                    borderColor:
                      employeeType === 'developer'
                        ? 'rgba(15, 76, 92, 0.3)'
                        : 'rgba(15, 76, 92, 0.15)'
                  }}
                >
                  <div className={`flex flex-col items-center gap-2`}>
                    <Building2 className={`w-6 h-6 ${employeeType === 'developer' ? 'text-[#0F4C5C]' : 'text-[#4B5563]'}`} />
                    <span className={`text-sm font-medium ${employeeType === 'developer' ? 'text-[#0F4C5C]' : 'text-[#4B5563]'}`}>
                      {isRTL ? 'موظف عقار' : 'Property Staff'}
                    </span>
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setEmployeeType('finance')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    employeeType === 'finance'
                       ? 'border-[#0F4C5C]'
                       : 'border-teal-100 hover:border-teal-200'
                  }`}
                  style={{
                    background:
                      employeeType === 'finance'
                        ? 'linear-gradient(to bottom right, rgba(15, 76, 92, 0.1), rgba(15, 76, 92, 0.05), rgba(15, 76, 92, 0.03))'
                        : '#FFFFFF',
                    borderColor:
                      employeeType === 'finance'
                        ? 'rgba(15, 76, 92, 0.3)'
                        : 'rgba(15, 76, 92, 0.15)'
                  }}
                >
                  <div className={`flex flex-col items-center gap-2`}>
                    <UserCheck className={`w-6 h-6 ${employeeType === 'finance' ? 'text-[#0F4C5C]' : 'text-[#4B5563]'}`} />
                    <span className={`text-sm font-medium ${employeeType === 'finance' ? 'text-[#0F4C5C]' : 'text-[#4B5563]'}`}>
                      {isRTL ? 'موظف بنك' : 'Finance Staff'}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block text-[#0E1E25]">
                {isRTL ? 'البريد الإلكتروني' : 'Email'}
              </Label>
              <div className="relative">
                <Mail className={`absolute top-3.5 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#4B5563]`} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    employeeType === 'developer' 
                      ? 'developer@emaar.com' 
                      : 'finance@bank.com'
                  }
                  className={`${isRTL ? 'pr-12' : 'pl-12'} bg-white border-teal-100 focus:border-[#0F4C5C]`}
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="mb-2 block text-[#0E1E25]">
                {isRTL ? 'كلمة المرور' : 'Password'}
              </Label>
              <div className="relative">
                <Lock className={`absolute top-3.5 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#4B5563]`} />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${isRTL ? 'pr-12' : 'pl-12'} bg-white border-teal-100 focus:border-[#0F4C5C]`}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#0F4C5C] hover:bg-[#0A3540] text-white h-12 font-semibold transition-colors rounded-lg"
              disabled={isLoading}
              style={{ backgroundColor: '#0F4C5C' }}
            >
              {isLoading ? (
                <span>{isRTL ? 'جاري تسجيل الدخول...' : 'Signing in...'}</span>
              ) : (
                <span>{isRTL ? 'تسجيل الدخول' : 'Sign In'}</span>
              )}
            </Button>
          </form>
        </Card>

        {/* No Account Text */}
        <div className="text-center mt-6">
          <p className="text-sm text-[#4B5563]">
            {isRTL ? 'لا تملك حساباً؟' : "Don't have an account?"}{' '}
            <span className="text-[#0F4C5C] font-semibold">
              {isRTL ? 'تواصل مع مدير الحسابات' : 'Contact Account Manager'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
