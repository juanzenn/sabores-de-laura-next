import React, { useState, useEffect } from 'react'
import { Cross } from 'akar-icons'

export default function AdBanner() {
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setPopup(true)
    }, 5000);
  }, [])

  return (
    <article className={popup ? `fixed top-4 lg:top-20 left-2 w-1/2 lg:w-1/3 bg-pink-500 text-sm text-center text-white p-6 z-20 shadow-md animate-opacity` : `hidden`}>
      <span className="absolute top-2 right-2 cursor-pointer" onClick={handleClick}>
        <Cross size={20} />
      </span>
      <p className='font-bold'>¡¡Promoción especial!!</p>
      <p>Delivery gratis con cada compra mayor a $30</p>
    </article>
  )
}
