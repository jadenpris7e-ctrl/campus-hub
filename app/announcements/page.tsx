export default function Announcements() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-4xl font-bold mb-2">
        📢 Announcements Hub
      </h1>

      <p className="text-gray-600 mb-6">
        School updates, notices, and important information
      </p>

      <div className="space-y-4">

        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold">Physics Unit Test</h2>
          <p className="text-sm text-gray-500">Scheduled on Monday for Grade 12</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold">Holiday Notice</h2>
          <p className="text-sm text-gray-500">School will remain closed on Friday</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold">Assignment Submission</h2>
          <p className="text-sm text-gray-500">Submit Chemistry assignment by tomorrow</p>
        </div>

      </div>

    </main>
  )
}