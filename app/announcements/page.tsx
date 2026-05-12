import {
  Bell,
  Pin,
  CalendarDays,
} from "lucide-react"

export default function AnnouncementsPage() {

  const announcements = [

    {
      title: "Mid-Term Examination Schedule Released",
      desc: "Students are requested to check the updated examination timetable.",
      date: "July 18, 2026",
      type: "Important",
      pinned: true,
    },

    {
      title: "Science Expo Registrations Open",
      desc: "Interested students may register through the school office.",
      date: "July 15, 2026",
      type: "Event",
      pinned: false,
    },

    {
      title: "New Grade 12 Resources Uploaded",
      desc: "Additional worksheets and PYQs have been added.",
      date: "July 12, 2026",
      type: "Academic",
      pinned: false,
    },

    {
      title: "Inter-House Competition Next Week",
      desc: "Prepare for athletics and quiz competitions.",
      date: "July 10, 2026",
      type: "Competition",
      pinned: false,
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB] text-white rounded-[35px] p-10 shadow-2xl">

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
              Official notices, updates and academic information
            </p>

          </div>

        </div>

      </section>

      {/* PINNED */}
      <section>

        <div className="flex items-center gap-3 mb-6">

          <Pin className="text-red-500" />

          <h2 className="text-3xl font-bold">
            Pinned Announcement
          </h2>

        </div>

        {announcements
          .filter((item) => item.pinned)
          .map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                border-l-[10px]
                border-red-500
                rounded-3xl
                shadow-xl
                p-8
              "
            >

              <div className="flex flex-wrap items-center gap-3 mb-4">

                <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
                  PINNED
                </span>

                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                  {item.type}
                </span>

              </div>

              <h3 className="text-3xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-lg mb-5">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-gray-500">

                <CalendarDays size={18} />

                {item.date}

              </div>

            </div>

          ))}

      </section>

      {/* ALL ANNOUNCEMENTS */}
      <section>

        <h2 className="text-3xl font-bold mb-6">
          Latest Updates
        </h2>

        <div className="grid gap-6">

          {announcements.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                p-7
                hover:shadow-2xl
                transition
              "
            >

              <div className="flex flex-wrap items-center gap-3 mb-4">

                <span className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold">
                  {item.type}
                </span>

              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-5">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-gray-500">

                <CalendarDays size={18} />

                {item.date}

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}