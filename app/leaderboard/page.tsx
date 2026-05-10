import { Trophy } from "lucide-react"

export default function LeaderboardPage() {

  const leaders = [
    {
      house: "Ruby House",
      points: 0,
    },

    {
      house: "Sapphire House",
      points: 0,
    },

    {
      house: "Emerald House",
      points: 0,
    },

    {
      house: "Topaz House",
      points: 0,
    },
  ]

  return (
    <main className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold mb-2">
          House Leaderboard
        </h1>

        <p className="text-gray-600">
          Current inter-house standings
        </p>

      </div>

      <div className="grid gap-5">

        {leaders.map((leader, index) => (

          <div
            key={index}
            style={{
              backgroundColor:
                leader.house === "Ruby House"
                  ? "#dc2626"
                  : leader.house === "Sapphire House"
                  ? "#2563eb"
                  : leader.house === "Emerald House"
                  ? "#16a34a"
                  : "#facc15",
            }}
            className="
              rounded-3xl
              shadow-xl
              p-6
              flex items-center justify-between
            "
          >

            <div className="flex items-center gap-4">

              <div className="bg-white/20 p-3 rounded-2xl">

                <Trophy />

              </div>

              <h2 className="text-2xl font-bold">
                {leader.house}
              </h2>

            </div>

            <p className="text-3xl font-extrabold">
              {leader.points}
            </p>

          </div>

        ))}

      </div>

    </main>
  )
}