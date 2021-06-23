import { ButtonPrimary, ButtonSecondary } from '../UI/Button'
import Container from '../UI/Container'
import Link from 'next/link'
import FlexContainer from '../UI/FlexContainer'
import { Grid, Phone } from 'akar-icons'

export default function Header() {
  return (
    <Container
      sectionClasses="h-screen bg-cover bg-center bg-no-repeat bg-header bg-gray-600 bg-blend-multiply"
      containerClasses="flex flex-col lg:flex-row justify-center items-center"
    >
      <div className="w-full lg:w-1/3 text-center">
        <div className="w-72 h-72 bg-logo bg-center bg-cover bg-no-repeat rounded-full inline-block mb-2"></div>
      </div>

      <div className="w-full lg:flex-grow text-center">
        <p className="text-3xl lg:text-6xl font-bold text-yellow-300 mt-2 mb-1 lg:mt-0 tracking-tight">
          Pastelería & Repostería
        </p>
        <h2 className="text-lg lg:text-2xl text-pink-200">
          Nuestros postres van directo al corazón
        </h2>
        <FlexContainer></FlexContainer>
        <FlexContainer classes="gap-2 justify-center">
          <ButtonPrimary spacing="my-4">
            <Link href="/menu">
              <a className='w-full h-full flex flex-row items-center gap-1'>
                Menú
                <Grid size={20} />
              </a>
            </Link>
          </ButtonPrimary>
          <ButtonSecondary spacing="my-4">
            <Link href="/contact">
              <a className='w-full h-full flex flex-row items-center gap-1'>
                Contacto
                <Phone size={20} />
              </a>
            </Link>
          </ButtonSecondary>
        </FlexContainer>
      </div>
    </Container>
  )
}
