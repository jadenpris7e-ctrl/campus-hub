export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <section className="bg-white rounded-3xl shadow border p-8">

        <h1 className="text-4xl font-bold mb-4">
          🖼 Gallery
        </h1>

        <p className="text-gray-500 mb-6">
          School memories, events and achievements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="bg-gray-200 h-56 rounded-2xl"></div>

          <div className="bg-gray-200 h-56 rounded-2xl"></div>

          <div className="bg-gray-200 h-56 rounded-2xl"></div>

        </div>

      </section>

    </main>
  )
}