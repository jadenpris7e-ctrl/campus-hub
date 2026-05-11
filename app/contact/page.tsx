import { Phone } from "lucide-react"

export default function ContactPage() {

  return (
    <main className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold mb-2">
          Contact & Feedback
        </h1>

        <p className="text-gray-500">
          Reach out to the school team
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 max-w-2xl">

        <div className="flex items-center gap-3 mb-6">

          <div className="bg-green-100 p-3 rounded-2xl">

            <Phone className="text-green-600" />

          </div>

          <h2 className="text-2xl font-semibold">
            School Contact
          </h2>

        </div>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-slate-300 rounded-2xl p-4 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-slate-300 rounded-2xl p-4 outline-none"
          />

          <textarea
            placeholder="Your Feedback"
            rows={5}
            className="w-full border border-slate-300 rounded-2xl p-4 outline-none"
          />

          <button className="bg-[#4F46E5] text-white px-6 py-3 rounded-2xl hover:scale-105 transition">

            Submit Feedback

          </button>

        </div>

      </div>

    </main>
  )
}