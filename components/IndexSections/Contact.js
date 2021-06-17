import Button from "../UI/Button"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="p-10">
      <div className="grid lg:grid-cols-3 gap-4">
        <div></div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-2xl text-center text-pink-600">¡Visita nuestro menú!</h4>
        <Button  width='full'>
            <Link href="/menu">
              <a>Menú</a>
            </Link>
          </Button>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-6">
            Envianos un WhatsApp y pide tu postre
          </h2>

          <Button style={{display: 'inline-block'}}>
            <Link href="/contact">
              <a>Contacto</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
