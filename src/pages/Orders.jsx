import React from "react";

const Orders = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">My Orders</h1>
        <p className="mt-4 text-sm text-slate-600">
          This is your orders page. Your completed bookings and order history will appear here.
        </p>
        <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-slate-700">
          <p className="text-lg font-medium">No orders yet.</p>
          <p className="mt-2 text-sm text-slate-600">
            Ask the AI to show your orders, and if navigation is detected, it will take you to this page.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Orders;
