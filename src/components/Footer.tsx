import Link from "next/link";

export default function Footer() {
  const currentYear = 2026; // Setting to 2026 per project specifications

  return (
    <footer className="border-t border-white/10 bg-[#032031]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          
          {/* Company Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative transition-all duration-300">
                <img
                  src="/logo1.png"
                  alt="Fortress Asr Security Logo"
                  className="h-20 w-auto rounded-lg border border-white/10 p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">
                  Fortress Asr
                </span>
                <span className="text-xs font-semibold text-white tracking-widest uppercase leading-none">
                  Security
                </span>
              </div>
            </Link>
            <p className="text-sm text-white max-w-md leading-relaxed">
              Uncompromising protection and absolute liability control. Supplying fully qualified, SIA licensed guards and door supervisors strictly conforming to British Standards.
            </p>
            <div className="text-xs text-white font-medium">
              SIA Approved Contractor • BS 7858 Vetted Staff
            </div>
          </div>

          {/* Navigation Links and Contact details */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            
            {/* Quick Links Column */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Quick Navigation
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-semibold text-white hover:underline transition"
                  >
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-white hover:underline transition"
                  >
                    Our Core Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/why-choose-us"
                    className="text-sm font-semibold text-white hover:underline transition"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm font-semibold text-white hover:underline transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-white hover:underline transition"
                  >
                    Contact Us / Inquiry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Contact Details Column */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Headquarters
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-white">
                    Fortress House, 12 Broadgate, London, EC2M 2QS, United Kingdom
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+448005552771" className="text-sm text-white hover:underline transition font-semibold">
                    +44 800 555 ASR1
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:enquiries@fortressasrsecurity.com" className="text-sm text-white hover:underline transition font-semibold break-all">
                    enquiries@fortressasrsecurity.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Closing details and legal */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-sm text-white">
          <p>&copy; {currentYear} Fortress Asr Security. All rights reserved.</p>
          <p className="text-white/70 sm:text-right">
            Developed by{" "}
            <Link
              href="https://wajidalikhan-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition"
            >
              Wajid Ali Khan
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
