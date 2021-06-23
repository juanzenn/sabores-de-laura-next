import { ButtonPrimary, ButtonSecondary } from '../UI/Button'
import Link from 'next/link'
import Container from '../UI/Container'
import { Grid, Phone } from 'akar-icons'

export default function Contact() {
  return (
    <Container
      sectionClasses="p-10"
      containerClasses="grid lg:grid-cols-2 gap-4"
    >
      <div className="text-center flex flex-col items-center">
        <h4 className="font-bold text-3xl text-yellow-500">
          ¡Visita nuestro menú!
        </h4>
        <ButtonPrimary spacing="mt-4 mb-2">
          <Link href="/menu">
            <a className="w-full h-full flex flex-row items-center gap-1">
              Menú
              <Grid size={20} />
            </a>
          </Link>
        </ButtonPrimary>
      </div>

      <div className="text-center flex flex-col items-center">
        <h2 className="font-bold text-3xl text-pink-500">Pide tu postre</h2>

        <ButtonSecondary spacing="mt-4 mb-2">
          <Link href="/contact">
            <a className="w-full h-full flex flex-row items-center gap-1">
              Contacto
              <Phone size={20} />
            </a>
          </Link>
        </ButtonSecondary>
      </div>
    </Container>
  )
}
