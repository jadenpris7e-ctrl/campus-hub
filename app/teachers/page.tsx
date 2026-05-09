export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <section className="bg-white rounded-3xl shadow border p-8">

        <h1 className="text-4xl font-bold mb-4">
          👨‍🏫 Teacher Messages
        </h1>

        <p className="text-gray-500 mb-6">
          Guidance and motivational messages from teachers.
        </p>

        <div className="space-y-4">

          <div className="bg-gray-100 p-5 rounded-2xl">
            “Consistency matters more than intensity.”
          </div>

          <div className="bg-gray-100 p-5 rounded-2xl">
            “Practice daily and revise smartly.”
          </div>

        </div>

      </section>

    </main>
  )
}