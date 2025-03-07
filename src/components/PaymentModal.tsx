import React from 'react';
import { Course } from '../types/course';
import { CreditCard, Wallet, Ban as Bank, X, ChevronRight } from 'lucide-react';

interface PaymentModalProps {
  course: Course;
  onClose: () => void;
  onPaymentComplete: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ course, onClose, onPaymentComplete }) => {
  const handlePayment = (method: string) => {
    // In a real application, this would integrate with a payment processor
    console.log(`Processing payment via ${method}`);
    onPaymentComplete();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Payment Options</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Course Details</h3>
            <p className="text-gray-600 mb-4">{course.title}</p>
            <div className="flex items-center justify-between py-3 border-y border-gray-200">
              <span className="text-gray-600">Total Amount</span>
              <span className="text-xl font-bold text-gray-900">
                ${course.price.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handlePayment('credit-card')}
              className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Credit/Debit Card</p>
                  <p className="text-sm text-gray-500">Pay with Visa, Mastercard, or American Express</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button
              onClick={() => handlePayment('digital-wallet')}
              className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Wallet className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Digital Wallet</p>
                  <p className="text-sm text-gray-500">Pay with PayPal or Digital Wallet</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button
              onClick={() => handlePayment('bank-transfer')}
              className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Bank className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Bank Transfer</p>
                  <p className="text-sm text-gray-500">Pay directly from your bank account</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Secure payment powered by Stripe. Your payment information is encrypted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};