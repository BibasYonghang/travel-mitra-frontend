import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config/env";
import { Check, CreditCard, X } from "lucide-react";

export default function KhaltiResult() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("processing");
  const [pidx, setPidx] = useState(null);

  useEffect(() => {
    const pidxParam = params.get("pidx");

    setPidx(pidxParam);

    if (!pidxParam) {
      setStatus("failed");
      return;
    }

    verify(pidxParam);
  }, []);

  const verify = async (pidx) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/khalti/verify`, {
        pidx,
      });

      if (res.data.status === "Completed") {
        setStatus("success");
      } else {
        setStatus("failed");
      }
    } catch (err) {
      setStatus("failed");
    }
  };

  if (status === "processing") return <ProcessingState />;
  if (status === "success") return <SuccessState pidx={pidx} />;
  if (status === "failed") return <FailedState />;
}

function ProcessingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl border border-gray-100 p-10 w-full max-w-sm text-center shadow-sm">
        <div
          className="relative w-18 h-18 mx-auto mb-6"
          style={{ width: 72, height: 72 }}
        >
          <div className="absolute inset-0 rounded-full bg-gray-50" />
          <div className="absolute inset-0 rounded-full border-4 border-gray-100 border-t-purple-500 animate-spin" />
          <div className="absolute inset-2 rounded-full flex items-center justify-center">
            <CreditCard size={30} />
          </div>
        </div>
        <p className="text-lg font-medium text-gray-900 mb-1">
          Processing payment
        </p>
        <p className="text-sm text-gray-400">
          Verifying with Khalti. Please wait...
        </p>
      </div>
    </div>
  );
}

function SuccessState({ pidx }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl border border-gray-100 p-10 w-full max-w-sm text-center shadow-sm">
        <div
          className="relative mx-auto mb-6"
          style={{ width: 80, height: 80 }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-30" />
          <div className="absolute inset-0 rounded-full text-green-500 bg-emerald-50 flex items-center justify-center">
            <Check size={30} />
          </div>
        </div>
        <p className="text-lg font-medium text-gray-900 mb-1">
          Payment successful
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Your transaction has been confirmed.
        </p>

        <div className="bg-gray-50 rounded-xl p-4 text-left mb-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              Transaction ID
            </span>
            <span className="text-xs font-mono font-medium text-gray-700">
              {pidx ?? "—"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              Status
            </span>
            <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-3 py-0.5 rounded-full">
              Completed
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              Gateway
            </span>
            <span className="text-xs font-medium text-gray-700">Khalti</span>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href="/orders"
            className="flex-1 py-2.5 text-sm font-medium rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-center"
          >
            View order
          </a>
          <a
            href="/"
            className="flex-1 py-2.5 text-sm font-medium rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors text-center"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function FailedState({ reason }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl border border-gray-100 p-10 w-full max-w-sm text-center shadow-sm">
        <div
          className="mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center"
          style={{ width: 80, height: 80 }}
        >
          <X size={30} />
        </div>
        <p className="text-lg font-medium text-gray-900 mb-1">Payment failed</p>
        <p className="text-sm text-gray-400 mb-6">{reason}</p>
      </div>
    </div>
  );
}
