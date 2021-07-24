import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TextAlignJustified, Cross } from 'akar-icons';

const NavbarItem = props => {
  return (
    <Link href={props.href}>
      <a
        onClick={props.customOnClick}
        className='w-max px-4 py-2 text-black tracking-wide font-light  hover:bg-yellow-300 rounded-full transtion-all duration-200'>
        {props.title}
      </a>
    </Link>
  );
};

export default function Navbar() {
  const [active, setActive] = useState('');
  const [animation, setAnimation] = useState('animate-slideIn');

  useEffect(() => {
    window.innerWidth < 768 ? setActive(false) : setActive(true);
  }, []);

  const items = [
    {
      title: 'Página principal',
      href: '/',
    },
    {
      title: 'Menú',
      href: '/menu',
    },
    {
      title: 'Nosotros',
      href: '/about',
    },
    {
      title: 'Contacto',
      href: '/contact',
    },
  ];

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setAnimation('animate-slideOut');
      setTimeout(() => {
        setActive(false);
      }, 300);
    }
  };

  return (
    <>
      <nav className={`w-screen bg-white fixed top-0 shadow z-40`}>
        <div
          className={
            active
              ? `absolute lg:relative py-6 lg:py-2 pl-6 lg:pl-0 bg-gray-50 w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 ${animation}`
              : 'hidden'
          }>
          <div className='ml-4 lg:m-0  h-8 w-8 inline-block bg-logo bg-cover bg-center bg-no-repeat rounded-full'></div>

          <div className='w-full flex flex-col lg:flex-row justify-center gap-4'>
            {items.map((item, index) => (
              <NavbarItem
                key={index}
                title={item.title}
                href={item.href}
                customOnClick={handleClick}
              />
            ))}
          </div>
        </div>
      </nav>
      <button
        className='fixed top-4 right-6 lg:hidden z-40 focus:outline-none'
        onClick={() => {
          setAnimation(active ? 'animate-slideOut' : 'animate-slideIn');
          setTimeout(() => {
            setActive(!active);
          }, 500);
        }}>
        {active ? (
          <Cross size={30} className='text-pink-500' strokeWidth={3} />
        ) : (
          <TextAlignJustified
            size={36}
            className='text-pink-500'
            strokeWidth={3}
          />
        )}
      </button>
    </>
  );
}
