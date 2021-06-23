import { ButtonSecondary } from '../UI/Button'
import Container from '../UI/Container'
import { CameraIcon } from '@heroicons/react/solid'

export default function Gallery() {
  return (
    <Container
      sectionClasses="bg-gradient-to-br from-pink-300 to-pink-400"
      containerClasses="flex justify-center items-center gap-6 px-4 py-32"
    >
      <div>
        <h2 className="text-4xl font-bold text-gray-800">Visita nuestro Instagram</h2>
        <p className="tracking-wide">
          Ve todas nuestras fotos y deleita tu paladar
        </p>
      </div>
      <ButtonSecondary>
        <a href="https://www.instagram.com/saboresdelaura">Instagram</a>
        <CameraIcon className="w-5 h-5" />
      </ButtonSecondary>
    </Container>
  )
}
