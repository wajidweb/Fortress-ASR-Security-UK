import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#032031] text-white min-h-screen">
      
      {/* Full Screen Width Relative Container: 30% of Available Screen Height (#032031 Background) */}
      <div className="relative w-full h-[30vh] min-h-[220px] bg-[#032031] overflow-hidden shadow-2xl border-b border-white/10 flex items-center justify-center">
        
        {/* Subtle Grid Pattern Overlay to Enhance Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

        {/* Prominent Overlay Text Banner: Positioned on Top of Everything (z-30) */}
        <div className="z-30 text-center px-4 pointer-events-none select-none filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <span className="text-[6vw] sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white block sm:inline leading-tight">
            Why choose us
          </span>
        </div>

      </div>

      {/* Modern Asymmetric Section modeled exactly after @public/image.png (White Background) */}
      <section className="bg-white text-black py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Main Headline */}
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none uppercase">
              Why <span className="text-[#032031]">Fortress</span> is The Right Choice for You
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 mt-4 max-w-xl">
              To ensure maximum transparency, we build our client relationships on three uncompromising standards.
            </p>
          </div>

          {/* Asymmetric Grid: 2 Columns on Desktop (2/3 Left, 1/3 Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column Area: Spans 8 of 12 columns */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Top Sub-Grid: 2 Side-by-Side Cards on tablet and up */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Card 1: SIA-Approved & Vetted */}
                <div className="bg-[#F0F4F8] p-8 sm:p-10 rounded-3xl border border-zinc-200 flex flex-col justify-between items-start min-h-[300px]">
                  <div>
                    {/* SVG Icon Outline */}
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-6 bg-white shadow-sm">
                      <svg className="w-6 h-6 text-[#032031]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#032031] mb-4">
                      SIA-Approved & Vetted
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Every professional on your site is fully qualified, legally licensed, and rigorously vetted to the BS 7858 security screening benchmark.
                    </p>
                  </div>
                </div>

                {/* Card 2: British Standard Compliance */}
                <div className="bg-[#F0F4F8] p-8 sm:p-10 rounded-3xl border border-zinc-200 flex flex-col justify-between items-start min-h-[300px]">
                  <div>
                    {/* SVG Icon Outline */}
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-6 bg-white shadow-sm">
                      <svg className="w-6 h-6 text-[#032031]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#032031] mb-4">
                      British Compliance
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      All operations strictly follow sector-specific codes of practice (BS 7499, BS 7960, BS 7984, BS 10800), guaranteeing premium operational standards.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Card: Transparency Wide Spanning Card */}
              <div className="bg-[#F0F4F8] p-8 sm:p-10 rounded-3xl border border-zinc-200 flex flex-col sm:flex-row gap-8 items-start justify-between min-h-[220px]">
                <div className="space-y-4 max-w-2xl">
                  {/* SVG Icon Outline */}
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm">
                    <svg className="w-6 h-6 text-[#032031]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#032031]">
                    Maximum Transparency
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    By blending reliable documentation with elite situational communication, we bridge the gap between absolute physical security and corporate liability protection. Every patrol vector is geofenced with active check-calls.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column Area (Solid Dark Card): Spans 4 of 12 columns */}
            <div className="lg:col-span-4 bg-[#032031] text-white p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between items-start min-h-[500px]">
              
              <div className="space-y-6">
                {/* SVG Icon Outline */}
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                
                <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white leading-none">
                  Conflict De-Escalation
                </h3>
                
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-semibold">
                  Personnel are expertly trained to defuse high-tension scenarios calmly and legally, protecting your workplace while keeping your legal liability at zero.
                </p>
                
                <p className="text-xs text-white/50 leading-relaxed">
                  Our SIA-licensed operators prioritize verbal resolution frameworks over physical friction, maintaining extreme de-escalation composure across public and private venues.
                </p>
              </div>

              {/* Call to Action Button exactly modeled after "Start Free Trial ->" */}
              <div className="w-full pt-8">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-4 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white text-[#032031] border border-white hover:bg-transparent hover:text-white transition duration-200"
                >
                  Request Secure Quote &rarr;
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
