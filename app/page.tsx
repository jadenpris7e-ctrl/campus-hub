import Link from "next/link"

import {
  Bell,
  Calendar,
  BookOpen,
  Trophy,
  ArrowRight,
  Newspaper,
  Heart,
} from "lucide-react"

export default function HomePage() {

  return (
    <main className="space-y-10">

      {/* HERO SECTION */}
      <section className="rounded-[35px] p-10 md:p-14 bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#7C3AED] text-white shadow-2xl overflow-hidden relative">

        <div className="relative z-10 max-w-3xl">

          <p className="uppercase tracking-[5px] text-sm mb-4 text-white/80">
            GIHS DIGITAL ECOSYSTEM
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">

            PROJECT UNKNOWN

          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8">

            A unified smart academic platform for Grades 9–12.

          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/resources"
              className="bg-white text-[#4F46E5] px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition"
            >

              Open Resources

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/announcements"
              className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition"
            >

              Latest Updates

            </Link>

          </div>

        </div>

        {/* GLOW EFFECT */}
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-200">

          <h2 className="text-4xl font-extrabold text-[#4F46E5] mb-2">
            4
          </h2>

          <p className="text-gray-500">
            Grades Supported
          </p>

        </div>

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-200">

          <h2 className="text-4xl font-extrabold text-[#7C3AED] mb-2">
            20+
          </h2>

          <p className="text-gray-500">
            Subjects
          </p>

        </div>

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-200">

          <h2 className="text-4xl font-extrabold text-[#0EA5E9] mb-2">
            500+
          </h2>

          <p className="text-gray-500">
            Planned Resources
          </p>

        </div>

        <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-200">

          <h2 className="text-4xl font-extrabold text-[#10B981] mb-2">
            24/7
          </h2>

          <p className="text-gray-500">
            Student Access
          </p>

        </div>

      </section>

      {/* QUICK ACCESS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-bold">
            Quick Access
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <Link
            href="/resources"
            className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-2xl transition"
          >

            <div className="bg-blue-100 w-fit p-4 rounded-2xl mb-5">

              <BookOpen className="text-blue-600" />

            </div>

            <h3 className="text-2xl font-semibold mb-2">
              Resources
            </h3>

            <p className="text-gray-500">
              Notes, worksheets, PYQs and QB access.
            </p>

          </Link>

          <Link
            href="/announcements"
            className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-2xl transition"
          >

            <div className="bg-purple-100 w-fit p-4 rounded-2xl mb-5">

              <Bell className="text-purple-600" />

            </div>

            <h3 className="text-2xl font-semibold mb-2">
              Announcements
            </h3>

            <p className="text-gray-500">
              Latest school circulars and notices.
            </p>

          </Link>

          <Link
            href="/events"
            className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-2xl transition"
          >

            <div className="bg-orange-100 w-fit p-4 rounded-2xl mb-5">

              <Calendar className="text-orange-600" />

            </div>

            <h3 className="text-2xl font-semibold mb-2">
              Events
            </h3>

            <p className="text-gray-500">
              Upcoming activities and competitions.
            </p>

          </Link>

          <Link
            href="/leaderboard"
            className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-2xl transition"
          >

            <div className="bg-yellow-100 w-fit p-4 rounded-2xl mb-5">

              <Trophy className="text-yellow-600" />

            </div>

            <h3 className="text-2xl font-semibold mb-2">
              Leaderboard
            </h3>

            <p className="text-gray-500">
              Inter-house rankings and achievements.
            </p>

          </Link>

        </div>

      </section>

      {/* LOWER GRID */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* ANNOUNCEMENTS */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <div className="flex items-center gap-3 mb-6">

            <Bell className="text-[#4F46E5]" />

            <h2 className="text-2xl font-bold">
              Latest Announcements
            </h2>

          </div>

          <div className="space-y-4">

            <div className="bg-slate-100 rounded-2xl p-5">
              Mid-term exams begin next Monday.
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Grade 12 revision worksheets uploaded.
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Science exhibition registrations open.
            </div>

          </div>

        </div>

        {/* WELLNESS */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <div className="flex items-center gap-3 mb-6">

            <Heart className="text-pink-500" />

            <h2 className="text-2xl font-bold">
              Wellness Corner
            </h2>

          </div>

          <div className="space-y-4">

            <div className="bg-pink-50 rounded-2xl p-5">
              Stay hydrated during study sessions.
            </div>

            <div className="bg-pink-50 rounded-2xl p-5">
              Take short breaks every 45 minutes.
            </div>

            <div className="bg-pink-50 rounded-2xl p-5">
              Sleep properly before examinations.
            </div>

          </div>

        </div>

      </section>

      {/* NEWS */}
      <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

        <div className="flex items-center gap-3 mb-6">

          <Newspaper className="text-blue-600" />

          <h2 className="text-2xl font-bold">
            School News Network
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-slate-100 rounded-2xl p-5">
            Robotics Club launches new AI project.
          </div>

          <div className="bg-slate-100 rounded-2xl p-5">
            Sports teams prepare for zonals.
          </div>

          <div className="bg-slate-100 rounded-2xl p-5">
            New digital learning initiative announced.
          </div>

        </div>

      </section>

    </main>
  )
}