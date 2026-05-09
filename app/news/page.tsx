export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <section className="bg-white rounded-3xl shadow border p-8">

        <h1 className="text-4xl font-bold mb-4">
          📰 School News Network
        </h1>

        <p className="text-gray-500 mb-6">
          Latest happenings around the school.
        </p>

        <div className="space-y-4">

          <div className="bg-gray-100 p-5 rounded-2xl">
            🎉 Inter-school quiz competition winners announced.
          </div>

          <div className="bg-gray-100 p-5 rounded-2xl">
            🏅 Sports Day preparations have started.
          </div>

        </div>

      </section>

    </main>
  )
}