"use client"

import {
  ShieldCheck,
  Bell,
  Calendar,
  Newspaper,
  Trophy,
  Upload,
  Users,
  Activity,
} from "lucide-react"

export default function AdminPage() {

  const cards = [

    {
      title: "Manage Announcements",
      desc: "Post and update school announcements",
      icon: Bell,
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Manage Events",
      desc: "Create and manage campus events",
      icon: Calendar,
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Manage News",
      desc: "Publish school news updates",
      icon: Newspaper,
      color: "from-slate-700 to-slate-900",
    },

    {
      title: "Manage Leaderboard",
      desc: "Update house points and rankings",
      icon: Trophy,
      color: "from-yellow-400 to-orange-400",
    },

    {
      title: "Upload Resources",
      desc: "Add notes, worksheets and PDFs",
      icon: Upload,
      color: "from-emerald-500 to-teal-500",
    },

    {
      title: "Manage Users",
      desc: "Control student and teacher access",
      icon: Users,
      color: "from-violet-500 to-indigo-500",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-white rounded-[40px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/70 mb-3">
          ADMINISTRATION CENTER
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/10 p-4 rounded-3xl">

            <ShieldCheck size={42} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Admin Dashboard
            </h1>

            <p className="text-lg text-white/80 mt-2">
              Central management system for GIHS Campus Hub
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <div className="flex items-center justify-between mb-5">

            <Activity className="text-blue-600" size={30} />

            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              LIVE
            </span>

          </div>

          <h2 className="text-5xl font-black text-blue-600 mb-3">
            12
          </h2>

          <p className="text-xl font-semibold mb-2">
            Active Modules
          </p>

          <p className="text-gray-500">
            Systems currently running in the platform.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <div className="flex items-center justify-between mb-5">

            <Users className="text-violet-600" size={30} />

            <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-sm font-semibold">
              USERS
            </span>

          </div>

          <h2 className="text-5xl font-black text-violet-600 mb-3">
            500+
          </h2>

          <p className="text-xl font-semibold mb-2">
            Student Access
          </p>

          <p className="text-gray-500">
            Potential student users across the campus.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <div className="flex items-center justify-between mb-5">

            <Upload className="text-emerald-600" size={30} />

            <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold">
              STORAGE
            </span>

          </div>

          <h2 className="text-5xl font-black text-emerald-600 mb-3">
            Cloud
          </h2>

          <p className="text-xl font-semibold mb-2">
            Resource System
          </p>

          <p className="text-gray-500">
            Google Drive integrated academic resources.
          </p>

        </div>

      </section>

      {/* MANAGEMENT MODULES */}
      <section>

        <div className="mb-6">

          <h2 className="text-4xl font-bold">
            Management Modules
          </h2>

          <p className="text-gray-500 mt-2">
            Administrative controls for the platform
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {cards.map((item, index) => {

            const Icon = item.icon

            return (

              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  border border-slate-200
                  overflow-hidden
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                "
              >

                <div className={`bg-gradient-to-r ${item.color} h-3`} />

                <div className="p-8">

                  <div className="bg-slate-100 w-fit p-4 rounded-2xl mb-6">

                    <Icon size={30} />

                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            )
          })}

        </div>

      </section>

    </main>
  )
}