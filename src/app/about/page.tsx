export default function About() {
  return (
    <div className="bg-[#032031] text-white min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-[#021825] py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-amber-500">
            About Fortress Asr Security
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Our mission, core standards, and values as a leading professional security protection agency in the United Kingdom.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Mission & Overview */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                  Our Mission
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 mb-6">
                  Elite Security Guided by Trust
                </h2>
                <blockquote className="border-l-4 border-amber-500 pl-6 my-6 italic text-zinc-300 text-lg leading-relaxed bg-[#021825]/50 py-4 pr-4 rounded-r-lg">
                  &ldquo;To provide premium, elite security solutions built on the pillars of proactive deterrence, rigorous accountability, and expert conflict de-escalation. We deploy only fully qualified, SIA-licensed professionals who operate strictly within UK security compliance standards to protect your assets and eliminate corporate risk.&rdquo;
                </blockquote>
              </div>
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block">
                  Company Overview
                </span>
                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                  At <strong className="text-white font-semibold">Fortress Asr Security</strong>, we recognise that modern security requires more than just a physical presence—it demands intelligence, professionalism, and strict regulatory compliance.
                </p>
                <p className="text-zinc-300 leading-relaxed text-base">
                  We specialise in providing highly trained security guards and professional door supervisors to businesses looking for elite defense. Every officer we deploy is fully vetted to <strong className="text-amber-500">BS 7858</strong>, SIA-licensed, and comprehensively qualified. By blending reliable documentation with elite situational communication, we bridge the gap between absolute physical security and corporate liability protection.
                </p>
              </div>
            </div>

            {/* Visual Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  stat: "BS 7858", 
                  label: "Rigorous Officer Vetting", 
                  desc: "Exhaustive background, criminal, and financial history verification standard."
                },
                { 
                  stat: "SIA-Licensed", 
                  label: "Approved & Certified", 
                  desc: "Fully compliant with Security Industry Authority licensing requirements."
                },
                { 
                  stat: "24/7 Support", 
                  label: "Active Dispatch Command", 
                  desc: "Immediate crisis response and supervisor backup around the clock."
                },
                { 
                  stat: "BS 10800", 
                  label: "Standard Compliance", 
                  desc: "Operating within standard security management code of practice."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/10 bg-[#021825]/40 hover:border-amber-500/20 transition-all duration-300 text-center flex flex-col justify-between"
                >
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-500 mb-2">
                      {item.stat}
                    </div>
                    <div className="text-sm font-bold text-white mb-2">
                      {item.label}
                    </div>
                    <div className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values Section */}
          <div className="border border-white/10 rounded-2xl p-8 sm:p-12 bg-[#021825] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[80px]" />
            <h3 className="text-xl sm:text-2xl font-bold text-amber-500 mb-6">Our Foundational Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">1. Strict Liability Protection</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We maintain zero-liability metrics by deploying door supervisors and guards who understand de-escalation tactics and legal boundaries thoroughly.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">2. Rigorous Screening (BS 7858)</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We never bypass standard screening. Each individual goes through continuous checks to ensure security integrity at your physical location.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">3. Active Accountability</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We use modern mobile patrolling logging with digital GPS-stamps, ensuring you get transparent, audit-ready operational records.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
