import Link from "next/link"

import {
  Shield,
  GraduationCap,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react"

export default function LoginPage() {

  const portals = [

    {
      title: "Public View",
      desc: "Access public campus information",
      icon: Globe,
      href: "/",
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Student Login",
      desc: "Access study resources and academics",
      icon: GraduationCap,
      href: "/student",
      color: "from-emerald-500 to-teal-500",
    },

    {
      title: "Staff Login",
      desc: "Manage teaching resources and uploads",
      icon: Users,
      href: "/staff",
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Admin Login",
      desc: "Full system administration access",
      icon: Shield,
      href: "/admin",
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
            Choose your access portal
          </p>

        </div>

        {/* PORTALS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {portals.map((portal, index) => {

            const Icon = portal.icon

            return (

              <Link
                key={index}
                href={portal.href}
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
                "
              >

                <div
                  className={`h-3 bg-gradient-to-r ${portal.color}`}
                />

                <div className="p-8">

                  <div className="flex items-center justify-between mb-8">

                    <div
                      className={`
                        bg-gradient-to-r
                        ${portal.color}
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

                    {portal.title}

                  </h2>

                  <p className="text-slate-500 leading-relaxed">

                    {portal.desc}

                  </p>

                </div>

              </Link>

            )
          })}

        </div>

      </div>

    </main>
  )
}