import { Route } from "react-router-dom";
import ChoosePayment from "../pages/home/premium/ChoosePayment";
import ThankYou from "../pages/payments/ThankYou";
import PaymentSuccess from "../pages/payments/PaymentSuccess";
import PaymentFailure from "../pages/payments/PaymentFailure";

export const paymentRoutes = [
  <Route path="/premium" element={<ChoosePayment />} />,
  <Route path="/payment-success" element={<PaymentSuccess />} />,
  <Route path="/payment-failure" element={<PaymentFailure />} />,
  <Route path="/thank-you" element={<ThankYou />} />,
];
