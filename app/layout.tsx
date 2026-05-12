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
  Award,
  Shield,
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
      name: "Winners",
      href: "/winners",
      icon: Award,
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
      name: "Admin",
      href: "/admin",
      icon: Shield,
    },

    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
    },
  ]

  return (
    <html lang="en">

      <body className="bg-[#F4F7FA] text-[#0B1F33]">

        {/* MOBILE TOPBAR */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#355C7D] text-black shadow-xl flex items-center justify-between px-5 py-4">

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
            <div className="p-6 border-b border-white/10 sticky top-0 bg-[#0B3C5D] z-20">

              <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>

                {!collapsed && (
                  <div>

                    <h1 className="text-3xl font-bold leading-tight widespace-nowrap">
                      GIHS
                    </h1>

                    <p className="text-sm text-black whitespace-nowrap">
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
            <nav className="p-4 space-y-3 mt-2">

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
                      ${collapsed ? "justify-center px-0" : "gap-4 px-5"}
                      py-4 
                      rounded-2xl
                      transition-all duration-200
                      font-medium
                      min-h-[60px]
                      overflow-hidden
                      ${
                        active
                          ? "bg-white text-[#0B3C5D] shadow-lg"
                          : "hover:bg-white/10"
                      }
                    `}
                  >
                    <div className="min-w-[22px] flex-justify-center">
                      <Icon size={22} />
                    </div>

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