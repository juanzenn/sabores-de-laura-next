import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MenuAlt3Icon, XCircleIcon } from '@heroicons/react/outline'

const NavbarItem = (props) => {
  return (
    <Link href={props.href}>
        <a onClick={props.customOnClick} className="w-max text-black tracking-wide px-4 py-2 hover:bg-pink-300 rounded transtion-all duration-300">{props.title}</a>
    </Link>
  )
}

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    window.innerWidth < 768 ? setActive(false) : setActive(true)
  }, [])

  const items = [
    {
      title: 'Página principal',
      href: '/'
    },
    {
      title: 'Menú',
      href: '/menu'
    },
    {
      title: 'Nosotros',
      href: '/about'
    },
    {
      title: 'Contacto',
      href: '/contact'
    },
  ]

  const isActive = active ? '' : 'hidden'

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setActive(false)
    }
  }

  return (
    <>
      <nav className={`w-full bg-pink-50 fixed top-0 flex flex-col lg:flex-row gap-4 py-2 px-2 lg:pl-12 shadow-md z-40 ` + isActive}>
        {items.map((item,index) => (
          <NavbarItem key={index} title={item.title} href={item.href} customOnClick={handleClick} />
        ))}
      </nav>
      <button className="fixed top-2 right-6 lg:hidden z-50 focus:outline-none" onClick={() => setActive(!active)}>
        {active ? <XCircleIcon className="h-6 w-6 text-pink-600"/> : <MenuAlt3Icon className="h-6 w-6 text-black"/>}
      </button>
    </>

  )
}
