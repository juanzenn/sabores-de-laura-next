import React, { useState } from 'react';

import ItemDisplay from './ItemDisplay';
import { MenuButton } from '../UI/Button';

export default function MenuItem(props) {
  const [display, setDisplay] = useState(false);
  const [animation, setAnimation] = useState('');

  const handleClick = () => {
    setAnimation('animate-slideIn');
    setDisplay(true);
  };

  const handleGoBack = () => {
    setAnimation('animate-slideOut');
    setTimeout(() => {
      setDisplay(false);
    }, 500);
  };

  return (
    <>
      <article className='flex flex-col items-center justify-between'>
        <header
          className={`h-48 lg:h-52 w-full ${props.background} rounded`}></header>

        <section className='w-full mt-4 mb-1 px-1 flex items-center justify-between'>
          <p className='w-2/3 font-bold tracking-tight text-gray-800'>
            {props.title}
          </p>
          <p className='w-1/3 text-right text-gray-600 tracking-wider'>
            ${props.price}
          </p>
        </section>
        <footer className='w-full px-1 flex justify-end'>
          <MenuButton spacing='mt-1 mb-3' onClick={handleClick}>
            Detalles
          </MenuButton>
        </footer>
      </article>
      <ItemDisplay
        {...props}
        display={display}
        animation={animation}
        goBack={handleGoBack}
      />
    </>
  );
}
