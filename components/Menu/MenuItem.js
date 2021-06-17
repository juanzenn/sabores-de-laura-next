import React from 'react'

export default function MenuItem(props) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className={`h-48 w-48 bg-${props.background}`}></div>

      <div className="flex items-center justify-between w-10/12">
        <p className="text-lg font-bold">{props.title}</p>
        <p className="text-base text-right text-gray-400 tracking-wide">${props.price}</p>
      </div>
    </div>
  )
}
