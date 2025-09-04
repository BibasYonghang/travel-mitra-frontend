import React, { useState } from "react";

export default function PremiumPayment() {
    const [coupon, setCoupon] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("card"); // default to card

    const handlePayment = (e) => {
        e.preventDefault();
        alert(`Redirecting to ${paymentMethod === "bank" ? "Nepali Bank Gateway" : "Credit Card"} payment gateway...`);
        // TODO: Integrate Khalti, eSewa, or Stripe here
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col lg:flex-row  justify-center gap-10 py-10 px-4 sm:px-6 md:px-10 lg:px-10">
            {/* Features & Billing */}
            <div className="bg-white shadow-xl rounded-2xl w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 text-center">
                    Try <span className="text-green-600">Premium</span> free for 7 days
                </h2>
                <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
                    Then just <span className="font-semibold">$29.99/year</span> after your trial. No commitment — cancel anytime.
                </p>

                <div className="mt-6 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">What's included:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>Download offline maps</li>
                        <li>Get alerts for wrong turns</li>
                        <li>Preview trails and terrain in 3D</li>
                        <li>Share live activities with friends</li>
                    </ul>
                    <button className="text-green-600 text-sm hover:underline">Show more</button>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-4 space-y-2 text-sm sm:text-base">
                    <div className="flex justify-between text-gray-700">
                        <span>Billed today</span>
                        <span className="font-semibold">$0.00</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>Billed after trial</span>
                        <span className="font-semibold">$29.99 annually</span>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Enter a coupon code
                        </label>
                        <input
                            type="text"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder="Coupon code"
                            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                </div>
            </div>

            {/* Payment */}
            <div className="bg-white shadow-xl rounded-2xl w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
                {/* Payment Method Selector */}
                <div className="">
                    <h3 className="text-3xl font-bold text-gray-800">Choose <span className="text-green-600">Payment</span> method</h3>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => setPaymentMethod("bank")}
                            className={`border rounded-lg py-3 px-4 font-medium transition ${paymentMethod === "bank"
                                ? "border-green-600 bg-green-50 text-green-700"
                                : "border-gray-300 hover:border-green-400"
                                }`}
                        >
                            Nepali Banks
                        </button>
                        <button
                            type="button"
                            onClick={() => setPaymentMethod("card")}
                            className={`border rounded-lg py-3 px-4 font-medium transition ${paymentMethod === "card"
                                ? "border-green-600 bg-green-50 text-green-700"
                                : "border-gray-300 hover:border-green-400"
                                }`}
                        >
                            Credit / Debit Card
                        </button>
                    </div>
                </div>

                {/* Nepali Bank Option */}
                {paymentMethod === "bank" && (
                    <div className="mt-8 space-y-4 border-t pt-4">
                        <h3 className="text-lg font-semibold text-gray-800">Pay via Nepali Banks</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Choose from options like <span className="font-semibold">Khalti</span>,{" "}
                            <span className="font-semibold">eSewa</span>, or{" "}
                            <span className="font-semibold">ConnectIPS</span>.
                        </p>
                        <button
                            onClick={handlePayment}
                            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                        >
                            Continue to Bank Gateway
                        </button>
                    </div>
                )}

                {/* Card Payment Option */}
                {paymentMethod === "card" && (
                    <form onSubmit={handlePayment} className="mt-8 space-y-4 border-t pt-4">
                        <h3 className="text-lg font-semibold text-gray-800">Enter your card details</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name on card
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="John Doe"
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Card number
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="1234 5678 9012 3456"
                                maxLength="16"
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Expiration date
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="MM/YY"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="123"
                                    maxLength="3"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Postal code
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="123456"
                                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
                        >
                            Start your free trial
                        </button>

                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            You will be charged <span className="font-semibold">$29.99</span> when
                            your free trial ends. Your subscription will auto-renew every 12 months
                            unless you turn off auto-renewal in settings before the renewal date.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
