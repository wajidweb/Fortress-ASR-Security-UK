"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    serviceRequest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.serviceRequest || !formData.message) {
      setError("Please complete all required fields (Name, Email, Service Request, and Message).");
      return;
    }

    setIsSubmitting(true);

    // Simulate API request (1.2s timeout)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        telephone: "",
        serviceRequest: "",
        message: ""
      });
    }, 1200);
  };

  const coreServices = [
    "Manned Guarding & Door Supervision (BS 7499 / BS 7960)",
    "Construction Site Security (BS 7499)",
    "Mobile Patrols (BS 7984-3)",
    "Key Holding & Alarm Response (BS 7984-1)",
    "Reception & Concierge Security (BS 10800)",
    "Other / General Inquiry"
  ];

  return (
    <div className="bg-[#032031] text-white min-h-screen">
      {/* Banner Section */}
      <section className="bg-[#021825] py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-3">Direct Contact Channel</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-amber-500">
            Contact Us & Security Inquiry
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Get in touch for immediate assistance, guard deployment, or to request a free security quote and custom risk assessment.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Details Column - 5 Cols */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Fortress Headquarters
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Our operations team, dispatch operators, and emergency responders remain available 24/7/365 to handle static placements, mobile sweeps, and urgent alarm responses.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Phone Helpline (24/7 Support)</h4>
                  <p className="text-zinc-300 text-base mt-1">
                    <a href="tel:+448005552771" className="hover:text-amber-500 transition font-bold">
                      +44 (800) 555-ASR1
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Email Inquiry Channel</h4>
                  <p className="text-zinc-300 text-base mt-1">
                    <a href="mailto:enquiries@fortressasrsecurity.com" className="hover:text-amber-500 transition font-bold break-all">
                      enquiries@fortressasrsecurity.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Corporate Office Address</h4>
                  <p className="text-zinc-300 text-sm mt-1 leading-relaxed">
                    Fortress House, 12 Broadgate, London, EC2M 2QS, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column - 7 Cols */}
          <div className="lg:col-span-7 bg-[#021825]/60 p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
              Secure Inquiry Form
            </h3>

            {isSubmitted ? (
              <div className="p-8 border border-amber-500/20 bg-amber-500/5 rounded-xl text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto border border-amber-500/30">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Submitted Successfully!</h4>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
                  Thank you for contacting Fortress ASR Security. One of our SIA-approved deployment specialists will review your parameters and reach out to you within the next 2 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs font-bold text-amber-500 hover:text-amber-400 uppercase tracking-widest transition"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg text-red-400 text-sm font-semibold flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-zinc-300 mb-2">
                      Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#032031] border border-white/15 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-zinc-300 mb-2">
                      Email Address <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className="w-full bg-[#032031] border border-white/15 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telephone" className="block text-xs font-bold uppercase tracking-widest text-zinc-300 mb-2">
                      Telephone <span className="text-zinc-500">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="e.g. +44 7123 456789"
                      className="w-full bg-[#032031] border border-white/15 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceRequest" className="block text-xs font-bold uppercase tracking-widest text-zinc-300 mb-2">
                      Service Required <span className="text-amber-500">*</span>
                    </label>
                    <select
                      id="serviceRequest"
                      name="serviceRequest"
                      value={formData.serviceRequest}
                      onChange={handleChange}
                      className="w-full bg-[#032031] border border-white/15 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 transition duration-200"
                    >
                      <option value="">Select core service required...</option>
                      {coreServices.map((service, sIdx) => (
                        <option key={sIdx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-300 mb-2">
                    Inquiry Details / Message <span className="text-amber-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your site parameters, physical location, required guard intervals, or dynamic de-escalation needs..."
                    className="w-full bg-[#032031] border border-white/15 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-lg text-sm font-bold bg-amber-500 text-black hover:bg-amber-400 disabled:bg-zinc-700 disabled:text-zinc-500 hover:scale-[1.01] active:scale-95 transition duration-200"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Send Secure Inquiry"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
