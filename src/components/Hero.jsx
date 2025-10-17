import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur">
          Hiring Tournament • 2025
        </span>
        <h1 className="font-['Mona_Sans',Inter,system-ui] text-4xl font-extrabold leading-tight sm:text-6xl">
          Shift Into High Gear: Talent Acceleration Tournament
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 sm:text-lg">
          A high-energy recruiting showdown where top candidates race through real-world challenges
          to land offers with leading teams in product, engineering, and design.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#register"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
          >
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View Schedule
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
          {[
            { label: 'Applicants', value: '2,500+' },
            { label: 'Hiring Partners', value: '40+' },
            { label: 'Prizes & Offers', value: '$250k+' },
            { label: 'Hires Last Year', value: '120' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
