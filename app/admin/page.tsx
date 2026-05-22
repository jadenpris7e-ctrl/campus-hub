"use client"

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import {
  onAuthStateChanged,
} from "firebase/auth"

import {
  auth,
} from "@/lib/firebase"

import {
  getUserRole,
} from "@/lib/getRole"

import {
  Shield,
  Bell,
  Users,
  Calendar,
  LogOut,
} from "lucide-react"

export default function AdminPage() {

  const router = useRouter()

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {

        if (!user?.email) {

          router.push("/login?role=admin")

          return
        }

        const role = await getUserRole(user.email)

        if (role !== "admin") {

          router.push("/")

          return
        }

        setLoading(false)
      }
    )

    return () => unsubscribe()

  }, [router])

  if (loading) {

    return (

      <main className="p-10">

        <h1 className="text-3xl font-bold">
          Checking Access...
        </h1>

      </main>
    )
  }

  return (

    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          ADMIN CONTROL CENTER
        </p>

        <h1 className="text-5xl font-extrabold mb-4">
          Admin Dashboard
        </h1>

        <p className="text-lg text-white/90">
          Manage the entire school ecosystem.
        </p>

      </section>

      {/* ADMIN GRID */}
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">

          <div className="bg-violet-100 text-violet-600 p-4 rounded-2xl w-fit mb-5">

            <Bell size={30} />

          </div>

          <h2 className="text-2xl font-bold mb-3">
            Announcements
          </h2>

          <p className="text-gray-500">
            Upload notices and school updates.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">

          <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl w-fit mb-5">

            <Users size={30} />

          </div>

          <h2 className="text-2xl font-bold mb-3">
            User Management
          </h2>

          <p className="text-gray-500">
            Manage students and teachers.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">

          <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl w-fit mb-5">

            <Calendar size={30} />

          </div>

          <h2 className="text-2xl font-bold mb-3">
            Events
          </h2>

          <p className="text-gray-500">
            Manage school activities.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">

          <div className="bg-emerald-100 text-emerald-600 p-4 rounded-2xl w-fit mb-5">

            <Shield size={30} />

          </div>

          <h2 className="text-2xl font-bold mb-3">
            Platform Control
          </h2>

          <p className="text-gray-500">
            Full administrative access.
          </p>

        </div>

      </section>

      {/* LOGOUT */}
      <button
        onClick={() => {
          auth.signOut()
          router.push("/")
        }}
        className="flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-2xl"
      >

        <LogOut size={22} />

        Logout

      </button>

    </main>
  )
}