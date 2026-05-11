import { MessageSquare } from "lucide-react"

export default function TeachersPage() {

  const messages = [
    {
      teacher: "Mrs. Sarah",
      message: "Stay consistent with revision every day.",
    },

    {
      teacher: "Mr. David",
      message: "Practice PYQs regularly for better preparation.",
    },

    {
      teacher: "Mrs. Priya",
      message: "Time management is key during exams.",
    },
  ]

  return (
    <main className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold mb-2">
          Teacher Messages
        </h1>

        <p className="text-gray-500">
          Guidance and motivation from teachers
        </p>

      </div>

      <div className="grid gap-5">

        {messages.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6"
          >

            <div className="flex items-start gap-4">

              <div className="bg-indigo-100 p-3 rounded-2xl">

                <MessageSquare className="text-indigo-600" />

              </div>

              <div>

                <h2 className="text-2xl font-semibold mb-2">
                  {item.teacher}
                </h2>

                <p className="text-gray-600">
                  {item.message}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}