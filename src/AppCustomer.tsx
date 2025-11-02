import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { AuthScreen } from './components/AuthScreen';
import { HomeScreen } from './components/HomeScreen';
import { PropertyListingsScreen } from './components/PropertyListingsScreen';
import { PropertyDetailsScreen } from './components/PropertyDetailsScreen';
import { FinancingListingsScreen } from './components/FinancingListingsScreen';
import { FinancingDetailsScreen } from './components/FinancingDetailsScreen';
import { ApplicationFormScreen } from './components/ApplicationFormScreen';
import { MyOrdersScreen } from './components/MyOrdersScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ChatScreen } from './components/ChatScreen';
import { MapViewScreen } from './components/MapViewScreen';
import { EmployeeReferralScreen } from './components/EmployeeReferralScreen';
import { NotificationsScreen } from './components/NotificationsScreen';

interface AppCustomerProps {
  onBack: () => void;
}

export default function AppCustomer({ onBack }: AppCustomerProps) {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  const [navigationData, setNavigationData] = useState<any>(null);

  const handleNavigate = (screen: string, data?: any) => {
    if (screen === 'appSelector') {
      onBack();
      return;
    }
    setCurrentScreen(screen);
    setNavigationData(data || null);
  };

  const screens = {
    splash: <SplashScreen onComplete={() => setCurrentScreen('onboarding')} />,
    onboarding: <OnboardingScreen onComplete={() => setCurrentScreen('auth')} language={language} setLanguage={setLanguage} />,
    auth: <AuthScreen onComplete={() => setCurrentScreen('home')} language={language} />,
    home: <HomeScreen onNavigate={handleNavigate} language={language} />,
    propertyListings: <PropertyListingsScreen onNavigate={handleNavigate} language={language} />,
    propertyDetails: <PropertyDetailsScreen onNavigate={handleNavigate} language={language} />,
    financingListings: <FinancingListingsScreen onNavigate={handleNavigate} language={language} />,
    financingDetails: <FinancingDetailsScreen onNavigate={handleNavigate} language={language} />,
    applicationForm: <ApplicationFormScreen onNavigate={handleNavigate} language={language} applicationData={navigationData} />,
    myOrders: <MyOrdersScreen onNavigate={handleNavigate} language={language} />,
    profile: <ProfileScreen onNavigate={handleNavigate} language={language} />,
    chat: <ChatScreen onNavigate={handleNavigate} language={language} bookingData={navigationData} />,
    mapView: <MapViewScreen onNavigate={handleNavigate} language={language} />,
    employeeReferral: <EmployeeReferralScreen onNavigate={handleNavigate} language={language} />,
    notifications: <NotificationsScreen onNavigate={handleNavigate} language={language} />,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {screens[currentScreen as keyof typeof screens]}
    </div>
  );
}
