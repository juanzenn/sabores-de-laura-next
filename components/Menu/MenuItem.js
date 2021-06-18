import React, { useState } from 'react'
import { InformationCircleIcon } from '@heroicons/react/solid'

export default function MenuItem(props) {
  const [tooltipOpacity, setTooltipOpacity] = useState(false)

  const handleHover = () => {
    setTooltipOpacity(true)
  }

  const handleLeave = () => {
    setTooltipOpacity(false)
  }

  return (
    <>
      <div className="flex flex-col gap-2 items-center relative">
        <div className={`h-40 w-40 lg:h-48 lg:w-48 bg-${props.background}`}></div>

        <div className="flex items-center justify-between w-10/12">
          <p className="text-lg font-bold">{props.title}</p>
          <div className='flex items-center gap-1'>
            <p className="text-base text-right text-gray-400 tracking-wide">${props.price}</p>
            <InformationCircleIcon className='h-7 w-7 text-gray-300 cursor-pointer' onMouseEnter={handleHover} onMouseLeave={handleLeave} />
            <div className={tooltipOpacity ? 'lg:w-full absolute bg-gray-400 text-white text-center bottom-8 left-1 p-1 rounded-md animate-opacity' : 'hidden'}>
              <p className='md:text-sm leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, ipsam velit debitis, possimus qui neque quibusdam enim omnis excepturi vel beatae? Eveniet.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
