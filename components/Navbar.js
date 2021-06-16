import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const NavbarItem = (props) => {
  return (
    <Link href={props.href}>
        <a className="w-max text-black tracking-wide px-4 py-2 hover:bg-red-400 hover:text-pink-100 rounded transtion-all duration-300">{props.title}</a>
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

  return (
    <>
      <nav className={`w-full bg-white lg:bg-pink-100 fixed top-0 flex flex-col lg:flex-row gap-4 py-2 px-2 lg:pl-12 shadow-md z-40 ` + isActive}>
        {items.map((item,index) => (
          <NavbarItem key={index} title={item.title} href={item.href} />
        ))}
      </nav>
      <button className="fixed top-2 right-6 lg:hidden z-50" onClick={() => setActive(!active)}>
        {active ? 'Open' : 'Close'}
      </button>
    </>

  )
}
