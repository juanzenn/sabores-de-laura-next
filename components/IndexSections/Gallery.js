import Button from '../UI/Button'

export default function Gallery() {
  return (
    <section>
      <div className="container mx-auto h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl">Visista nuestra galería</h2>
        <Button>Galería</Button>
      </div>
    </section>
  )
}
