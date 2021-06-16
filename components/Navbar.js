import React, { useState, useEffect } from 'react'

const NavbarItem = (props) => {
  return (
    <a href={props.href} className="w-max text-gray-800 font-bold px-4 py-2 hover:bg-red-400 rounded transtion-all duration-300">{props.title}</a>
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
      href: '/'
    },
    {
      title: 'Nosotros',
      href: '/'
    },
    {
      title: 'Contacto',
      href: '/'
    },
  ]

  const isActive = active ? '' : 'hidden'


  return (
    <>
      <nav className={`w-full bg-white lg:bg-transparent fixed top-0 flex flex-col lg:flex-row gap-4 py-2 px-2 ` + isActive}>
        {items.map(item => (
          <NavbarItem title={item.title} href={item.href} />
        ))}
      </nav>
      <button className="fixed top-2 right-6 lg:hidden" onClick={() => setActive(!active)}>
        {active ? 'Open' : 'Close'}
      </button>
    </>

  )
}
