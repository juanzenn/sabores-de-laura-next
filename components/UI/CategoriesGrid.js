export default function CategoriesGrid(props) {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-semibold mb-2">{props.title}</h3>
      <div className="grid grid-cols-2 gap-4 content-center">
        {props.items.map( item => (
          <div className="bg-pink-500 h-36 flex justify-center items-center">{item.title}</div>
        ))}     
      </div>
    </div>
  )
}
