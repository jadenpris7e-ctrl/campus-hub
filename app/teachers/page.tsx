import {
  Users,
  MessageSquare,
  BadgeCheck,
} from "lucide-react"

export default function TeachersPage() {

  const messages = [

    {
      teacher: "Mrs. Sarah Johnson",
      subject: "Mathematics Department",
      message:
        "Consistency and practice are the keys to mastering Mathematics.",
    },

    {
      teacher: "Mr. Daniel Thomas",
      subject: "Physics Department",
      message:
        "Never memorize Physics blindly — understand the concepts deeply.",
    },

    {
      teacher: "Mrs. Anita Joseph",
      subject: "English Department",
      message:
        "Reading daily improves vocabulary, writing and communication skills.",
    },

    {
      teacher: "Mr. Kevin Mathew",
      subject: "Chemistry Department",
      message:
        "Revision and problem-solving are essential for exam preparation.",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#2563EB] via-[#0EA5E9] to-[#06B6D4] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          FACULTY COMMUNICATION
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <Users size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Teacher Messages
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Guidance, encouragement and academic advice from faculty
            </p>

          </div>

        </div>

      </section>

      {/* MESSAGE CARDS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Faculty Insights
            </h2>

            <p className="text-gray-500 mt-1">
              Important messages from teachers
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {messages.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                p-8
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
              "
            >

              <div className="flex items-center justify-between mb-6">

                <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">

                  <MessageSquare size={28} />

                </div>

                <BadgeCheck className="text-green-500" size={26} />

              </div>

              <h3 className="text-2xl font-bold mb-2">
                {item.teacher}
              </h3>

              <p className="text-blue-600 font-medium mb-5">
                {item.subject}
              </p>

              <div className="bg-slate-100 rounded-2xl p-5">

                <p className="text-gray-700 text-lg leading-relaxed">
                  “{item.message}”
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}