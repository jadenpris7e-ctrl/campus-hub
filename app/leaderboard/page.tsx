import {
  Trophy,
  Medal,
  Crown,
} from "lucide-react"

export default function LeaderboardPage() {

  const houses = [

    {
      name: "Ruby House",
      points: 0,
      color: "from-red-500 to-rose-500",
      icon: "🥇",
    },

    {
      name: "Sapphire House",
      points: 0,
      color: "from-blue-500 to-cyan-500",
      icon: "🥈",
    },

    {
      name: "Emerald House",
      points: 0,
      color: "from-green-500 to-emerald-500",
      icon: "🥉",
    },

    {
      name: "Topaz House",
      points: 0,
      color: "from-yellow-400 to-orange-400",
      icon: "⭐",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#DC2626] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          INTER-HOUSE COMPETITION
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <Trophy size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              House Leaderboard
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Live rankings and inter-house competition standings
            </p>

          </div>

        </div>

      </section>

      {/* WINNER CARD */}
      <section className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-10 text-white">

          <div className="flex items-center gap-4 mb-4">

            <Crown size={40} />

            <h2 className="text-4xl font-extrabold">
              Current Champion
            </h2>

          </div>

          <h3 className="text-5xl font-black">
            {houses[0].name}
          </h3>

          <p className="text-xl mt-3">
            {houses[0].points} Points
          </p>

        </div>

      </section>

      {/* LEADERBOARD */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Rankings
            </h2>

            <p className="text-gray-500 mt-1">
              Updated inter-house standings
            </p>

          </div>

        </div>

        <div className="space-y-5">

          {houses.map((house, index) => (

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

              <div className={`bg-gradient-to-r ${house.color} h-3`} />

              <div className="p-8 flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div className="text-5xl">
                    {house.icon}
                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">
                      {house.name}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Rank #{index + 1}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <div className="flex items-center gap-2 justify-end mb-2">

                    <Medal className="text-yellow-500" />

                    <span className="text-gray-500">
                      Total Points
                    </span>

                  </div>

                  <h2 className="text-5xl font-extrabold text-[#2563EB]">
                    {house.points}
                  </h2>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}