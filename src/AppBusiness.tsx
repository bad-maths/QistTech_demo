import { useEffect, useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { EmployeeAuthScreen } from './components/business/EmployeeAuthScreen';
// Shared Screens
import { EmployeeHomeScreen } from './components/business/EmployeeHomeScreen';
import { FinanceHomeScreen } from './components/business/finance/FinanceHomeScreen';
import { DeveloperHomeScreen } from './components/business/developer/DeveloperHomeScreen';
import { DeveloperClientManagementScreen } from './components/business/developer/DeveloperClientManagementScreen';
import { PullClientScreen } from './components/business/PullClientScreen';
import { EmployeeWalletScreen } from './components/business/EmployeeWalletScreen';
import { EmployeeRequestsScreen } from './components/business/EmployeeRequestsScreen';
import { EmployeeRequestDetailsScreen } from './components/business/EmployeeRequestDetailsScreen';
import { EmployeeCalculatorScreen as FinanceEmployeeCalculatorScreen } from './components/business/finance/FinanceEmployeeCalculatorScreen';
import { EmployeeRequestsScreen as FinanceEmployeeRequestsScreen } from './components/business/finance/FinanceEmployeeRequestsScreen';
import { EmployeeCalculatorScreen as DeveloperEmployeeCalculatorScreen } from './components/business/developer/DeveloperEmployeeCalculatorScreen';
import { EmployeePropertiesScreen } from './components/business/EmployeePropertiesScreen';
import { EmployeePropertyDetailsScreen } from './components/business/EmployeePropertyDetailsScreen';
import { EmployeeMessagesScreen } from './components/business/EmployeeMessagesScreen';
import { DeveloperEmployeeMessagesScreen } from './components/business/developer/DeveloperEmployeeMessagesScreen';
import { FinanceEmployeeMessagesScreen } from './components/business/finance/FinanceEmployeeMessagesScreen';
import { EmployeeChatScreen } from './components/business/EmployeeChatScreen';
import { EmployeeProfileScreen as CommonEmployeeProfileScreen } from './components/business/EmployeeProfileScreen';
import { EmployeeProfileScreen as DeveloperEmployeeProfileScreen } from './components/business/developer/EmployeeProfileScreen';
import { ProfileScreen as FinanceEmployeeProfileScreen } from './components/business/finance/FinanceEmployeeProfileScreen';
import { EmployeeNotificationsScreen } from './components/business/EmployeeNotificationsScreen';

interface AppBusinessProps {
  onBack: () => void;
}

export default function AppBusiness({ onBack }: AppBusinessProps) {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  const [navigationData, setNavigationData] = useState<any>(null);
  const [employeeData, setEmployeeData] = useState<any>(null);

  const handleNavigate = (screen: string, data?: any) => {
    if (screen === 'appSelector') {
      onBack();
      return;
    }
    setCurrentScreen(screen);
    setNavigationData(data || null);
  };

  const handleLogin = (data: any) => {
    // Set employee data first; navigate to home after state is committed
    setEmployeeData(data);
  };

  // Navigate to the correct home after employeeData is set
  useEffect(() => {
    if (employeeData?.type === 'developer' || employeeData?.type === 'finance') {
      setCurrentScreen('home');
    }
  }, [employeeData]);

  const isDeveloper = employeeData?.type === 'developer';
  const isFinance = employeeData?.type === 'finance';

  // Separate screen configurations based on employee type
  const getScreens = () => {
    const commonScreens = {
      splash: <SplashScreen onComplete={() => setCurrentScreen('onboarding')} />,
      onboarding: <OnboardingScreen onComplete={() => setCurrentScreen('auth')} language={language} setLanguage={setLanguage} />,
      auth: <EmployeeAuthScreen onComplete={handleLogin} language={language} onBack={onBack} />,
      pullClient: <PullClientScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
      wallet: <EmployeeWalletScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
      requests: <EmployeeRequestsScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
      requestDetails: <EmployeeRequestDetailsScreen onNavigate={handleNavigate} language={language} requestData={navigationData} employeeData={employeeData} />,
      messages: isDeveloper 
        ? <DeveloperEmployeeMessagesScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />
        : isFinance 
        ? <FinanceEmployeeMessagesScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />
        : <EmployeeMessagesScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
      employeeChat: <EmployeeChatScreen onNavigate={handleNavigate} language={language} contactData={navigationData} />,
      notifications: <EmployeeNotificationsScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
      profile: isDeveloper
        ? (
          <DeveloperEmployeeProfileScreen
            onNavigate={handleNavigate}
            language={language}
            employeeData={employeeData}
            onLogout={() => setCurrentScreen('auth')}
          />
        ) : isFinance ? (
          <FinanceEmployeeProfileScreen
            onNavigate={handleNavigate}
            language={language}
          />
        ) : (
          <CommonEmployeeProfileScreen
            onNavigate={handleNavigate}
            language={language}
            employeeData={employeeData}
            onLogout={() => setCurrentScreen('auth')}
          />
        ),
    };

    if (isDeveloper) {
      return {
        ...commonScreens,
        home: <DeveloperHomeScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
        calculator: <DeveloperEmployeeCalculatorScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
        requests: <EmployeeRequestsScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
        clientManagement: <DeveloperClientManagementScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
        properties: <EmployeePropertiesScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
        propertyDetails: <EmployeePropertyDetailsScreen onNavigate={handleNavigate} language={language} propertyData={navigationData} employeeData={employeeData} />,
      };
    }

    if (isFinance) {
      return {
        ...commonScreens,
        home: <FinanceHomeScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
        calculator: <FinanceEmployeeCalculatorScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
        requests: <FinanceEmployeeRequestsScreen onNavigate={handleNavigate} language={language} employeeData={employeeData} />,
      };
    }

    // Default (for auth screen)
    return commonScreens;
  };

  const screens = getScreens();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fallback to auth if target screen is not ready yet */}
      {screens[currentScreen as keyof typeof screens] ?? screens['auth']}
    </div>
  );
}
