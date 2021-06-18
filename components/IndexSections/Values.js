import Container from "../UI/Container"

export default function Values() {
  return (
    <Container
      sectionClasses="lg:h-screen px-4 py-40 lg:py-0 bg-gradient-to-bl from-indigo-50 to-indigo-100"
      containerClasses="h-full flex flex-col lg:flex-row items-center gap-4"
    >
      <div className="">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-yellow-500">
          Somos más que postres
        </h2>
        <p className="lg:max-w-3xl mb-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          sapiente debitis harum illo facilis recusandae quas reiciendis
          incidunt. Blanditiis eius optio unde sint porro maiores iusto
          pariatur, molestiae possimus adipisci.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-1 max-w-xs text-center">
            <h4 className="font-bold text-2xl text-yellow-500">
              Cada día mejor
            </h4>
            <p className="text-lg text-gray-600">
              Nos dedicamos a la calidad y el sabor de nuestros productos
            </p>
          </div>
          <div className="p-1 max-w-xs text-center">
            <h4 className="font-bold text-2xl text-yellow-500">
              Recuerdos innovidables
            </h4>
            <p className="text-lg text-gray-600">
              Buscamos ser parte de tus momentos especiales
            </p>
          </div>
          <div className="p-1 max-w-xs text-center">
            <h4 className="font-bold text-2xl text-yellow-500">Familiaridad</h4>
            <p className="text-lg text-gray-600">
              Nuestros postres están hechos para compartir
            </p>
          </div>
          <div className="p-1 max-w-xs text-center">
            <h4 className="font-bold text-2xl text-yellow-500">
              Cada día mejor
            </h4>
            <p className="text-lg text-gray-600">
              Nos dedicamos a la calidad y el sabor de nuestros productos
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
