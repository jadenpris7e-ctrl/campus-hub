import {
  Trophy,
  Medal,
  Star,
} from "lucide-react"

export default function WinnersPage() {

  const winners = [

    {
      name: "Aarav Sharma",
      achievement: "1st Place - National Science Olympiad",
      category: "Academics",
    },

    {
      name: "Sophia Mathew",
      achievement: "Best Speaker - Inter School Debate",
      category: "Communication",
    },

    {
      name: "Rahul Nair",
      achievement: "Gold Medal - State Athletics",
      category: "Sports",
    },

    {
      name: "Ananya Joseph",
      achievement: "Top Scorer - Grade 12 Board Exams",
      category: "Academics",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#F97316] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          STUDENT EXCELLENCE
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <Trophy size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Winners & Achievements
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Celebrating excellence and student accomplishments
            </p>

          </div>

        </div>

      </section>

      {/* TOP ACHIEVERS */}
      <section className="grid md:grid-cols-2 gap-6">

        {winners.map((winner, index) => (

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

            <div className="flex items-center justify-between mb-6">

              <div className="bg-yellow-100 text-yellow-600 p-4 rounded-2xl">

                <Medal size={30} />

              </div>

              <span className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold">
                {winner.category}
              </span>

            </div>

            <h2 className="text-3xl font-bold mb-3">
              {winner.name}
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              {winner.achievement}
            </p>

            <div className="flex items-center gap-2 text-orange-500 font-semibold">

              <Star size={18} />

              Outstanding Achievement

            </div>

          </div>

        ))}

      </section>

    </main>
  )
}