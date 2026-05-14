import {
  Users,
  Mail,
  GraduationCap,
  BookOpen,
  Award,
  Briefcase,
  Star,
} from "lucide-react"

export default function TeachersPage() {

  const teachers = [

    {
      name: "Mrs. Sarah Johnson",
      subject: "Mathematics",
      qualification: "M.Sc Mathematics",
      email: "sarah@gihs.edu",
      experience: "12 Years",
      skills: [
        "Calculus",
        "Algebra",
        "Olympiad Training",
      ],
      achievements: "Best Faculty Award 2024",
    },

    {
      name: "Mr. David Wilson",
      subject: "Physics",
      qualification: "M.Sc Physics",
      email: "david@gihs.edu",
      experience: "10 Years",
      skills: [
        "Mechanics",
        "Electronics",
        "Lab Training",
      ],
      achievements: "Science Mentor Excellence",
    },

    {
      name: "Mrs. Emily Carter",
      subject: "Chemistry",
      qualification: "M.Sc Chemistry",
      email: "emily@gihs.edu",
      experience: "8 Years",
      skills: [
        "Organic Chemistry",
        "Practical Training",
        "Research Guidance",
      ],
      achievements: "Top Chemistry Faculty",
    },

    {
      name: "Mr. James Anderson",
      subject: "English",
      qualification: "M.A English",
      email: "james@gihs.edu",
      experience: "15 Years",
      skills: [
        "Literature",
        "Public Speaking",
        "Creative Writing",
      ],
      achievements: "Debate Club Coordinator",
    },
  ]

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#EC4899] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          FACULTY DIRECTORY
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl backdrop-blur">

            <Users size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Teacher Profiles
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Meet the faculty members of GIHS Campus
            </p>

          </div>

        </div>

      </section>

      {/* TEACHERS GRID */}
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {teachers.map((teacher, index) => (

          <div
            key={index}
            className="
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

            {/* TOP BAR */}
            <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 h-3" />

            <div className="p-8">

              {/* PROFILE */}
              <div className="flex items-center gap-4 mb-8">

                <div className="
                  w-20 h-20
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-500
                  flex items-center justify-center
                  text-white text-3xl font-bold
                  shadow-lg
                ">

                  {teacher.name.charAt(4)}

                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    {teacher.name}
                  </h2>

                  <p className="text-gray-500">
                    {teacher.subject}
                  </p>

                </div>

              </div>

              {/* DETAILS */}
              <div className="space-y-5">

                <div className="flex items-center gap-3">

                  <GraduationCap
                    className="text-blue-600"
                    size={20}
                  />

                  <span>
                    {teacher.qualification}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <BookOpen
                    className="text-violet-600"
                    size={20}
                  />

                  <span>
                    Subject: {teacher.subject}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Briefcase
                    className="text-orange-500"
                    size={20}
                  />

                  <span>
                    Experience: {teacher.experience}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Award
                    className="text-pink-500"
                    size={20}
                  />

                  <span>
                    {teacher.achievements}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Mail
                    className="text-emerald-600"
                    size={20}
                  />

                  <span className="truncate">
                    {teacher.email}
                  </span>

                </div>

              </div>

              {/* SKILLS */}
              <div className="mt-8">

                <div className="flex items-center gap-2 mb-4">

                  <Star
                    className="text-yellow-500"
                    size={18}
                  />

                  <h3 className="font-semibold text-lg">
                    Skills
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {teacher.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                        bg-slate-100
                        px-4 py-2
                        rounded-2xl
                        text-sm
                        font-medium
                      "
                    >

                      {skill}

                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        ))}

      </section>

    </main>
  )
}