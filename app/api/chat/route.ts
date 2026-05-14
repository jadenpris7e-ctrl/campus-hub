import { GoogleGenerativeAI } from "@google/generative-ai"

export async function POST(req: Request) {

  try {

    const { messages } = await req.json()

    const latestMessage =
      messages[messages.length - 1].text

    const apiKey =
      process.env.GEMINI_API_KEY

    if (!apiKey) {

      return Response.json({
        reply:
          "Missing Gemini API Key",
      })
    }

    const genAI =
      new GoogleGenerativeAI(apiKey)

    const model =
      genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      })

    const result =
      await model.generateContent(
        latestMessage
      )

    const response =
      await result.response

    const text = response.text()

    return Response.json({
      reply: text,
    })

  } catch (error: any) {

    console.log(error)

    return Response.json({
      reply:
        "Server Error Happened",
    })
  }
}