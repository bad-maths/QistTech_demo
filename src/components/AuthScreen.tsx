import { useState } from 'react';
import { Building2, User, Mail, Lock, Phone, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AuthScreenProps {
  onComplete: () => void;
  language: 'en' | 'ar';
}

export function AuthScreen({ onComplete, language }: AuthScreenProps) {
  const isRTL = language === 'ar';
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1000);
  };

  const handleRegister = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1000);
  };

  const handleNafathLogin = async () => {
    setIsLoading(true);
    // Simulate Nafath authentication
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F4F5] via-white to-[#F2F4F5] p-6 flex flex-col relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0F4C5C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full relative z-10">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-3xl p-5 w-20 h-20 mx-auto mb-4 shadow-lifted flex items-center justify-center">
            <Building2 className="w-10 h-10 text-[#D4AF37]" />
          </div>
          <h1 className="text-3xl mb-2 text-[#0E1E25] tracking-tight">{isRTL ? 'قسط تك' : 'QistTech'}</h1>
          <p className="text-[#4B5563]">
            {isRTL ? 'منصتك الذكية للعقارات والتمويل' : 'Your Smart Real Estate & Financing Platform'}
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">{isRTL ? 'تسجيل الدخول' : 'Login'}</TabsTrigger>
            <TabsTrigger value="register">{isRTL ? 'حساب جديد' : 'Register'}</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl mb-2 text-[#0E1E25] tracking-tight">
                {isRTL ? 'مرحباً بك' : 'Welcome Back'}
              </h2>
              <p className="text-[#4B5563]">
                {isRTL ? 'سجل دخولك للمتابعة' : 'Sign in to continue'}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{isRTL ? 'البريد الإلكتروني' : 'Email'}</Label>
                <div className="relative">
                  <Mail className={`absolute top-3.5 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#4B5563]`} />
                  <Input
                    id="email"
                    type="email"
                    placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    className={isRTL ? 'pr-12' : 'pl-12'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{isRTL ? 'كلمة المرور' : 'Password'}</Label>
                <div className="relative">
                  <Lock className={`absolute top-3.5 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#4B5563]`} />
                  <Input
                    id="password"
                    type="password"
                    placeholder={isRTL ? 'أدخل كلمة المرور' : 'Enter your password'}
                    className={isRTL ? 'pr-12' : 'pl-12'}
                  />
                </div>
              </div>

              <button className="text-sm text-[#0F4C5C] hover:text-[#D4AF37] transition-smooth font-medium">
                {isRTL ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
              </button>

              <Button 
                onClick={handleLogin} 
                disabled={isLoading}
                className="w-full h-12"
              >
                {isLoading ? (isRTL ? 'جاري الدخول...' : 'Signing in...') : (isRTL ? 'تسجيل الدخول' : 'Sign In')}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#0F4C5C]/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-gradient-to-br from-[#F2F4F5] via-white to-[#F2F4F5] text-[#4B5563]">
                    {isRTL ? 'أو' : 'OR'}
                  </span>
                </div>
              </div>

              <Button 
                onClick={handleNafathLogin}
                disabled={isLoading}
                variant="outline" 
                className="w-full border-2 border-[#D4AF37] text-[#0F4C5C] hover:bg-[#D4AF37]/5 h-12 shadow-soft"
              >
                <Shield className="w-5 h-5 ml-2 mr-2 text-[#D4AF37]" />
                {isLoading ? (isRTL ? 'جاري التحقق...' : 'Verifying...') : (isRTL ? 'الدخول عبر نفاذ' : 'Login with Nafath')}
              </Button>
              
              <p className="text-xs text-center text-[#4B5563] mt-2">
                {isRTL 
                  ? 'منظومة الهوية الرقمية السعودية' 
                  : 'Saudi Digital Identity System'}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="register" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl mb-2 text-[#0E1E25] tracking-tight">
                {isRTL ? 'إنشاء حساب جديد' : 'Create Account'}
              </h2>
              <p className="text-[#4B5563]">
                {isRTL ? 'املأ المعلومات أدناه' : 'Fill in your details below'}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{isRTL ? 'الاسم الكامل' : 'Full Name'}</Label>
                <div className="relative">
                  <User className={`absolute top-3.5 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#4B5563]`} />
                  <Input
                    id="name"
                    placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    className={isRTL ? 'pr-12' : 'pl-12'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{isRTL ? 'رقم الجوال' : 'Phone Number'}</Label>
                <div className="relative">
                  <Phone className={`absolute top-3.5 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#4B5563]`} />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={isRTL ? 'أدخل رقم جوالك' : 'Enter your phone number'}
                    className={isRTL ? 'pr-12' : 'pl-12'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-email">{isRTL ? 'البريد الإلكتروني' : 'Email'}</Label>
                <div className="relative">
                  <Mail className={`absolute top-3.5 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#4B5563]`} />
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    className={isRTL ? 'pr-12' : 'pl-12'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-password">{isRTL ? 'كلمة المرور' : 'Password'}</Label>
                <div className="relative">
                  <Lock className={`absolute top-3.5 ${isRTL ? 'right-4' : 'left-4'} w-5 h-5 text-[#4B5563]`} />
                  <Input
                    id="reg-password"
                    type="password"
                    placeholder={isRTL ? 'أدخل كلمة المرور' : 'Create a password'}
                    className={isRTL ? 'pr-12' : 'pl-12'}
                  />
                </div>
              </div>

              <Button 
                onClick={handleRegister} 
                disabled={isLoading}
                className="w-full h-12"
              >
                {isLoading ? (isRTL ? 'جاري الإنشاء...' : 'Creating...') : (isRTL ? 'إنشاء حساب' : 'Create Account')}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#0F4C5C]/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-gradient-to-br from-[#F2F4F5] via-white to-[#F2F4F5] text-[#4B5563]">
                    {isRTL ? 'أو' : 'OR'}
                  </span>
                </div>
              </div>

              <Button 
                onClick={handleNafathLogin}
                disabled={isLoading}
                variant="outline" 
                className="w-full border-2 border-[#D4AF37] text-[#0F4C5C] hover:bg-[#D4AF37]/5 h-12 shadow-soft"
              >
                <Shield className="w-5 h-5 ml-2 mr-2 text-[#D4AF37]" />
                {isLoading ? (isRTL ? 'جاري التحقق...' : 'Verifying...') : (isRTL ? 'التسجيل عبر نفاذ' : 'Register with Nafath')}
              </Button>
              
              <p className="text-xs text-center text-[#4B5563] mt-2">
                {isRTL 
                  ? 'سيتم جلب بياناتك تلقائياً من نفاذ' 
                  : 'Your data will be automatically fetched from Nafath'}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
