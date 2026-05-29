import { useState } from "react";
import {
  HiOutlineChatAlt2,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineMap,
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineUsers,
} from "react-icons/hi";
import {
  FaRegCompass,
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { BACKEND_URL } from "../../config/env";

export default function TravelContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    bookingId: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email format";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setIsSubmitting(true);

    try {
      // POST to your backend
      await fetch(`${BACKEND_URL}/api/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const ticket = "TRV-" + Math.floor(10000 + Math.random() * 90000);
      setTicketId(ticket);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function reset() {
    setForm({ name: "", email: "", bookingId: "", topic: "", message: "" });
    setErrors({});
    setSubmitted(false);
  }

  const inputClass = (field) =>
    `w-full px-4 py-2.5 text-sm rounded-xl border transition-all duration-200 outline-none
    ${
      errors[field]
        ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
        : "border-gray-200 bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 hover:border-gray-300"
    }`;

  if (submitted) return <SuccessState ticketId={ticketId} onReset={reset} />;

  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-sky-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Travel <span className="inline text-sky-500">Support</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Need help planning your trip or have questions about your booking?
            Our travel experts are here to assist you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Contact Info */}
          <div className=" space-y-3">
            {/* Contact Methods Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-sky-200 p-6 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Get in touch
              </h2>
              <div className="space-y-1">
                {[
                  {
                    icon: HiOutlineMail,
                    label: "Email support",
                    sub: "travel@wanderlust.com",
                    bg: "bg-emerald-100",
                    color: "text-emerald-700",
                  },
                  {
                    icon: HiOutlinePhone,
                    label: "24/7 Hotline",
                    sub: "+1 (888) 123-4567",
                    bg: "bg-amber-100",
                    color: "text-amber-700",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Cards - Travel Specific */}
            <div className="space-y-1 mt-8">
              {[
                {
                  icon: FaRegCompass,
                  bg: "bg-sky-100",
                  color: "text-sky-700",
                  label: "Plan your trip",
                  sub: "Custom itineraries & travel guides",
                },
                {
                  icon: HiOutlineUsers,
                  bg: "bg-emerald-100",
                  color: "text-emerald-700",
                  label: "Group travel",
                  sub: "Special rates for groups of 10+",
                },
                {
                  icon: HiOutlineQuestionMarkCircle,
                  bg: "bg-amber-100",
                  color: "text-amber-700",
                  label: "Travel FAQ",
                  sub: "Visa, insurance & packing tips",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-white rounded-2xl shadow-sm border border-sky-200 p-5 hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <c.icon className={`w-5 h-5 ${c.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        {c.label}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {c.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-sky-200 p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      className={inputClass("name")}
                      placeholder="Bibas Yonghang"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className={inputClass("email")}
                      placeholder="bibasyonghangexample@gmail.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic
                  </label>
                  <select
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 bg-white text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
                    value={form.topic}
                    onChange={(e) =>
                      setForm({ ...form, topic: e.target.value })
                    }
                  >
                    <option value="">Select a topic...</option>
                    <option>Flight booking & changes</option>
                    <option>Hotel reservation</option>
                    <option>Tour package inquiry</option>
                    <option>Visa assistance</option>
                    <option>Cancellation & refund</option>
                    <option>Travel insurance</option>
                    <option>Special assistance request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className={inputClass("message")}
                    placeholder="Tell us about your travel plans or concerns..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <HiOutlineClock className="w-3 h-3" />
                    Our team typically responds within 24 hours
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto hover:cursor-pointer px-6 py-2.5 text-sm font-medium bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessState({ ticketId, onReset }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full text-center transform transition-all duration-300 animate-in fade-in zoom-in">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-sky-400 to-emerald-500 flex items-center justify-center shadow-lg">
          <HiOutlineCheckCircle className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Message sent!</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thanks for reaching out! A travel specialist will get back to you
          within 24 hours.
        </p>
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 rounded-xl px-4 py-3 inline-block mb-6 shadow-sm">
          <span className="text-sm text-gray-600">Request ID: </span>
          <span className="text-sm font-mono font-semibold text-sky-700">
            {ticketId}
          </span>
        </div>
        <div>
          <button
            onClick={onReset}
            className="px-6 py-2.5 text-sm font-medium border-2 border-gray-200 rounded-xl hover:border-sky-300 hover:bg-sky-50 transition-all duration-200 text-gray-700"
          >
            Send another message
          </button>
        </div>
      </div>
    </div>
  );
}
