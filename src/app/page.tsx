"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[calc(100vh-80px)] min-h-[600px] overflow-hidden bg-[#032031] flex items-center">
        
        {/* Full-Screen Background Image (Covers full screen width) */}
        <img
          src="/herobg.jpg"
          alt="Fortress ASR Security Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Background Color Opacity Overlay (Solid brand color on mobile, gradient fade on large screens) */}
        <div 
          className="absolute inset-0 bg-[#032031]/92 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#032031] lg:via-[#032031]/80 lg:to-transparent z-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* Soft circular glowing ambient orb behind the card (Organic, not square!) */}
        <div 
          className="absolute left-[5%] top-[20%] w-[300px] h-[300px] rounded-full bg-amber-500/10 blur-[90px] z-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* Centered bounding zone for content layout */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          {/* Transparent Minimal Content Container */}
          <div className="max-w-2xl w-full">
            
            <div className="space-y-5 text-left">
              
              {/* Accent Badge */}
              <span className="text-[10px] font-bold text-amber-500 tracking-[0.25em] uppercase block">
                SIA-Licensed Security
              </span>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight uppercase">
                Uncompromising Protection.<br />
                Absolute Liability Control.
              </h1>

              {/* Sub-headline */}
              <h2 className="text-sm sm:text-base font-bold text-zinc-100 leading-relaxed max-w-xl">
                Fully qualified, SIA-licensed security guards and door supervisors conforming strictly to British Standards.
              </h2>

              {/* Description (Body Copy) */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
                We focus exclusively on proactive deterrence, conflict de-escalation. Our guards are trained to de-escalate situations and involve local authorities when necessary, keeping your workplace safe while keeping your business&apos;s legal liability at zero.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-wider rounded-lg bg-amber-500 text-black hover:bg-amber-400 hover:scale-[1.03] active:scale-95 transition-all duration-200"
                >
                  Request a Security Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-wider rounded-lg border border-white/20 hover:border-white text-white hover:bg-white/5 transition-all duration-200"
                >
                  Explore Our Services
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Company Overview Section */}
      <section className="bg-white text-zinc-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 relative overflow-hidden">
        
        {/* Subtle Decorative Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Content Left (Col 1 to 6) */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Premium badge */}
              <span className="text-[10px] font-bold text-[#032031] tracking-[0.25em] uppercase block">
                Company Overview
              </span>
              
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 leading-tight uppercase tracking-tight">
                Elite Security Guarding <br />
                <span className="text-[#032031]">
                  Built on British Standards
                </span>
              </h2>
              
              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base font-bold text-zinc-800 leading-relaxed max-w-xl">
                We believe premium protection requires far more than physical presence. Real security demands situational intelligence, professional diplomacy, and strict regulatory compliance.
              </p>
              
              {/* Sub-body paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl">
                <p>
                  Fortress ASR Security provides elite, SIA licensed guards and door supervisors across the United Kingdom. Every officer undergoes extensive BS 7858 vetting, which includes five year history checks and full background screening.
                </p>
                <p>
                  By combining professional communication with active GPS tracked patrol logging, we secure your premises while ensuring absolute liability control.
                </p>
              </div>

              {/* Highlights/Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-200">
                    <svg className="w-4 h-4 text-[#032031]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">BS 7858 Vetted Officers</h4>
                    <p className="text-xs text-zinc-500">Comprehensive background and security checks.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-200">
                    <svg className="w-4 h-4 text-[#032031]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">SIA Licensed Protection</h4>
                    <p className="text-xs text-zinc-500">Fully qualified and insured security guards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-200">
                    <svg className="w-4 h-4 text-[#032031]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">Active Conflict Resolution</h4>
                    <p className="text-xs text-zinc-500">Expert de-escalation for low liability operations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-200">
                    <svg className="w-4 h-4 text-[#032031]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm sm:text-base">GPS Patrol Verification</h4>
                    <p className="text-xs text-zinc-500">Real time audit trails and absolute accountability.</p>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-950 hover:text-[#032031] group transition-colors duration-200"
                >
                  Learn More About Our Standards
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>

            {/* Image Right (Col 7 to 12) */}
            <div className="lg:col-span-6 relative flex justify-center">
              {/* Outer decorative box accent */}
              <div className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] rounded-2xl bg-[#032031]/5 -rotate-2 z-0 pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 aspect-[4/3] sm:aspect-video lg:aspect-square">
                <img
                  src="/security.jpg"
                  alt="Fortress ASR Professional Security Officer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Embedded floating trust card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-zinc-100 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#032031] text-white flex items-center justify-center font-black text-xl border border-zinc-200">
                    SIA
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#032031]">Approved Quality</div>
                    <div className="text-xs text-zinc-600 font-semibold mt-0.5">Licensed & Insured UK Protection</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-[#032031] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Soft decorative background glow */}
        <div className="absolute right-[5%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-white/3 blur-[120px] z-0 pointer-events-none" aria-hidden="true" />
        <div className="absolute left-[5%] top-[10%] w-[350px] h-[350px] rounded-full bg-blue-500/3 blur-[120px] z-0 pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-white/60 tracking-[0.25em] uppercase block">
                Operational Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-none uppercase tracking-tight">
                Our Services
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
                Conforming strictly to British Standards to provide physical security and complete corporate liability protection.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-wider rounded-lg bg-white text-[#032031] hover:bg-zinc-100 hover:scale-[1.03] active:scale-95 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Service 1: Manned Guarding */}
            <div className="group p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#021825]/40 hover:border-white/30 hover:bg-[#021825]/80 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black text-white/80 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Manned Guarding
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    SIA licensed static site guarding and expert crowd management conforming to BS 7499 and BS 7960.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white group/link uppercase tracking-wider transition-colors"
                >
                  Explore Service
                  <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2: Construction Sites */}
            <div className="group p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#021825]/40 hover:border-white/30 hover:bg-[#021825]/80 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black text-white/80 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Construction Sites
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Strict perimeter control and continuous checks to protect high value equipment and materials.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white group/link uppercase tracking-wider transition-colors"
                >
                  Explore Service
                  <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3: Mobile Patrols */}
            <div className="group p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#021825]/40 hover:border-white/30 hover:bg-[#021825]/80 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black text-white/80 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Mobile Patrols
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Highly visible sweeps in branded vehicles with active GPS tracking and digital patrol logging.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white group/link uppercase tracking-wider transition-colors"
                >
                  Explore Service
                  <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 4: Key Holding */}
            <div className="group p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#021825]/40 hover:border-white/30 hover:bg-[#021825]/80 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black text-white/80 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-3.414-1.414A2 2 0 1119 4V7h3M11 11h3m-3 4h2m-6 4h12a2 2 0 002-2v-5H3v5a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Key Holding
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Secure keys and rapid response dispatch under strict compliance with BS 7984 standards.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white group/link uppercase tracking-wider transition-colors"
                >
                  Explore Service
                  <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 5: Concierge Security */}
            <div className="group p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#021825]/40 hover:border-white/30 hover:bg-[#021825]/80 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black text-white/80 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Concierge Security
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    The perfect fusion of elite customer service and corporate front of house access control.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white group/link uppercase tracking-wider transition-colors"
                >
                  Explore Service
                  <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Custom Consultation Card */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-dashed border-white/10 bg-white/5 hover:border-white/30 transition-all duration-300 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Custom Deployment
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Need a bespoke security plan tailored to your physical location? Request a comprehensive risk assessment today.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white/80 hover:text-white group transition-colors"
                >
                  Request Consultation
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SVG Clip Path Definition for Why Choose Us section */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="curved-clip-shape" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.12 Q 0.5,0.24 1,0.12 L 1,0.88 Q 0.5,0.99 0,0.88 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Why Choose Us Section */}
      <section className="bg-white text-zinc-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 leading-none uppercase tracking-tighter">
                Why <br className="hidden lg:block" />
                Choose Us
              </h2>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-xl">
                We provide the highest level of security with complete operational guarantees. As a leading compliant private security agency, we never compromise on quality or integrity.
              </p>
            </div>
          </div>

          {/* Decorative Dashed Arc Background */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
              <path
                d="M 150,220 Q 600,10 1050,220"
                stroke="#e4e4e7"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* Decorative Bottom Solid Frame Line Background */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
              <path
                d="M 150,450 L 150,520 L 530,520 A 70,70 0 0,0 670,520 L 1050,520 L 1050,450"
                stroke="#e4e4e7"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Features Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left Features Column */}
            <div className="lg:col-span-4 space-y-12 lg:space-y-24 text-left">
              
              {/* Feature 1 */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 uppercase tracking-wide">
                  SIA Licensed Officers
                </h3>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mt-1">
                  Elite Frontline Standards
                </span>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-md">
                  Our team consists of fully qualified door supervisors and guards trained under strict Security Industry Authority guidelines.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 uppercase tracking-wide">
                  BS 7858 Vetting
                </h3>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mt-1">
                  Exhaustive background checks
                </span>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-md">
                  We conduct thorough pre employment screening, background checks, and identity verification on all personnel.
                </p>
              </div>

            </div>

            {/* Center Image Container */}
            <div className="lg:col-span-4 flex justify-center relative">
              <div 
                className="w-[280px] sm:w-[320px] h-[380px] sm:h-[440px] bg-gradient-to-b from-amber-200 via-amber-100 to-zinc-100 p-6 relative flex items-center justify-center shadow-lg hover:scale-[1.01] transition-transform duration-300"
                style={{ clipPath: 'url(#curved-clip-shape)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="Fortress ASR Skyscraper Protection"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 rounded-2xl"
                />
              </div>
            </div>

            {/* Right Features Column */}
            <div className="lg:col-span-4 space-y-12 lg:space-y-24 text-left lg:pl-8">
              
              {/* Feature 3 */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 uppercase tracking-wide">
                  Zero Liability Policy
                </h3>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mt-1">
                  Conflict Deescalation
                </span>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-md">
                  Our professionals focus on active deterrence and verbal resolution to eliminate client liability risks.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 uppercase tracking-wide">
                  GPS Patrol Tracking
                </h3>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mt-1">
                  Real Time Command Reports
                </span>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-md">
                  Every patrol is digitally logged with live GPS stamps, ensuring transparent, audit ready records.
                </p>
              </div>

            </div>

          </div>

          {/* Explore Button */}
          <div className="relative z-10 flex justify-center pt-12 lg:pt-0 lg:-mt-10">
            <Link
              href="/why-choose-us"
              className="w-24 h-24 rounded-full border border-zinc-300 bg-white hover:border-zinc-500 flex flex-col items-center justify-center text-xs font-bold text-zinc-800 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm group"
            >
              <span>Explore</span>
              <svg className="w-4 h-4 mt-1 text-zinc-600 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-[#032031] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
        
        {/* Decorative Dotted/Particle Wave Graphic at the Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-44 opacity-25 pointer-events-none z-0" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none">
            {/* Wave Path 1 (Dotted) */}
            <path 
              d="M0,160 Q360,60 720,130 T1440,100" 
              stroke="#8b5cf6" 
              strokeWidth="2.5" 
              strokeDasharray="4 8" 
              strokeLinecap="round"
            />
            {/* Wave Path 2 (Dotted) */}
            <path 
              d="M0,120 Q360,180 720,110 T1440,150" 
              stroke="#c084fc" 
              strokeWidth="2" 
              strokeDasharray="3 6" 
              strokeLinecap="round"
            />
            {/* Wave Path 3 (Dotted) */}
            <path 
              d="M0,90 Q360,40 720,150 T1440,80" 
              stroke="#7c3aed" 
              strokeWidth="1.5" 
              strokeDasharray="2 4" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Col 1 to 6) */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                Need more support? <br />
                We&apos;re here for you
              </h2>
            </div>

            {/* Right Column (Col 7 to 12) */}
            <div className="lg:col-span-6 space-y-8">
              <p className="text-sm sm:text-base text-zinc-100 leading-relaxed max-w-xl">
                If you have a question, need help, or want to learn more about our solutions, we are here to help you. Please give us a call or send us a message, and our team will get back to you.
              </p>

              {/* Action Pill Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                
                {/* Get in touch button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full bg-[#6d5dfc] text-white hover:bg-[#5b4dfc] hover:scale-[1.03] active:scale-95 transition-all duration-200"
                >
                  Get in touch
                </Link>

                {/* Direct Call Button */}
                <a
                  href="tel:0800716586"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-full border border-white text-white hover:bg-white/5 active:scale-95 transition-all duration-200 gap-2"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0800716586
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#032031] text-white border border-white/20 shadow-2xl hover:bg-white hover:text-black hover:border-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}
    </>
);
}
