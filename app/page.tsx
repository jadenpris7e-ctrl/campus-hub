import Link from "next/link"

import {
  BookOpen,
  Bell,
  Calendar,
  Trophy,
  Newspaper,
  Heart,
} from "lucide-react"

export default function HomePage() {
  const quickLinks = [
    {
      title: "Resources",
      desc: "Notes, PYQs, worksheets and study materials.",
      icon: BookOpen,
      href: "/resources",
    },

    {
      title: "Announcements",
      desc: "Latest updates from school and teachers.",
      icon: Bell,
      href: "/announcements",
    },

    {
      title: "Events",
      desc: "Upcoming activities, programs and competitions.",
      icon: Calendar,
      href: "/events",
    },

    {
      title: "Leaderboard",
      desc: "Student achievements and recognitions.",
      icon: Trophy,
      href: "/leaderboard",
    },

    {
      title: "News",
      desc: "School news and important updates.",
      icon: Newspaper,
      href: "/news",
    },

    {
      title: "Wellness",
      desc: "Mental health and wellness support.",
      icon: Heart,
      href: "/wellness",
    },
  ]

  return (
    <main className="space-y-10">

      {/* HERO */}
      <section className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 border">

        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Welcome to CAMPUS HUB
        </h1>

        <p className="text-gray-500 text-lg lg:text-xl max-w-3xl">
          Your all-in-one digital student platform for Grades 9 to 12
        </p>

      </section>

      {/* QUICK ACCESS */}
      <section>

        <h2 className="text-3xl font-bold mb-6">
          Quick Access
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {quickLinks.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.title}
                href={item.href}
                className="
                  bg-white rounded-3xl p-7
                  shadow border
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-200
                  block
                "
              >

                <Icon size={32} className="mb-4" />

                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.desc}
                </p>

              </Link>
            )
          })}

        </div>

      </section>

      {/* ANNOUNCEMENTS */}
      <section className="bg-white rounded-3xl shadow-lg border p-8">

        <h2 className="text-3xl font-bold mb-6">
          Latest Announcements
        </h2>

        <div className="space-y-4">

          <div className="bg-gray-100 rounded-2xl p-5">
            Mid-term examinations begin next Monday.
          </div>

          <div className="bg-gray-100 rounded-2xl p-5">
            Science exhibition registrations are now open.
          </div>

          <div className="bg-gray-100 rounded-2xl p-5">
            Grade 12 revision worksheets uploaded.
          </div>

        </div>

      </section>

    </main>
  )
}