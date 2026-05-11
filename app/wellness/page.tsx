import { Heart } from "lucide-react"

export default function WellnessPage() {

  const tips = [
    "Drink enough water during study sessions.",
    "Take breaks every 45 minutes.",
    "Sleep well before exams.",
    "Avoid excessive screen time before bed.",
  ]

  return (
    <main className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold mb-2">
          Wellness Corner
        </h1>

        <p className="text-gray-500">
          Healthy habits for students
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {tips.map((tip, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6"
          >

            <div className="flex items-start gap-4">

              <div className="bg-pink-100 p-3 rounded-2xl">

                <Heart className="text-pink-600" />

              </div>

              <p className="text-lg text-gray-700">
                {tip}
              </p>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}