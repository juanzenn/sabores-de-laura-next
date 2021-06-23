import React from 'react'

export default function Button({ children, customClass = ``, ...rest }) {
  return (
    <button
      className={`py-2 px-6 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-white ${customClass}`}
      {...rest}
    >
      {children}
    </button>
  )
}

const ButtonPrimary = ({ children, spacing }) => {
  return (
    <Button
      customClass={`text-lg bg-yellow-500 filter hover:brightness-125 ${spacing}`}
    >
      {children}
    </Button>
  )
}

const ButtonSecondary = ({ children, spacing }) => {
  return (
    <Button
      customClass={`text-lg bg-pink-500 filter hover:brightness-125 ${spacing}`}
    >
      {children}
    </Button>
  )
}

ButtonSecondary.displayName = 'ButtonSecondary'
ButtonPrimary.displayName = 'ButtonPrimary'

function MenuButton({ children, spacing, ...rest }) {
  return (
    <Button
      customClass={`text-base text-yellow-500 bg-transparent border border-yellow-500 hover:text-white hover:bg-yellow-500 filter hover:brightness-125 ${spacing}`}
      {...rest}
    >
      {children}
    </Button>
  )
}

export { ButtonPrimary, ButtonSecondary, MenuButton }
