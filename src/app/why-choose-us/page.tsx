import Link from "next/link";

export default function WhyChooseUs() {
  const pillars = [
    {
      feature: "SIA-Approved & Vetted",
      means: "Every professional on your site is fully qualified, legally licensed, and rigorously vetted to the BS 7858 security screening benchmark.",
      advantage: "Total Trust & Safety",
      details: "Our personnel undergo continuous audits, full DBS criminal checks, and 5-to-10-year employment history verification to eliminate any internal site risk."
    },
    {
      feature: "Conflict De-Escalation",
      means: "Personnel are expertly trained to defuse high-tension scenarios calmly and legally, protecting your workplace while keeping your legal liability at zero.",
      advantage: "Zero Legal & PR Risk",
      details: "By prioritizing verbal de-escalation, modern safety protocols, and proper local authority notification, we protect your organization's reputation and liability."
    },
    {
      feature: "British Standard Compliance",
      means: "All operations strictly follow sector-specific codes of practice (BS 7499, BS 7960, BS 7984, BS 10800), guaranteeing premium operational standards.",
      advantage: "Consistent Audit-Ready Service",
      details: "From static site guarding to door supervision and keyholding, all post orders and patrol check-calls are built directly inside established compliance standards."
    }
  ];

  return (
    <div className="bg-[#032031] text-white min-h-screen">
      {/* Banner Section */}
      <section className="bg-[#021825] py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-3">The Fortress Advantage</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            Why Choose Fortress
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            We build our client relationships on three uncompromising standards to ensure maximum transparency and protection.
          </p>
        </div>
      </section>

      {/* Comparison Pillars Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Main Pillars Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl border border-white/10 bg-[#021825]/40 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-2 mb-4">
                    {pillar.feature}
                  </h3>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-6 font-semibold">
                    {pillar.means}
                  </p>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.details}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Advantage:</span>
                  <span className="text-sm font-bold text-white">{pillar.advantage}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Structural Trust-Matrix Table */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#021825]/50 overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6 text-center lg:text-left">
              Operational Comparison Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-xs font-bold text-amber-500 uppercase tracking-wider w-1/4">Feature Pillar</th>
                    <th className="py-4 px-4 text-xs font-bold text-amber-500 uppercase tracking-wider w-1/3">Our Uncompromising Standard</th>
                    <th className="py-4 px-4 text-xs font-bold text-amber-500 uppercase tracking-wider w-1/3">Typical Industry Alternative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition duration-150">
                    <td className="py-5 px-4 font-bold text-white text-sm sm:text-base">SIA Vetted & Approved</td>
                    <td className="py-5 px-4 text-zinc-200 text-xs sm:text-sm leading-relaxed">
                      <strong className="text-white block font-bold mb-1">BS 7858 Standard Compliance</strong>
                      100% continuous checks, DBS disclosure, financial audits, and deep reference logs.
                    </td>
                    <td className="py-5 px-4 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      Minimal historical screening, reliance on unchecked sub-contractors, and self-reporting.
                    </td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition duration-150">
                    <td className="py-5 px-4 font-bold text-white text-sm sm:text-base">Conflict Resolution</td>
                    <td className="py-5 px-4 text-zinc-200 text-xs sm:text-sm leading-relaxed">
                      <strong className="text-white block font-bold mb-1">Legal Liability Defense</strong>
                      Expert de-escalation, tactical discipline, and zero-liability conflict resolution training.
                    </td>
                    <td className="py-5 px-4 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      Reactive physical response, poor de-escalation verbal training, increasing your risk of litigation.
                    </td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition duration-150">
                    <td className="py-5 px-4 font-bold text-white text-sm sm:text-base">British Standards</td>
                    <td className="py-5 px-4 text-zinc-200 text-xs sm:text-sm leading-relaxed">
                      <strong className="text-white block font-bold mb-1">Absolute Conformity</strong>
                      Operations strictly aligned with BS 7499, BS 7960, BS 7984, and BS 10800 guidelines.
                    </td>
                    <td className="py-5 px-4 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      Vague guideline alignment, un-audited processes, and manual logging with zero timestamps.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Callout */}
      <section className="bg-[#021825] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">Guard Your Workplace with Fortress</h2>
          <p className="text-zinc-300 max-w-xl mx-auto mb-8">
            Experience absolute physical security paired with complete corporate liability protection. Talk to our SIA-licensed administrators.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg bg-amber-500 text-black hover:bg-amber-400 hover:scale-105 transition"
          >
            Request Your Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
