import React from "react"

const NavItem = (props) => {
  return (
    <li
      onClick={props.customEvent}
      category={props.category}
      className="cursor-pointer hover:bg-pink-400 text-white transition-all p-2 tracking-wider"
    >
      {props.children}
    </li>
  )
}

export default function MenuNavigation({ selectCategory }) {
  const items = [
    {
      title: "Todos",
      category: "all",
    },
    {
      title: "Cupcakes",
      category: "cupcake",
    },
    {
      title: "Tortas",
      category: "cake",
    },
    {
      title: "Pies",
      category: "pie",
    },
    {
      title: "Galletas",
      category: "cookie",
    },
  ]

  return (
    <div className="bg-pink-500 mb-4 flex items-center pl-2 lg:pl-12 overflow-scroll lg:overflow-hidden">
      <ul className="flex gap-2">
        {items.map((item, index) => (
          <NavItem
            key={index}
            customEvent={(e) => selectCategory(item.category, e)}
          >
            {item.title}
          </NavItem>
        ))}
      </ul>
    </div>
  )
}
