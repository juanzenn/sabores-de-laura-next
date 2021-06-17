import React from "react"
import Head from "next/head"
import Button from "../components/UI/Button"

export default function contact() {
  const InformationItem = (props) => {
    return (
      <div className='mb-2'>
        <strong>{props.title}</strong>: {props.info}
      </div>
    )
  }

  const contactInfo = [
    {
      title: "Ubicación",
      info: "Venezuela, estado Miranda, San Antonio de los Altos",
    },
    {
      title: "Teléfono",
      info: "+58 414-123-4567",
    },
    {
      title: "Horarios",
      info: "8:00am - 6:00pm",
    },
  ]

  return (
    <>
      <Head>
        <title>Sabores de Laura - Contacto</title>
      </Head>
      <main className="min-h-screen my-12 lg:my-24">
        <div className="container mx-auto px-2">
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>
          <section className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-0">
            <div className="w-full">
              <h3 className="text-2xl text-pink-600 font-bold              ">
                Información
              </h3>
              {contactInfo.map((item, index) => (
                <InformationItem
                  key={index}
                  title={item.title}
                  info={item.info}
                />
              ))}
            </div>
            <div className="w-full">
              <div className="mb-4">
                <h3 className="font-bold text-2xl lg:text-3xl text-pink-600">
                  Envíanos un mensaje por WhatsApp y haz tu pedido
                </h3>
                <p className="text-gray-500 text-sm">
                  Rellena el formulario desde tu teléfono o computadora con
                  WhatsApp web activado.
                </p>
              </div>

              <form className=" bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col gap-4 py-4 px-6 shadow-lg items-end rounded-lg">
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="message"
                    className="text-gray-800 font-bold text-lg tracking-wide"
                  >
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className="p-2 text-sm resize-none rounded-md shadow-md bg-white bg-opacity-40 text-gray-700 focus:outline-none focus:ring focus:ring-pink-400 border hover:border-pink-400 transition-all ease-out"
                  ></textarea>
                </div>
                <Button type="submit">Envíar</Button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
