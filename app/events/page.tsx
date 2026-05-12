import {
  Calendar,
  Clock3,
  MapPin,
} from "lucide-react"

export default function EventsPage() {

  const events = [

    {
      title: "Science Expo 2026",
      desc: "Innovative science projects presented by students.",
      date: "August 12, 2026",
      time: "10:00 AM",
      location: "Main Auditorium",
      type: "Academic",
    },

    {
      title: "Inter-House Football Tournament",
      desc: "Annual sports competition between school houses.",
      date: "August 20, 2026",
      time: "8:30 AM",
      location: "School Ground",
      type: "Sports",
    },

    {
      title: "Career Guidance Seminar",
      desc: "Expert sessions on future career opportunities.",
      date: "September 2, 2026",
      time: "1:00 PM",
      location: "Conference Hall",
      type: "Seminar",
    },

    {
      title: "Teachers' Day Celebration",
      desc: "Special performances and appreciation event.",
      date: "September 5, 2026",
      time: "11:00 AM",
      location: "Open Stage",
      type: "Celebration",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#DC2626] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          SCHOOL EVENTS & ACTIVITIES
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <Calendar size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Events Calendar
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Explore upcoming programs, competitions and activities
            </p>

          </div>

        </div>

      </section>

      {/* UPCOMING EVENTS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Upcoming Events
            </h2>

            <p className="text-gray-500 mt-1">
              Important school activities and programs
            </p>

          </div>

        </div>

        <div className="grid gap-6">

          {events.map((event, index) => (

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

              {/* TOP BAR */}
              <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] h-3" />

              <div className="p-8">

                <div className="flex flex-wrap items-center gap-3 mb-5">

                  <span className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>

                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-lg mb-6">
                  {event.desc}
                </p>

                <div className="grid md:grid-cols-3 gap-5">

                  <div className="flex items-center gap-3 bg-slate-100 rounded-2xl p-4">

                    <Calendar className="text-blue-600" />

                    <div>

                      <p className="text-sm text-gray-500">
                        Date
                      </p>

                      <p className="font-semibold">
                        {event.date}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3 bg-slate-100 rounded-2xl p-4">

                    <Clock3 className="text-orange-600" />

                    <div>

                      <p className="text-sm text-gray-500">
                        Time
                      </p>

                      <p className="font-semibold">
                        {event.time}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3 bg-slate-100 rounded-2xl p-4">

                    <MapPin className="text-red-600" />

                    <div>

                      <p className="text-sm text-gray-500">
                        Venue
                      </p>

                      <p className="font-semibold">
                        {event.location}
                      </p>

                    </div>

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