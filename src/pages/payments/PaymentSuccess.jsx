import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../auth.js';
import axios from 'axios';
import { CheckCircle2 } from 'lucide-react';

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {};
    const { user, token } = isAuthenticated() || {};

 const APP_URL = import.meta.env.VITE_BASE_URL

    const order = {
        orderItems: cartItems,
        shippingAddress1: shippingInfo?.shippingAddress1 || '',
        shippingAddress2: shippingInfo?.shippingAddress2 || '',
        city: shippingInfo?.city || '',
        country: shippingInfo?.country || '',
        zip: shippingInfo?.zip || '',
        phone: shippingInfo?.phone || '',
        user: user?._id || null
    };

    useEffect(() => {
        const processPayment = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                const encodedData = params.get('data');

                if (!encodedData) {
                    navigate('/payment-failure');
                    return;
                }

                const decodedData = atob(encodedData);
                const paymentData = JSON.parse(decodedData);

                if (paymentData.status === 'COMPLETE') {
                    if (token) {
                        const config = {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`
                            }
                        };
                        await axios.post(`${APP_URL}/api/generate-signature`, order, config);
                    }

                    localStorage.removeItem('cartItems');
                    localStorage.removeItem('shippingInfo');

                    setTimeout(() => {
                        navigate('/thank-you');
                    }, 2000);
                } else {
                    navigate('/payment-failure');
                }
            } catch (err) {
                console.error('Payment processing error:', err);
                navigate('/payment-failure');
            }
        };

        processPayment();
    }, [navigate, token, order]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-50 px-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fadeIn">
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
                <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
                <p className="text-gray-700 mb-6">
                    Thank you for your purchase! Your order has been successfully processed.
                </p>
                <p className="text-gray-500">
                    You will be redirected to the Thank You page shortly.
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;
