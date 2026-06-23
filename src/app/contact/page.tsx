"use client";

import { useState, useEffect } from "react";

const coreServices = [
  "Manned Guarding & Door Supervision (BS 7499 / BS 7960)",
  "Construction Site Security (BS 7499)",
  "Mobile Patrols (BS 7984-3)",
  "Key Holding & Alarm Response (BS 7984-1)",
  "Reception & Concierge Security (BS 10800)",
  "Other / General Inquiry"
];

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        let matchedService = "";
        switch (serviceParam.toLowerCase()) {
          case "manned":
            matchedService = "Manned Guarding & Door Supervision (BS 7499 / BS 7960)";
            break;
          case "construction":
            matchedService = "Construction Site Security (BS 7499)";
            break;
          case "mobile":
            matchedService = "Mobile Patrols (BS 7984-3)";
            break;
          case "keyholding":
            matchedService = "Key Holding & Alarm Response (BS 7984-1)";
            break;
          case "reception":
            matchedService = "Reception & Concierge Security (BS 10800)";
            break;
          default:
            matchedService = coreServices.find(service => 
              service.toLowerCase().includes(serviceParam.toLowerCase())
            ) || "";
            break;
        }
        if (matchedService) {
          setFormData((prev) => ({ ...prev, serviceRequest: matchedService }));
        }
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.serviceRequest || !formData.message) {
      setError("Please complete all required fields (Name, Email, Service Request, and Message).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred while submitting your inquiry.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        telephone: "",
        serviceRequest: "",
        message: ""
      });
    } catch (err) {
      console.error("Submission error:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to reach secure dispatch server. Please try again or call us directly.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans antialiased">
      
      {/* Structural Minimalist Banner */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-[#032031]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-4">
            Secure Communication Terminal
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase mb-6 leading-none text-[#032031]">
            Contact & Deployment Inquiry
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Register custom guard deployments, request high-liability risk assessments, or initiate dynamic physical protection inquiries. Our response protocols operate 24/7/365.
          </p>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Headquarters & Operational Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 text-[#032031]">
                Fortress Command
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Central dispatch control, patrol coordination, and executive protection desk. All calls are monitored and logged to ensure immediate de-escalation efficiency.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-8 border-t border-[#032031] pt-8">
              
              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#032031] flex items-center justify-center flex-shrink-0 text-[#032031]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">24/7 Telephone Helpline</h4>
                  <p className="text-[#032031] text-lg font-black mt-1">
                    <a href="tel:+448005552771" className="hover:underline transition">
                      +44 (800) 555-ASR1
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#032031] flex items-center justify-center flex-shrink-0 text-[#032031]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Secure Digital Channels</h4>
                  <p className="text-[#032031] text-lg font-black mt-1 break-all">
                    <a href="mailto:enquiries@fortressasrsecurity.com" className="hover:underline transition">
                      enquiries@fortressasrsecurity.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Headquarters Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#032031] flex items-center justify-center flex-shrink-0 text-[#032031]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Corporate Headquarters</h4>
                  <p className="text-zinc-600 text-sm mt-1 leading-relaxed">
                    Fortress House, 12 Broadgate, London, EC2M 2QS, United Kingdom
                  </p>
                </div>
              </div>

            </div>

            {/* Standard and Licensing Disclaimer */}
            <div className="border-t border-zinc-200 pt-8 text-xs text-zinc-400 space-y-2">
              <p>SIA Approved Contractor &bull; Vetted under BS 7858 Standards.</p>
              <p>All physical logs and operational telemetry remain confidential under GDPR frameworks.</p>
            </div>
          </div>

          {/* Column 2: Inquiry Submission Form (7 Cols) */}
          <div className="lg:col-span-7 border border-[#032031] p-8 sm:p-12 bg-white">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-8 text-[#032031]">
              SECURE INQUIRY MANIFEST
            </h3>

            {isSubmitted ? (
              <div className="border border-[#032031] p-8 text-center space-y-6">
                <div className="w-12 h-12 border border-[#032031] flex items-center justify-center mx-auto text-[#032031]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-black uppercase tracking-tight text-[#032031]">Transmission Confirmed</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-md mx-auto">
                    Inquiry successfully submitted to the Fortress security control network. Our duty desk will evaluate the parameters and initiate contact within 2 hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-block border border-[#032031] px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#032031] text-white hover:bg-white hover:text-[#032031] transition duration-200"
                >
                  Submit new manifest
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="p-4 border border-red-500 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider flex items-start gap-3">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-white border border-zinc-300 focus:border-[#032031] px-4 py-3 text-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#032031] transition duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full bg-white border border-zinc-300 focus:border-[#032031] px-4 py-3 text-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#032031] transition duration-150"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telephone" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Telephone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+44 7123 456789"
                      className="w-full bg-white border border-zinc-300 focus:border-[#032031] px-4 py-3 text-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#032031] transition duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceRequest" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="serviceRequest"
                      name="serviceRequest"
                      value={formData.serviceRequest}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-zinc-300 focus:border-[#032031] px-4 py-3 text-sm text-black focus:outline-none focus:ring-1 focus:ring-[#032031] transition duration-150 appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23032031'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/></svg>")`, backgroundPosition: 'right 12px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="">Select service type...</option>
                      {coreServices.map((service, sIdx) => (
                        <option key={sIdx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Inquiry Details / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Provide description of property parameters, security levels, specific guards required, schedules, or dynamic de-escalation needs."
                    className="w-full bg-white border border-zinc-300 focus:border-[#032031] px-4 py-3 text-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#032031] transition duration-150 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center py-4 px-6 text-sm font-bold uppercase tracking-wider bg-[#032031] text-white hover:bg-white hover:text-[#032031] border border-[#032031] disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-zinc-200 transition duration-150 active:scale-[0.98]"
                >
                  {isSubmitting ? "TRANSMITTING SECURE DATA..." : "SUBMIT SECURE INQUIRY"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
