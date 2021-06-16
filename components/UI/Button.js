export default function Button({ children }) {
  return (
    <button className="bg-pink-400 text-gray-900 py-2 px-6 text-lg rounded shadow font-semibold hover:bg-pink-300 transform hover:-translate-y-1 transition-all duration-300">
      {children}
    </button>
  )
}
