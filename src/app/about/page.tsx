export default function About() {
  return (
    <div className="bg-white w-full overflow-x-hidden flex flex-col">
      
      {/* Full Screen Width Relative Container: 30% of Available Screen Height (#032031 Background) */}
      <div className="relative w-full h-[30vh] min-h-[220px] bg-[#032031] overflow-hidden shadow-2xl border-b border-white/10 flex items-center justify-center">
        
        {/* Subtle Grid Pattern Overlay to Enhance Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

        {/* Prominent Overlay Text Banner: Positioned on Top of Everything (z-30) */}
        <div className="z-30 text-center px-4 pointer-events-none select-none filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <span className="text-[7.5vw] sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white block sm:inline leading-tight">
            About Fortress ASR
          </span>
        </div>

      </div>

      {/* SECTION 1: Our Mission (White Background, Fully Responsive) */}
      <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="space-y-16 sm:space-y-20">
          
          {/* Header & Typography Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500 block mb-2">
                [ Protocol & Mandate ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#032031]">
                Our Mission
              </h2>
            </div>
            
            <div className="lg:col-span-8 border-l-4 border-[#032031] pl-6 sm:pl-8 py-2">
              <p className="text-lg sm:text-2xl font-bold text-[#032031] leading-relaxed">
                To provide premium, elite security solutions built on the pillars of proactive deterrence, rigorous accountability, and expert conflict de-escalation. We deploy only fully qualified, SIA-licensed professionals who operate strictly within UK security compliance standards to protect your assets and eliminate corporate risk.
              </p>
            </div>
          </div>

          {/* Three Column Pillars (Fully Responsive Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="border border-[#032031] p-8 space-y-4 hover:bg-zinc-50 transition duration-150">
              <div className="text-xs font-black uppercase text-[#032031] tracking-widest">
                [ Pillar 01 ]
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#032031]">
                Proactive Deterrence
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Mitigating vulnerabilities before exploitation. We deploy high-visibility sentinel placements and continuous perimeter checks to discourage potential intruders and secure access coordinates.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="border border-[#032031] p-8 space-y-4 hover:bg-zinc-50 transition duration-150">
              <div className="text-xs font-black uppercase text-[#032031] tracking-widest">
                [ Pillar 02 ]
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#032031]">
                Rigorous Accountability
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Absolute tracking and geofenced reporting. Deployed guards utilize active digital logbooks and live GPS guard sweeps, providing fully transparent, audit-ready operational records.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="border border-[#032031] p-8 space-y-4 hover:bg-zinc-50 transition duration-150">
              <div className="text-xs font-black uppercase text-[#032031] tracking-widest">
                [ Pillar 03 ]
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#032031]">
                Conflict De-Escalation
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Minimizing liability through expert communications. All guards undergo rigorous de-escalation training to neutralize threats peacefully, ensuring safety and compliance.
              </p>
            </div>

          </div>

          {/* Standards Compliance footer badge */}
          <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-zinc-400 uppercase tracking-widest">
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
