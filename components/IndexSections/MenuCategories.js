import CategoriesGrid from '../UI/CategoriesGrid'

export default function MenuCategories() {
  const items = [
    {
      title: "1"
    },
    {
      title: "2"
    },
    {
      title: "3"
    },
    {
      title: "4"
    }
  ]

  return (
    <section className="p-4">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-8">Tenemos postres para todos los gustos</h2>
        <div className="grid lg:grid-cols-2 gap-6 w-9/12">
          <CategoriesGrid title="Por categoría" items={items} />
          <CategoriesGrid title="Por categoría" items={items} />
        </div>
      </div>
    </section>
  )
}
