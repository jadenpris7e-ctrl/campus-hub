import { Bell } from "lucide-react"

export default function AnnouncementsPage() {

  const announcements = [
    {
      title: "Mid-Term Exams Begin Monday",
      date: "May 12, 2026",
    },

    {
      title: "Science Exhibition Registration Open",
      date: "May 18, 2026",
    },

    {
      title: "Grade 12 Worksheets Uploaded",
      date: "May 20, 2026",
    },
  ]

  return (
    <main className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold mb-2">
          Announcements
        </h1>

        <p className="text-gray-500">
          Latest school updates and notices
        </p>

      </div>

      <div className="grid gap-5">

        {announcements.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200"
          >

            <div className="flex items-start gap-4">

              <div className="bg-blue-100 p-3 rounded-2xl">

                <Bell className="text-blue-600" />

              </div>

              <div>

                <h2 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-500">
                  {item.date}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}