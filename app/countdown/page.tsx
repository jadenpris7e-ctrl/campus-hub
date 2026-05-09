export default function CountdownPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <section className="bg-white rounded-3xl shadow border p-8">

        <h1 className="text-4xl font-bold mb-4">
          ⏳ Countdown Widgets
        </h1>

        <p className="text-gray-500 mb-6">
          Upcoming important school events.
        </p>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Board Exams
            </h2>

            <p className="text-gray-500">
              120 Days Left
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Sports Day
            </h2>

            <p className="text-gray-500">
              45 Days Left
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Annual Day
            </h2>

            <p className="text-gray-500">
              70 Days Left
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}