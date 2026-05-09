export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <section className="bg-white rounded-3xl shadow border p-8">

        <h1 className="text-4xl font-bold mb-4">
          🌱 Wellness & Motivation Corner
        </h1>

        <p className="text-gray-500 mb-6">
          Tips for productivity, motivation and student wellness.
        </p>

        <div className="space-y-4">

          <div className="bg-green-100 p-5 rounded-2xl">
            ✅ Sleep properly before exams.
          </div>

          <div className="bg-green-100 p-5 rounded-2xl">
            ✅ Take short breaks while studying.
          </div>

          <div className="bg-green-100 p-5 rounded-2xl">
            ✅ Stay hydrated and avoid burnout.
          </div>

        </div>

      </section>

    </main>
  )
}