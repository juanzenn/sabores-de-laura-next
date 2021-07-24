import React from 'react';
import Container from '../UI/Container';
import FlexContainer from '../UI/FlexContainer';

const TestimonyCard = ({ content, client }) => {
  return (
    <FlexContainer
      classes={`w-3/4 h-max-content lg:w-full flex-col p-4 rounded items-center`}>
      <div className='w-32 h-32 mb-4'>
        <div className='w-full h-full rounded-full bg-gray-300'></div>
      </div>
      <div className='w-full'>
        <p className='font-light text-gray-600 mb-1'>{content}</p>
        <h3 className='text-pink-400 text-sm text-right'>{client}</h3>
      </div>
    </FlexContainer>
  );
};

export default function Testimony() {
  return (
    <Container sectionClasses='py-12 relative' containerClasses=''>
      <div className='mb-16'>
        <h2 className='font-bold text-4xl text-pink-600'>Nuestros clientes</h2>
        <p className='text-lg font-light text-gray-800'>
          Nos prefieren por nuestro servicio y calidad
        </p>
      </div>
      <section className='grid lg:grid-cols-3 gap-12 justify-items-center items-start'>
        <TestimonyCard
          content='Sus postres son bien sabrosos. 10/10'
          client='Juan Alvarez'
        />
        <TestimonyCard
          content='Siempre que voy a salir, pido por adelantado una torta de Sabores de Laura. Todos mis amigos aman esas tortas, definitivamente recomendado.'
          client='Brandon Sanderson'
        />
        <TestimonyCard
          content='Soy actriz y como tortas de Sabores de Laura. Eso es suficiente justificación para que compres la tuya en este momento!'
          client='Emma Watson'
        />
      </section>
    </Container>
  );
}
