"use client"

import Link from "next/link"

import {
  Bell,
  Calendar,
  Trophy,
  Bot,
  Newspaper,
  GraduationCap,
  ArrowRight,
  Search,
  Heart,
  Users,
  Timer,
  Phone,
  Image as ImageIcon,
} from "lucide-react"

import { useState } from "react"

export default function HomePage() {

  const [query, setQuery] = useState("")

  const modules = [

    {
      name: "Resources",
      href: "/resources",
    },

    {
      name: "AI Assistant",
      href: "/ai",
    },

    {
      name: "Announcements",
      href: "/announcements",
    },

    {
      name: "Events",
      href: "/events",
    },

    {
      name: "Leaderboard",
      href: "/leaderboard",
    },

    {
      name: "Gallery",
      href: "/gallery",
    },

    {
      name: "News",
      href: "/news",
    },

    {
      name: "Wellness",
      href: "/wellness",
    },

    {
      name: "Teachers",
      href: "/teachers",
    },

    {
      name: "Countdown",
      href: "/countdown",
    },

    {
      name: "Contact",
      href: "/contact",
    },

  ]

  const filteredModules = modules.filter((module) =>
    module.name.toLowerCase().includes(query.toLowerCase())
  )

  const quickLinks = [

    {
      title: "Announcements",
      href: "/announcements",
      icon: Bell,
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Events",
      href: "/events",
      icon: Calendar,
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Leaderboard",
      href: "/leaderboard",
      icon: Trophy,
      color: "from-yellow-400 to-orange-400",
    },

    {
      title: "AI Assistant",
      href: "/ai",
      icon: Bot,
      color: "from-violet-500 to-indigo-500",
    },

    {
      title: "News",
      href: "/news",
      icon: Newspaper,
      color: "from-slate-700 to-slate-900",
    },

    {
      title: "Resources",
      href: "/resources",
      icon: GraduationCap,
      color: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#EC4899] text-white rounded-[40px] p-10 lg:p-14 shadow-2xl">

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">

          <p className="uppercase tracking-[5px] text-sm text-white/80 mb-4">
            GIHS DIGITAL ECOSYSTEM
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">

            GIHS Campus Hub

          </h1>

          <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-8">

            A modern smart campus platform built for grades 9 - 12

          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/resources"
              className="
                bg-white text-black
                px-7 py-4 rounded-2xl
                font-semibold
                hover:scale-105
                transition
              "
            >
              Explore Resources
            </Link>

            <Link
              href="/ai"
              className="
                bg-black/20 backdrop-blur
                border border-white/20
                px-7 py-4 rounded-2xl
                font-semibold
                hover:bg-black/30
                transition
              "
            >
              Open AI Assistant
            </Link>

          </div>

        </div>

      </section>

      {/* UNIVERSAL SEARCH */}
      <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

        <div className="flex items-center gap-4 mb-6">

          <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">

            <Search size={28} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Universal Search
            </h2>

            <p className="text-gray-500 mt-1">
              Quickly navigate across campus modules
            </p>

          </div>

        </div>

        <div className="relative mb-6">

          <Search
            className="absolute left-5 top-4 text-gray-400"
            size={22}
          />

          <input
            type="text"
            placeholder="Search modules..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full
              bg-slate-100
              border border-slate-200
              rounded-3xl
              py-4 pl-14 pr-5
              text-lg
              outline-none
            "
          />

        </div>

        <div className="flex flex-wrap gap-3">

          {filteredModules.length > 0 ? (

            filteredModules.map((module, index) => (

              <Link
                key={index}
                href={module.href}
                className="
                  bg-slate-100
                  hover:bg-blue-100
                  hover:text-blue-700
                  transition
                  px-5 py-3
                  rounded-2xl
                  font-medium
                "
              >

                {module.name}

              </Link>

            ))

          ) : (

            <div className="bg-red-100 text-red-600 px-5 py-3 rounded-2xl">

              No modules found

            </div>

          )}

        </div>

      </section>

      {/* QUICK ACCESS */}
      <section>

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-4xl font-bold">
              Quick Access
            </h2>

            <p className="text-gray-500 mt-2">
              Navigate through the smart campus ecosystem
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {quickLinks.map((item, index) => {

            const Icon = item.icon

            return (

              <Link
                key={index}
                href={item.href}
                className="
                  group
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

                <div className={`bg-gradient-to-r ${item.color} h-3`} />

                <div className="p-8">

                  <div className="flex items-center justify-between mb-8">

                    <div className="bg-slate-100 p-4 rounded-2xl">

                      <Icon size={30} />

                    </div>

                    <ArrowRight className="group-hover:translate-x-1 transition" />

                  </div>

                  <h3 className="text-3xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500">
                    Open the {item.title} module
                  </p>

                </div>

              </Link>

            )
          })}

        </div>

      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <h2 className="text-5xl font-black text-blue-600 mb-3">
            12+
          </h2>

          <p className="text-xl font-semibold mb-2">
            Smart Modules
          </p>

          <p className="text-gray-500">
            Integrated systems for school management and learning.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <h2 className="text-5xl font-black text-violet-600 mb-3">
            AI
          </h2>

          <p className="text-xl font-semibold mb-2">
            Smart Resource Search
          </p>

          <p className="text-gray-500">
            Quickly discover notes, worksheets and academic material.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <h2 className="text-5xl font-black text-emerald-600 mb-3">
            24/7
          </h2>

          <p className="text-xl font-semibold mb-2">
            Digital Accessibility
          </p>

          <p className="text-gray-500">
            Students can access resources anytime from anywhere.
          </p>

        </div>

      </section>

    </main>
  )
}