import React, { useState } from "react";
import { CreditCard, Wallet } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { isAuthenticated } from "../../../auth";
import axios from "axios";

export default function ChoosePayment() {
    const { token } = isAuthenticated();
    const [selectedMethod, setSelectedMethod] = useState(null);

     const APP_URL = import.meta.env.VITE_BASE_URL


    const paymentMethods = [
        {
            id: "khalti",
            name: "Khalti",
            icon: <Wallet className="w-12 h-12 text-purple-600" />,
            description: "Pay securely via Khalti digital wallet.",
            gradient: "from-purple-500 to-purple-700"
        },
        {
            id: "esewa",
            name: "eSewa",
            icon: <CreditCard className="w-12 h-12 text-sky-600" />,
            description: "Quick and easy payment with eSewa.",
            gradient: "from-sky-500 to-sky-700"
        }
    ];

    const handleProceed = async (e) => {
        e.preventDefault();

        if (!selectedMethod) {
            alert("Please select a payment method first!");
            return;
        }

        const paymentData = {
            amount: 1000,
            phone: "9801234567",
            fullName: "Bibas Yonghang"
        };

        try {
            if (selectedMethod === "esewa") {

                const { data } = await axios.post(
                    `${APP_URL}/api/generate-signature`,
                    paymentData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                // Add success and failure redirect URLs here
                const formData = {
                    ...data,
                    success_url: `${window.location.origin}/payment-success`,
                    failure_url: `${window.location.origin}/payment-failure`,
                    signed_field_names: "total_amount,transaction_uuid,product_code"
                };

                // Create and submit form
                const form = document.createElement("form");
                form.method = "POST";
                form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

                Object.keys(formData).forEach((key) => {
                    const input = document.createElement("input");
                    input.type = "hidden";
                    input.name = key;
                    input.value = formData[key];
                    form.appendChild(input);
                });

                document.body.appendChild(form);
                form.submit();
            } else {
                alert("Khalti integration coming soon!");
            }
        } catch (err) {
            console.error("Payment initiation failed:", err);
            toast.error("Something went wrong. Redirecting...");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100 p-4">
            <ToastContainer />
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                Choose <span className="text-sky-700">Payment Method</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        className={`p-6 rounded-xl cursor-pointer shadow-md relative border-2 ${selectedMethod === method.id
                            ? "border-sky-600"
                            : "border-transparent hover:border-gray-300"
                            }`}
                        onClick={() => setSelectedMethod(method.id)}
                    >
                        <div
                            className={`absolute inset-0 rounded-xl opacity-10 bg-gradient-to-br ${method.gradient}`}
                        ></div>
                        <div className="relative flex flex-col items-center text-center space-y-3">
                            {method.icon}
                            <h3 className="text-xl font-semibold">{method.name}</h3>
                            <p className="text-sm">{method.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handleProceed}
                className="mt-6 px-6 py-3 bg-sky-600 text-white rounded-lg font-bold hover:cursor-pointer hover:bg-sky-700"
            >
                Proceed to Pay
            </button>
        </div>
    );
}
