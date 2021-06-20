import Container from "../UI/Container"

const GridItem = props => {
  return (
    <div className="p-1 text-center">
      <h4 className="font-bold text-2xl text-yellow-500">
        {props.title}
      </h4>
      <p className="text-lg text-gray-600">
        {props.description}
      </p>
    </div>
  )
}

export default function Values() {
  const items = [
    {
      title: 'Cada día mejor',
      description: 'Nos dedicamos a la calidad y el sabor de nuestros productos'
    },
    {
      title: 'Recuerdos innovidables',
      description: 'Buscamos ser parte de tus momentos especiales'
    },
    {
      title: 'Familiaridad',
      description: 'Nuestros postres están hechos para compartir'
    },
    {
      title: 'Cada día mejor',
      description: 'Nos dedicamos a la calidad y el sabor de nuestros productos'
    }
  ]

  return (
    <Container
      sectionClasses="lg:h-screen px-4 py-40 lg:py-0 bg-pavlova2 bg-center bg-cover bg-no-repeat"
      containerClasses="h-full flex flex-col lg:flex-row items-center gap-4"
    >
      <div className="bg-white p-4 rounded-md bg-opacity-80 lg:w-7/12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-yellow-500">
          Somos más que postres
        </h2>
        <p className="lg:max-w-3xl mb-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          sapiente debitis harum illo facilis recusandae quas reiciendis
          incidunt. Blanditiis eius optio unde sint porro maiores iusto
          pariatur, molestiae possimus adipisci.
        </p>
        <div className="grid lg:grid-cols-2 gap-4">
         {items.map((item, index) => {
           return <GridItem key={index} title={item.title} description={item.description} />
         })}
        </div>
      </div>
    </Container>
  )
}
