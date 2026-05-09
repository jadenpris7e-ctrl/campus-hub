export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <section className="bg-white rounded-3xl shadow border p-8 max-w-2xl">

        <h1 className="text-4xl font-bold mb-4">
          📬 Contact & Feedback
        </h1>

        <p className="text-gray-500 mb-6">
          Send feedback or contact the school.
        </p>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border bg-gray-100"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border bg-gray-100"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-xl border bg-gray-100 h-40"
          />

          <button className="bg-black text-white px-6 py-3 rounded-xl">
            Send Feedback
          </button>

        </div>

      </section>

    </main>
  )
}