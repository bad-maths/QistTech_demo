import { useState } from 'react';
import { ArrowLeft, ArrowRight, UserPlus, IdCard, MessageSquare, Send, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';

interface EmployeeReferralScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function EmployeeReferralScreen({ onNavigate, language }: EmployeeReferralScreenProps) {
  const isRTL = language === 'ar';
  
  const [formData, setFormData] = useState({
    employeeId: '',
    notes: '',
  });

  const [employeeInfo, setEmployeeInfo] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to chat with the sales agent
    onNavigate('chat', {
      openChats: [{
        type: 'developer',
        name: employeeInfo?.name || (isRTL ? 'موظف المبيعات' : 'Sales Agent'),
        property: employeeInfo?.department || (isRTL ? 'قسم المبيعات' : 'Sales Department'),
        bookingType: 'cash',
      }]
    });
  };

  const handleSendReferral = async () => {
    setIsSubmitting(true);
    
    // Simulate API call to send referral request
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ employeeId: '', notes: '' });
        setEmployeeInfo(null);
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error sending referral:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Simulate employee lookup when ID is entered
    if (field === 'employeeId' && value.length >= 5) {
      // Mock employee data - في التطبيق الفعلي، سيتم جلب البيانات من API
      setEmployeeInfo({
        name: isRTL ? 'أحمد محمد السالم' : 'Ahmad Mohammed Al-Salem',
        department: isRTL ? 'قسم المبيعات - المنطقة الشرقية' : 'Sales Department - Eastern Region',
        phone: '0501234567',
        company: isRTL ? 'شركة إعمار العقارية' : 'Emaar Properties',
      });
    } else if (field === 'employeeId' && value.length < 5) {
      setEmployeeInfo(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-6" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 pt-12 pb-6 shadow-sm flex items-center gap-4">
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
          <h1 className="text-2xl font-bold">
            {isRTL ? 'إحالة موظف مبيعات' : 'Sales Agent Referral'}
          </h1>
          <p className="text-sm text-teal-100">
            {isRTL ? 'أدخل رقم هوية الموظف للتواصل معه' : 'Enter employee ID to connect'}
          </p>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Success Message */}
        {showSuccess && (
          <Card className="p-4 mb-6 bg-green-50 border-green-200">
            <div className="flex items-center gap-3">
              <div className="bg-[#10B981] rounded-full p-2">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#10B981]">
                  {isRTL ? 'تم إرسال الطلب بنجاح!' : 'Referral Request Sent Successfully!'}
                </h3>
                <p className="text-sm text-[#10B981]/80">
                  {isRTL 
                    ? 'سيتم تقييم طلبك والتواصل معك قريباً' 
                    : 'Your request will be reviewed and you will be contacted soon'}
                </p>
              </div>
            </div>
          </Card>
        )}
        {/* Info Card */}
        <Card className="p-4 mb-6 bg-teal-50 border-teal-200">
          <div className="flex items-start gap-3">
            <div className="bg-[#0F4C5C] rounded-full p-2">
              <UserPlus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-[#0F4C5C] mb-1">
                {isRTL ? 'إتمام الصفقة مع موظف المبيعات' : 'Complete Deal with Sales Agent'}
              </h3>
              <p className="text-sm text-[#0F4C5C]/80">
                {isRTL 
                  ? 'أدخل رقم هوية الموظف الذي تريد التواصل معه لإتمام عملية الشراء'
                  : 'Enter the employee ID to connect with them and complete the purchase process'}
              </p>
            </div>
          </div>
        </Card>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Employee ID Section */}
          <Card className="p-6 border-teal-100 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <IdCard className="w-5 h-5 text-[#0F4C5C]" />
              <h2 className="text-lg font-semibold text-[#0E1E25]">
                {isRTL ? 'رقم هوية الموظف' : 'Employee ID'}
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="employeeId" className="mb-2 block text-[#0E1E25]">
                  {isRTL ? 'رقم الهوية / الرمز الوظيفي' : 'ID Number / Employee Code'}
                  <span className="text-red-500 mr-1">*</span>
                </Label>
                <Input
                  id="employeeId"
                  type="text"
                  value={formData.employeeId}
                  onChange={(e) => handleChange('employeeId', e.target.value)}
                  placeholder={isRTL ? 'مثال: EMP-12345' : 'e.g., EMP-12345'}
                  required
                  className="bg-[#F2F4F5] border-teal-100 text-lg text-[#0E1E25]"
                  dir="ltr"
                />
                <p className="text-xs text-[#4B5563] mt-2">
                  {isRTL 
                    ? 'أدخل رقم هوية الموظف أو الرمز الوظيفي الخاص به'
                    : 'Enter the employee ID number or employee code'}
                </p>
              </div>

              {/* Employee Info Display */}
              {employeeInfo && (
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#10B981] rounded-full p-2">
                      <UserPlus className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#4B5563] mb-1">
                        {isRTL ? 'تم العثور على الموظف:' : 'Employee Found:'}
                      </p>
                      <h4 className="font-semibold text-[#0E1E25] mb-1">{employeeInfo.name}</h4>
                      <p className="text-sm text-[#4B5563] mb-1">{employeeInfo.department}</p>
                      <p className="text-sm text-[#4B5563]">{employeeInfo.company}</p>
                      {employeeInfo.phone && (
                        <p className="text-sm text-[#0F4C5C] mt-2 font-medium" dir="ltr">
                          📱 {employeeInfo.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Notes Section */}
          <Card className="p-6 border-teal-100 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-[#0F4C5C]" />
              <h2 className="text-lg font-semibold text-[#0E1E25]">
                {isRTL ? 'ملاحظات (اختياري)' : 'Notes (Optional)'}
              </h2>
            </div>

            <div>
              <Label htmlFor="notes" className="mb-2 block text-[#0E1E25]">
                {isRTL ? 'أضف ملاحظات أو تفاصيل إضافية' : 'Add notes or additional details'}
              </Label>
              <textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder={isRTL ? 'مثال: أرغب في الاستفسار عن فيلا في حي النرجس...' : 'e.g., I would like to inquire about a villa in Narcissus district...'}
                rows={4}
                className="w-full px-3 py-2 rounded-md border border-teal-100 bg-[#F2F4F5] text-[#0E1E25] focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] resize-none"
              />
            </div>
          </Card>

          {/* Submit Buttons */}
          <div className="space-y-3">
            {/* Send Referral Request Button */}
            <Button
              type="button"
              onClick={handleSendReferral}
              className="w-full bg-[#0F4C5C] hover:bg-[#0A3540] text-white h-12 font-semibold"
              disabled={!formData.employeeId || formData.employeeId.length < 5 || isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{isRTL ? 'جاري الإرسال...' : 'Sending...'}</span>
                </div>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {isRTL ? 'إرسال طلب الإحالة' : 'Send Referral Request'}
                </>
              )}
            </Button>

            {/* Connect with Agent Button */}
            <Button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#0E1E25] h-12 font-semibold"
              disabled={!formData.employeeId || formData.employeeId.length < 5}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {isRTL ? 'التواصل مع الموظف' : 'Connect with Agent'}
            </Button>

            {/* Cancel Button */}
            <Button
              type="button"
              variant="outline"
              onClick={() => onNavigate('home')}
              className="w-full border-teal-200 text-[#0F4C5C] hover:bg-teal-50"
            >
              {isRTL ? 'إلغاء' : 'Cancel'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
