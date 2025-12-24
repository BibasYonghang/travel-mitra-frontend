import React from 'react';
import { Link } from "react-router-dom";
import { XCircle } from 'lucide-react';

const PaymentFailure = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8 text-center">
                <XCircle className="mx-auto text-red-500 w-16 h-16 mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Failed</h2>
                <p className="text-gray-600 mb-6">
                    Unfortunately, your payment could not be processed.
                    This might be due to a network issue or a problem with your payment method.
                </p>
                <p className="text-gray-500 mb-6">
                    Please try again or use a different payment method. Your items are still saved in your cart.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to='/premium'
                        className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                    >
                        Try Again
                    </Link>
                    <Link
                        to='/'
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Back To Home
                    </Link>
                </div>
                <div className="mt-6 text-gray-400 text-sm">
                    If the issue persists, please contact <a href="mailto:support@example.com" className="underline hover:text-gray-600">support</a>.
                </div>
            </div>
        </div>
    )
}

export default PaymentFailure;
