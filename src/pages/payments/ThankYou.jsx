import React from 'react';
import { Link } from "react-router-dom";
import { CheckCircle2 } from 'lucide-react';

const ThankYou = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-50 px-4">
            <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-8 text-center animate-fadeIn">
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
                <h2 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h2>
                <p className="text-gray-700 mb-6">
                    Your order has been placed successfully. Thank you for choosing us!
                </p>
                <Link 
                    to='/' 
                    className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                    Go To HomePage
                </Link>
                <p className="mt-4 text-gray-400 text-sm">
                    If you have any questions about your order, feel free to contact our <a href="mailto:support@example.com" className="underline hover:text-gray-600">support team</a>.
                </p>
            </div>
        </div>
    );
};

export default ThankYou;
