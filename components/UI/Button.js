export default function Button({
  children,
  fontSize = "lg",
  width = "max",
  bg = "bg-pink-400",
  ...rest
}) {
  return (
    <button
      className={`w-${width} ${bg} text-gray-100 my-4 py-2 px-6 text-${fontSize} rounded-md shadow-lg hover:bg-pink-300 transform hover:-translate-y-1 transition-all duration-300 flex justify-center gap-2`}
      {...rest}
    >
      {children}
    </button>
  )
}
