import Link from "next/link";

export default function Services() {
  const servicesList = [
    {
      title: "Manned Guarding & Door Supervision",
      standards: ["BS 7499 (Static Guarding)", "BS 7960 (Door Supervision)", "BS 10800 (Security Management)"],
      desc: "Provide your premises with a commanding, professional visual deterrent. Our fully licensed, SIA-approved security guards and door supervisors are trained in elite situational awareness, crowd management, and customer-facing diplomacy. Our operations conform strictly to British Standards to provide top-tier physical security.",
      points: [
        "Concierge & Front-Desk Guarding",
        "Visitor Verification & Access Logs",
        "SIA-Licensed Door Supervision & Crowd Control",
        "Real-Time Patrol Logging via GPS/NFC"
      ]
    },
    {
      title: "Construction Site Security",
      standards: ["BS 7499 (Static Guarding Regulations)"],
      desc: "Protect high-value equipment, materials, and machinery from vandalism and theft. We deploy specialised static guards who strictly adhere to BS 7499 regulations, establishing rigid perimeter control and maintaining accurate visitor logs to keep your project moving safely and on schedule.",
      points: [
        "Continuous Perimeter Foot Patrols",
        "Materials & High-Value Machinery Watches",
        "Exclusion Zone Enforcement",
        "Comprehensive Out-of-Hours Lockup Checks"
      ]
    },
    {
      title: "Mobile Patrols",
      standards: ["BS 7984-3 (Mobile Security Services)"],
      desc: "Cost-effective security for larger perimeters or multiple locations. Conducted by qualified SIA-licensed drivers, our mobile units conduct unpredictable, highly visible security sweeps and check-calls in perfect conformity with British Standards.",
      points: [
        "Randomized Patrol Intervals & Branded Vehicles",
        "External Lock, Window & Entry Gate Audits",
        "Rapid On-Call Crisis Response",
        "GPS-Stamped Proof of Patrol Reports"
      ]
    },
    {
      title: "Key Holding & Alarm Response",
      standards: ["BS 7984-1 (Keyholding & Response Services)"],
      desc: "Eliminate the risk to your employees by leaving out-of-hours emergencies to SIA-approved experts. Operating in strict compliance with BS 7984-1, our guards securely manage your keys, respond instantly to activations, and conduct thorough site checks.",
      points: [
        "Secure off-site key management with dual custody",
        "Immediate 24/7 dispatch upon alarm trigger",
        "Full interior physical inspection & de-escalation",
        "Emergency services coordination on site"
      ]
    },
    {
      title: "Reception & Concierge Security",
      standards: ["BS 10800 (Provision of Security Services Framework)"],
      desc: "The perfect fusion of elite customer service and corporate front-of-house safety. Handled exclusively by fully qualified guards working under the overarching BS 10800 security management framework, we manage access control and greet clients with absolute professionalism.",
      points: [
        "Concierge reception & professional visitor hosting",
        "ID card issues & badge access verification",
        "Building evacuation planning & emergency assistance",
        "Polished uniform matching corporate brand style"
      ]
    }
  ];

  return (
    <div className="bg-[#032031] text-white min-h-screen">
      {/* Full Screen Width Relative Container: 30% of Available Screen Height (#032031 Background) */}
      <div className="relative w-full h-[30vh] min-h-[220px] bg-[#032031] overflow-hidden shadow-2xl border-b border-white/10 flex items-center justify-center">
        
        {/* Subtle Grid Pattern Overlay to Enhance Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

        {/* Prominent Overlay Text Banner: Positioned on Top of Everything (z-30) */}
        <div className="z-30 text-center px-4 pointer-events-none select-none filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <span className="text-[6vw] sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white block sm:inline leading-tight">
            Our Services
          </span>
        </div>

      </div>

      {/* Services List Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="p-8 sm:p-12 rounded-2xl border border-white/10 bg-[#021825]/40 hover:border-amber-500/20 transition-all duration-300 flex flex-col gap-8"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-start">
                <div className="max-w-3xl">
                  {/* Standards Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.standards.map((std, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-500 ring-1 ring-inset ring-amber-500/20"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    {service.title}
                  </h2>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center self-start px-5 py-2.5 text-sm font-bold rounded-md bg-amber-500 text-black hover:bg-amber-400 hover:scale-[1.03] active:scale-95 transition-all"
                >
                  Book Service
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-white/5">
                <div className="lg:col-span-7">
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#032031]/50 p-6 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">Key Capabilities:</h4>
                  <ul className="space-y-3">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* General Call to Action banner */}
      <section className="bg-[#021825] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">Need a Custom Security Risk Deployment Strategy?</h2>
          <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
            Our SIA-licensed administrative experts design fully customized post orders matching your specific operational risk level and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg bg-amber-500 text-black hover:bg-amber-400 hover:scale-105 transition"
          >
            Get a Free Consultation Today
          </Link>
        </div>
      </section>
    </div>
  );
}
