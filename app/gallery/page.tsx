import {
  Image as ImageIcon,
  Camera,
} from "lucide-react"

export default function GalleryPage() {

  const gallery = [

    {
      title: "Science Expo 2026",
      category: "Academic Event",
    },

    {
      title: "Annual Sports Meet",
      category: "Sports",
    },

    {
      title: "Teachers' Day Celebration",
      category: "Celebration",
    },

    {
      title: "Inter-House Competitions",
      category: "Competition",
    },

    {
      title: "Career Guidance Seminar",
      category: "Seminar",
    },

    {
      title: "Campus Activities",
      category: "Campus Life",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#2563EB] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          CAMPUS MEMORIES
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <ImageIcon size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              School Gallery
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Explore moments, celebrations and campus experiences
            </p>

          </div>

        </div>

      </section>

      {/* GALLERY GRID */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              Featured Albums
            </h2>

            <p className="text-gray-500 mt-1">
              School activities and event highlights
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {gallery.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                overflow-hidden
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
              "
            >

              {/* IMAGE PLACEHOLDER */}
              <div className="h-56 bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#EC4899] flex items-center justify-center">

                <Camera size={60} className="text-white/80" />

              </div>

              <div className="p-7">

                <span className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold">

                  {item.category}

                </span>

                <h3 className="text-2xl font-bold mt-5 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  Click to explore event memories and highlights.
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}