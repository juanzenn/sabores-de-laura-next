import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { TextAlignJustified, Cross } from 'akar-icons'

const NavbarItem = props => {
  return (
    <Link href={props.href}>
      <a
        onClick={props.customOnClick}
        className="w-max text-gray-900 tracking-wider text-lg lg:text-base px-4 py-2 hover:bg-yellow-200 rounded-full transtion-all duration-300"
      >
        {props.title}
      </a>
    </Link>
  )
}

export default function Navbar() {
  const [active, setActive] = useState('')
  const [animation, setAnimation] = useState('animate-slideIn')

  useEffect(() => {
    window.innerWidth < 768 ? setActive(false) : setActive(true)
  }, [])

  const items = [
    {
      title: 'Página principal',
      href: '/',
    },
    {
      title: 'Menú',
      href: '/menu',
    },
    {
      title: 'Nosotros',
      href: '/about',
    },
    {
      title: 'Contacto',
      href: '/contact',
    },
  ]

  const isActive = active ? '' : 'hidden'

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setAnimation('animate-slideOut')
      setTimeout(() => {
        setActive(false)
      }, 500)
    }
  }

  return (
    <>
      <nav className={`w-screen bg-gray-50 fixed top-0 shadow z-40`}>
        <div
          className={
            active
              ? `absolute lg:relative bg-gray-50 w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 py-6 lg:py-2 pl-6 lg:pl-0 ${animation}`
              : 'hidden'
          }
        >
          <div className="ml-4 lg:m-0  h-12 w-12 inline-block bg-logo bg-cover bg-center bg-no-repeat rounded-full"></div>

          <div className="flex flex-col lg:flex-row w-full justify-center">
            {items.map((item, index) => (
              <NavbarItem
                key={index}
                title={item.title}
                href={item.href}
                customOnClick={handleClick}
              />
            ))}
          </div>
        </div>
      </nav>
      <button
        className="fixed top-4 right-6 lg:hidden z-40 focus:outline-none"
        onClick={() => {
          setAnimation(active ? 'animate-slideOut' : 'animate-slideIn')
          setTimeout(() => {
            setActive(!active)
          }, 500)
        }}
      >
        {active ? (
          <Cross size={30} className="text-pink-500" strokeWidth={3} />
        ) : (
          <TextAlignJustified
            size={36}
            className="text-pink-500"
            strokeWidth={3}
          />
        )}
      </button>
    </>
  )
}
