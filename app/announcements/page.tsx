import {
  Bell,
  Pin,
  CalendarDays,
  Megaphone,
} from "lucide-react"

export default function AnnouncementsPage() {

  const announcements = [

    {
      title: "Mid-Term Examinations Begin Next Week",
      desc: "Students are advised to check the updated exam timetable and prepare accordingly.",
      type: "Important",
      date: "August 10, 2026",
    },

    {
      title: "Science Expo Registration Open",
      desc: "Interested students can register through their class teachers before Friday.",
      type: "Academic",
      date: "August 14, 2026",
    },

    {
      title: "New Study Resources Uploaded",
      desc: "Additional notes and worksheets have been added for Grades 10–12.",
      type: "Resources",
      date: "August 18, 2026",
    },

    {
      title: "Inter-House Sports Practice Schedule Released",
      desc: "Practice sessions for all houses will begin from Monday.",
      type: "Sports",
      date: "August 22, 2026",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#EC4899] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          SCHOOL COMMUNICATION
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <Bell size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Announcements Hub
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Latest notices, updates and important information
            </p>

          </div>

        </div>

      </section>

      {/* PINNED NOTICE */}
      <section className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8">

          <div className="flex items-center gap-3 mb-4">

            <Pin size={28} />

            <h2 className="text-3xl font-bold">
              Pinned Announcement
            </h2>

          </div>

          <h3 className="text-4xl font-extrabold mb-3">
            Mid-Term Exams Starting Soon
          </h3>

          <p className="text-lg text-white/90">
            Students must complete revisions and verify examination schedules.
          </p>

        </div>

      </section>

      {/* ANNOUNCEMENTS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Latest Updates
            </h2>

            <p className="text-gray-500 mt-1">
              Recent notices and announcements
            </p>

          </div>

        </div>

        <div className="space-y-6">

          {announcements.map((item, index) => (

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

              <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] h-2" />

              <div className="p-8">

                <div className="flex flex-wrap items-center gap-3 mb-5">

                  <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    {item.type}
                  </span>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">

                    <CalendarDays size={16} />

                    {item.date}

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-slate-100 p-4 rounded-2xl">

                    <Megaphone className="text-blue-600" size={28} />

                  </div>

                  <div>

                    <h3 className="text-3xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}