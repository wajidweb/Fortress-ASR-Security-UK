import Link from "next/link";

export default function Services() {
  const servicesList = [
    {
      title: "Manned Guarding & Door Supervision",
      slug: "manned",
      standards: ["BS 7499 (Static Guarding)", "BS 7960 (Door Supervision)", "BS 10800 (Security Management)"],
      desc: "Provide your premises with a commanding, professional visual deterrent. Our fully licensed, SIA-approved security guards and door supervisors are trained in elite situational awareness, crowd management, and customer-facing diplomacy. Our operations conform strictly to British Standards to provide top-tier physical security.",
      points: [
        "Concierge & Front-Desk Guarding",
        "Visitor Verification & Access Logs",
        "SIA-Licensed Door Supervision & Crowd Control",
        "Real-Time Patrol Logging via GPS/NFC"
      ],
      image: "https://images.pexels.com/photos/8285775/pexels-photo-8285775.jpeg"
    },
    {
      title: "Construction Site Security",
      slug: "construction",
      standards: ["BS 7499 (Static Guarding Regulations)"],
      desc: "Protect high-value equipment, materials, and machinery from vandalism and theft. We deploy specialised static guards who strictly adhere to BS 7499 regulations, establishing rigid perimeter control and maintaining accurate visitor logs to keep your project moving safely and on schedule.",
      points: [
        "Continuous Perimeter Foot Patrols",
        "Materials & High-Value Machinery Watches",
        "Exclusion Zone Enforcement",
        "Comprehensive Out-of-Hours Lockup Checks"
      ],
      image: "https://images.pexels.com/photos/37390876/pexels-photo-37390876.jpeg"
    },
    {
      title: "Mobile Patrols",
      slug: "mobile",
      standards: ["BS 7984-3 (Mobile Security Services)"],
      desc: "Cost-effective security for larger perimeters or multiple locations. Conducted by qualified SIA-licensed drivers, our mobile units conduct unpredictable, highly visible security sweeps and check-calls in perfect conformity with British Standards.",
      points: [
        "Randomized Patrol Intervals & Branded Vehicles",
        "External Lock, Window & Entry Gate Audits",
        "Rapid On-Call Crisis Response",
        "GPS-Stamped Proof of Patrol Reports"
      ],
      image: "https://images.pexels.com/photos/32666526/pexels-photo-32666526.jpeg"
    },
    {
      title: "Key Holding & Alarm Response",
      slug: "keyholding",
      standards: ["BS 7984-1 (Keyholding & Response Services)"],
      desc: "Eliminate the risk to your employees by leaving out-of-hours emergencies to SIA-approved experts. Operating in strict compliance with BS 7984-1, our guards securely manage your keys, respond instantly to activations, and conduct thorough site checks.",
      points: [
        "Secure off-site key management with dual custody",
        "Immediate 24/7 dispatch upon alarm trigger",
        "Full interior physical inspection & de-escalation",
        "Emergency services coordination on site"
      ],
      image: "https://images.pexels.com/photos/7642000/pexels-photo-7642000.jpeg"
    },
    {
      title: "Reception & Concierge Security",
      slug: "reception",
      standards: ["BS 10800 (Provision of Security Services Framework)"],
      desc: "The perfect fusion of elite customer service and corporate front-of-house safety. Handled exclusively by fully qualified guards working under the overarching BS 10800 security management framework, we manage access control and greet clients with absolute professionalism.",
      points: [
        "Concierge reception & professional visitor hosting",
        "ID card issues & badge access verification",
        "Building evacuation planning & emergency assistance",
        "Polished uniform matching corporate brand style"
      ],
      image: "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg"
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Full Screen Width Relative Container: 30% of Available Screen Height (#032031 Background) */}
      <div className="relative w-full h-[30vh] min-h-[220px] bg-[#032031] overflow-hidden shadow-sm flex items-center justify-center">
        
        {/* Subtle Grid Pattern Overlay to Enhance Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

        {/* Prominent Overlay Text Banner: Positioned on Top of Everything (z-30) */}
        <div className="z-30 text-center px-4 pointer-events-none select-none filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <span className="text-[6vw] sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white block sm:inline leading-tight">
            Our Services
          </span>
        </div>

      </div>

      {/* Services Cards Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-16">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-[#032031]/5 p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#032031]/10 shadow-sm hover:shadow-md hover:border-[#032031]/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Content Column */}
              <div className={`lg:col-span-7 flex flex-col gap-6 order-2 ${index % 2 === 1 ? 'lg:order-last' : 'lg:order-first'}`}>
                <div>
                  {/* Standards Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.standards.map((std, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-bold text-[#032031] ring-1 ring-inset ring-[#032031]/15 shadow-sm"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#032031] tracking-tight">
                    {service.title}
                  </h2>
                </div>

                <p className="text-black/85 text-base sm:text-lg leading-relaxed">
                  {service.desc}
                </p>

                {/* Capabilities Box (White background for premium contrast inside card) */}
                <div className="bg-white p-6 rounded-2xl border border-[#032031]/10 shadow-sm">
                  <h4 className="text-xs font-bold text-[#032031] uppercase tracking-widest mb-4">Key Capabilities:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-sm text-black/80">
                        <svg className="w-5 h-5 text-[#032031] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-lg bg-[#032031] text-white border border-[#032031] hover:bg-black hover:border-black hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-md"
                  >
                    Book {service.title.split(" & ")[0]}
                  </Link>
                </div>
              </div>

              {/* Image Column */}
              <div className={`lg:col-span-5 order-1 ${index % 2 === 1 ? 'lg:order-first' : 'lg:order-last'}`}>
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-2xl overflow-hidden border border-[#032031]/10 shadow-md group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* General Call to Action banner */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-[#032031]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-[#032031] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            
            {/* Subtle decorative grid overlay inside card */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (Col 1 to 6) */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight uppercase tracking-tight">
                  Need a Custom Security <br />
                  Risk Deployment Strategy?
                </h2>
              </div>

              {/* Right Column (Col 7 to 12) */}
              <div className="lg:col-span-6 space-y-6">
                <p className="text-sm sm:text-base text-white/95 leading-relaxed max-w-xl">
                  Our SIA-licensed administrative experts design fully customized post orders matching your specific operational risk level, venue profile, and budget. Give us a call or send us a message to discuss your deployment today.
                </p>

                {/* Action Pill Buttons */}
                <div className="flex flex-wrap gap-4 items-center">
                  
                  {/* Get in touch button */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full bg-white text-[#032031] hover:bg-black hover:text-white hover:scale-[1.03] active:scale-95 transition-all duration-200"
                  >
                    Get in touch
                  </Link>

                  {/* Direct Call Button */}
                  <a
                    href="tel:0800716586"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full border border-white text-white hover:bg-white/10 active:scale-95 transition-all duration-200 gap-2"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0800716586
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
