export default function Button({ children, fontSize='lg' }) {
  return (
    <button className={`bg-pink-400 text-gray-100 my-4 py-2 px-6 text-${fontSize} rounded shadow-lg hover:bg-pink-300 transform hover:-translate-y-1 transition-all duration-300`}>
      {children}
    </button>
  )
}
