import {ButtonPrimary} from "../UI/Button"
import Link from "next/link"
import Container from "../UI/Container"

export default function MenuCategories() {
  const items = [
    {
      title: "Tortas",
      bg: "bg-cake bg-cover bg-center bg-no-repeat",
    },
    {
      title: "Tartaletas",
      bg: "bg-lemon-pie bg-cover bg-bottom bg-no-repeat",
    },
    {
      title: "Cupcakes",
      bg: "bg-cupcakes bg-cover bg-center bg-no-repeat",
    },
    {
      title: "Y mucho más...",
      bg: "bg-pavlova bg-cover bg-center bg-no-repeat",
    },
  ]

  function CategoriesGrid(props) {
    return (
      <div className="text-center w-full">
        <div className="grid grid-cols-2 gap-4 content-center">
          {props.items.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} w-full h-80 flex justify-center items-center rounded-lg px-4`}
            >
              <p className="font-bold bg-white text-pink-500 px-6 py-1 text-xl lg:text-3xl rounded-full">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Container
      sectionClasses="py-16 bg-gradient-to-bl from-pink-50 to-pink-100"
      containerClasses="flex flex-col justify-center items-center"
    >
      <CategoriesGrid items={items} />
      <Link href="/menu" passHref>
        <ButtonPrimary spacing='my-6 w-2/4'>
          Menú
        </ButtonPrimary>
      </Link>
    </Container>
  )
}
