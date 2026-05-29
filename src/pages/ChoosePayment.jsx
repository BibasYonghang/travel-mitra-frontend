import React, { useState } from "react";
import { CreditCard, Wallet, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "../utils/auth";
import axios from "axios";
import { BACKEND_URL } from "../config/env";

export default function ChoosePayment() {
  const { token } = isAuthenticated();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isProceeding, setIsProceeding] = useState(false);

  const paymentMethods = [
    {
      id: "khalti",
      name: "Khalti",
      icon: <Wallet className="w-8 h-8" />,
      description: "Pay securely via Khalti digital wallet.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      glowColor: "shadow-violet-500/30",
      ringColor: "ring-violet-400",
      bgAccent: "bg-violet-500/10",
      dotColor: "bg-violet-400",
      tag: "Popular",
    },
    {
      id: "esewa",
      name: "eSewa",
      icon: <CreditCard className="w-8 h-8" />,
      description: "Quick and easy payment with eSewa.",
      gradient: "from-emerald-400 via-teal-500 to-sky-500",
      glowColor: "shadow-teal-500/30",
      ringColor: "ring-teal-400",
      bgAccent: "bg-teal-500/10",
      dotColor: "bg-teal-400",
      tag: "Fast",
    },
  ];

  const handleProceed = async (e) => {
    e.preventDefault();

    if (!selectedMethod) {
      toast.warn("Please select a payment method first!", {
        position: "top-center",
        autoClose: 2500,
        theme: "dark",
      });
      return;
    }

    setIsProceeding(true);

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

        const esewaFormData = {
          ...data,
          success_url: `${window.location.origin}/payment-success`,
          failure_url: `${window.location.origin}/payment-failure`,
          signed_field_names: "total_amount,transaction_uuid,product_code",
        };

        const form = document.createElement("form");

        form.method = "POST";
        form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

        Object.keys(esewaFormData).forEach((key) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = esewaFormData[key];
          form.appendChild(input);
        });

        document.body.appendChild(form);
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
        window.location.href = data.payment_url;
      } else {
        toast.error("Invalid Payment Method", { theme: "dark" });
      }
    } catch (err) {
      console.error("Payment initiation failed:", err);
      toast.error("Something went wrong. Redirecting...", {
        position: "top-center",
        theme: "dark",
      });
    } finally {
      setIsProceeding(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-950 overflow-hidden p-4 font-sans">
      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
            Secure{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Checkout
            </span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Choose your preferred payment method to continue
          </p>
        </div>

        {/* ── Payment method cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          {paymentMethods.map((method) => {
            const isSelected = selectedMethod === method.id;
            return (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                aria-pressed={isSelected}
                className={`
                  group relative overflow-hidden hover:cursor-pointer rounded-2xl py-8 px-14 text-left
                  border transition-all duration-300 ease-out
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
                  ${
                    isSelected
                      ? `border-white/20 bg-white/10 backdrop-blur-md shadow-2xl ${method.glowColor} ring-1 ${method.ringColor} scale-[1.02]`
                      : "border-white/8 bg-white/5 hover:bg-white/8 hover:border-white/15 hover:scale-[1.01] shadow-lg"
                  }
                `}
              >
                {/* Gradient top strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${method.gradient} transition-opacity duration-300 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                />

                {/* Subtle glow blob inside card */}
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${method.gradient} blur-2xl transition-opacity duration-300 ${isSelected ? "opacity-20" : "opacity-0 group-hover:opacity-10"}`}
                />

                {/* Selected indicator dot */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`
                      flex items-center justify-center w-12 h-12 rounded-xl
                      bg-gradient-to-br ${method.gradient} text-white
                      shadow-lg transition-transform duration-300
                      ${isSelected ? "scale-110" : "group-hover:scale-105"}
                    `}
                  >
                    {method.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border ${isSelected ? `${method.bgAccent} border-white/20 text-white/80` : "bg-white/5 border-white/10 text-slate-500"}`}
                    >
                      {method.tag}
                    </span>
                    {/* Radio dot */}
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isSelected ? `border-transparent bg-gradient-to-br ${method.gradient}` : "border-slate-600"}`}
                    >
                      {isSelected && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                </div>

                <h3
                  className={`text-base font-bold mb-1 transition-colors duration-200 ${isSelected ? "text-white" : "text-slate-200 group-hover:text-white"}`}
                >
                  {method.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {method.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* ── Proceed button ── */}
        <button
          onClick={handleProceed}
          disabled={isProceeding}
          className={`
            group relative w-full py-4 px-6 rounded-2xl font-bold text-base
            overflow-hidden transition-all duration-300 ease-out
            focus:outline-none hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
            ${
              selectedMethod
                ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.02] active:scale-[0.99]"
                : "bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed"
            }
            ${isProceeding ? "opacity-80 cursor-wait" : ""}
          `}
        >
          {/* Shimmer sweep on hover */}
          {selectedMethod && !isProceeding && (
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          )}

          <span className="relative flex items-center justify-center gap-2">
            {isProceeding ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Redirecting…
              </>
            ) : (
              <>
                {selectedMethod
                  ? `Pay with ${paymentMethods.find((m) => m.id === selectedMethod)?.name}`
                  : "Select a payment method"}
                {selectedMethod && (
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                )}
              </>
            )}
          </span>
        </button>

        {/* ── Footer trust badges ── */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {["256-bit Encrypted", "No Hidden Fees", "Instant Confirmation"].map(
            (label) => (
              <span
                key={label}
                className="flex items-center gap-1 text-[11px] text-slate-600"
              >
                <span className="w-1 h-1 rounded-full bg-slate-700 inline-block" />
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
