"use client"

import { useState } from "react"

import {
  Bot,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react"

export default function AIPage() {

  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! I am the GIHS AI Assistant. Ask me anything about resources, exams, events or academics.",
    },
  ])

  async function handleSend() {

    if (!input.trim()) return

    const userMessage = {
      role: "user",
      text: input,
    }

    setMessages((prev: any) => [
      ...prev,
      userMessage,
    ])

    const currentInput = input

    setInput("")

    setLoading(true)

    try {

      const res = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: currentInput,
        }),
      })

      const data = await res.json()

      const aiMessage = {
        role: "ai",
        text: data.reply,
      }

      setMessages((prev: any) => [
        ...prev,
        aiMessage,
      ])

    } catch (error) {

      setMessages((prev: any) => [
        ...prev,
        {
          role: "ai",
          text: "Something went wrong while connecting to AI.",
        },
      ])

    } finally {

      setLoading(false)

    }
  }

  return (
    <main className="space-y-8">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          SMART CAMPUS AI
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl backdrop-blur">

            <Bot size={42} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              GIHS AI Assistant
            </h1>

            <p className="text-lg text-white/90 mt-2">
              Your intelligent academic and campus companion
            </p>

          </div>

        </div>

      </section>

      {/* CHAT */}
      <section className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">

        {/* TOP */}
        <div className="border-b border-slate-200 p-6 flex items-center gap-4">

          <div className="bg-violet-100 text-violet-600 p-4 rounded-2xl">

            <Sparkles size={28} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              AI Chat
            </h2>

            <p className="text-gray-500">
              Ask anything related to school resources and academics
            </p>

          </div>

        </div>

        {/* MESSAGES */}
        <div className="p-6 space-y-5 h-[500px] overflow-y-auto bg-slate-50">

          {messages.map((msg: any, index: number) => (

            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`
                  max-w-[80%]
                  px-5 py-4
                  rounded-3xl
                  text-lg
                  shadow
                  whitespace-pre-wrap
                  ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-slate-200 text-black"
                  }
                `}
              >

                {msg.text}

              </div>

            </div>

          ))}

          {/* LOADING */}
          {loading && (

            <div className="flex justify-start">

              <div className="bg-white border border-slate-200 px-5 py-4 rounded-3xl shadow flex items-center gap-3">

                <Loader2
                  size={22}
                  className="animate-spin text-violet-600"
                />

                <p className="text-gray-600">
                  AI is thinking...
                </p>

              </div>

            </div>

          )}

        </div>

        {/* INPUT */}
        <div className="border-t border-slate-200 p-5 flex gap-4">

          <input
            type="text"
            placeholder="Ask the AI Assistant..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend()
              }
            }}
            className="
              flex-1
              bg-slate-100
              border border-slate-200
              rounded-2xl
              px-5 py-4
              outline-none
              text-lg
              focus:ring-2
              focus:ring-violet-500
            "
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="
              bg-gradient-to-r
              from-violet-600
              to-blue-600
              text-white
              px-6
              rounded-2xl
              hover:scale-105
              transition
              disabled:opacity-50
            "
          >

            <Send size={24} />

          </button>

        </div>

      </section>

    </main>
  )
}