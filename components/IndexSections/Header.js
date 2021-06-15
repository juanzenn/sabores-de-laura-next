import Button from '../UI/Button'

export default function Header() {
  return (
    <section className="h-screen bg-gradient-to-r from-pink-600 to-pink-700 text-gray-50">
      <div className="container h-full mx-auto flex flex-1 flex-col lg:flex-row items-center justify-center gap-4">
        <div className="">
          <h1 className="text-6xl font-bold">Sabores de Laura</h1>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300">Postres que llegan directo al corazón</h2>
        </div>
        <div className="text-center">
          <p className="text-4xl mb-4 max-w-lg font-medium">Tortas, dulces fríos, coffee cakes y más</p>
          <Button>Menú</Button>
        </div>
      </div>
    </section>
  )
}
