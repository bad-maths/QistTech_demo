import { Clock, CheckCircle2, FileText, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';

interface ActivityTimelineProps {
  language: 'en' | 'ar';
  onNavigate: (screen: string) => void;
}

export function ActivityTimeline({ language, onNavigate }: ActivityTimelineProps) {
  const isRTL = language === 'ar';

  const activities = [
    {
      id: 1,
      icon: CheckCircle2,
      title: isRTL ? 'تم قبول طلبك' : 'Application Approved',
      time: isRTL ? 'منذ ساعتين' : '2 hours ago',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 2,
      icon: MessageSquare,
      title: isRTL ? 'رسالة جديدة من البنك' : 'New message from bank',
      time: isRTL ? 'منذ 5 ساعات' : '5 hours ago',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 3,
      icon: FileText,
      title: isRTL ? 'المستندات مطلوبة' : 'Documents required',
      time: isRTL ? 'منذ يوم واحد' : '1 day ago',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <Card className="p-5 mb-6 border-[#0F4C5C]/10 bg-gradient-to-br from-white to-[#F2F4F5]/30 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-xl flex items-center justify-center shadow-soft">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm text-[#0E1E25] tracking-tight" dir="auto">{isRTL ? 'النشاط الأخير' : 'Recent Activity'}</h3>
        </div>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center shrink-0 shadow-soft`}>
                <Icon className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#0E1E25] mb-0.5" dir="auto">{activity.title}</p>
                <p className="text-xs text-[#4B5563]" dir="auto">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
