import React from 'react'
import Head from 'next/head'
import Container from '../components/UI/Container'
import { WhatsappFill, InstagramFill } from 'akar-icons'
import WhatsAppForm from '../components/Contact/WhatsAppForm'

const InformationItem = props => {
  return (
    <div className="mb-2">
      <strong>{props.title}</strong>: {props.info}
    </div>
  )
}

export default function Contact() {
  

  const contactInfo = [
    {
      title: 'Ubicación',
      info: 'Venezuela, estado Miranda, San Antonio de los Altos',
    },
    {
      title: 'Teléfono',
      info: '+58 414-123-4567',
    },
    {
      title: 'Horarios',
      info: '8:00am - 6:00pm',
    },
  ]

  return (
    <>
      <Head>
        <title>Sabores de Laura - Contacto</title>
        <meta
          name="description"
          content="Contáctanos y pide tus postres por nuestro WhatsApp."
        />
        <meta name="robots" content="noindex" />
      </Head>

      <main className="min-h-screen my-12 lg:my-24">
        <Container
          sectionClasses=""
          containerClasses="flex flex-col lg:flex-row"
        >
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-4">Contacto</h2>
            <h3 className="text-2xl text-yellow-600 font-bold">Información</h3>
            {contactInfo.map((item, index) => (
              <InformationItem
                key={index}
                title={item.title}
                info={item.info}
              />
            ))}
            <section>
              <h3 className="text-2xl text-yellow-600 font-bold">
                Siguenos en nuestras redes sociales
              </h3>
              <ul className='flex justify-center gap-4 my-4'>
                <li className='text-pink-500 hover:text-pink-400 transition-all duration-300'>
                  <a href="https://www.instagram.com/saboresdelaura">
                    <InstagramFill size={48} />
                  </a>
                </li>
                <li className='text-pink-500 hover:text-pink-400 transition-all duration-300'>
                  <a href="https://api.whatsapp.com/send/?phone=584142007823">
                    <WhatsappFill size={48} />
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="w-full">
            <div className="mb-4">
              <h3 className="font-bold text-2xl lg:text-3xl text-yellow-600">
                Envíanos un mensaje por WhatsApp y haz tu pedido
              </h3>
              <p className="text-gray-500 text-sm">
                Rellena el formulario desde tu teléfono o computadora con
                WhatsApp web activado.
              </p>
            </div>

            <WhatsAppForm />  
          </div>
        </Container>
      </main>
    </>
  )
}
