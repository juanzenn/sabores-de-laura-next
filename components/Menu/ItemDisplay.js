import Button from '../UI/Button'
import Container from '../UI/Container'
import Link from 'next/link'
import {ArrowLeftIcon} from '@heroicons/react/outline'

export default function ItemDisplay(props) {
  const showing = props.display ? `` : `hidden`

  return (
    <article
      className={`fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-pink-100 ${showing} ${props.animation} z-50`}
    >
      <Container
        sectionClasses="flex justify-center h-full bg-white"
        containerClasses="py-12 px-2"
        height="lg:h-4/6"
      >
        <Button onClick={props.goBack}>
        <ArrowLeftIcon className='h-7 w-7'/>          
        </Button>

        <article className="flex flex-col lg:flex-row gap-y-4">
          <header className="flex flex-col items-center text-left gap-2 w-full">
            <figure
              className={`w-72 h-72 bg-${props.background} rounded-sm`}
            ></figure>
          </header>

          <section className="w-full">
            <main>
              <h4 className="w-full text-4xl font-bold my-2 text-red-500">
                {props.title}
              </h4>
              <span className='font-light text-gray-600 text-2xl text-right mb-2'>Precio: ${props.price}</span>
              <p className="text-base leading-6 text-gray-500">
                {props.description}
              </p>
              
            </main>
            <footer className="mt-4 flex items-center">
              {/* <span className='font-bold text-lg text-yellow-600'></span> */}
              <Link href="/contact" passHref>
                <Button onClick={props.goBack} marginY="2" fontSize="xl">
                  Contacto
                </Button>
              </Link>
            </footer>
          </section>
        </article>
      </Container>
    </article>
  )
}
