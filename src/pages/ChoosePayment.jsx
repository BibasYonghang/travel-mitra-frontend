import React, { useState } from "react";
import { CreditCard, Wallet } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "../utils/auth";
import axios from "axios";
import { BACKEND_URL } from "../config/env";

export default function ChoosePayment() {
  const { token } = isAuthenticated();
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
      icon: <CreditCard className="w-12 h-12 text-sky-600" />,
      description: "Quick and easy payment with eSewa.",
      gradient: "from-sky-500 to-sky-700",
    },
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
      fullName: "Bibas Yonghang",
    };

    try {
      if (selectedMethod === "esewa") {
        const { data } = await axios.post(
          `${BACKEND_URL}/api/generate-signature`,
          paymentData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        // Add success and failure redirect URLs here
        const esewaFormData = {
          ...data,
          // Base URL of current app (protocol + domain + port), e.g. http://localhost:5173 or https://myapp.com
          // Using this avoids hardcoding URLs and works in both dev and production
          success_url: `${window.location.origin}/payment-success`,

          // URL where eSewa will redirect the user if payment fails or is cancelled
          failure_url: `${window.location.origin}/payment-failure`,
          signed_field_names: "total_amount,transaction_uuid,product_code",
        };

        // Create a form element dynamically (not yet in DOM)
        const form = document.createElement("form");

        // Set method and target payment gateway URL
        form.method = "POST";
        form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

        // Convert esewaFormData object into hidden input fields
        Object.keys(esewaFormData).forEach((key) => {
          const input = document.createElement("input");

          // Hidden inputs are used to send data without showing in UI
          input.type = "hidden";

          // 'name' must match what eSewa expects (field name)
          input.name = key;

          // Assign corresponding value from esewaFormData
          input.value = esewaFormData[key];

          // Append each input inside the form
          form.appendChild(input);
        });

        // IMPORTANT: Form must be attached to the DOM before submission
        // Otherwise, some browsers may not process form.submit() correctly
        document.body.appendChild(form);

        // Trigger form submission → sends POST request → redirects user to eSewa
        form.submit();
      } else if (selectedMethod === "khalti") {
        const { data } = await axios.post(
          `${BACKEND_URL}/api/khalti/initiate`,
          {
            amount: 1300,
            purchase_order_id: "ORDER_123",
            purchase_order_name: "Test Product",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("Error Debugging:", data);

        //  Redirect to Khalti hosted payment page
        window.location.href = data.payment_url;
      } else {
        alert("Invalid Payment Method");
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
          <button
            key={method.id}
            className={`p-6 rounded-xl cursor-pointer shadow-md relative border-2 ${
              selectedMethod === method.id
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
          </button>
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
