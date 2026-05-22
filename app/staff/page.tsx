"use client"

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth"

import {
  auth,
} from "@/lib/firebase"

import {
  getUserRole,
} from "@/lib/getRole"

import { supabase }
from "@/lib/supabase"

import {
  Upload,
  BookOpen,
  FileText,
  LogOut,
  ExternalLink,
} from "lucide-react"

export default function StaffPage() {

  const router = useRouter()

  const [loading, setLoading] =
    useState(true)

  const [title, setTitle] =
    useState("")

  const [grade, setGrade] =
    useState("9")

  const [subject, setSubject] =
    useState("Mathematics")

  const [type, setType] =
    useState("Worksheet")

  const [file, setFile] =
    useState<File | null>(null)

  const [uploads, setUploads] =
    useState<any[]>([])

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {

          if (!user?.email) {

            router.push(
              "/login?role=staff"
            )

            return
          }

          const role =
            await getUserRole(
              user.email
            )

          if (
            role !== "teacher" &&
            role !== "admin"
          ) {

            router.push("/")

            return
          }

          fetchUploads()

          setLoading(false)
        }
      )

    return () => unsubscribe()

  }, [router])

  async function fetchUploads() {

    const { data } =
      await supabase
        .from("resources")
        .select("*")
        .order(
          "created_at",
          { ascending: false }
        )

    if (data) {

      setUploads(data)
    }
  }

  async function addUpload() {

    if (
      !title ||
      !grade ||
      !subject ||
      !file
    ) {

      alert(
        "Please fill all fields"
      )

      return
    }

    const cleanSubject =
      subject
        .toLowerCase()
        .replace(/\s+/g, "-")

    const filePath =

      `grade-${grade}/` +

      `${cleanSubject}/` +

      `${Date.now()}-${file.name}`

    const {
      error: uploadError,
    } =
      await supabase.storage
        .from("resources")
        .upload(
          filePath,
          file
        )

    if (uploadError) {

      console.log(uploadError)

      alert(
        "Upload failed"
      )

      return
    }

    const fileUrl =
      supabase.storage
        .from("resources")
        .getPublicUrl(filePath)
        .data.publicUrl

    const {
      error: dbError,
    } =
      await supabase
        .from("resources")
        .insert([{

          title,

          grade:
            Number(grade),

          subject,

          type,

          fileurl:
            fileUrl,
        }])

    if (dbError) {

      console.log(dbError)

      alert(
        "Database insert failed"
      )

      return
    }

    alert(
      "Uploaded successfully!"
    )

    setTitle("")
    setFile(null)

    fetchUploads()
  }

  async function handleLogout() {

    await signOut(auth)

    router.push("/")
  }

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

      <section className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white rounded-[35px] p-10 shadow-2xl">

        <h1 className="text-5xl font-extrabold mb-4">
          Upload Academic Resources
        </h1>

      </section>

      <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Chapter Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="bg-slate-100 border border-slate-200 rounded-2xl px-5 py-4 outline-none"
          />

          <select
            value={grade}
            onChange={(e) =>
              setGrade(e.target.value)
            }
            className="bg-slate-100 border border-slate-200 rounded-2xl px-5 py-4 outline-none"
          >

            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>

          </select>

          <select
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
            className="bg-slate-100 border border-slate-200 rounded-2xl px-5 py-4 outline-none"
          >

            <option>
              Mathematics
            </option>

            <option>
              Science
            </option>

            <option>
              Physics
            </option>

            <option>
              Chemistry
            </option>

            <option>
              Biology
            </option>

            <option>
              English
            </option>

          </select>

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
            className="bg-slate-100 border border-slate-200 rounded-2xl px-5 py-4 outline-none"
          >

            <option>
              Textbook
            </option>

            <option>
              Worksheet
            </option>

            <option>
              PYQ
            </option>

          </select>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => {

              if (e.target.files?.[0]) {

                setFile(
                  e.target.files[0]
                )
              }
            }}
            className="md:col-span-2 bg-slate-100 border border-slate-200 rounded-2xl px-5 py-4"
          />

        </div>

        <button
          onClick={addUpload}
          className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-2xl"
        >

          Upload Resource

        </button>

      </section>

      <section className="space-y-6">

        <h2 className="text-3xl font-bold">
          Uploaded Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {uploads.map(
            (item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7"
              >

                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 mb-4">

                  Grade {item.grade}
                  {" • "}
                  {item.subject}
                  {" • "}
                  {item.type}

                </p>

                <a
                  href={item.fileurl}
                  target="_blank"
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-2xl w-fit"
                >

                  <ExternalLink
                    size={20}
                  />

                  Open Resource

                </a>

              </div>
            )
          )}

        </div>

      </section>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-2xl"
      >

        <LogOut size={22} />

        Logout

      </button>

    </main>
  )
}