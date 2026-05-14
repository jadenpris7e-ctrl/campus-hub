import {
  Users,
  Upload,
  FolderOpen,
  Bell,
  ArrowRight,
} from "lucide-react"

export default function StaffPortal() {

  const tools = [

    {
      title: "Upload Resources",
      desc: "Manage notes and worksheets",
      icon: Upload,
      color: "from-orange-500 to-red-500",
    },

    {
      title: "Manage Folders",
      desc: "Organize Google Drive resources",
      icon: FolderOpen,
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Post Announcements",
      desc: "Update school notices",
      icon: Bell,
      color: "from-violet-500 to-indigo-500",
    },
  ]

  return (
    <main className="space-y-8">

      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-[35px] p-10 shadow-2xl">

        <div className="flex items-center gap-5 mb-5">

          <div className="bg-white/20 p-5 rounded-3xl">

            <Users size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-black">
              Staff Portal
            </h1>

            <p className="text-white/90 text-lg mt-2">
              Teacher & staff management system
            </p>

          </div>

        </div>

      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {tools.map((tool, index) => {

          const Icon = tool.icon

          return (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                border border-slate-200
                overflow-hidden
                hover:shadow-2xl
                transition-all
              "
            >

              <div className={`h-3 bg-gradient-to-r ${tool.color}`} />

              <div className="p-8">

                <div className="flex items-center justify-between mb-8">

                  <div className="bg-slate-100 p-4 rounded-2xl">

                    <Icon size={30} />

                  </div>

                  <ArrowRight />

                </div>

                <h2 className="text-2xl font-bold mb-3">
                  {tool.title}
                </h2>

                <p className="text-slate-500">
                  {tool.desc}
                </p>

              </div>

            </div>

          )
        })}

      </section>

    </main>
  )
}