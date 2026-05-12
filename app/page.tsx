import {
  Bell,
  BookOpen,
  Calendar,
  Trophy,
  ArrowRight,
} from "lucide-react"

import Link from "next/link"

export default function HomePage() {

  const quickLinks = [

    {
      title: "Study Resources",
      desc: "Notes, worksheets, QB & PYQs",
      href: "/resources",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },

    {
      title: "Announcements",
      desc: "Latest school notices",
      href: "/announcements",
      icon: Bell,
      color: "bg-purple-100 text-purple-600",
    },

    {
      title: "Events",
      desc: "Upcoming activities & programs",
      href: "/events",
      icon: Calendar,
      color: "bg-orange-100 text-orange-600",
    },

    {
      title: "Leaderboard",
      desc: "Inter-house competition rankings",
      href: "/leaderboard",
      icon: Trophy,
      color: "bg-yellow-100 text-yellow-600",
    },
  ]

  return (
    <main className="space-y-10">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-[35px] p-10 text-white shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-4">
          PROJECT UNKNOWN
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          GIHS Campus Hub
        </h1>

        <p className="text-lg text-white/90 max-w-3xl mb-8">
          Smart digital ecosystem for learning, resources,
          announcements, events and school collaboration.
        </p>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/resources"
            className="bg-white text-[#2563EB] px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Explore Resources
          </Link>

          <Link
            href="/admin"
            className="bg-white/15 border border-white/20 backdrop-blur px-6 py-3 rounded-2xl font-semibold hover:bg-white/20 transition"
          >
            Open Dashboard
          </Link>

        </div>

      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7">

          <h2 className="text-5xl font-extrabold text-blue-600 mb-3">
            500+
          </h2>

          <p className="text-gray-500">
            Study Resources
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7">

          <h2 className="text-5xl font-extrabold text-purple-600 mb-3">
            1200+
          </h2>

          <p className="text-gray-500">
            Students Connected
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7">

          <h2 className="text-5xl font-extrabold text-orange-600 mb-3">
            25+
          </h2>

          <p className="text-gray-500">
            Events Organized
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7">

          <h2 className="text-5xl font-extrabold text-green-600 mb-3">
            100%
          </h2>

          <p className="text-gray-500">
            Digital Campus Vision
          </p>

        </div>

      </section>

      {/* QUICK ACCESS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Quick Access
            </h2>

            <p className="text-gray-500 mt-1">
              Navigate across the platform
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {quickLinks.map((item, index) => {

            const Icon = item.icon

            return (

              <Link
                href={item.href}
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  border border-slate-200
                  p-7
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                "
              >

                <div className={`w-fit p-4 rounded-2xl mb-5 ${item.color}`}>

                  <Icon size={28} />

                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 mb-6">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-medium">

                  Open

                  <ArrowRight size={18} />

                </div>

              </Link>

            )
          })}

        </div>

      </section>

      {/* RECENT UPDATES */}
      <section className="grid xl:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <h2 className="text-3xl font-bold mb-6">
            Recent Announcements
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-100 rounded-2xl p-5">
              Mid-term examinations begin next Monday.
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Science Expo registrations are open.
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              New Grade 12 resources uploaded.
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <h2 className="text-3xl font-bold mb-6">
            Featured Resources
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-100 rounded-2xl p-5">
              Calculus Formula Sheet
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Electrostatics PYQ Collection
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Trigonometry Worksheets
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}