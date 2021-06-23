import React, { useState } from 'react'

import ItemDisplay from './ItemDisplay'
import {MenuButton} from '../UI/Button'

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

      <article className="flex flex-col gap-2 items-center justify-between">
        <header className={`h-48 max-w-full w-48 bg-${props.background}`}></header>

        <section className="flex items-center justify-between w-3/4 lg:w-full">
          <p className="text-base lg:text-lg font-semibold text-gray-700">{props.title}</p>
          <p className="text-sm lg:text-base text-right text-gray-400 tracking-wide">
            ${props.price}
          </p>
        </section>
        <footer className="w-3/4 lg:w-full grid justify-center lg:justify-end">
          <MenuButton
            spacing='mt-1 mb-3'
            onClick={handleClick}
          >
            Detalles
          </MenuButton>
        </footer>
      </article>
      <ItemDisplay {...props} display={display} animation={animation} goBack={handleGoBack} />
    </>

  )
}
