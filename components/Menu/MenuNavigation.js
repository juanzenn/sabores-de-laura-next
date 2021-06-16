import React from 'react'

const NavItem = (props) => {
  return <li onClick={props.customEvent} category={props.category} className="cursor-pointer hover:bg-pink-600 hover:text-white transition-all p-2 rounded-md">{props.children}</li>
}

export default function MenuNavigation({selectCategory}) {
  return (
    <div className="bg-pink-200 w-screen h-12 mb-4 flex items-center">
      <ul className="container mx-auto flex gap-4">
      <NavItem customEvent={(e) => selectCategory('all', e)}>Todos</NavItem>
      <NavItem customEvent={(e) => selectCategory('cupcake', e)}>Cupcakes</NavItem>
      <NavItem customEvent={(e) => selectCategory('cake', e)}>Cakes</NavItem>
      <NavItem customEvent={(e) => selectCategory('pie', e)}>Pies</NavItem>
      <NavItem customEvent={(e) => selectCategory('cookie', e)}>Cookies</NavItem>
      </ul>
    </div>
  )
}
