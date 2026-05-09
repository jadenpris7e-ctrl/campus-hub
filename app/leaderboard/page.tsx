export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <section className="bg-white rounded-3xl shadow border p-8">

        <h1 className="text-4xl font-bold mb-4">
          🏆 House Leaderboard
        </h1>

        <p className="text-gray-500 mb-6">
          Current house rankings and achievements.
        </p>

        <div className="space-y-4">

          <div className="bg-red-100 p-5 rounded-2xl">
             Ruby House — 0 Points
          </div>

          <div className="bg-blue-100 p-5 rounded-2xl">
             Sapphire House — 0 Points
          </div>

          <div className="bg-green-100 p-5 rounded-2xl">
             Emerald House — 0 Points
          </div>
          <div className="bg-yellow-100 p-5 rounded-2xl">
             Topaz House — 0 Points
          </div>

        </div>

      </section>

    </main>
  )
}