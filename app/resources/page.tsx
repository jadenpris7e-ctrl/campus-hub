"use client"

import { useState } from "react"

import {
  GraduationCap,
  BookOpen,
  FileText,
  Search,
} from "lucide-react"

export default function ResourcesPage() {

  const [selectedGrade, setSelectedGrade] = useState<number | null>(null)

  const [selectedSubject, setSelectedSubject] =
    useState<string | null>(null)

  const [search, setSearch] = useState("")

  const subjectsByGrade: any = {

    9: {

      Mathematics: {

        overall: [
          "Full Syllabus Notes",
          "Formula Sheet",
          "Important Questions",
        ],

        chapters: [
          "Number Systems",
          "Polynomials",
          "Coordinate Geometry",
        ],
      },

      Science: {

        overall: [
          "Science Formula Sheet",
          "Lab Manual",
        ],

        chapters: [
          "Matter Around Us",
          "Atoms & Molecules",
        ],
      },

      English: {

        overall: [
          "Grammar Handbook",
          "Writing Skills PDF",
        ],

        chapters: [
          "The Fun They Had",
        ],
      },
    },

    10: {

      Mathematics: {

        overall: [
          "Full Revision Notes",
          "Formula Booklet",
        ],

        chapters: [
          "Trigonometry",
          "Statistics",
        ],
      },

      Science: {

        overall: [
          "Science Revision Notes",
        ],

        chapters: [
          "Light",
          "Electricity",
        ],
      },

      English: {

        overall: [
          "Grammar Practice PDF",
        ],

        chapters: [
          "The Last Leaf",
        ],
      },
    },

    11: {

      Physics: {

        overall: [
          "Complete Physics Notes",
          "Derivations PDF",
        ],

        chapters: [
          "Motion",
          "Laws of Motion",
        ],
      },

      Chemistry: {

        overall: [
          "Organic Chemistry Notes",
        ],

        chapters: [
          "Structure of Atom",
          "Chemical Bonding",
        ],
      },

      Mathematics: {

        overall: [
          "Formula Handbook",
        ],

        chapters: [
          "Sets",
          "Relations & Functions",
        ],
      },

      English: {

        overall: [
          "Writing Skills PDF",
        ],

        chapters: [
          "The Portrait of a Lady",
        ],
      },
    },

    12: {

      Physics: {

        overall: [
          "Complete Physics Notes",
          "Formula Booklet",
          "Important Derivations",
        ],

        chapters: [
          "Electrostatics",
          "Current Electricity",
          "Magnetism",
        ],
      },

      Chemistry: {

        overall: [
          "Organic Chemistry Notes",
          "Named Reactions PDF",
        ],

        chapters: [
          "Solutions",
          "Electrochemistry",
        ],
      },

      Mathematics: {

        overall: [
          "Complete Calculus Notes",
          "Formula Sheet",
        ],

        chapters: [
          "Matrices",
          "Calculus",
        ],
      },

      English: {

        overall: [
          "Writing Skills",
          "Grammar PDF",
        ],

        chapters: [
          "Lost Spring",
        ],
      },
    },
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <section className="bg-white rounded-3xl shadow border p-8 mb-8">

        <div className="flex items-center gap-3 mb-4">

          <GraduationCap size={34} />

          <h1 className="text-4xl font-bold">
            Study Resources
          </h1>

        </div>

        <p className="text-gray-500 mb-6">
          Smart learning portal for Grades 9–12
        </p>

        {/* SEARCH */}
        <div className="relative">

          <Search
            className="absolute left-4 top-3 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search chapter..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-100 border rounded-xl pl-12 pr-4 py-3 outline-none"
          />

        </div>

      </section>

      {/* GRADES */}
      {!selectedGrade && (

        <section>

          <h2 className="text-2xl font-bold mb-5">
            Select Grade
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {[9,10,11,12].map((grade) => (

              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className="bg-white rounded-2xl shadow border p-8 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >

                <h3 className="text-3xl font-bold">
                  Grade {grade}
                </h3>

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
            className="mb-5 text-blue-600"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold mb-5">
            Grade {selectedGrade} Subjects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {Object.keys(subjectsByGrade[selectedGrade]).map((subject) => (

              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className="bg-white rounded-2xl shadow border p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 text-left"
              >

                <div className="flex items-center gap-3 mb-2">

                  <BookOpen size={24} />

                  <h3 className="text-xl font-semibold">
                    {subject}
                  </h3>

                </div>

              </button>

            ))}

          </div>

        </section>

      )}

      {/* SUBJECT PAGE */}
      {selectedGrade && selectedSubject && (

        <section>

          <button
            onClick={() => setSelectedSubject(null)}
            className="mb-5 text-blue-600"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold mb-6">

            Grade {selectedGrade} → {selectedSubject}

          </h2>

          {/* OVERALL SUBJECT RESOURCES */}

          <div className="bg-white rounded-2xl shadow border p-6 mb-8">

            <h3 className="text-2xl font-bold mb-5">
              Overall Subject Resources
            </h3>

            <div className="flex flex-wrap gap-3">

              {subjectsByGrade[selectedGrade][selectedSubject]
                .overall
                .map((item: string) => (

                  <button
                    key={item}
                    className="bg-black text-white px-5 py-3 rounded-xl hover:opacity-90 transition"
                  >
                    {item}
                  </button>

                ))}

            </div>

          </div>

          {/* CHAPTERS */}

          <h3 className="text-2xl font-bold mb-5">
            Chapters
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {subjectsByGrade[selectedGrade][selectedSubject]
              .chapters
              .filter((chapter: string) =>
                chapter.toLowerCase().includes(search.toLowerCase())
              )
              .map((chapter: string) => (

                <div
                  key={chapter}
                  className="bg-white rounded-2xl shadow border p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                >

                  <div className="flex items-center gap-3 mb-4">

                    <FileText size={22} />

                    <h3 className="text-xl font-semibold">
                      {chapter}
                    </h3>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    <button className="bg-black text-white px-4 py-2 rounded-xl">
                      Notes
                    </button>

                    <button className="bg-gray-200 px-4 py-2 rounded-xl">
                      Worksheets
                    </button>

                    <button className="bg-gray-200 px-4 py-2 rounded-xl">
                      PYQs
                    </button>

                    <button className="bg-gray-200 px-4 py-2 rounded-xl">
                      QB
                    </button>

                  </div>

                </div>

              ))}

          </div>

        </section>

      )}

    </main>
  )
}