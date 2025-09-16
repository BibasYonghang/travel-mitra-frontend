import React, { useState } from "react";

export default function EsewaPayment() {
    // Khalti integration
    const [mobile, setMobile] = useState("");
    const amount = 1000; // Example amount
    const [productIdentity, setProductIdentity] = useState("PROD123");
    const [productName, setProductName] = useState("Premium Subscription");

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!mobile || !productIdentity || !productName) {
            alert("Please fill out all required fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/khalti/payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, mobile, product_identity: productIdentity, product_name: productName }),
            });

            const data = await response.json();

            if (data?.payment_url) {
                // If Khalti returns a payment_url, redirect user
                window.location.href = data.payment_url;
            } else if (data?.message) {
                alert(data.message);
            } else {
                alert("Failed to start Khalti payment process. Try again.");
            }
        } catch {

            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                    Pay with <span className="text-purple-600">Khalti</span>
                </h2>
                <p className="text-center text-gray-600 text-sm mb-6">
                    Secure payment powered by Khalti. Please fill in your details.
                </p>

                <form onSubmit={handlePayment} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="98XXXXXXXX"
                            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Product Identity
                        </label>
                        <input
                            type="text"
                            value={productIdentity}
                            onChange={(e) => setProductIdentity(e.target.value)}
                            placeholder="PROD123"
                            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Product Name
                        </label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Premium Subscription"
                            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Amount (NPR)
                        </label>
                        <input
                            type="number"
                            value={amount}
                            disabled
                            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-700"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                    >
                        Proceed to Pay
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-3">
                        After clicking "Proceed to Pay", you will be redirected to Khalti's sandbox gateway (if payment_url is provided).
                    </p>
                </form>
            </div>
        </div>
    );
}
