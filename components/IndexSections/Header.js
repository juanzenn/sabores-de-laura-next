import Button from '../UI/Button'
import Link from 'next/link'

export default function Header() {
  return (
    <section className="h-screen bg-gradient-to-br from-pink-500 to-pink-700 text-gray-50">
      <div className="container h-full mx-auto flex flex-1 flex-col lg:flex-row items-center justify-center gap-6 px-4">
        <div className="">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pacifico">Sabores de Laura</h1>
          <h2 className="text-xl md:text-4xl lg:text-5xl tracking-wide text-gray-200">Postres que llegan directo al corazón</h2>
        </div>
        <div className="text-center">
          <p className="text-xl lg:text-4xl mb-4 max-w-lg font-medium">Tortas, dulces fríos, coffee cakes y más</p>
          <Button fontSize="xl" width='full' bg='bg-pink-600'>
            <Link href="/menu">
              <a>Menú</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
