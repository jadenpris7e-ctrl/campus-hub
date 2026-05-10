import { CalendarDays } from "lucide-react"

export default function EventsPage() {

  const events = [
    {
      title: "Annual Sports Meet",
      date: "June 2, 2026",
    },

    {
      title: "Science Expo",
      date: "June 10, 2026",
    },

    {
      title: "Inter-House Debate",
      date: "June 15, 2026",
    },
  ]

  return (
    <main className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold mb-2">
          Events
        </h1>

        <p className="text-gray-500">
          Upcoming school activities
        </p>

      </div>

      <div className="grid gap-5">

        {events.map((event, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200"
          >

            <div className="flex items-start gap-4">

              <div className="bg-purple-100 p-3 rounded-2xl">

                <CalendarDays className="text-purple-600" />

              </div>

              <div>

                <h2 className="text-2xl font-semibold mb-2">
                  {event.title}
                </h2>

                <p className="text-gray-500">
                  {event.date}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}