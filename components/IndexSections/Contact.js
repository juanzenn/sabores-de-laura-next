import Button from "../UI/Button"
import Link from "next/link"
import Container from "../UI/Container"

export default function Contact() {
  return (
    <Container
      sectionClasses="p-10"
      containerClasses="grid lg:grid-cols-2 gap-4"
    >
      <div className="text-center flex flex-col items-center">
        <h4 className="font-bold text-3xl">
          ¡Visita nuestro menú!
        </h4>
        <Link href="/menu" passHref>
          <Button bg='bg-pink-500 hover:bg-pink-400'>
            Menú
          </Button>
        </Link>
      </div>

      <div className="text-center flex flex-col items-center">
        <h2 className="font-bold text-3xl">
          Pide tu postre
        </h2>

        <Link href="/contact" passHref>
          <Button>
            Contacto
          </Button>
        </Link>
      </div>
    </Container>
  )
}
