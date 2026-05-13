import {
  Newspaper,
  Clock3,
  ArrowRight,
} from "lucide-react"

export default function NewsPage() {

  const news = [

    {
      title: "GIHS Launches Smart Learning Initiative",
      desc: "The school introduces a new digital learning ecosystem for students.",
      category: "Campus",
      time: "2 hours ago",
    },

    {
      title: "Grade 12 Students Excel in Board Preparations",
      desc: "Special revision resources and workshops are now available.",
      category: "Academics",
      time: "5 hours ago",
    },

    {
      title: "Inter-House Championship Begins Next Week",
      desc: "Students prepare for annual sports and cultural competitions.",
      category: "Sports",
      time: "1 day ago",
    },

    {
      title: "New AI Resource Search Coming Soon",
      desc: "Project UNKNOWN expands with intelligent academic search.",
      category: "Technology",
      time: "2 days ago",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/70 mb-3">
          GIHS DIGITAL MEDIA
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/10 p-4 rounded-3xl">

            <Newspaper size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              School News Network
            </h1>

            <p className="text-lg text-white/80 mt-2">
              Latest campus stories, achievements and updates
            </p>

          </div>

        </div>

      </section>

      {/* NEWS CARDS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Latest Headlines
            </h2>

            <p className="text-gray-500 mt-1">
              Stay updated with school activities
            </p>

          </div>

        </div>

        <div className="grid gap-6">

          {news.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                overflow-hidden
                hover:shadow-2xl
                transition
              "
            >

              {/* TOP STRIP */}
              <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] h-2" />

              <div className="p-8">

                <div className="flex flex-wrap items-center gap-3 mb-5">

                  <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">

                    <Clock3 size={16} />

                    {item.time}

                  </div>

                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg mb-6">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">

                  Read More

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}