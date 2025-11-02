import { ArrowLeft, ArrowRight, Upload, Check, AlertCircle, Shield, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';

interface ApplicationFormScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  applicationData?: {
    applicationType?: 'app-property' | 'external-property';
    chatType?: 'combined' | 'single-bank' | 'single-developer';
    property?: any;
    financingOffer?: {
      bank: string;
      program: string;
      rate: string;
    };
  };
}

export function ApplicationFormScreen({ onNavigate, language, applicationData }: ApplicationFormScreenProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [nafathDataLoaded] = useState(true); // Simulating data loaded from Nafath
  const isRTL = language === 'ar';

  // Simulated data from Nafath
  const nafathData = {
    fullName: isRTL ? 'أحمد محمد العتيبي' : 'Ahmad Mohammed Al-Otaibi',
    nationalId: '1234567890',
    dob: '1990-05-15',
    phone: '+966501234567',
    email: 'ahmad.otaibi@email.com',
    salary: '15000',
    employer: isRTL ? 'وزارة التعليم' : 'Ministry of Education',
    employmentType: 'government',
    maritalStatus: 'married',
    hasExistingProperty: false,
  };

  // Calculate housing support eligibility based on Nafath data
  const calculateSupportEligibility = () => {
    const salary = parseInt(nafathData.salary);
    const isGovernmentEmployee = nafathData.employmentType === 'government';
    const isMarried = nafathData.maritalStatus === 'married';
    const hasNoProperty = !nafathData.hasExistingProperty;
    
    // Eligibility criteria:
    // 1. Salary between 3000 - 20000 SAR
    // 2. Saudi citizen (assumed from Nafath)
    // 3. First-time buyer (no existing property)
    // 4. Preference for married and government employees
    
    const salaryEligible = salary >= 3000 && salary <= 20000;
    const isEligible = salaryEligible && hasNoProperty;
    
    return {
      isEligible,
      reasons: {
        salary: salaryEligible,
        firstTime: hasNoProperty,
        isMarried,
        isGovernment: isGovernmentEmployee,
      }
    };
  };

  const supportEligibility = calculateSupportEligibility();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, titleEn: 'Personal Info', titleAr: 'المعلومات الشخصية' },
    { number: 2, titleEn: 'Financial Info', titleAr: 'المعلومات المالية' },
    { number: 3, titleEn: 'Property Details', titleAr: 'تفاصيل العقار' },
    { number: 4, titleEn: 'Documents', titleAr: 'المستندات' },
  ];

  useEffect(() => {
    if (submitted) {
      // Navigate to chat after 2 seconds
      const timer = setTimeout(() => {
        const chatData: any = {
          newChat: true,
          applicationId: '#REQ-2025-1234',
          applicationType: applicationData?.applicationType || 'external-property',
          chatType: applicationData?.chatType || 'single-bank',
        };

        if (applicationData?.chatType === 'combined' && applicationData?.property) {
          // Combined chat with both developer and bank
          chatData.participants = [
            {
              id: 'dev-1',
              name: applicationData.property.developer,
              type: 'developer',
              avatar: applicationData.property.developer.substring(0, 2).toUpperCase(),
              color: 'bg-purple-600',
              property: applicationData.property.title,
            },
            {
              id: 'bank-1',
              name: applicationData.financingOffer?.bank || (isRTL ? 'البنك الأهلي' : 'National Bank'),
              type: 'bank',
              avatar: 'NB',
              color: 'bg-blue-600',
            },
          ];
          chatData.property = applicationData.property.title;
        } else if (applicationData?.chatType === 'single-bank') {
          // Single chat with bank only (external property)
          chatData.bankName = applicationData.financingOffer?.bank || (isRTL ? 'البنك الأهلي' : 'National Bank');
          chatData.bankAvatar = 'NB';
          chatData.propertyType = isRTL ? 'عقار خارجي' : 'External Property';
        }

        onNavigate('chat', chatData);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitted, applicationData, isRTL, onNavigate]);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6" dir={isRTL ? 'rtl' : 'ltr'}>
        <Card className="p-8 max-w-md w-full text-center">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl mb-3 text-gray-900">
            {isRTL ? 'تم تقديم الطلب بنجاح!' : 'Application Submitted!'}
          </h2>
          <p className="text-gray-600 mb-2">
            {isRTL ? 'رقم الطلب: #REQ-2025-1234' : 'Application ID: #REQ-2025-1234'}
          </p>
          <p className="text-gray-600 mb-6">
            {isRTL
              ? 'جاري توصيلك مع الموظفين المختصين...'
              : 'Connecting you with the relevant staff...'}
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : onNavigate('home')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {isRTL ? <ArrowRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-gray-900">
              {isRTL ? 'نموذج الطلب' : 'Application Form'}
            </h1>
            <p className="text-sm text-gray-500">
              {isRTL ? `الخطوة ${currentStep} من ${totalSteps}` : `Step ${currentStep} of ${totalSteps}`}
            </p>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Indicators */}
      <div className="px-6 py-6">
        <div className="flex justify-between mb-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= step.number
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{step.number}</span>
                )}
              </div>
              <p className="text-xs text-gray-600 text-center">
                {isRTL ? step.titleAr : step.titleEn}
              </p>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <Card className="p-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-gray-900">
                  {isRTL ? 'المعلومات الشخصية' : 'Personal Information'}
                </h2>
                {nafathDataLoaded && (
                  <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 px-3 py-1.5 rounded-full">
                    <Shield className="w-4 h-4" />
                    <span>{isRTL ? 'مُحمَّل من نفاذ' : 'Loaded from Nafath'}</span>
                  </div>
                )}
              </div>

              {nafathDataLoaded && (
                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 mb-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 mb-1">
                        {isRTL 
                          ? 'تم جلب بياناتك تلقائياً من نفاذ. تم حساب أفضل خيارات التمويل بناءً على ملفك المالي.' 
                          : 'Your data has been automatically fetched from Nafath. Best financing options calculated based on your financial profile.'}
                      </p>
                      <p className="text-xs text-gray-600">
                        {isRTL 
                          ? 'يمكنك تعديل أي من البيانات أدناه' 
                          : 'You can edit any of the data below'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="fullName">{isRTL ? 'الاسم الكامل' : 'Full Name'}</Label>
                <Input 
                  id="fullName" 
                  defaultValue={nafathData.fullName}
                  placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationalId">{isRTL ? 'رقم الهوية الوطنية' : 'National ID Number'}</Label>
                <Input 
                  id="nationalId" 
                  defaultValue={nafathData.nationalId}
                  placeholder={isRTL ? 'أدخل رقم هويتك' : 'Enter your national ID'} 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dob">{isRTL ? 'تاريخ الميلاد' : 'Date of Birth'}</Label>
                  <Input 
                    id="dob" 
                    type="date" 
                    defaultValue={nafathData.dob}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">{isRTL ? 'الحالة الاجتماعية' : 'Marital Status'}</Label>
                  <Select defaultValue="married">
                    <SelectTrigger>
                      <SelectValue placeholder={isRTL ? 'اختر' : 'Select'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">{isRTL ? 'أعزب' : 'Single'}</SelectItem>
                      <SelectItem value="married">{isRTL ? 'متزوج' : 'Married'}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{isRTL ? 'رقم الجوال' : 'Phone Number'}</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  defaultValue={nafathData.phone}
                  placeholder={isRTL ? 'أدخل رقم جوالك' : 'Enter your phone'} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{isRTL ? 'البريد الإلكتروني' : 'Email Address'}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  defaultValue={nafathData.email}
                  placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'} 
                />
              </div>

              {/* Housing Support Eligibility Indicator */}
              {nafathDataLoaded && (
                <div className={`p-4 rounded-lg border-2 ${
                  supportEligibility.isEligible 
                    ? 'bg-green-50 border-green-300' 
                    : 'bg-orange-50 border-orange-300'
                }`}>
                  <div className="flex items-start gap-3">
                    {supportEligibility.isEligible ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className={`mb-2 ${
                        supportEligibility.isEligible ? 'text-green-900' : 'text-orange-900'
                      }`}>
                        {supportEligibility.isEligible 
                          ? (isRTL ? '✓ مؤهل للدعم السكني' : '✓ Eligible for Housing Support')
                          : (isRTL ? '⚠ غير مؤهل للدعم السكني' : '⚠ Not Eligible for Housing Support')
                        }
                      </p>
                      <div className="space-y-1 text-sm">
                        {supportEligibility.isEligible ? (
                          <>
                            <p className="text-green-700">
                              {isRTL 
                                ? 'بناءً على بياناتك، أنت مؤهل للحصول على الدعم السكني من وزارة الإسكان'
                                : 'Based on your profile, you are eligible for housing support from the Ministry of Housing'
                              }
                            </p>
                            <div className="mt-2 pt-2 border-t border-green-200">
                              <p className="text-xs text-green-600 mb-1">
                                {isRTL ? 'المزايا:' : 'Benefits:'}
                              </p>
                              <ul className="text-xs text-green-700 space-y-1 mr-4">
                                <li>{isRTL ? '• دعم مالي يصل إلى 500,000 ر.س' : '• Financial support up to 500,000 SAR'}</li>
                                <li>{isRTL ? '• أولوية في الحصول على القروض' : '• Priority in loan processing'}</li>
                                <li>{isRTL ? '• فوائد مخفضة على التمويل' : '• Reduced interest rates'}</li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-orange-700">
                              {isRTL 
                                ? 'لا تنطبق عليك شروط الدعم السكني حالياً'
                                : 'Housing support criteria not met at this time'
                              }
                            </p>
                            <div className="mt-2 pt-2 border-t border-orange-200">
                              <p className="text-xs text-orange-600 mb-1">
                                {isRTL ? 'الأسباب المحتملة:' : 'Possible reasons:'}
                              </p>
                              <ul className="text-xs text-orange-700 space-y-1 mr-4">
                                {!supportEligibility.reasons.salary && (
                                  <li>{isRTL ? '• الراتب خارج نطاق الدعم (3,000 - 20,000 ر.س)' : '• Salary outside support range (3,000 - 20,000 SAR)'}</li>
                                )}
                                {!supportEligibility.reasons.firstTime && (
                                  <li>{isRTL ? '• وجود ملكية عقارية سابقة' : '• Existing property ownership'}</li>
                                )}
                                <li className="text-orange-600">{isRTL ? '• يمكنك التقديم للتمويل العادي' : '• You can apply for regular financing'}</li>
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-gray-900">
                  {isRTL ? 'المعلومات المالية' : 'Financial Information'}
                </h2>
                {nafathDataLoaded && (
                  <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 px-3 py-1.5 rounded-full">
                    <Shield className="w-4 h-4" />
                    <span>{isRTL ? 'مُحمَّل من نفاذ' : 'Loaded from Nafath'}</span>
                  </div>
                )}
              </div>

              {nafathDataLoaded && (
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 mb-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="mb-2 text-gray-900">
                        {isRTL 
                          ? 'التمويل الموصى به لك' 
                          : 'Recommended Financing for You'}
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-white p-2 rounded">
                          <p className="text-gray-600 text-xs mb-1">{isRTL ? 'الحد الأقصى للقرض' : 'Max Loan'}</p>
                          <p className="text-blue-600">750,000 {isRTL ? 'ر.س' : 'SAR'}</p>
                        </div>
                        <div className="bg-white p-2 rounded">
                          <p className="text-gray-600 text-xs mb-1">{isRTL ? 'القسط الشهري' : 'Monthly Payment'}</p>
                          <p className="text-blue-600">4,200 {isRTL ? 'ر.س' : 'SAR'}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {isRTL 
                          ? 'بناءً على راتبك والتزاماتك الحالية' 
                          : 'Based on your salary and current obligations'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="employer">{isRTL ? 'جهة العمل' : 'Employer'}</Label>
                <Input 
                  id="employer" 
                  defaultValue={nafathData.employer}
                  placeholder={isRTL ? 'أدخل اسم جهة العمل' : 'Enter employer name'} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employmentType">{isRTL ? 'نوع التوظيف' : 'Employment Type'}</Label>
                <Select defaultValue={nafathData.employmentType}>
                  <SelectTrigger>
                    <SelectValue placeholder={isRTL ? 'اختر نوع التوظيف' : 'Select employment type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">{isRTL ? 'قطاع حكومي' : 'Government'}</SelectItem>
                    <SelectItem value="private">{isRTL ? 'قطاع خاص' : 'Private'}</SelectItem>
                    <SelectItem value="self">{isRTL ? 'عمل حر' : 'Self-employed'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salary">{isRTL ? 'الراتب الشهري' : 'Monthly Salary'}</Label>
                  <Input 
                    id="salary" 
                    type="number" 
                    defaultValue={nafathData.salary}
                    placeholder={isRTL ? 'ر.س' : 'SAR'} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="otherIncome">{isRTL ? 'دخل إضافي' : 'Other Income'}</Label>
                  <Input id="otherIncome" type="number" placeholder={isRTL ? 'ر.س' : 'SAR'} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="obligations">{isRTL ? 'الالتزامات الشهرية' : 'Monthly Obligations'}</Label>
                <Input 
                  id="obligations" 
                  type="number" 
                  defaultValue="2500"
                  placeholder={isRTL ? 'ر.س' : 'SAR'} 
                />
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    {isRTL
                      ? 'نسبة الالتزامات المثالية يجب أن تكون أقل من 55% من دخلك الشهري'
                      : 'Ideal debt-to-income ratio should be below 55% of your monthly income'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl mb-6 text-gray-900">
                {isRTL ? 'تفاصيل العقار' : 'Property Details'}
              </h2>
              <div className="space-y-2">
                <Label htmlFor="propertyType">{isRTL ? 'نوع العقار' : 'Property Type'}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={isRTL ? 'اختر نوع العقار' : 'Select property type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">{isRTL ? 'شقة' : 'Apartment'}</SelectItem>
                    <SelectItem value="villa">{isRTL ? 'فيلا' : 'Villa'}</SelectItem>
                    <SelectItem value="duplex">{isRTL ? 'دوبلكس' : 'Duplex'}</SelectItem>
                    <SelectItem value="land">{isRTL ? 'أرض' : 'Land'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="propertyValue">{isRTL ? 'قيمة العقار' : 'Property Value'}</Label>
                <Input id="propertyValue" type="number" placeholder="1,250,000 SAR" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="downPayment">{isRTL ? 'الدفعة الأولى' : 'Down Payment'}</Label>
                <Input id="downPayment" type="number" placeholder="125,000 SAR (10%)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="propertyLocation">{isRTL ? 'موقع العقار' : 'Property Location'}</Label>
                <Input id="propertyLocation" placeholder={isRTL ? 'المدينة، الحي' : 'City, District'} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">{isRTL ? 'ملاحظات إضافية' : 'Additional Notes'}</Label>
                <Textarea
                  id="notes"
                  placeholder={isRTL ? 'أي معلومات إضافية...' : 'Any additional information...'}
                  rows={4}
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl mb-6 text-gray-900">
                {isRTL ? 'رفع المستندات' : 'Upload Documents'}
              </h2>
              
              <div className="space-y-3">
                {[
                  { id: 1, nameEn: 'National ID (Front & Back)', nameAr: 'الهوية الوطنية (الوجهين)' },
                  { id: 2, nameEn: 'Salary Certificate', nameAr: 'شهادة الراتب' },
                  { id: 3, nameEn: 'Bank Statement (3 months)', nameAr: 'كشف حساب بنكي (3 أشهر)' },
                  { id: 4, nameEn: 'Property Documents', nameAr: 'مستندات العقار' },
                ].map((doc) => (
                  <div key={doc.id} className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Upload className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-gray-900">{isRTL ? doc.nameAr : doc.nameEn}</p>
                          <p className="text-xs text-gray-500">{isRTL ? 'PDF، JPG، PNG (حد أقصى 5MB)' : 'PDF, JPG, PNG (max 5MB)'}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {isRTL ? 'رفع' : 'Upload'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 pt-4">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                  {isRTL
                    ? 'أوافق على الشروط والأحكام وسياسة الخصوصية، وأقر بصحة جميع المعلومات المقدمة'
                    : 'I agree to the terms and conditions and privacy policy, and confirm all information provided is accurate'}
                </label>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex gap-3 max-w-md mx-auto">
          {currentStep > 1 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex-1"
            >
              {isRTL ? 'السابق' : 'Previous'}
            </Button>
          )}
          <Button
            onClick={() => {
              if (currentStep < totalSteps) {
                setCurrentStep(currentStep + 1);
              } else {
                setSubmitted(true);
              }
            }}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {currentStep === totalSteps ? (isRTL ? 'إرسال الطلب' : 'Submit Application') : (isRTL ? 'التالي' : 'Next')}
          </Button>
        </div>
      </div>
    </div>
  );
}
