import React from "react"

const GridItem = (props) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h3 className="text-2xl font-bold text-pink-500">{props.title}</h3>
      <p className="text-base text-gray-500 text-center">{props.content}</p>
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
            title="Darles los mejores postres"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsa aperiam perspiciatis?
            "
          />

          <GridItem
            title="Un recuerdo innolvidable"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsa aperiam perspiciatis?
"
          />

          <GridItem
            title="Compartir nuestra historia"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsa aperiam perspiciatis?
            "
          />          
        </div>
      </div>
    </section>
  )
}
