import Button from "../UI/Button"
import Container from "../UI/Container"
import Link from "next/link"
import FlexContainer from "../UI/FlexContainer"

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
        <p className="text-3xl lg:text-6xl font-bold text-yellow-300 mt-2 mb-1 lg:mt-0 lg:mb-2 tracking-tight">
          Pastelería & repostería
        </p>
        <h2 className="text-lg lg:text-2xl text-pink-200">
          Nuestros postres van directo al corazón
        </h2>
        <FlexContainer>

        </FlexContainer>
        <FlexContainer classes='gap-2 justify-center'>
          <Button fontSize="xl" bg="bg-yellow-500">
            <Link href="/menu">
              <a>Menú</a>
            </Link>
          </Button>
          <Button fontSize="xl" bg="bg-pink-500 hover:bg-pink-200">
            <Link href="/contact">
              <a>Contacto</a>
            </Link>
          </Button>
        </FlexContainer>
      </div>
    </Container>
  )
}
