import { TrendingUp, DollarSign, PiggyBank, ArrowUpRight } from 'lucide-react';
import { Card } from './ui/card';

interface FinancialInsightCardProps {
  language: 'en' | 'ar';
}

export function FinancialInsightCard({ language }: FinancialInsightCardProps) {
  const isRTL = language === 'ar';

  return (
    <Card className="p-5 mb-6 bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-white border-emerald-200/50 shadow-soft overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-soft">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm text-[#0E1E25] tracking-tight" dir="auto">{isRTL ? 'رؤيتك المالية' : 'Your Financial Insight'}</h3>
              <p className="text-xs text-emerald-600" dir="auto">{isRTL ? 'مدعوم بالذكاء الاصطناعي' : 'AI-Powered'}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-emerald-100">
            <div className="flex items-center gap-2 mb-1.5">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <p className="text-xs text-[#4B5563]" dir="auto">{isRTL ? 'القدرة الشرائية' : 'Buying Power'}</p>
            </div>
            <p className="text-lg text-[#0E1E25]">850K <span className="text-xs text-[#4B5563]">{isRTL ? 'ر.س' : 'SAR'}</span></p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-emerald-100">
            <div className="flex items-center gap-2 mb-1.5">
              <PiggyBank className="w-4 h-4 text-emerald-600" />
              <p className="text-xs text-[#4B5563]" dir="auto">{isRTL ? 'ادخار محتمل' : 'Potential Savings'}</p>
            </div>
            <p className="text-lg text-emerald-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" />
              12%
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
