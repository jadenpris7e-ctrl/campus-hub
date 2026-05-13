"use client"

import { useState } from "react"

import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react"

export default function ContactPage() {

  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: any) {

    e.preventDefault()

    setSubmitted(true)
  }

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#2563EB] via-[#0EA5E9] to-[#06B6D4] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          COMMUNICATION PORTAL
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <Phone size={40} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              Contact & Feedback
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Reach out, share suggestions and communicate with the school
            </p>

          </div>

        </div>

      </section>

      {/* GRID */}
      <section className="grid xl:grid-cols-2 gap-6">

        {/* CONTACT INFO */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <h2 className="text-3xl font-bold mb-8">
            School Information
          </h2>

          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-slate-100 rounded-2xl p-5">

              <Phone className="text-blue-600" size={24} />

              <div>

                <p className="text-gray-500 text-sm">
                  Phone
                </p>

                <p className="font-semibold text-lg">
                  +971 4 611 9400
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 bg-slate-100 rounded-2xl p-5">

              <Mail className="text-purple-600" size={24} />

              <div>

                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <p className="font-semibold text-lg">
                  gihs@gihsdubai.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 bg-slate-100 rounded-2xl p-5">

              <MapPin className="text-red-600" size={24} />

              <div>

                <p className="text-gray-500 text-sm">
                  Address
                </p>

                <p className="font-semibold text-lg">
                  P.O Box. 646,
                  Dubai, UAE
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* FEEDBACK FORM */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

          <h2 className="text-3xl font-bold mb-8">
            Send Feedback
          </h2>

          {!submitted ? (

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-slate-100
                  border border-slate-200
                  rounded-2xl
                  px-5 py-4
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  bg-slate-100
                  border border-slate-200
                  rounded-2xl
                  px-5 py-4
                  outline-none
                "
              />

              <textarea
                placeholder="Your Feedback"
                rows={6}
                className="
                  w-full
                  bg-slate-100
                  border border-slate-200
                  rounded-2xl
                  px-5 py-4
                  outline-none
                  resize-none
                "
              />

              <button
                type="submit"
                className="
                  flex items-center gap-3
                  bg-[#2563EB]
                  text-white
                  px-6 py-4
                  rounded-2xl
                  hover:scale-105
                  transition
                "
              >

                <Send size={20} />

                Submit Feedback

              </button>

            </form>

          ) : (

            <div className="bg-green-100 text-green-700 rounded-3xl p-8 text-center">

              <h3 className="text-3xl font-bold mb-3">
                Feedback Submitted
              </h3>

              <p className="text-lg">
                Thank you for sharing your feedback with us.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  )
}