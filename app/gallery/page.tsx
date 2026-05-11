import { Image as ImageIcon } from "lucide-react"

export default function GalleryPage() {

  return (
    <main className="space-y-6">

      <div>

        <h1 className="text-4xl font-bold mb-2">
          Gallery
        </h1>

        <p className="text-gray-500">
          School memories and event highlights
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {[1,2,3,4,5,6].map((item) => (

          <div
            key={item}
            className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden"
          >

            <div className="h-52 bg-slate-200 flex items-center justify-center">

              <ImageIcon
                size={50}
                className="text-slate-500"
              />

            </div>

            <div className="p-5">

              <h2 className="text-xl font-semibold">
                Event Photo {item}
              </h2>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}