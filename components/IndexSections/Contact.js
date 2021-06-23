import { ButtonPrimary, ButtonSecondary } from '../UI/Button'
import Link from 'next/link'
import Container from '../UI/Container'
import {Grid, Phone} from 'akar-icons'

export default function Contact() {
  return (
    <Container
      sectionClasses="p-10"
      containerClasses="grid lg:grid-cols-2 gap-4"
    >
      <div className="text-center flex flex-col items-center">
        <h4 className="font-bold text-3xl text-yellow-500">¡Visita nuestro menú!</h4>
        <Link href="/menu" passHref>
          <ButtonPrimary spacing="mt-4 mb-2">
            Menú
            <Grid size={20} />
          </ButtonPrimary>
        </Link>
      </div>

      <div className="text-center flex flex-col items-center">
        <h2 className="font-bold text-3xl text-pink-500">Pide tu postre</h2>

        <Link href="/contact" passHref>
          <ButtonSecondary spacing="mt-4 mb-2">
            Contacto
            <Phone size={20} />
          </ButtonSecondary>
        </Link>
      </div>
    </Container>
  )
}
