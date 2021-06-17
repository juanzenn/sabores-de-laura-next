import Button from '../UI/Button'
import Link from 'next/link'

export default function Header() {
  return (
    <section className="h-screen bg-cover bg-center bg-no-repeat bg-header bg-gray-600 bg-blend-multiply">
      <div className="container h-full mx-auto flex flex-1 flex-col lg:flex-row items-center justify-center gap-6 px-4">
        <div className="">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-pacifico text-yellow-200">Sabores de laura</h1>
          <h2 className="text-xl md:text-4xl lg:text-5xl text-yellow-100">Postres que van directo al corazón</h2>
        </div>
        <div className="text-center">          
          <p className="text-xl lg:text-4xl mb-4 max-w-lg font-medium text-yellow-200">Tortas, tartaletas, cupcakes y mucho más</p>          
          <Button fontSize="2xl" bg='bg-yellow-500' style={{display: 'inline-block', marginRight: '1em'}}>
            <Link href="/menu">
              <a>Menú</a>
            </Link>
          </Button>
          <Button fontSize="2xl" bg='bg-pink-500 hover:bg-pink-200' style={{display: 'inline-block'}}>
            <Link href="/about">
              <a>Nuestra historia</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
