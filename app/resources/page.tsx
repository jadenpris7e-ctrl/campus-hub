"use client"

import { useState } from "react"

import {
  GraduationCap,
  BookOpen,
  FileText,
  Search,
} from "lucide-react"

type SubjectsType = {
  [key: number]: {
    [subject: string]: string[]
  }
}

export default function ResourcesPage() {

  const [selectedGrade, setSelectedGrade] =
    useState<number | null>(null)

  const [selectedSubject, setSelectedSubject] =
    useState<string | null>(null)

  const [search, setSearch] = useState("")

  const subjectsByGrade: SubjectsType = {

    9: {

      Mathematics: [
        "Number Systems",
        "Polynomials",
        "Coordinate Geometry",
      ],

      Science: [
        "Matter Around Us",
        "Atoms & Molecules",
      ],

      English: [
        "The Fun They Had",
      ],
    },

    10: {

      Mathematics: [
        "Trigonometry",
        "Statistics",
      ],

      Science: [
        "Light",
        "Electricity",
      ],

      English: [
        "The Last Leaf",
      ],
    },

    11: {

      Physics: [
        "Motion",
        "Laws of Motion",
      ],

      Chemistry: [
        "Structure of Atom",
        "Chemical Bonding",
      ],

      Mathematics: [
        "Sets",
        "Relations & Functions",
      ],

      English: [
        "The Portrait of a Lady",
      ],
    },

    12: {

      Physics: [
        "Electrostatics",
        "Current Electricity",
        "Magnetism",
      ],

      Chemistry: [
        "Solutions",
        "Electrochemistry",
      ],

      Mathematics: [
        "Matrices",
        "Calculus",
      ],

      English: [
        "Lost Spring",
      ],
    },
  }

  const allChapters = Object.entries(subjectsByGrade).flatMap(
    ([grade, subjects]) =>

      Object.entries(subjects).flatMap(
        ([subject, chapters]) =>

          chapters.map((chapter) => ({
            grade,
            subject,
            chapter,
          }))
      )
  )

  return (
    <main className="min-h-screen space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] rounded-[35px] p-10 text-white shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          PROJECT UNKNOWN
        </p>

        <div className="flex items-center gap-4 mb-4">

          <div className="bg-white/20 p-4 rounded-3xl backdrop-blur">

            <GraduationCap size={42} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Study Resources
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Smart learning portal for Grades 9–12
            </p>

          </div>

        </div>

        {/* SEARCH */}
        <div className="relative mt-8">

          <Search
            className="absolute left-5 top-4 text-white/70"
            size={22}
          />

          <input
            type="text"
            placeholder="Search grade, subject or chapter..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-white/15
              backdrop-blur-md
              border border-white/20
              rounded-2xl
              pl-14
              pr-5
              py-4
              outline-none
              text-white
              placeholder:text-white/70
            "
          />

        </div>

      </section>

      {/* SEARCH RESULTS */}
      {search && !selectedGrade && (

        <section>

          <h2 className="text-3xl font-bold mb-6">
            Search Results
          </h2>

          <div className="grid gap-5">

            {allChapters
              .filter((item) => {

                const searchText = search.toLowerCase()

                return (
                  item.chapter.toLowerCase().includes(searchText) ||
                  item.subject.toLowerCase().includes(searchText) ||
                  `grade ${item.grade}`.includes(searchText)
                )
              })
              .map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    border border-slate-200
                    p-7
                  "
                >

                  <p className="text-sm text-gray-500 mb-2">
                    Grade {item.grade}
                  </p>

                  <h3 className="text-2xl font-bold mb-2">
                    {item.chapter}
                  </h3>

                  <p className="text-gray-600 mb-5">
                    {item.subject}
                  </p>

                </div>

              ))}

          </div>

        </section>

      )}

      {/* GRADES */}
      {!selectedGrade && !search && (

        <section>

          <h2 className="text-3xl font-bold mb-6">
            Select Grade
          </h2>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">

            {[9, 10, 11, 12].map((grade) => (

              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className="
                  bg-white
                  rounded-[30px]
                  shadow-lg
                  border border-slate-200
                  p-10
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  text-left
                "
              >

                <div className="bg-indigo-100 text-indigo-600 w-fit p-4 rounded-2xl mb-5">

                  <GraduationCap size={30} />

                </div>

                <h3 className="text-4xl font-extrabold mb-2">
                  {grade}
                </h3>

                <p className="text-gray-500">
                  CBSE Grade {grade}
                </p>

              </button>

            ))}

          </div>

        </section>

      )}

      {/* SUBJECTS */}
      {selectedGrade && !selectedSubject && (

        <section>

          <button
            onClick={() => setSelectedGrade(null)}
            className="mb-6 text-blue-600 font-medium"
          >
            ← Back to Grades
          </button>

          <h2 className="text-3xl font-bold mb-6">
            Grade {selectedGrade} Subjects
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {Object.keys(subjectsByGrade[selectedGrade]).map((subject) => (

              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  border border-slate-200
                  p-7
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  text-left
                "
              >

                <div className="bg-blue-100 text-blue-600 w-fit p-4 rounded-2xl mb-5">

                  <BookOpen size={28} />

                </div>

                <h3 className="text-2xl font-bold">
                  {subject}
                </h3>

              </button>

            ))}

          </div>

        </section>

      )}

      {/* CHAPTERS */}
      {selectedGrade && selectedSubject && (

        <section>

          <button
            onClick={() => setSelectedSubject(null)}
            className="mb-6 text-blue-600 font-medium"
          >
            ← Back to Subjects
          </button>

          <h2 className="text-3xl font-bold mb-6">
            Grade {selectedGrade} → {selectedSubject}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {subjectsByGrade[selectedGrade]?.[selectedSubject]?.map(
              (chapter) => (

                <div
                  key={chapter}
                  className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    border border-slate-200
                    p-7
                  "
                >

                  <div className="flex items-center gap-4 mb-5">

                    <div className="bg-purple-100 text-purple-600 p-4 rounded-2xl">

                      <FileText size={24} />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {chapter}
                      </h3>

                      <p className="text-gray-500">
                        Chapter Resources
                      </p>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </section>

      )}

    </main>
  )
}