import React, { useState } from 'react'
import ItemDisplay from './ItemDisplay'
import Button from '../UI/Button'

export default function MenuItem(props) {
  const [display, setDisplay] = useState(false)
  const [animation, setAnimation] = useState('')

  const handleClick = () => {
    setAnimation('animate-slideIn')
    setDisplay(true)
  }

  const handleGoBack = () => {
    setAnimation('animate-slideOut')
    setTimeout(() => { setDisplay(false) }, 500)
  }

  return (
    <>
      <article className="flex flex-col gap-2 items-center">
        <header className={`h-48 w-48 bg-${props.background}`}></header>

        <section className="flex items-center justify-between w-10/12">
          <p className="text-lg font-bold">{props.title}</p>
          <p className="text-base text-right text-gray-400 tracking-wide">
            ${props.price}
          </p>
        </section>
        <footer className="w-10/12 grid justify-end">
          <Button
            fontSize="sm"
            marginY="0"
            bg="bg-white"
            textColor="yellow-500"
            customClass="border border-yellow-500 hover:border-yellow-300"
            onClick={handleClick}
          >
            Detalles
          </Button>
        </footer>
      </article>
      <ItemDisplay {...props} display={display} animation={animation} goBack={handleGoBack} />
    </>
  )
}
