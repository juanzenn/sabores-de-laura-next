import Button from "../UI/Button"
import Link from "next/link"

export default function MenuCategories() {
  const items = [
    {
      title: "Tortas",
    },
    {
      title: "Galletas",
    },
    {
      title: "Cupcakes",
    },
    {
      title: "Otros",
    },
  ]

  function CategoriesGrid(props) {
    return (
      <div className="text-center w-10/12">        
        <div className="grid grid-cols-2 gap-4 content-center">
          {props.items.map((item, index) => (
            <div
              key={index}
              className=" bg-gradient-to-br from-pink-400 to-pink-600 w-full h-48 flex justify-center items-center rounded-lg"
            >
              <p className="font-bold bg-white text-pink-500 px-6 py-1 text-xl rounded-sm bg-opacity-75">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-8 text-pink-600 w-">
          Tenemos postres para todos los gustos
        </h2>
        <CategoriesGrid title="Categorías" items={items} />
        <Button fontSize="3xl" width='2/4'>
          <Link href="/menu">
            <a>Menú</a>
          </Link>
        </Button>
      </div>
    </section>
  )
}
