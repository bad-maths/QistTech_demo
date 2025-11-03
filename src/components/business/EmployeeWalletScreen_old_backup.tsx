import { useState } from 'react';
import { ArrowLeft, ArrowRight, Wallet, TrendingUp, Download, DollarSign, CheckCircle, Clock, ArrowUpRight, ArrowDownRight, Bell, Home, Building2, FileText, ChartLine, Handshake, Coins, Trophy, Medal, Crown, Gift, PieChart, CalendarCheck, Filter, Plus, Info, University, Check, X, AlertTriangle, Edit, Trash2, User, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { BottomNavBar } from '../BottomNavBar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

interface EmployeeWalletScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  employeeData: any;
}

export function EmployeeWalletScreen({ onNavigate, language, employeeData }: EmployeeWalletScreenProps) {
  const isRTL = language === 'ar';
  const [showWithdrawDialog, setShowWithdrawDialog] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('نوفمبر 2024');

  const walletData = {
    totalBalance: 248950,
    availableBalance: 156750,
    processingBalance: 67200,
    reservedBalance: 25000,
  };

  const monthlyPerformance = {
    thisMonth: 45200,
    completedDeals: 8,
    averageCommission: 5650,
    ranking: 3,
    totalBrokers: 25,
    growthRate: 18.5,
    dealsIncrease: 2,
  };

  const transactions = [
    {
      id: 'TXN-001',
      type: 'commission',
      amount: 2500,
      status: 'completed',
      date: '2025-01-15',
      description: isRTL ? 'عمولة صفقة - فيلا النرجس' : 'Deal Commission - Narcissus Villa',
      customer: isRTL ? 'محمد أحمد' : 'Mohammed Ahmed',
    },
    {
      id: 'TXN-002',
      type: 'withdrawal',
      amount: 10000,
      status: 'completed',
      date: '2025-01-10',
      description: isRTL ? 'سحب رصيد' : 'Balance Withdrawal',
    },
    {
      id: 'TXN-003',
      type: 'commission',
      amount: 1800,
      status: 'completed',
      date: '2025-01-08',
      description: isRTL ? 'عمولة صفقة - شقة البحر' : 'Deal Commission - Sea Apartment',
      customer: isRTL ? 'فاطمة سعيد' : 'Fatima Saeed',
    },
    {
      id: 'TXN-004',
      type: 'commission',
      amount: 3200,
      status: 'pending',
      date: '2025-01-05',
      description: isRTL ? 'عمولة منتظرة - فيلا الورود' : 'Pending Commission - Roses Villa',
      customer: isRTL ? 'خالد عبدالله' : 'Khalid Abdullah',
    },
    {
      id: 'TXN-005',
      type: 'withdrawal',
      amount: 15000,
      status: 'completed',
      date: '2025-01-01',
      description: isRTL ? 'سحب رصيد' : 'Balance Withdrawal',
    },
  ];

  const handleWithdraw = () => {
    // Simulate withdrawal
    setShowWithdrawDialog(false);
    setWithdrawAmount('');
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
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C5C] via-[#0A3540] to-[#0F4C5C] text-white px-6 py-4 flex items-center gap-4 relative overflow-hidden">
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>

          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10 relative z-10"
          >
            {isRTL ? (
              <ArrowRight className="w-5 h-5 text-white" />
            ) : (
              <ArrowLeft className="w-5 h-5 text-white" />
            )}
          </button>
          <div className="relative z-10">
            <h1 className="text-xl font-bold tracking-tight text-white">
              {isRTL ? 'المحفظة' : 'Wallet'}
            </h1>
            <p className="text-sm text-white/70">
              {isRTL ? 'إدارة الأرباح والعمولات' : 'Manage earnings and commissions'}
            </p>
          </div>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Balance Card */}
          <Card className="p-6 bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] text-white border-0 shadow-2xl rounded-2xl overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-4 right-[10%] w-24 h-24 bg-[#D4AF37]/15 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-5 h-5 text-white" />
                <p className="text-sm text-white/80">{isRTL ? 'الرصيد المتاح' : 'Available Balance'}</p>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                {walletData.balance.toLocaleString()} <span className="text-lg text-white/80">{isRTL ? 'ر.س' : 'SAR'}</span>
              </h2>
              <Button 
                onClick={() => setShowWithdrawDialog(true)}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white hover:from-[#B8941F] hover:to-[#D4AF37] h-11 font-medium rounded-lg transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {isRTL ? 'سحب الرصيد' : 'Withdraw Balance'}
              </Button>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg p-3 w-fit mx-auto mb-3">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#4B5563] mb-1 font-medium">{isRTL ? 'إجمالي الأرباح' : 'Total Earnings'}</p>
              <p className="font-bold text-[#0E1E25]">{(walletData.totalEarnings / 1000).toFixed(0)}K</p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 w-fit mx-auto mb-3">
                <ArrowDownRight className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#4B5563] mb-1 font-medium">{isRTL ? 'المسحوبات' : 'Withdrawals'}</p>
              <p className="font-bold text-[#0E1E25]">{(walletData.totalWithdrawals / 1000).toFixed(0)}K</p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-3 w-fit mx-auto mb-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-[#4B5563] mb-1 font-medium">{isRTL ? 'قيد الانتظار' : 'Pending'}</p>
              <p className="font-bold text-[#0E1E25]">{(walletData.pendingCommissions / 1000).toFixed(1)}K</p>
            </Card>
          </div>

          {/* Commission Info */}
          <Card className="p-4 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941F]/5 border border-[#D4AF37]/20 rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-2 flex-shrink-0">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0E1E25] mb-1">
                  {isRTL ? 'نظام العمولات' : 'Commission System'}
                </h3>
                <p className="text-sm text-[#4B5563]">
                  {isRTL 
                    ? 'تحصل على عمولة من كل صفقة مكتملة. يتم إضافة العمولة لرصيدك فوراً عند إتمام الصفقة.'
                    : 'You earn commission from each completed deal. Commission is added to your balance immediately upon deal completion.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Transactions */}
          <div>
            <h3 className="font-semibold text-[#0E1E25] mb-3 tracking-tight">
              {isRTL ? 'المعاملات الأخيرة' : 'Recent Transactions'}
            </h3>
            
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <Card
                  key={transaction.id}
                  className="p-4 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg p-2 ${
                        transaction.type === 'commission' 
                          ? 'bg-gradient-to-br from-[#10B981] to-[#059669]'
                          : 'bg-gradient-to-br from-blue-500 to-blue-600'
                      }`}>
                        {transaction.type === 'commission' ? (
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        ) : (
                          <ArrowDownRight className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0E1E25] text-sm">
                          {transaction.description}
                        </h4>
                        {transaction.customer && (
                          <p className="text-xs text-[#4B5563]">{transaction.customer}</p>
                        )}
                        <p className="text-xs text-[#4B5563]">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className={`font-bold ${
                        transaction.type === 'commission' 
                          ? transaction.status === 'pending'
                            ? 'text-[#D4AF37]'
                            : 'text-[#10B981]'
                          : 'text-blue-600'
                      }`}>
                        {transaction.type === 'commission' ? '+' : '-'}
                        {transaction.amount.toLocaleString()}
                      </p>
                      <Badge 
                        className={`text-xs font-medium mt-1 ${
                          transaction.status === 'completed' 
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-100 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {transaction.status === 'completed' 
                          ? (isRTL ? 'مكتمل' : 'Completed')
                          : (isRTL ? 'قيد الانتظار' : 'Pending')}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Withdraw Dialog */}
      <Dialog open={showWithdrawDialog} onOpenChange={setShowWithdrawDialog}>
        <DialogContent dir={isRTL ? 'rtl' : 'ltr'} className="max-w-sm rounded-2xl border border-[#0F4C5C]/10 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30">
          <DialogHeader>
            <DialogTitle className="text-[#0E1E25]">{isRTL ? 'سحب الرصيد' : 'Withdraw Balance'}</DialogTitle>
            <DialogDescription className="text-[#4B5563]">
              {isRTL 
                ? 'أدخل المبلغ الذي تريد سحبه من رصيدك'
                : 'Enter the amount you want to withdraw from your balance'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="amount" className="text-[#0E1E25] font-medium">{isRTL ? 'المبلغ' : 'Amount'}</Label>
              <Input
                id="amount"
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="0"
                className="text-lg border-[#0F4C5C]/20 focus:ring-[#0F4C5C]/30"
                max={walletData.balance}
              />
              <p className="text-xs text-[#4B5563] mt-1">
                {isRTL ? 'الرصيد المتاح: ' : 'Available balance: '}
                <span className="font-semibold text-[#0F4C5C]">{walletData.balance.toLocaleString()} {isRTL ? 'ر.س' : 'SAR'}</span>
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleWithdraw}
                className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white hover:from-[#B8941F] hover:to-[#D4AF37] font-medium"
                disabled={!withdrawAmount || Number(withdrawAmount) > walletData.balance}
              >
                {isRTL ? 'تأكيد السحب' : 'Confirm Withdrawal'}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowWithdrawDialog(false)}
                className="border-[#0F4C5C]/20 text-[#0E1E25] hover:bg-[#F2F4F5]"
              >
                {isRTL ? 'إلغاء' : 'Cancel'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <BottomNavBar
        currentScreen="wallet"
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
      `}</style>
    </div>
  );
}
