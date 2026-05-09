export default function Events() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-4xl font-bold mb-2">
        📅 Events & Calendar
      </h1>

      <p className="text-gray-600 mb-6">
        Upcoming school events and activities
      </p>

      <div className="grid md:grid-cols-2 gap-4">

        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold">Annual Science Fair</h2>
          <p className="text-sm text-gray-500">Date: 15 May</p>
          <p className="text-sm text-gray-500">Location: School Auditorium</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold">Sports Day</h2>
          <p className="text-sm text-gray-500">Date: 22 May</p>
          <p className="text-sm text-gray-500">Location: School Ground</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold">Parent-Teacher Meeting</h2>
          <p className="text-sm text-gray-500">Date: 28 May</p>
          <p className="text-sm text-gray-500">Online + Offline</p>
        </div>

      </div>

    </main>
  )
}