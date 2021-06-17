import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MenuAlt3Icon, XCircleIcon } from '@heroicons/react/outline'

const NavbarItem = (props) => {
  return (
    <Link href={props.href}>
        <a onClick={props.customOnClick} className="w-max text-gray-900 tracking-wide text-sm px-4 py-2 hover:bg-yellow-300 rounded-sm transtion-all duration-300">{props.title}</a>
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
      <nav className={`w-full bg-gray-50 fixed top-0 flex flex-col lg:flex-row lg:items-center gap-4 py-1 px-2 lg:pl-12 shadow z-40 ` + isActive}>
        <div className="h-8 w-8 inline-block bg-logo bg-cover bg-center bg-no-repeat rounded-full"></div>
        {items.map((item,index) => (
          <NavbarItem key={index} title={item.title} href={item.href} customOnClick={handleClick} />
        ))}
      </nav>
      <button className="fixed top-2 right-6 lg:hidden z-50 focus:outline-none" onClick={() => setActive(!active)}>
        {active ? <XCircleIcon className="h-6 w-6 text-yellow-600"/> : <MenuAlt3Icon className="h-6 w-6 text-black"/>}
      </button>
    </>

  )
}
