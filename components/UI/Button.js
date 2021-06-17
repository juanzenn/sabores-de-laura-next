export default function Button({
  children,
  fontSize = "lg",
  width = "max",
  bg = "bg-yellow-500",
  ...rest
}) {
  return (
    <button
      className={`w-${width} ${bg} text-gray-50 my-4 py-2 px-6 text-${fontSize} rounded-md shadow-lg hover:bg-yellow-300 hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-300 flex justify-center gap-2`}
      {...rest}
    >
      {children}
    </button>
  )
}
