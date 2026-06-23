import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white w-full overflow-x-hidden flex flex-col">
      
      {/* Full Screen Width Relative Container: 30% of Available Screen Height (#032031 Background) */}
      <div className="relative w-full h-[30vh] min-h-[220px] bg-[#032031] overflow-hidden shadow-2xl border-b border-white/10 flex items-center justify-center">
        
        {/* Subtle Grid Pattern Overlay to Enhance Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

        {/* Prominent Overlay Text Banner: Positioned on Top of Everything (z-30) */}
        <div className="z-30 text-center px-4 pointer-events-none select-none filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <span className="text-[6vw] sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white block sm:inline leading-tight">
            About Fortress ASR
          </span>
        </div>

      </div>

      {/* SECTION 1: Our Mission (White Background, Fully Responsive) */}
      <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="space-y-16 sm:space-y-20">
          
          {/* Header & Typography Section */}
          <div className="border-l-4 border-[#032031] pl-6 sm:pl-8 py-2 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#032031] mb-4">
              Our Mission
            </h2>
            <p className="text-lg sm:text-2xl font-bold text-[#032031] leading-relaxed">
              To provide premium, elite security solutions built on the pillars of proactive deterrence, rigorous accountability, and expert conflict de-escalation. We deploy only fully qualified, SIA-licensed professionals who operate strictly within UK security compliance standards to protect your assets and eliminate corporate risk.
            </p>
          </div>

          {/* Redesigned Section Modeled after @public/image.png */}
          <div className="space-y-12 sm:space-y-16 pt-16 border-t border-[#032031]/10">
            
            {/* Section Headline */}
            <div className="max-w-4xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#032031] leading-none">
                Why <span className="text-black">Fortress</span> is The Right Choice for You
              </h2>
            </div>

            {/* Asymmetric Grid: 2 Columns on Desktop (2/3 Left, 1/3 Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column Area: Spans 8 of 12 columns */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                
                {/* Top Sub-Grid: 2 Side-by-Side Cards on tablet and up */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Card 1: Proactive Deterrence */}
                  <div className="bg-[#032031]/5 p-10 sm:p-12 rounded-[2rem] border border-[#032031]/10 flex flex-col justify-between items-start min-h-[320px]">
                    <div>
                      {/* SVG Icon Outline */}
                      <div className="w-14 h-14 rounded-full border border-[#032031]/30 flex items-center justify-center mb-6 bg-transparent">
                        <svg className="w-6 h-6 text-[#032031]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043a3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#032031] tracking-tight mb-4">
                        Proactive Deterrence
                      </h3>
                      <p className="text-sm sm:text-base text-[#032031]/80 leading-relaxed">
                        Mitigating vulnerabilities before exploitation. We deploy high-visibility sentinel placements and continuous perimeter checks to discourage potential intruders and secure access coordinates.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Rigorous Accountability */}
                  <div className="bg-[#032031]/5 p-10 sm:p-12 rounded-[2rem] border border-[#032031]/10 flex flex-col justify-between items-start min-h-[320px]">
                    <div>
                      {/* SVG Icon Outline */}
                      <div className="w-14 h-14 rounded-full border border-[#032031]/30 flex items-center justify-center mb-6 bg-transparent">
                        <svg className="w-6 h-6 text-[#032031]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#032031] tracking-tight mb-4">
                        Rigorous Accountability
                      </h3>
                      <p className="text-sm sm:text-base text-[#032031]/80 leading-relaxed">
                        Absolute tracking and geofenced reporting. Deployed guards utilize active digital logbooks and live GPS guard sweeps, providing fully transparent, audit-ready operational records.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom Card: 100+ Secured Operations (Spans across bottom of left area) */}
                <div className="bg-[#032031]/5 p-10 sm:p-12 rounded-[2rem] border border-[#032031]/10 flex flex-col justify-between items-start min-h-[260px]">
                  <div>
                    {/* SVG Icon Outline */}
                    <div className="w-14 h-14 rounded-full border border-[#032031]/30 flex items-center justify-center mb-6 bg-transparent">
                      <svg className="w-6 h-6 text-[#032031]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#032031] tracking-tight mb-4">
                      100+ Corporate Assets Secured
                    </h3>
                    <p className="text-sm sm:text-base text-[#032031]/80 leading-relaxed">
                      Fortress manages over 100 high-security parameters, corporate campuses, and commercial venues across the UK. Whether you require static site guarding, dynamic mobile patrols, or professional event supervision, our solutions are meticulously tailored to secure your operations and eliminate corporate risk.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column Area (Solid Dark Card): Spans 4 of 12 columns */}
              <div className="lg:col-span-4 bg-[#032031] text-white p-10 sm:p-12 rounded-[2rem] border border-[#032031]/20 flex flex-col justify-between items-start min-h-[520px] shadow-xl">
                
                <div className="space-y-6 w-full">
                  {/* SVG Icon Outline */}
                  <div className="w-14 h-14 rounded-full border border-white/25 flex items-center justify-center bg-transparent">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight pt-2">
                    Conflict De-Escalation
                  </h3>
                  
                  <p className="text-base sm:text-lg text-white/95 leading-relaxed font-medium">
                    Personnel are expertly trained to defuse high-tension scenarios calmly and legally, protecting your workplace while keeping your legal liability at zero.
                  </p>
                  
                  <p className="text-sm text-white/70 leading-relaxed">
                    Our SIA-licensed operators prioritize verbal resolution frameworks over physical friction, maintaining extreme de-escalation composure across public and private venues.
                  </p>
                </div>

                {/* Call to Action Button exactly modeled after "Start Free Trial ->" */}
                <div className="w-full pt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-white text-[#032031] hover:bg-black hover:text-white hover:border-black border border-white transition-all duration-200 active:scale-95 shadow-md"
                  >
                    Request Secure Quote
                    <svg className="w-4 h-4 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

              </div>

            </div>

          </div>

          {/* Standards Compliance footer badge */}
          <div className="border-t border-[#032031]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-[#032031]/60 uppercase tracking-widest">
            <div>SIA Licensed &bull; BS 7858 Vetted &bull; BS 7499 / BS 7960 Compliant</div>
            <div>Fortress ASR Security Protocols</div>
          </div>

        </div>
      </section>

      {/* NEW SECTION: Company Overview (Brand Solid Dark Background #032031, Asymmetric Split Design) */}
      <section className="bg-[#032031] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 w-full">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
          
          {/* Asymmetric Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">
            
            {/* Left Side: Scorecard & Core Metrics (5 columns) */}
            <div className="lg:col-span-5 border border-white/20 p-8 sm:p-10 flex flex-col justify-between bg-white/5 space-y-10">
              
              <div className="space-y-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white/50 block">
                  [ System Attributes ]
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-none">
                  Core Framework
                </h3>
              </div>

              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <h4 className="text-sm font-black uppercase tracking-tight text-white">01 / INTELLIGENCE</h4>
                  <p className="text-xs text-white/60 mt-1">Situational preemptive awareness & incident de-escalation models.</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <h4 className="text-sm font-black uppercase tracking-tight text-white">02 / PROFESSIONALISM</h4>
                  <p className="text-xs text-white/60 mt-1">BS 7858 continuous background vetted, fully uniformed guard units.</p>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-white">03 / COMPLIANCE</h4>
                  <p className="text-xs text-white/60 mt-1">SIA licensing conformity and strict British Standard adherence.</p>
                </div>
              </div>

              <div className="pt-4 text-[10px] text-white/40 uppercase tracking-widest">
                Fortress Security Profile
              </div>

            </div>

            {/* Right Side: Editorial Dossier Paragraphs (7 columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8 sm:space-y-12">
              
              <div className="space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-white/50 block">
                  [ Dossier: Company Overview ]
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                  Elite Liability Control
                </h2>
              </div>

              {/* Main Content Texts */}
              <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                <p>
                  At <strong className="text-white font-black">Fortress Asr Security</strong>, we recognise that modern security requires more than just a physical presence—it demands intelligence, professionalism, and strict regulatory compliance.
                </p>
                <p>
                  We specialise in providing highly trained security guards and professional door supervisors to businesses looking for elite defense. Every officer we deploy is fully vetted to <span className="text-white font-black underline decoration-white/30 decoration-2">BS 7858</span>, SIA-licensed, and comprehensively qualified.
                </p>
                <p>
                  By blending reliable documentation with elite situational communication, we bridge the gap between absolute physical security and corporate liability protection.
                </p>
              </div>

              {/* Grid of Compliance Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="border border-white/20 p-4 text-center bg-white/5">
                  <div className="text-[10px] font-black uppercase text-white/50">VETTING</div>
                  <div className="text-xs sm:text-sm font-black text-white mt-1">BS 7858</div>
                </div>
                <div className="border border-white/20 p-4 text-center bg-white/5">
                  <div className="text-[10px] font-black uppercase text-white/50">LICENSING</div>
                  <div className="text-xs sm:text-sm font-black text-white mt-1">SIA APPV.</div>
                </div>
                <div className="border border-white/20 p-4 text-center bg-white/5">
                  <div className="text-[10px] font-black uppercase text-white/50">PROTECTION</div>
                  <div className="text-xs sm:text-sm font-black text-white mt-1">ZERO RISK</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
