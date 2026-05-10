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
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  const [collapsed, setCollapsed] = useState(false)

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
      name: "NS SCOPE",
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

      <body className="bg-[#EAF1F8] text-[#16324F]">

        {/* MOBILE TOPBAR */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#355C7D] text-white shadow-xl flex items-center justify-between px-5 py-4">

          <h1 className="text-xl font-bold tracking-wide">
            GIHS CAMPUS HUB
          </h1>

          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-white/10 p-2 rounded-xl transition"
          >
            <Menu size={28} />
          </button>

        </div>

        <div className="flex">

          {/* SIDEBAR */}
          <aside
            className={`
              fixed top-0 left-0 z-50
              h-screen
              bg-[#355C7D]
              text-[#F8FAFC]
              shadow-2xl
              transition-all duration-300
              overflow-y-auto
              border-r border-white/10
              ${collapsed ? "w-24" : "w-72"}
              ${open ? "translate-x-0" : "-translate-x-full"}
              lg:translate-x-0
            `}
          >

            {/* LOGO */}
            <div className="p-6 border-b border-white/10 sticky top-0 bg-[#355C7D] z-10">

              <div className="flex items-center justify-between">

                {!collapsed && (
                  <div>

                    <h1 className="text-3xl font-extrabold leading-tight tracking-wide">
                      GIHS
                    </h1>

                    <p className="text-sm text-[#D6E4F0]">
                      Campus Hub
                    </p>

                  </div>
                )}

                {/* COLLAPSE BUTTON */}
                <button
                  className="hidden lg:flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl p-2 transition"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  {collapsed ? (
                    <ChevronRight size={22} />
                  ) : (
                    <ChevronLeft size={22} />
                  )}
                </button>

              </div>

            </div>

            {/* NAVIGATION */}
            <nav className="p-4 space-y-3">

              {links.map((link) => {

                const Icon = link.icon

                const active = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center
                      ${collapsed ? "justify-center" : "gap-4"}
                      px-5 py-4 rounded-2xl
                      transition-all duration-200
                      font-medium
                      ${
                        active
                          ? "bg-[#F8FAFC] text-[#355C7D] shadow-lg"
                          : "hover:bg-[#4B7AA3]"
                      }
                    `}
                  >

                    <Icon size={22} />

                    {!collapsed && (
                      <span className="tracking-wide">
                        {link.name}
                      </span>
                    )}

                  </Link>
                )
              })}

            </nav>

          </aside>

          {/* MOBILE BACKDROP */}
          {open && (
            <div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
          )}

          {/* PAGE CONTENT */}
          <main
            className={`
              flex-1
              min-h-screen
              pt-24 lg:pt-8
              px-6 lg:px-10
              pb-10
              transition-all duration-300
              overflow-hidden
              ${collapsed ? "lg:ml-24" : "lg:ml-72"}
            `}
          >

            {children}

          </main>

        </div>

      </body>

    </html>
  )
}