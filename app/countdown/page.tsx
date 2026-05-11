export default function CountdownPage() {

  return (
    <main className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold mb-2">
          Countdown Widgets
        </h1>

        <p className="text-gray-600">
          Important upcoming dates
        </p>

      </div>

      <div className="bg-blue-600 rounded-3xl shadow-2xl p-10 max-w-3xl">

        <p className="uppercase tracking-[4px] text-sm mb-3 text-white">
          Next Major Exam
        </p>

        <h2 className="text-6xl font-extrabold mb-4 text-white">
          12 DAYS
        </h2>

        <p className="text-xl text-white">
          Mid-Term Examinations
        </p>

      </div>

    </main>
  )
}