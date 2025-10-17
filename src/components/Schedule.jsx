import React from 'react';

const phases = [
  {
    name: 'Qualifiers',
    date: 'May 12–16',
    detail: 'Timed skills challenges across coding, product thinking, and UX.'
  },
  {
    name: 'Pit Stop Mentorship',
    date: 'May 20–22',
    detail: 'Work with mentors to refine submissions and receive targeted feedback.'
  },
  {
    name: 'Semi-Finals',
    date: 'May 24',
    detail: 'Team-based sprints on real company briefs with live scoring.'
  },
  {
    name: 'Championship Day',
    date: 'May 27',
    detail: 'Final showcase to hiring managers. Offers and prizes announced live.'
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Tournament Schedule</h2>
          <p className="mt-3 text-gray-600">Four fast stages. One finish line. Show up ready to ship.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-medium text-blue-600">{p.date}</div>
              <div className="mt-1 text-lg font-semibold">{p.name}</div>
              <p className="mt-2 text-sm text-gray-600">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
