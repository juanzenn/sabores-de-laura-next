import React from "react"

const GridItem = (props) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h3 className="text-2xl font-semibold">{props.title}</h3>
      <p className="text-lg text-gray-600 font-light">{props.content}</p>
    </div>
  )
}

export default function Mission() {
  return (
    <section className="my-12">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl text-center text-pink-600 mb-6">Nuestra misión</h2>
        <div className="grid lg:grid-cols-3 gap-4">
          <GridItem
            title="Título bonito"
            content="Una buena descripción de esa misión"
          />

          <GridItem
            title="Título bonito"
            content="Una buena descripción de esa misión"
          />

          <GridItem
            title="Título bonito"
            content="Una buena descripción de esa misión"
          />          
        </div>
      </div>
    </section>
  )
}
