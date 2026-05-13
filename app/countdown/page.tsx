"use client"

import {
  Timer,
  CalendarDays,
  Clock3,
} from "lucide-react"

export default function CountdownPage() {

  const countdowns = [

    {
      title: "Mid-Term Examinations",
      days: 12,
      color: "from-[#2563EB] to-[#7C3AED]",
    },

    {
      title: "Science Expo 2026",
      days: 25,
      color: "from-[#10B981] to-[#06B6D4]",
    },

    {
      title: "Annual Sports Meet",
      days: 40,
      color: "from-[#F59E0B] to-[#EA580C]",
    },

    {
      title: "Board Examinations",
      days: 96,
      color: "from-[#EF4444] to-[#EC4899]",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/70 mb-3">
          IMPORTANT TIMELINES
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/10 p-4 rounded-3xl">

            <Timer size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Countdown Widgets
            </h1>

            <p className="text-lg text-white/80 mt-2">
              Track upcoming exams, events and milestones
            </p>

          </div>

        </div>

      </section>

      {/* COUNTDOWN GRID */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Upcoming Countdowns
            </h2>

            <p className="text-gray-500 mt-1">
              Stay prepared for important events
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {countdowns.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                overflow-hidden
                hover:shadow-2xl
                transition
              "
            >

              {/* TOP COLOR */}
              <div className={`bg-gradient-to-r ${item.color} h-3`} />

              <div className="p-8">

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h3 className="text-3xl font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500">
                      Event Countdown
                    </p>

                  </div>

                  <div className="bg-slate-100 p-4 rounded-2xl">

                    <CalendarDays size={28} className="text-blue-600" />

                  </div>

                </div>

                {/* DAYS */}
                <div className="bg-slate-100 rounded-3xl p-8 text-center mb-6">

                  <h2 className="text-7xl font-extrabold text-[#2563EB]">
                    {item.days}
                  </h2>

                  <p className="text-gray-500 mt-3 text-lg">
                    Days Remaining
                  </p>

                </div>

                {/* FOOTER */}
                <div className="flex items-center gap-3 text-gray-500">

                  <Clock3 size={18} />

                  Countdown updates automatically

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}