import Button from '../UI/Button'

export default function Contact() {
  return (
    <section className="p-10">
      <div className="grid lg:grid-cols-3 gap-4">
        <div></div>
        <div className="flex flex-col gap-4">
          <Button>Menú</Button>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-6">Envianos un WhatsApp y pide tu postre</h2>
          <a href="/">
            <Button>Contacto</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
