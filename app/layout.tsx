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
  Shield,
  ChevronDown,
  User,
  UserCog,
} from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  const [collapsed, setCollapsed] = useState(false)

  const [loginOpen, setLoginOpen] = useState(false)

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
      name: "Teacher Profiles",
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

      <body className="bg-[#EAF1F8] text-[#10243E]">

        {/* MOBILE TOPBAR */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#1E3A5F] text-white shadow-lg flex items-center justify-between px-5 py-4">

          <h1 className="text-xl font-bold">
            GIHS CAMPUS HUB
          </h1>

          <button onClick={() => setOpen(!open)}>
            <Menu size={28} />
          </button>

        </div>

        <div className="flex">

          {/* SIDEBAR */}
          <aside
            className={`
              fixed top-0 left-0 z-50
              h-screen
              bg-[#1E3A5F]
              text-white
              shadow-2xl
              transition-all duration-300
              overflow-y-auto
              ${collapsed ? "w-24" : "w-72"}
              ${open ? "translate-x-0" : "-translate-x-full"}
              lg:translate-x-0
            `}
          >

            {/* LOGO */}
            <div className="p-6 border-b border-white/10 sticky top-0 bg-[#1E3A5F] z-10">

              <div className="flex items-center justify-between">

                {!collapsed && (

                  <div>

                    <h1 className="text-3xl font-black leading-tight">
                      GIHS
                    </h1>

                    <p className="text-sm text-white/70">
                      Campus Hub
                    </p>

                  </div>

                )}

                {/* COLLAPSE BUTTON */}
                <button
                  className="
                    hidden lg:flex
                    items-center justify-center
                    bg-white/10
                    hover:bg-white/20
                    rounded-2xl
                    p-2
                    transition
                  "
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
            <nav className="p-4 space-y-3 pb-24">

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
                      px-5 py-4 rounded-3xl
                      transition-all duration-200
                      font-medium
                      ${
                        active
                          ? "bg-gradient-to-r from-[#FFFFFF] to-[#DCEBFF] text-[#12355B] shadow-2xl"
                          : "hover:bg-gradient-to-r hover:from-white/20 hover:to-white/5 hover:translate-x-1 text-white"
                      }
                    `}
                  >

                    <Icon size={22} />

                    {!collapsed && (
                      <span>
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

            {/* TOP RIGHT LOGIN */}
            <div className="flex justify-end mb-6 relative">

              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="
                  bg-white
                  border border-slate-200
                  shadow-lg
                  hover:shadow-xl
                  px-5 py-3
                  rounded-2xl
                  flex items-center gap-3
                  transition
                "
              >

                <Shield size={20} />

                <span className="font-semibold">
                  Login
                </span>

                <ChevronDown size={18} />

              </button>

              {/* DROPDOWN */}
              {loginOpen && (

                <div
                  className="
                    absolute
                    top-16
                    right-0
                    w-72
                    bg-white
                    rounded-3xl
                    shadow-2xl
                    border border-slate-200
                    overflow-hidden
                    z-50
                  "
                >

                  <Link
                    href="/student"
                    className="
                      flex items-center gap-4
                      px-6 py-5
                      hover:bg-slate-100
                      transition
                    "
                  >

                    <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">

                      <User size={22} />

                    </div>

                    <div>

                      <h3 className="font-bold">
                        Student Portal
                      </h3>

                      <p className="text-sm text-gray-500">
                        Academic resources & learning
                      </p>

                    </div>

                  </Link>

                  <Link
                    href="/staff"
                    className="
                      flex items-center gap-4
                      px-6 py-5
                      hover:bg-slate-100
                      transition
                    "
                  >

                    <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl">

                      <Users size={22} />

                    </div>

                    <div>

                      <h3 className="font-bold">
                        Staff Portal
                      </h3>

                      <p className="text-sm text-gray-500">
                        Uploads & management
                      </p>

                    </div>

                  </Link>

                  <Link
                    href="/admin"
                    className="
                      flex items-center gap-4
                      px-6 py-5
                      hover:bg-slate-100
                      transition
                    "
                  >

                    <div className="bg-violet-100 text-violet-600 p-3 rounded-2xl">

                      <UserCog size={22} />

                    </div>

                    <div>

                      <h3 className="font-bold">
                        Admin Portal
                      </h3>

                      <p className="text-sm text-gray-500">
                        Full system control
                      </p>

                    </div>

                  </Link>

                </div>

              )}

            </div>

            {children}

          </main>

        </div>

      </body>

    </html>
  )
}