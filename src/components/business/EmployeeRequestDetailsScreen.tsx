import { useState } from 'react';
import { ArrowLeft, ArrowRight, User, Home, DollarSign, Calendar, Phone, Mail, CheckCircle, X, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { BottomNavBar } from '../BottomNavBar';

interface EmployeeRequestDetailsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  language: 'en' | 'ar';
  requestData: any;
  employeeData: any;
}

export function EmployeeRequestDetailsScreen({ onNavigate, language, requestData, employeeData }: EmployeeRequestDetailsScreenProps) {
  const isRTL = language === 'ar';
  const [showAcceptDialog, setShowAcceptDialog] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  const handleAccept = () => {
    setShowAcceptDialog(false);
    onNavigate('requests');
  };

  const handleReject = () => {
    setShowRejectDialog(false);
    onNavigate('requests');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      case 'completed':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return isRTL ? 'قيد الانتظار' : 'Pending';
      case 'in-progress':
        return isRTL ? 'قيد المعالجة' : 'In Progress';
      case 'completed':
        return isRTL ? 'مكتمل' : 'Completed';
      default:
        return status;
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#F2F4F5] relative overflow-hidden pb-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Animated Background */}
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
            onClick={() => onNavigate('requests')}
            className="p-2 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/10 relative z-10"
          >
            {isRTL ? (
              <ArrowRight className="w-5 h-5 text-white" />
            ) : (
              <ArrowLeft className="w-5 h-5 text-white" />
            )}
          </button>
          <div className="flex-1 relative z-10">
            <h1 className="text-xl font-bold tracking-tight text-white">
              {isRTL ? 'تفاصيل الطلب' : 'Request Details'}
            </h1>
            <p className="text-sm text-white/70">{requestData?.id}</p>
          </div>
          <Badge className={`${getStatusColor(requestData?.status)} relative z-10`}>
            {getStatusText(requestData?.status)}
          </Badge>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Customer Info */}
          <Card className="p-6 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg p-2">
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-[#0E1E25] tracking-tight">
                {isRTL ? 'معلومات العميل' : 'Customer Information'}
              </h2>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'الاسم' : 'Name'}</p>
                <p className="font-semibold text-[#0E1E25]">{requestData?.customerName}</p>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'الجوال' : 'Phone'}</p>
                  <p className="font-semibold text-[#0E1E25]" dir="ltr">+966 50 123 4567</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'البريد' : 'Email'}</p>
                  <p className="font-semibold text-[#0E1E25] text-xs" dir="ltr">customer@example.com</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Property Info */}
          <Card className="p-6 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] rounded-lg p-2">
                <Home className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-[#0E1E25] tracking-tight">
                {isRTL ? 'معلومات العقار' : 'Property Information'}
              </h2>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'اسم العقار' : 'Property Name'}</p>
                <p className="font-semibold text-[#0E1E25]">{requestData?.propertyName}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'نوع الطلب' : 'Request Type'}</p>
                  <Badge variant="outline" className="border-[#0F4C5C]/20 text-[#0F4C5C] mt-1">
                    {requestData?.type === 'financing' 
                      ? (isRTL ? 'تمويل' : 'Financing')
                      : (isRTL ? 'حجز' : 'Booking')}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-[#4B5563] font-medium">{isRTL ? 'القيمة' : 'Amount'}</p>
                  <p className="font-bold text-white bg-gradient-to-r from-[#0F4C5C] to-[#0A3540] px-3 py-1.5 rounded-lg inline-block mt-1">
                    {requestData?.amount} {isRTL ? 'ر.س' : 'SAR'}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Timeline */}
          <Card className="p-6 bg-gradient-to-br from-white via-white to-[#F2F4F5]/30 border-[#0F4C5C]/5 rounded-2xl shadow-lifted hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg p-2">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-[#0E1E25] tracking-tight">
                {isRTL ? 'الوقت' : 'Time'}
              </h2>
            </div>
            <p className="text-[#4B5563]">{requestData?.time}</p>
          </Card>

          {/* Actions */}
          {requestData?.status === 'pending' && (
            <div className="flex gap-3">
              <Button
                onClick={() => setShowAcceptDialog(true)}
                className="flex-1 text-white h-12 font-medium rounded-xl hover:bg-[#047857]"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                {isRTL ? 'قبول الطلب' : 'Accept Request'}
              </Button>
              <Button
                onClick={() => setShowRejectDialog(true)}
                className="flex-1 bg-white border-2 border-amber-200 text-amber-700 hover:bg-amber-50 h-12 font-medium rounded-xl transition-all duration-300"
              >
                <X className="w-5 h-5 mr-2" />
                {isRTL ? 'رفض الطلب' : 'Reject Request'}
              </Button>
            </div>
          )}

          {requestData?.status === 'in-progress' && (
            <Button
              onClick={() => onNavigate('messages', requestData)}
              className="w-full bg-gradient-to-br from-[#0F4C5C] to-[#0A3540] hover:from-[#0A3540] hover:to-[#082735] text-white h-12 font-medium rounded-xl transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {isRTL ? 'فتح المحادثة' : 'Open Chat'}
            </Button>
          )}
        </div>
      </div>

      {/* Accept Dialog */}
      <Dialog open={showAcceptDialog} onOpenChange={setShowAcceptDialog}>
        <DialogContent dir={isRTL ? 'rtl' : 'ltr'}>
          <DialogHeader>
            <DialogTitle>{isRTL ? 'تأكيد قبول الطلب' : 'Confirm Accept Request'}</DialogTitle>
            <DialogDescription>
              {isRTL 
                ? 'هل أنت متأكد من قبول هذا الطلب؟ سيتم إشعار العميل وبدء العملية.'
                : 'Are you sure you want to accept this request? The customer will be notified and the process will begin.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex gap-2 pt-4">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              {isRTL ? 'تأكيد' : 'Confirm'}
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowAcceptDialog(false)}
            >
              {isRTL ? 'إلغاء' : 'Cancel'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Reject Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent dir={isRTL ? 'rtl' : 'ltr'}>
          <DialogHeader>
            <DialogTitle>{isRTL ? 'تأكيد رفض الطلب' : 'Confirm Reject Request'}</DialogTitle>
            <DialogDescription>
              {isRTL 
                ? 'يرجى ذكر سبب رفض الطلب (اختياري)'
                : 'Please provide a reason for rejecting the request (optional)'}
            </DialogDescription>
          </DialogHeader>
          
          <Textarea
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            placeholder={isRTL ? 'اكتب السبب هنا...' : 'Write reason here...'}
            rows={4}
          />
          
          <div className="flex gap-2">
            <Button
              onClick={handleReject}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              {isRTL ? 'تأكيد الرفض' : 'Confirm Reject'}
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowRejectDialog(false)}
            >
              {isRTL ? 'إلغاء' : 'Cancel'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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

      {/* Bottom Navigation */}
      <BottomNavBar
        currentScreen="requests"
        onNavigate={onNavigate}
        language={language}
        variant="business"
      />
    </div>
  );
}
