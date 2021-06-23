import { useState } from 'react'
import Button from '../UI/Button'
import Container from '../UI/Container'
import { ArrowLeftIcon } from '@heroicons/react/outline'

const DisplayForm = () => {
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = `https://api.whatsapp.com/send/?phone=584142007823&text=${message}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
    <label htmlFor="message" className='text-gray-600 text-sm font-bold'>Pide tu postre</label>
      <input
        type="text"
        name="message"
        id="message"
        onChange={handleChange}
        placeholder={`Hola, me gustaría un...`}
        className='w-full text-xl p-1 border border-pink-200 rounded focus:outline-none focus:ring focus:ring-pink-400 transition-all duration-200'
      />
      <Button type="submit" customClass='w-max bg-pink-500 hover:bg-pink-300'>Enviar mensaje</Button>
    </form>
  )
}

export default function ItemDisplay(props) {
  const showing = props.display ? `` : `hidden`

  return (
    <article
      className={`fixed w-screen overflow-scroll top-0 left-0 right-0 bottom-0 bg-pink-100 ${showing} ${props.animation} z-50`}
    >
      <Container
        sectionClasses="flex justify-center h-full bg-white"
        containerClasses="py-12 px-2"
        height="lg:h-4/6"
      >
        <Button
          onClick={props.goBack}
          customClass="bg-yellow-300 hover:bg-yellow-200 mb-4"
        >
          <ArrowLeftIcon className="h-7 w-7" />
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
              <span className="font-light text-gray-600 text-2xl text-right mb-2">
                Precio: ${props.price}
              </span>
              <p className="text-base leading-6 text-gray-500">
                {props.description}
              </p>
            </main>
            <footer className="mt-4 flex items-center">
              {/* <span className='font-bold text-lg text-yellow-600'></span> */}
              <DisplayForm />
            </footer>
          </section>
        </article>
      </Container>
    </article>
  )
}
