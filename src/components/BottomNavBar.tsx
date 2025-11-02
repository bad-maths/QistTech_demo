import { Home, Banknote, Building2, ShoppingBag, User, ClipboardList, MessageSquare } from 'lucide-react';

interface BottomNavBarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  language: 'en' | 'ar';
  variant?: 'customer' | 'business';
}

export function BottomNavBar({ currentScreen, onNavigate, language, variant = 'customer' }: BottomNavBarProps) {
  const isRTL = language === 'ar';

  const customerNavItems = [
    {
      id: 'home',
      icon: Home,
      labelAr: 'الرئيسية',
      labelEn: 'Home',
      screen: 'home',
    },
    {
      id: 'financing',
      icon: Banknote,
      labelAr: 'التمويل',
      labelEn: 'Financing',
      screen: 'financingListings',
    },
    {
      id: 'properties',
      icon: Building2,
      labelAr: 'العقارات',
      labelEn: 'Properties',
      screen: 'propertyListings',
    },
    {
      id: 'orders',
      icon: ShoppingBag,
      labelAr: 'طلباتي',
      labelEn: 'Orders',
      screen: 'myOrders',
    },
    {
      id: 'profile',
      icon: User,
      labelAr: 'الملف',
      labelEn: 'Profile',
      screen: 'profile',
    },
  ];

  const businessNavItems = [
    {
      id: 'home',
      icon: Home,
      labelAr: 'الرئيسية',
      labelEn: 'Home',
      screen: 'home',
    },
    {
      id: 'requests',
      icon: ClipboardList,
      labelAr: 'الطلبات',
      labelEn: 'Requests',
      screen: 'requests',
    },
    {
      id: 'calculator',
      icon: Banknote,
      labelAr: 'الحاسبة',
      labelEn: 'Calculator',
      screen: 'calculator',
    },
    {
      id: 'messages',
      icon: MessageSquare,
      labelAr: 'الرسائل',
      labelEn: 'Messages',
      screen: 'messages',
    },
    {
      id: 'profile',
      icon: User,
      labelAr: 'الملف',
      labelEn: 'Profile',
      screen: 'profile',
    },
  ];

  const navItems = variant === 'business' ? businessNavItems : customerNavItems;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-[#0F4C5C]/10 px-6 py-3 z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.screen || currentScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.screen)}
              className={`flex flex-col items-center gap-1.5 transition-smooth relative ${
                isActive ? 'text-[#0F4C5C]' : 'text-[#4B5563] hover:text-[#0E1E25]'
              }`}
            >
              {isActive && (
                <div className="absolute -top-1 w-8 h-1 bg-gradient-to-r from-[#0F4C5C] to-[#D4AF37] rounded-full shadow-glow-gold"></div>
              )}
              <div className={`p-2 rounded-2xl transition-smooth ${
                isActive ? 'bg-gradient-to-br from-[#0F4C5C]/5 to-[#D4AF37]/5' : 'hover:bg-[#F2F4F5]'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-xs ${isActive ? 'font-medium' : ''}`}>{isRTL ? item.labelAr : item.labelEn}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
