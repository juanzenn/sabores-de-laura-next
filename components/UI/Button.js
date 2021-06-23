export default function Button({
  children,
  customClass = ``,  
  ...rest
}) {
  return (
    <button
      className={`py-2 px-6 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-1 ${customClass}`}
      {...rest}
    >
      {children}
    </button>
  )
}

function ButtonPrimary({ children, spacing }) {
  return (
    <Button
      customClass={`text-lg bg-yellow-500 hover:bg-yellow-300 ${spacing}`}
    >
      {children}
    </Button>
  )
}

function ButtonSecondary({ children, spacing }) {
  return (
    <Button customClass={`text-lg bg-pink-500 hover:bg-pink-300 ${spacing}`}>
      {children}
    </Button>
  )
}

function MenuButton({ children, spacing, ...rest }) {
  return (
    <Button customClass={`text-base text-yellow-500 bg-transparent border border-yellow-500 hover:text-white hover:bg-yellow-500 ${spacing}`} {...rest}>
      {children}
    </Button>
  )
}

export { ButtonPrimary, ButtonSecondary, MenuButton }
