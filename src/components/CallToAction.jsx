import React from 'react';

export default function CallToAction() {
  return (
    <section id="register" className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 py-20 text-white">
      <div className="absolute -inset-40 -z-0 opacity-20 blur-3xl [background:radial-gradient(closest-side,#ffffff40,transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur">
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold sm:text-3xl">Ready to enter the arena?</h3>
              <p className="mt-2 text-white/80">
                Submit your application in minutes. We review on a rolling basis and prioritize diverse, cross-functional teams.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" /> Live feedback from mentors
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" /> Direct hiring manager access
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" /> Portfolio-ready challenges
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" /> Cash prizes and sponsored perks
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 text-gray-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thanks! Your application was received.');
                }}
                className="space-y-3"
              >
                <div>
                  <label className="mb-1 block text-sm font-medium">Full name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Johnson"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Role</label>
                  <select className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring">
                    <option>Software Engineer</option>
                    <option>Product Manager</option>
                    <option>Designer</option>
                    <option>Data</option>
                    <option>Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-900"
                >
                  Submit Application
                </button>
                <p className="text-center text-xs text-gray-500">No spam. We respect your inbox.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
