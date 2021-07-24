import { useState, useEffect } from 'react';
import Button, { ButtonSecondary } from '../UI/Button';
import Container from '../UI/Container';
import { ArrowLeftIcon } from '@heroicons/react/outline';

const DisplayForm = ({ name }) => {
  // const [message, setMessage] = useState('');

  // const handleChange = e => {
  //   setMessage(e.target.value);
  // };

  const message = `¡Hola! Vi su postre ${name} y me gustaría hacerles un pedido.`;

  const handleSubmit = e => {
    e.preventDefault();
    window.location.href = `https://api.whatsapp.com/send/?phone=584142007823&text=${message}`;
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-start gap-2'>
      <Button type='submit' customClass='w-full bg-pink-500 hover:bg-pink-300'>
        Enviar WhatsApp
      </Button>
    </form>
  );
};

export default function ItemDisplay(props) {
  return (
    <article
      className={
        props.display
          ? `fixed w-screen min-h-screen overflow-y-scroll top-0 bg-pink-100 ${props.animation} z-50 py-8 px-4`
          : `hidden`
      }>
      <ButtonSecondary
        onClick={props.goBack}
        customClass='bg-yellow-300 hover:bg-yellow-200 mb-4'>
        <ArrowLeftIcon className='h-7 w-7' />
      </ButtonSecondary>

      <article className='w-full h-screen flex flex-col lg:flex-row lg:gap-12 lg:px-24'>
        <header className='w-full flex flex-col items-center text-left'>
          <figure
            className={`w-72 lg:w-full h-72 lg:h-1/2 bg-pink-700 rounded my-4`}></figure>
        </header>

        <section className='w-full'>
          <main>
            <h4 className='w-full text-4xl font-bold text-red-700 tracking-tight'>
              {props.title}
            </h4>
            <span className='text-gray-800 text-2xl text-right mb-2'>
              ${props.price}
            </span>
            <p className='text-base text-gray-600'>{props.description}</p>
          </main>
          <footer className='mt-4'>
            {/* <span className='font-bold text-lg text-yellow-600'></span> */}
            <p className='mb-2 text-sm text-pink-400'>Haz tu pedido</p>
            <DisplayForm name={props.title} />
          </footer>
        </section>
      </article>
    </article>
  );
}
