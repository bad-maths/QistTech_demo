import { useState } from 'react';
import { AppSelector } from './AppSelector';
import AppCustomer from './AppCustomer';
import AppBusiness from './AppBusiness';

export default function App() {
  const [selectedApp, setSelectedApp] = useState<'selector' | 'customer' | 'business'>('selector');

  if (selectedApp === 'selector') {
    return <AppSelector onSelectApp={(app) => setSelectedApp(app)} />;
  }

  if (selectedApp === 'customer') {
    return <AppCustomer onBack={() => setSelectedApp('selector')} />;
  }

  return <AppBusiness onBack={() => setSelectedApp('selector')} />;
}
