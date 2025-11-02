import { TrendingUp, ArrowUpRight, ArrowDownRight, BarChart3 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface MarketTrendCardProps {
  language: 'en' | 'ar';
}

export function MarketTrendCard({ language }: MarketTrendCardProps) {
  const isRTL = language === 'ar';

  const trends = [
    {
      id: 1,
      area: isRTL ? 'حي المال' : 'Al Mal District',
      change: '+12%',
      isPositive: true,
    },
    {
      id: 2,
      area: isRTL ? 'حي النخيل' : 'Al Nakheel',
      change: '+8%',
      isPositive: true,
    },
    {
      id: 3,
      area: isRTL ? 'حي الياسمين' : 'Al Yasmin',
      change: '-3%',
      isPositive: false,
    },
  ];

  return (
    <Card className="p-5 mb-6 border-[#0F4C5C]/10 bg-gradient-to-br from-white to-[#F2F4F5]/30 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-xl flex items-center justify-center shadow-soft">
            <BarChart3 className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm text-[#0E1E25] tracking-tight" dir="auto">{isRTL ? 'اتجاهات السوق' : 'Market Trends'}</h3>
        </div>
        <Badge variant="secondary" className="text-xs">{isRTL ? 'هذا الشهر' : 'This Month'}</Badge>
      </div>

      <div className="space-y-2">
        {trends.map((trend) => (
          <div key={trend.id} className="flex items-center justify-between bg-white/50 rounded-xl p-3 border border-[#0F4C5C]/5">
            <span className="text-sm text-[#0E1E25]" dir="auto">{trend.area}</span>
            <div className={`flex items-center gap-1 ${trend.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend.isPositive ? (
                <ArrowUpRight className="w-3.5 h-3.5" />
              ) : (
                <ArrowDownRight className="w-3.5 h-3.5" />
              )}
              <span className="text-sm">{trend.change}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
