// app/layout.tsx

"use client"

import "./globals.css"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Bell,
  Calendar,
  Trophy,
  Image as ImageIcon,
  Newspaper,
  Heart,
  Users,
  Timer,
  Phone,
  Menu,
  X,
} from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  const links = [
    {
      name: "Home",
      href: "/",
      icon: LayoutDashboard,
    },

    {
      name: "Resources",
      href: "/resources",
      icon: BookOpen,
    },

    {
      name: "Study",
      href: "/study",
      icon: GraduationCap,
    },

    {
      name: "Announcements",
      href: "/announcements",
      icon: Bell,
    },

    {
      name: "Events",
      href: "/events",
      icon: Calendar,
    },

    {
      name: "Leaderboard",
      href: "/leaderboard",
      icon: Trophy,
    },

    {
      name: "Gallery",
      href: "/gallery",
      icon: ImageIcon,
    },

    {
      name: "News",
      href: "/news",
      icon: Newspaper,
    },

    {
      name: "Wellness",
      href: "/wellness",
      icon: Heart,
    },

    {
      name: "Teachers",
      href: "/teachers",
      icon: Users,
    },

    {
      name: "Countdown",
      href: "/countdown",
      icon: Timer,
    },

    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
    },
  ]

  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">

        {/* MOBILE TOPBAR */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between px-5 py-4">

          <h1 className="text-2xl font-bold">
            GIHS CAMPUS HUB
          </h1>

          <button onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        <div className="flex">

          {/* SIDEBAR */}
          <aside
            className={`
              fixed top-0 left-0 z-50
              h-screen w-72 bg-white shadow-xl
              transition-transform duration-300
              overflow-y-auto
              ${open ? "translate-x-0" : "-translate-x-full"}
              lg:translate-x-0
            `}
          >

            {/* LOGO */}
            <div className="p-6 border-b sticky top-0 bg-white z-10">

              <div className="flex items-center justify-between">

                <h1 className="text-3xl font-bold">
                  GIHS
                </h1>

                <button
                  className="lg:hidden"
                  onClick={() => setOpen(false)}
                >
                  <X size={26} />
                </button>

              </div>

            </div>

            {/* LINKS */}
            <nav className="p-4 space-y-2">

              {links.map((link) => {
                const Icon = link.icon

                const active = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center gap-4
                      px-5 py-4 rounded-2xl
                      transition-all duration-200
                      font-medium
                      ${
                        active
                          ? "bg-black text-white shadow-lg"
                          : "hover:bg-gray-100"
                      }
                    `}
                  >
                    <Icon size={22} />
                    {link.name}
                  </Link>
                )
              })}

            </nav>

          </aside>

          {/* BACKDROP */}
          {open && (
            <div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
          )}

          {/* PAGE CONTENT */}
          <main
            className="
              flex-1
              min-h-screen
              lg:ml-72
              pt-24 lg:pt-8
              px-5 lg:px-10
              pb-10
            "
          >
            {children}
          </main>

        </div>

      </body>
    </html>
  )
}