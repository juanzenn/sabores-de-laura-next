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
        <h3 className="text-2xl text-pink-600 mb-2">{props.title}</h3>
        <div className="grid grid-cols-2 gap-4 content-center">
          {props.items.map((item, index) => (
            <div
              key={index}
              className="bg-pink-500 w-full h-48 flex justify-center items-center rounded-lg"
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
        <h2 className="text-4xl font-bold mb-8">
          Tenemos postres para todos los gustos
        </h2>
        <CategoriesGrid title="Categorías" items={items} />
        <Button fontSize="2xl">
          <Link href="/menu">
            <a>Menú</a>
          </Link>
        </Button>
      </div>
    </section>
  )
}
