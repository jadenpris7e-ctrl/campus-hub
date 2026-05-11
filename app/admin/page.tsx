import {
  Upload,
  Bell,
  Calendar,
  BookOpen,
  Users,
  Trophy,
  Activity,
} from "lucide-react"

export default function AdminDashboard() {

  const stats = [
    {
      title: "Resources",
      value: "524",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },

    {
      title: "Announcements",
      value: "38",
      icon: Bell,
      color: "bg-purple-100 text-purple-600",
    },

    {
      title: "Events",
      value: "14",
      icon: Calendar,
      color: "bg-orange-100 text-orange-600",
    },

    {
      title: "Students",
      value: "1200+",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          SCHOOL MANAGEMENT SYSTEM
        </p>

        <h1 className="text-5xl font-extrabold mb-4">
          Admin Dashboard
        </h1>

        <p className="text-lg text-white/90">
          Manage resources, announcements, events and platform activity.
        </p>

      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item, index) => {

          const Icon = item.icon

          return (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7"
            >

              <div className="flex items-center justify-between mb-5">

                <div className={`p-4 rounded-2xl ${item.color}`}>

                  <Icon size={26} />

                </div>

                <h2 className="text-4xl font-extrabold">
                  {item.value}
                </h2>

              </div>

              <p className="text-gray-500 text-lg">
                Total {item.title}
              </p>

            </div>
          )
        })}

      </section>

      {/* QUICK ACTIONS */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* UPLOAD */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-blue-100 p-4 rounded-2xl">

              <Upload className="text-blue-600" />

            </div>

            <h2 className="text-2xl font-bold">
              Upload Center
            </h2>

          </div>

          <div className="space-y-4">

            <button className="w-full bg-slate-100 hover:bg-slate-200 transition rounded-2xl p-5 text-left font-medium">

              Upload Notes PDF

            </button>

            <button className="w-full bg-slate-100 hover:bg-slate-200 transition rounded-2xl p-5 text-left font-medium">

              Upload Worksheet

            </button>

            <button className="w-full bg-slate-100 hover:bg-slate-200 transition rounded-2xl p-5 text-left font-medium">

              Upload Question Bank

            </button>

            <button className="w-full bg-slate-100 hover:bg-slate-200 transition rounded-2xl p-5 text-left font-medium">

              Upload Announcement

            </button>

          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-green-100 p-4 rounded-2xl">

              <Activity className="text-green-600" />

            </div>

            <h2 className="text-2xl font-bold">
              Recent Activity
            </h2>

          </div>

          <div className="space-y-4">

            <div className="bg-slate-100 rounded-2xl p-5">
              Grade 12 Calculus worksheet uploaded.
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              New announcement published.
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Inter-house leaderboard updated.
            </div>

            <div className="bg-slate-100 rounded-2xl p-5">
              Event calendar modified.
            </div>

          </div>

        </div>

      </section>

      {/* MANAGEMENT */}
      <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

        <div className="flex items-center gap-3 mb-8">

          <div className="bg-yellow-100 p-4 rounded-2xl">

            <Trophy className="text-yellow-600" />

          </div>

          <h2 className="text-2xl font-bold">
            Platform Management
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

          <button className="bg-slate-100 hover:bg-slate-200 transition rounded-2xl p-6 text-left">

            <h3 className="text-xl font-semibold mb-2">
              Manage Resources
            </h3>

            <p className="text-gray-500">
              Edit notes, worksheets and PDFs.
            </p>

          </button>

          <button className="bg-slate-100 hover:bg-slate-200 transition rounded-2xl p-6 text-left">

            <h3 className="text-xl font-semibold mb-2">
              Manage Events
            </h3>

            <p className="text-gray-500">
              Add or edit school activities.
            </p>

          </button>

          <button className="bg-slate-100 hover:bg-slate-200 transition rounded-2xl p-6 text-left">

            <h3 className="text-xl font-semibold mb-2">
              Manage Gallery
            </h3>

            <p className="text-gray-500">
              Upload photos and highlights.
            </p>

          </button>

          <button className="bg-slate-100 hover:bg-slate-200 transition rounded-2xl p-6 text-left">

            <h3 className="text-xl font-semibold mb-2">
              Manage Teachers
            </h3>

            <p className="text-gray-500">
              Update teacher messages.
            </p>

          </button>

        </div>

      </section>

    </main>
  )
}