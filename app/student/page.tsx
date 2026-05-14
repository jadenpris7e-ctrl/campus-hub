import {
  GraduationCap,
  BookOpen,
  Brain,
  Trophy,
  Calendar,
  ArrowRight,
} from "lucide-react"

import Link from "next/link"

export default function StudentPortal() {

  const cards = [

    {
      title: "Study Resources",
      desc: "Access notes, worksheets and PYQs",
      icon: BookOpen,
      href: "/resources",
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "AI Assistant",
      desc: "Get academic help instantly",
      icon: Brain,
      href: "/ai",
      color: "from-violet-500 to-indigo-500",
    },

    {
      title: "Leaderboard",
      desc: "Check rankings and achievements",
      icon: Trophy,
      href: "/leaderboard",
      color: "from-yellow-400 to-orange-500",
    },

    {
      title: "Events",
      desc: "View upcoming school events",
      icon: Calendar,
      href: "/events",
      color: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <main className="space-y-8">

      <section className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 text-white rounded-[35px] p-10 shadow-2xl">

        <div className="flex items-center gap-5 mb-5">

          <div className="bg-white/20 p-5 rounded-3xl">

            <GraduationCap size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-black">
              Student Portal
            </h1>

            <p className="text-white/90 text-lg mt-2">
              Academic resources and learning ecosystem
            </p>

          </div>

        </div>

      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card, index) => {

          const Icon = card.icon

          return (

            <Link
              key={index}
              href={card.href}
              className="
                bg-white
                rounded-3xl
                border border-slate-200
                shadow-lg
                overflow-hidden
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
              "
            >

              <div className={`h-3 bg-gradient-to-r ${card.color}`} />

              <div className="p-8">

                <div className="flex items-center justify-between mb-8">

                  <div className="bg-slate-100 p-4 rounded-2xl">

                    <Icon size={30} />

                  </div>

                  <ArrowRight />

                </div>

                <h2 className="text-2xl font-bold mb-3">
                  {card.title}
                </h2>

                <p className="text-slate-500">
                  {card.desc}
                </p>

              </div>

            </Link>

          )
        })}

      </section>

    </main>
  )
}