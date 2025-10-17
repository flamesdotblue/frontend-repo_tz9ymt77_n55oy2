import React from 'react';
import { Trophy, Users, Bolt, Target } from 'lucide-react';

const items = [
  {
    icon: Trophy,
    title: 'Performance-Based Offers',
    desc: 'Earn interviews and offers by solving real business problems in timed stages.',
  },
  {
    icon: Users,
    title: 'Top Hiring Partners',
    desc: 'Meet engineering, product, and design leaders from fast-growing companies.',
  },
  {
    icon: Bolt,
    title: 'High-Energy Format',
    desc: 'Short sprints, head-to-head challenges, and live feedback from mentors.',
  },
  {
    icon: Target,
    title: 'Career Impact',
    desc: 'Portfolio-worthy outcomes and practical skills you can ship immediately.',
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why This Tournament</h2>
          <p className="mt-3 text-gray-600">
            Built like a race team pit stop: fast, focused, and outcome-driven. Showcase your craft and get scouted.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-3 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
