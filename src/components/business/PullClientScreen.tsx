import { useState } from 'react';
import { ArrowLeft, ArrowRight, UserPlus, IdCard, CheckCircle, Smartphone, UserCheck, Link2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { BottomNavBar } from '../BottomNavBar';

interface PullClientScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function PullClientScreen({ onNavigate, language, employeeData }: PullClientScreenProps) {
  const isRTL = language === 'ar';
  const [nationalId, setNationalId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (nationalId.length !== 10) {
      return;
    }

    setIsLoading(true);

    // Simulate sending notification
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div 
        className="min-h-screen bg-[#F2F4F5] relative overflow-hidden flex items-center justify-center px-6 pb-20"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-md">
          <div className="inline-block bg-green-50 rounded-full p-6 mb-6">
            <CheckCircle className="w-16 h-16 text-[#10B981]" />
          </div>
          
          <h2 className="text-2xl font-bold text-[#0E1E25] mb-4">
            {isRTL ? 'تم إرسال الإشعار بنجاح!' : 'Notification Sent Successfully!'}
          </h2>
          
          <p className="text-[#4B5563] mb-6">
            {isRTL 
              ? 'تم إرسال إشعار للعميل على تطبيق قسط تك. سيتم ربطكما فوراً عند موافقته على الطلب.'
              : 'Notification sent to the customer on QistTech app. You will be connected once they accept the request.'}
          </p>

          <Card className="p-4 bg-white border-teal-100 mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-teal-50 rounded-lg p-3">
                <IdCard className="w-6 h-6 text-[#0F4C5C]" />
              </div>
              <div className="text-start">
                <p className="text-sm text-[#4B5563]">{isRTL ? 'رقم الهوية' : 'National ID'}</p>
                <p className="font-bold text-[#0E1E25]" dir="ltr">{nationalId}</p>
              </div>
            </div>
          </Card>

          <div className="flex gap-3">
            <Button
              onClick={() => {
                setIsSuccess(false);
                setNationalId('');
              }}
              className="flex-1 text-white font-semibold"
              style={{ backgroundColor: '#0F4C5C' }}
            >
              {isRTL ? 'إرسال لعميل آخر' : 'Send to Another Client'}
            </Button>
            <Button
              onClick={() => onNavigate('home')}
              variant="outline"
              className="px-6 border-teal-200 text-[#0F4C5C]"
            >
              {isRTL ? 'العودة' : 'Back'}
            </Button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavBar
          currentScreen="home"
          onNavigate={onNavigate}
          language={language}
          variant="business"
        />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-[#F2F4F5] relative overflow-hidden pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#0F4C5C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 py-4 flex items-center gap-4 shadow-sm">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            {isRTL ? (
              <ArrowRight className="w-5 h-5" />
            ) : (
              <ArrowLeft className="w-5 h-5" />
            )}
          </button>
          <div>
            <h1 className="text-xl font-semibold">
              {isRTL ? 'احسب لعميلك' : 'Calculate for Client'}
            </h1>
            <p className="text-teal-100 text-sm">
              {isRTL ? 'احسب التمويل المناسب للعميل' : 'Calculate suitable financing for client'}
            </p>
          </div>
        </div>

        <div className="px-6 py-6">
          {/* Info Card */}
          <Card className="p-4 mb-6 bg-teal-50 border-teal-100">
            <div className="flex items-start gap-3">
              <div className="bg-[#0F4C5C] rounded-full p-2">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#0F4C5C] mb-1">
                  {isRTL ? 'كيف تعمل الميزة؟' : 'How does it work?'}
                </h3>
                <p className="text-sm text-[#4B5563]">
                  {isRTL 
                    ? 'عند إدخال رقم هوية العميل، يُرسل إشعار له على تطبيق قسط تك. عند قبوله، يتم ربطكما لبدء عملية التمويل.'
                    : 'When you enter the customer ID, a notification is sent to them on QistTech app. Once accepted, you are connected to start the financing process.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Steps */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#0E1E25] mb-3">
              {isRTL ? 'الخطوات' : 'Steps'}
            </h3>
            
            <div className="space-y-3">
              <Card className="p-4 bg-white border-teal-100">
                <div className="flex items-start gap-3">
                  <div className="bg-[#0F4C5C] rounded-full w-8 h-8 flex items-center justify-center text-white flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E25] mb-1">
                      {isRTL ? 'أدخل رقم الهوية' : 'Enter National ID'}
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                      {isRTL 
                        ? 'أدخل رقم الهوية الوطنية للعميل (10 أرقام)'
                        : 'Enter the customer national ID (10 digits)'}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white border-teal-100">
                <div className="flex items-start gap-3">
                  <div className="bg-[#0F4C5C] rounded-full w-8 h-8 flex items-center justify-center text-white flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E25] mb-1">
                      {isRTL ? 'إرسال الإشعار' : 'Send Notification'}
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                      {isRTL 
                        ? 'يتلقى العميل إشعاراً على تطبيق قسط تك'
                        : 'Customer receives notification on QistTech app'}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white border-teal-100">
                <div className="flex items-start gap-3">
                  <div className="bg-[#0F4C5C] rounded-full w-8 h-8 flex items-center justify-center text-white flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E25] mb-1">
                      {isRTL ? 'بدء التعاون' : 'Start Collaboration'}
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                      {isRTL 
                        ? 'عند قبول العميل، يتم ربطكما لإتمام عملية التمويل'
                        : 'Once accepted, you are connected to complete the financing'}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit}>
            <Card className="p-6 bg-white border-teal-100 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <IdCard className="w-5 h-5 text-[#0F4C5C]" />
                <h2 className="text-lg font-semibold text-[#0E1E25]">
                  {isRTL ? 'رقم الهوية الوطنية' : 'National ID Number'}
                </h2>
              </div>

              <div>
                <Label htmlFor="nationalId" className="mb-2 block text-[#0E1E25]">
                  {isRTL ? 'أدخل رقم الهوية (10 أرقام)' : 'Enter ID Number (10 digits)'}
                  <span className="text-red-500 mr-1">*</span>
                </Label>
                <Input
                  id="nationalId"
                  type="text"
                  value={nationalId}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) {
                      setNationalId(value);
                    }
                  }}
                  placeholder="1234567890"
                  className="bg-white text-lg text-center tracking-wider border-teal-100 focus:border-[#0F4C5C]"
                  required
                  dir="ltr"
                  maxLength={10}
                />
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-[#4B5563]">
                    {isRTL ? 'يجب أن يكون 10 أرقام' : 'Must be 10 digits'}
                  </p>
                  <p className="text-xs text-[#4B5563]" dir="ltr">
                    {nationalId.length}/10
                  </p>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1 text-white h-12 font-semibold"
                style={{ backgroundColor: '#0F4C5C' }}
                disabled={nationalId.length !== 10 || isLoading}
              >
                {isLoading ? (
                  <>
                    <Smartphone className="w-5 h-5 mr-2 animate-pulse" />
                    {isRTL ? 'جاري الإرسال...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5 mr-2" />
                    {isRTL ? 'إرسال الطلب للعميل' : 'Send Request to Client'}
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => onNavigate('home')}
                className="px-6 border-teal-200 text-[#0F4C5C]"
              >
                {isRTL ? 'إلغاء' : 'Cancel'}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar
        currentScreen="home"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />
    </div>
  );
}
