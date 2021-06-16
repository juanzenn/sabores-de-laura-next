import Button from "../UI/Button"

export default function Gallery() {
  return (
    <section className="bg-pink-100">
      <div className="container mx-auto h-screen flex justify-center items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold"> Visista nuestro Instagram</h2>
          <p>Ve todas nuestras fotos en Instagram y deleita tu paladar</p>
        </div>
        <Button>
          <a href="https://www.instagram.com">Instagram</a>
        </Button>
      </div>
    </section>
  )
}
