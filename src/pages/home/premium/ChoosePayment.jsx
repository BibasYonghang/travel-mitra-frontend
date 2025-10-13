import React, { useState } from "react";
import { CreditCard, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChoosePayment() {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const paymentMethods = [
        {
            id: "khalti",
            name: "Khalti",
            icon: <Wallet className="w-12 h-12 text-purple-600" />,
            description: "Pay securely via Khalti digital wallet.",
            gradient: "from-purple-500 to-purple-700",
        },
        {
            id: "esewa",
            name: "eSewa",
            icon: <CreditCard className="w-12 h-12 text-green-600" />,
            description: "Quick and easy payment with eSewa.",
            gradient: "from-green-500 to-green-700",
        },
    ];

    const handleProceed = () => {
        if (!selectedMethod) {
            alert("Please select a payment method first!");
            return;
        }

        if (selectedMethod === "khalti") {
            window.location.href = "http://localhost:5000/api/khalti/payment"; // Redirect user to backend to initiate Khalti payment
        } else if (selectedMethod === "esewa") {
            window.location.href = "http://localhost:5000/api/esewa/payment"; // Redirect user to backend to initiate esewa payment
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-t from-[#161f13] to-green-200 px-4 py-4">
            {/* Payment Card */}
            <div className="relative bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8 z-10">
                {/* Title */}
                <h2 className="font-bold text-gray-800 mb-2 text-center md:text-3xl text-2xl">
                    Choose <span className="text-green-600">Payment</span> Method
                </h2>
                <p className="text-center text-gray-600 text-sm mb-8">
                    Select your preferred way to pay securely.
                </p>

                {/* Payment Options */}
                <div className="grid md:grid-cols-2 gap-6">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            className={`relative cursor-pointer rounded-xl p-6 py-10 shadow-md transition-all duration-300 border-2 
                ${selectedMethod === method.id
                                    ? "border-green-600"
                                    : "border-transparent hover:border-gray-300"
                                }`}
                            onClick={() => setSelectedMethod(method.id)}
                        >
                            {/* Gradient Overlay */}
                            <div
                                className={`absolute inset-0 rounded-xl opacity-10 bg-gradient-to-br ${method.gradient}`}
                            ></div>

                            {/* Payment Content */}
                            <div className="relative flex flex-col items-center text-center space-y-3">
                                {method.icon}
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {method.name}
                                </h3>
                                <p className="text-sm text-gray-600">{method.description}</p>
                            </div>

                            {/* Selected Indicator */}
                            {selectedMethod === method.id && (
                                <div className="absolute top-3 right-3 w-4 h-4 bg-green-600 rounded-full border-2 border-white" />
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleProceed}
                    className=' relative group mt-10 w-full h-13  text-center border font-semibold text-xl  rounded-sm  border-green-500 bg-green-600 text-green-700 '>
                    <span className='absolute h-full w-full bg-green-500 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300'></span>
                    <Link to="trials-info" className='absolute z-20 flex items-center justify-center inset-0 pt-0.5 text-white'> Proceed to Pay</Link>
                </button>

                {/* Footer Note */}
                <p className="text-xs text-gray-500 text-center mt-8">
                    After clicking "Proceed to Pay", you will be redirected to the selected
                    payment gateway to complete your transaction securely.
                </p>
            </div>
        </div>
    );
}
