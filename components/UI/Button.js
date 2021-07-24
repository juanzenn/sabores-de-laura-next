import React from 'react';

export default function Button({ children, customClass = ``, ...rest }) {
  return (
    <button
      className={`py-2 px-6 rounded-full shadow-lg font-light transform hover:-translate-y-1 transition-all duration-300 text-white ${customClass}`}
      {...rest}>
      {children}
    </button>
  );
}

const ButtonPrimary = ({ children, spacing, fontSize = 'text-lg' }) => {
  return (
    <Button
      customClass={`${fontSize} bg-yellow-500 filter hover:brightness-125 ${spacing}`}>
      {children}
    </Button>
  );
};

const ButtonSecondary = ({
  children,
  spacing,
  fontSize = 'text-lg',
  ...rest
}) => {
  return (
    <Button
      {...rest}
      customClass={`${fontSize} bg-pink-500 filter hover:brightness-125 ${spacing}`}>
      {children}
    </Button>
  );
};

function MenuButton({ children, spacing, fontSize, ...rest }) {
  return (
    <Button
      customClass={`text-base text-pink-700 bg-transparent border border-pink-700 hover:text-white hover:bg-pink-700 filter hover:brightness-125 ${spacing}`}
      {...rest}>
      {children}
    </Button>
  );
}

export { ButtonPrimary, ButtonSecondary, MenuButton };
