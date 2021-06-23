import { ButtonSecondary } from '../UI/Button'
import { useState } from 'react'

export default function WhatsAppForm() {
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = `https://api.whatsapp.com/send/?phone=584142007823&text=${message}`
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 py-4 px-6 shadow-lg items-end rounded-lg border-2 border-pink-300"
    >
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="message"
          className="text-pink-600 font-bold text-xl tracking-tight"
        >
          Mensaje:
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="p-2 resize-none rounded-sm shadow bg-gray-200 text-gray-700 border border-pink-100 hover:border-pink-200 focus:outline-none focus:ring focus:ring-pink-200  transition-all duration-300 linear"
          onChange={handleChange}
        ></textarea>
      </div>
      <ButtonSecondary type="submit">Envíar</ButtonSecondary>
    </form>
  )
}
