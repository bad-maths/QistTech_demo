import { ArrowLeft, ArrowRight, User, Bell, Lock, Globe, CreditCard, HelpCircle, LogOut, ChevronRight, ChevronLeft, Heart, FileText, Settings, Home, Search, ShoppingBag, MessageSquare, Banknote, Building2 } from 'lucide-react';
import { Card } from './ui/card';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { BottomNavBar } from './BottomNavBar';

interface ProfileScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
}

export function ProfileScreen({ onNavigate, language }: ProfileScreenProps) {
  const isRTL = language === 'ar';

  const menuSections = [
    {
      titleEn: 'Account',
      titleAr: 'الحساب',
      items: [
        {
          icon: User,
          labelEn: 'Personal Information',
          labelAr: 'المعلومات الشخصية',
          action: () => {},
        },
        {
          icon: CreditCard,
          labelEn: 'Payment Methods',
          labelAr: 'طرق الدفع',
          action: () => {},
        },
        {
          icon: FileText,
          labelEn: 'Documents',
          labelAr: 'المستندات',
          action: () => {},
        },
        {
          icon: Heart,
          labelEn: 'Saved Properties',
          labelAr: 'العقارات المحفوظة',
          action: () => {},
        },
      ],
    },
    {
      titleEn: 'Preferences',
      titleAr: 'التفضيلات',
      items: [
        {
          icon: Bell,
          labelEn: 'Notifications',
          labelAr: 'الإشعارات',
          hasSwitch: true,
          switchValue: true,
          action: () => {},
        },
        {
          icon: Globe,
          labelEn: 'Language',
          labelAr: 'اللغة',
          valueEn: 'English',
          valueAr: 'العربية',
          action: () => {},
        },
      ],
    },
    {
      titleEn: 'Support',
      titleAr: 'الدعم',
      items: [
        {
          icon: HelpCircle,
          labelEn: 'Help Center',
          labelAr: 'مركز المساعدة',
          action: () => {},
        },
        {
          icon: Settings,
          labelEn: 'Settings',
          labelAr: 'الإعدادات',
          action: () => {},
        },
        {
          icon: Lock,
          labelEn: 'Privacy Policy',
          labelAr: 'سياسة الخصوصية',
          action: () => {},
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2F4F5] pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white px-6 pt-12 pb-8">
        <div className="flex items-center justify-center flex-col">
          <div className="w-24 h-24 mb-4 border-4 border-[#D4AF37]/30 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center text-2xl font-bold">
            {isRTL ? 'أم' : 'AM'}
          </div>
          <h1 className="text-2xl mb-1 tracking-tight">{isRTL ? 'أحمد محمد' : 'Ahmad Mohammed'}</h1>
          <p className="text-white/80 mb-1 text-sm">ahmad.mohammed@email.com</p>
          <p className="text-white/70 text-xs">+966 50 123 4567</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-6 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center shadow-lifted bg-white border border-[#0F4C5C]/5 hover:shadow-lifted transition-smooth">
            <p className="text-2xl mb-1 text-[#0F4C5C] font-semibold">{isRTL ? '3' : '3'}</p>
            <p className="text-xs text-[#4B5563]" dir="auto">{isRTL ? 'طلبات نشطة' : 'Active'}</p>
          </Card>
          <Card className="p-4 text-center shadow-lifted bg-white border border-[#0F4C5C]/5 hover:shadow-lifted transition-smooth">
            <p className="text-2xl mb-1 text-[#10B981] font-semibold">2</p>
            <p className="text-xs text-[#4B5563]" dir="auto">{isRTL ? 'موافق عليها' : 'Approved'}</p>
          </Card>
          <Card className="p-4 text-center shadow-lifted bg-white border border-[#0F4C5C]/5 hover:shadow-lifted transition-smooth">
            <p className="text-2xl mb-1 text-[#D4AF37] font-semibold">8</p>
            <p className="text-xs text-[#4B5563]" dir="auto">{isRTL ? 'محفوظة' : 'Saved'}</p>
          </Card>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-6 space-y-6">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-sm text-[#4B5563] mb-3 px-2 font-medium tracking-tight">
              {isRTL ? section.titleAr : section.titleEn}
            </h2>
            <Card className="overflow-hidden bg-white border border-[#0F4C5C]/5 shadow-soft">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div key={itemIndex}>
                    {item.hasSwitch ? (
                      <div className="w-full px-5 py-4 flex items-center justify-between hover:bg-[#F2F4F5] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/10 rounded-lg p-2">
                            <Icon className="w-5 h-5 text-[#0F4C5C]" />
                          </div>
                          <span className="text-[#0E1E25] text-sm tracking-tight font-medium">
                            {isRTL ? item.labelAr : item.labelEn}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch defaultChecked={item.switchValue} />
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={item.action}
                        className="w-full px-5 py-4 flex items-center justify-between hover:bg-[#F2F4F5] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#B8941F]/10 rounded-lg p-2">
                            <Icon className="w-5 h-5 text-[#0F4C5C]" />
                          </div>
                          <span className="text-[#0E1E25] text-sm tracking-tight font-medium">
                            {isRTL ? item.labelAr : item.labelEn}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.valueEn || item.valueAr ? (
                            <>
                              <span className="text-xs text-[#4B5563]">
                                {isRTL ? item.valueAr : item.valueEn}
                              </span>
                              {isRTL ? (
                                <ChevronLeft className="w-5 h-5 text-[#4B5563]" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-[#4B5563]" />
                              )}
                            </>
                          ) : (
                            <>
                              {isRTL ? (
                                <ChevronLeft className="w-5 h-5 text-[#4B5563]" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-[#4B5563]" />
                              )}
                            </>
                          )}
                        </div>
                      </button>
                    )}
                    {itemIndex < section.items.length - 1 && (
                      <Separator className="mx-5 bg-[#0F4C5C]/5" />
                    )}
                  </div>
                );
              })}
            </Card>
          </div>
        ))}

        {/* Logout Button */}
        <Card className="overflow-hidden bg-gradient-to-br from-red-50 to-red-25 border border-red-200/50 shadow-soft">
          <button
            onClick={() => onNavigate('auth')}
            className="w-full px-5 py-4 flex items-center justify-center gap-3 text-red-600 hover:bg-red-100/30 transition-colors tracking-tight font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>{isRTL ? 'تسجيل الخروج' : 'Logout'}</span>
          </button>
        </Card>

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-sm text-[#4B5563] tracking-tight">
            {isRTL ? 'قسط تك' : 'QistTech'} v1.0.0
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar currentScreen="profile" onNavigate={onNavigate} language={language} />
    </div>
  );
}
