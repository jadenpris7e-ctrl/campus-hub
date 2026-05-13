import {
  Heart,
  Sparkles,
  Smile,
} from "lucide-react"

export default function WellnessPage() {

  const tips = [

    {
      title: "Stay Consistent",
      desc: "Small daily progress creates long-term success.",
    },

    {
      title: "Balance Study & Rest",
      desc: "Healthy sleep improves memory and concentration.",
    },

    {
      title: "Avoid Burnout",
      desc: "Take breaks and manage your academic workload wisely.",
    },

    {
      title: "Believe In Yourself",
      desc: "Confidence and discipline are key to achievement.",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#10B981] via-[#14B8A6] to-[#06B6D4] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          STUDENT WELLNESS
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <Heart size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Wellness & Motivation
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Encouraging healthy learning habits and positivity
            </p>

          </div>

        </div>

      </section>

      {/* MOTIVATION CARD */}
      <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-10">

        <div className="flex items-center gap-4 mb-6">

          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-2xl">

            <Sparkles size={30} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Daily Motivation
            </h2>

            <p className="text-gray-500 mt-1">
              Stay inspired throughout your academic journey
            </p>

          </div>

        </div>

        <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-3xl p-10">

          <p className="text-3xl font-bold leading-relaxed">
            “Success doesn’t come from what you do occasionally.
            It comes from what you do consistently.”
          </p>

        </div>

      </section>

      {/* WELLNESS TIPS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Wellness Tips
            </h2>

            <p className="text-gray-500 mt-1">
              Healthy habits for better learning
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {tips.map((tip, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                p-8
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
              "
            >

              <div className="bg-green-100 text-green-600 w-fit p-4 rounded-2xl mb-5">

                <Smile size={28} />

              </div>

              <h3 className="text-2xl font-bold mb-3">
                {tip.title}
              </h3>

              <p className="text-gray-600 text-lg">
                {tip.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}