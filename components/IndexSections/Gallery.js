import Button from "../UI/Button"
import Container from '../UI/Container'

export default function Gallery() {
  return (
    <Container
      sectionClasses='bg-gradient-to-br from-pink-300 to-pink-400'
      containerClasses='flex justify-center items-center gap-6 px-4 py-32'
    >
      <div>
        <h2 className="text-4xl font-bold text-gray-800">Nuestro Instagram</h2>
        <p className='tracking-wide'>Ve todas nuestras fotos en Instagram y deleita tu paladar</p>
      </div>
      <Button bg='bg-pink-900 hover:bg-pink-500'>
        <a href="https://www.instagram.com">Instagram</a>
      </Button>
    </Container>

  )
}
