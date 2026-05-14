"use client"

import { useState } from "react"

import {
  Bot,
  Send,
  Sparkles,
  User,
} from "lucide-react"

type Message = {
  role: "user" | "assistant"
  text: string
}

export default function AIPage() {

  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "Hello! I am the GIHS AI Assistant. Ask me anything about studies, exams, school events, subjects or academics.",
    },
  ])

  async function handleSend() {

    if (!input.trim()) return

    const userMessage: Message = {
      role: "user",
      text: input,
    }

    const updatedMessages = [
      ...messages,
      userMessage,
    ]

    setMessages(updatedMessages)

    setInput("")

    setLoading(true)

    try {

      const response = await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: updatedMessages,
        }),
      })

      const data = await response.json()

      const aiMessage: Message = {
        role: "assistant",
        text:
          data.reply ||
          "Sorry, I could not generate a response.",
      }

      setMessages([
        ...updatedMessages,
        aiMessage,
      ])

    } catch (error) {

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          text:
            "Something went wrong while connecting to the AI service.",
        },
      ])

    }

    setLoading(false)
  }

  return (

    <main className="space-y-8 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0F766E] via-[#0F4C81] to-[#1E3A8A] text-white rounded-[35px] p-10 shadow-2xl">

        <p className="uppercase tracking-[4px] text-sm text-white/80 mb-3">
          SMART CAMPUS AI
        </p>

        <div className="flex items-center gap-4 mb-5">

          <div className="bg-white/20 p-4 rounded-3xl">

            <Bot size={42} />

          </div>

          <div>

            <h1 className="text-5xl font-extrabold">
              GIHS AI Assistant
            </h1>

            <p className="text-lg text-white/90 mt-2">
              AI-powered academic and campus assistant
            </p>

          </div>

        </div>

      </section>

      {/* CHAT */}
      <section className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

        {/* TOP BAR */}
        <div className="border-b border-slate-200 p-6 flex items-center gap-4 bg-slate-50">

          <div className="bg-cyan-100 text-cyan-700 p-4 rounded-2xl">

            <Sparkles size={28} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              AI Chat
            </h2>

            <p className="text-gray-500">
              Ask questions naturally like ChatGPT or Gemini
            </p>

          </div>

        </div>

        {/* MESSAGES */}
        <div className="p-6 space-y-5 h-[600px] overflow-y-auto bg-slate-100">

          {messages.map((msg, index) => (

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
                  max-w-[85%]
                  px-5 py-4
                  rounded-3xl
                  shadow-md
                  flex gap-3
                  ${
                    msg.role === "user"
                      ? "bg-[#0F4C81] text-white"
                      : "bg-white border border-slate-200"
                  }
                `}
              >

                <div className="mt-1">

                  {msg.role === "user" ? (
                    <User size={20} />
                  ) : (
                    <Bot size={20} />
                  )}

                </div>

                <div className="whitespace-pre-wrap text-[17px] leading-relaxed">
                  {msg.text}
                </div>

              </div>

            </div>

          ))}

          {loading && (

            <div className="flex justify-start">

              <div className="bg-white border border-slate-200 rounded-3xl px-5 py-4 shadow-md flex gap-3">

                <Bot size={20} />

                <p className="animate-pulse">
                  Thinking...
                </p>

              </div>

            </div>

          )}

        </div>

        {/* INPUT */}
        <div className="border-t border-slate-200 p-5 bg-white">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Ask anything..."
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
                focus:border-cyan-500
              "
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="
                bg-gradient-to-r
                from-cyan-600
                to-blue-700
                text-white
                px-7
                rounded-2xl
                hover:scale-105
                transition
                disabled:opacity-50
              "
            >

              <Send size={24} />

            </button>

          </div>

        </div>

      </section>

    </main>
  )
}