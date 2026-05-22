"use client"

export const dynamic = "force-dynamic"

import {
  Suspense,
  useState,
} from "react"

import {
  useRouter,
  useSearchParams,
} from "next/navigation"

import {
  Shield,
  GraduationCap,
  Users,
  ArrowRight,
  Lock,
  Mail,
} from "lucide-react"

import {
  signInWithEmailAndPassword,
} from "firebase/auth"

import { auth } from "@/lib/firebase"

function LoginContent() {

  const router = useRouter()

  const searchParams =
    useSearchParams()

  const portal =
    searchParams.get("portal") || ""

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState("")

  async function handleLogin() {

    try {

      setLoading(true)

      setError("")

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (portal === "student") {

        router.push("/student")
      }

      else if (portal === "staff") {

        router.push("/staff")
      }

      else if (portal === "admin") {

        router.push("/admin")
      }

      else {

        router.push("/")
      }

    }

    catch {

      setError(
        "Invalid email or password"
      )
    }

    finally {

      setLoading(false)
    }
  }

  const portals = [

    {
      title: "Student Portal",
      role: "student",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Staff Portal",
      role: "staff",
      icon: Users,
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Admin Portal",
      role: "admin",
      icon: Shield,
      color: "from-violet-600 to-indigo-600",
    },
  ]

  return (

    <main className="min-h-screen bg-[#EAF1F8] flex items-center justify-center p-6">

      <div className="w-full max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="uppercase tracking-[5px] text-sm text-slate-500 mb-3">

            GIHS CAMPUS HUB

          </p>

          <h1 className="text-6xl font-black text-[#10243E] mb-4">

            Portal Access

          </h1>

          <p className="text-xl text-slate-500">

            Secure authentication system

          </p>

        </div>

        {/* PORTAL SELECT */}
        {!portal && (

          <div className="grid md:grid-cols-3 gap-8">

            {portals.map((item, index) => {

              const Icon = item.icon

              return (

                <button
                  key={index}
                  onClick={() =>
                    router.push(
                      `/login?portal=${item.role}`
                    )
                  }
                  className="
                    group
                    bg-white
                    rounded-[35px]
                    overflow-hidden
                    shadow-xl
                    border border-slate-200
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    text-left
                  "
                >

                  <div
                    className={`h-3 bg-gradient-to-r ${item.color}`}
                  />

                  <div className="p-8">

                    <div className="flex items-center justify-between mb-8">

                      <div
                        className={`
                          bg-gradient-to-r
                          ${item.color}
                          text-white
                          p-5
                          rounded-3xl
                        `}
                      >

                        <Icon size={34} />

                      </div>

                      <ArrowRight
                        className="
                          text-slate-400
                          group-hover:translate-x-1
                          transition
                        "
                      />

                    </div>

                    <h2 className="text-3xl font-bold text-[#10243E] mb-3">

                      {item.title}

                    </h2>

                  </div>

                </button>
              )
            })}

          </div>
        )}

        {/* LOGIN FORM */}
        {portal && (

          <div className="max-w-xl mx-auto bg-white rounded-[35px] shadow-2xl border border-slate-200 p-10">

            <button
              onClick={() =>
                router.push("/login")
              }
              className="text-blue-600 mb-8"
            >

              ← Back

            </button>

            <h2 className="text-4xl font-black text-[#10243E] mb-3 capitalize">

              {portal} Login

            </h2>

            <p className="text-slate-500 mb-8">

              Enter your credentials

            </p>

            {/* EMAIL */}
            <div className="mb-5">

              <label className="block mb-2 font-semibold">

                Email

              </label>

              <div className="flex items-center bg-slate-100 rounded-2xl px-4">

                <Mail
                  className="text-slate-400"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="
                    w-full
                    bg-transparent
                    px-4
                    py-4
                    outline-none
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold">

                Password

              </label>

              <div className="flex items-center bg-slate-100 rounded-2xl px-4">

                <Lock
                  className="text-slate-400"
                  size={20}
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="
                    w-full
                    bg-transparent
                    px-4
                    py-4
                    outline-none
                  "
                />

              </div>

            </div>

            {/* ERROR */}
            {error && (

              <div className="bg-red-100 text-red-600 rounded-2xl p-4 mb-6">

                {error}

              </div>
            )}

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="
                w-full
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                text-white
                py-4
                rounded-2xl
                font-bold
                hover:scale-[1.02]
                transition
              "
            >

              {loading
                ? "Signing In..."
                : "Login"}

            </button>

          </div>
        )}

      </div>

    </main>
  )
}

export default function LoginPage() {

  return (

    <Suspense>

      <LoginContent />

    </Suspense>
  )
}