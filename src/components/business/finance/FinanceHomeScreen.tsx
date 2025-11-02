import { useState } from 'react';
import { Power, TrendingUp, CheckCircle, Wallet, Percent, UserPlus, Calculator, ClipboardList, CreditCard, Bell, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Switch } from '../../ui/switch';
import { BottomNavBar } from '../../BottomNavBar';

interface FinanceHomeScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function FinanceHomeScreen({ onNavigate, language, employeeData }: FinanceHomeScreenProps) {
  const isRTL = language === 'ar';
  const [isOnline, setIsOnline] = useState(true);

  // Mock statistics for Finance
  const stats = {
    activeFinancing: 15,
    approvedRequests: 52,
    totalFinanced: 12500000,
    approvalRate: 88,
  };

  // Mock active financing requests
  const activeRequests = [
    {
      id: 'FIN-001',
      customerName: isRTL ? 'محمد أحمد الغامدي' : 'Mohammed Ahmed Al-Ghamdi',
      propertyName: isRTL ? 'فيلا النرجس - الرياض' : 'Narcissus Villa - Riyadh',
      amount: '1,250,000',
      downPayment: '250,000',
      status: 'under-review',
      time: isRTL ? 'منذ ساعتين' : '2 hours ago',
      creditScore: 750,
    },
    {
      id: 'FIN-002',
      customerName: isRTL ? 'فاطمة سعيد القحطاني' : 'Fatima Saeed Al-Qahtani',
      propertyName: isRTL ? 'شقة البحر - جدة' : 'Sea Apartment - Jeddah',
      amount: '850,000',
      downPayment: '170,000',
      status: 'approved',
      time: isRTL ? 'منذ 4 ساعات' : '4 hours ago',
      creditScore: 820,
    },
    {
      id: 'FIN-003',
      customerName: isRTL ? 'خالد عبدالله السالم' : 'Khalid Abdullah Al-Salem',
      propertyName: isRTL ? 'فيلا الورود - الدمام' : 'Roses Villa - Dammam',
      amount: '1,800,000',
      downPayment: '360,000',
      status: 'pending-docs',
      time: isRTL ? 'منذ 6 ساعات' : '6 hours ago',
      creditScore: 680,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending-docs':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'under-review':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      case 'approved':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      case 'rejected':
        return 'bg-red-100 text-red-700 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending-docs':
        return isRTL ? 'بانتظار المستندات' : 'Pending Docs';
      case 'under-review':
        return isRTL ? 'قيد المراجعة' : 'Under Review';
      case 'approved':
        return isRTL ? 'موافق عليه' : 'Approved';
      case 'rejected':
        return isRTL ? 'مرفوض' : 'Rejected';
      default:
        return status;
    }
  };

  const getCreditScoreColor = (score: number) => {
    if (score >= 800) return 'text-green-600';
    if (score >= 700) return 'text-blue-600';
    if (score >= 600) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div 
      className="min-h-screen bg-[#F2F4F5] relative overflow-hidden pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0F4C5C] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#0A3540] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white px-6 py-8 relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Floating orbs for depth */}
          <div className="absolute top-4 right-[10%] w-24 h-24 bg-[#D4AF37]/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-[5%] w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {isRTL ? `مرحباً، ${employeeData?.name}` : `Hello, ${employeeData?.name}`}
              </h1>
              <p className="text-sm text-white/80 mt-1">
                {employeeData?.company} • {isRTL ? 'موظف تمويل' : 'Finance Staff'}
              </p>
            </div>
            <button className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10">
              <Bell className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Online Status Toggle */}
          <div className="flex items-center justify-between bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all duration-300 relative z-10">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-[#10B981]' : 'bg-gray-500'}`}></div>
              <div>
                <p className="font-medium text-white text-sm">
                  {isRTL ? 'حالة الاستقبال' : 'Receiving Status'}
                </p>
                <p className="text-xs text-white/70">
                  {isOnline 
                    ? (isRTL ? 'متصل - يمكنك استقبال طلبات التمويل' : 'Online - Receiving financing requests')
                    : (isRTL ? 'غير متصل' : 'Offline')}
                </p>
              </div>
            </div>
            <Switch
              checked={isOnline}
              onCheckedChange={setIsOnline}
              className="data-[state=checked]:bg-[#10B981]"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl p-2">
                  <ClipboardList className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'طلبات نشطة' : 'Active Requests'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.activeFinancing}</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl p-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'موافق عليها' : 'Approved'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.approvedRequests}</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-xl p-2">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'إجمالي الممول' : 'Total Financed'}</p>
                  <p className="text-sm font-bold text-[#0E1E25]">
                    {(stats.totalFinanced / 1000000).toFixed(1)}{isRTL ? 'م ر.س' : 'M SAR'}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl p-2">
                  <Percent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">{isRTL ? 'معدل القبول' : 'Approval Rate'}</p>
                  <p className="text-xl font-bold text-[#0E1E25]">{stats.approvalRate}%</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#0E1E25] mb-3 tracking-tight">
              {isRTL ? 'إجراءات سريعة' : 'Quick Actions'}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => onNavigate('pullClient')}
                className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white rounded-xl p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <UserPlus className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{isRTL ? 'احسب لعميلك' : 'Calculate for Client'}</span>
              </button>

              <button
                onClick={() => onNavigate('calculator')}
                className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white rounded-xl p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Calculator className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{isRTL ? 'حاسبة التمويل' : 'Calc'}</span>
              </button>

              <button
                onClick={() => onNavigate('requests')}
                className="bg-gradient-to-br from-[#10B981] to-[#059669] text-white rounded-xl p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <ClipboardList className="w-6 h-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{isRTL ? 'الطلبات' : 'Requests'}</span>
              </button>
            </div>
          </div>

          {/* Active Financing Requests */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#0E1E25] tracking-tight">
                {isRTL ? 'طلبات التمويل النشطة' : 'Active Financing Requests'}
              </h3>
              <button
                onClick={() => onNavigate('requests')}
                className="text-sm text-[#0F4C5C] hover:text-[#0A3540] font-medium flex items-center gap-1 transition-colors"
              >
                {isRTL ? 'عرض الكل' : 'View All'}
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="space-y-4">
              {activeRequests.map((request) => (
                <Card
                  key={request.id}
                  onClick={() => onNavigate('requestDetails', request)}
                  className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={`text-xs font-medium ${getStatusColor(request.status)}`}>
                          {getStatusText(request.status)}
                        </Badge>
                        <span className="text-xs text-[#4B5563]">{request.time}</span>
                      </div>
                      <h4 className="font-semibold text-[#0E1E25] mb-1 text-sm">{request.customerName}</h4>
                      <p className="text-xs text-[#4B5563]">{request.propertyName}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#0F4C5C]/10">
                    <div>
                      <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'المبلغ المطلوب' : 'Amount'}</p>
                      <p className="font-semibold text-white bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] px-2 py-1 rounded-lg inline-block text-sm mt-1">
                        {request.amount} {isRTL ? 'ر.س' : 'SAR'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'الدفعة الأولى' : 'Down Payment'}</p>
                      <p className="font-semibold text-[#0E1E25] text-sm mt-1">
                        {request.downPayment} {isRTL ? 'ر.س' : 'SAR'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'الجدارة الائتمانية' : 'Credit Score'}</p>
                      <p className={`font-semibold text-sm mt-1 ${getCreditScoreColor(request.creditScore)}`}>
                        {request.creditScore}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#0E1E25] mb-3 tracking-tight">
              {isRTL ? 'النشاط الأخير' : 'Recent Activity'}
            </h3>
            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg p-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#0E1E25]">
                      {isRTL ? 'تمت الموافقة على طلب تمويل' : 'Financing request approved'}
                    </p>
                    <p className="text-xs text-[#4B5563]">
                      {isRTL ? 'منذ 30 دقيقة' : '30 minutes ago'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-2 mt-1">
                    <ClipboardList className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#0E1E25]">
                      {isRTL ? 'طلب جديد يحتاج مراجعة' : 'New request needs review'}
                    </p>
                    <p className="text-xs text-[#4B5563]">
                      {isRTL ? 'منذ ساعة' : '1 hour ago'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-lg p-2 mt-1">
                    <CreditCard className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#0E1E25]">
                      {isRTL ? 'تم صرف تمويل بقيمة 850,000 ر.س' : 'Financing disbursed 850,000 SAR'}
                    </p>
                    <p className="text-xs text-[#4B5563]">
                      {isRTL ? 'منذ ساعتين' : '2 hours ago'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar
        currentScreen="home"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
