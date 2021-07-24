import Container from '../UI/Container';

const GridItem = props => {
  return (
    <div className=''>
      <h4 className='font-bold text-xl text-pink-600 mb-1'>{props.title}</h4>
      <p className='text-base text-gray-800'>{props.description}</p>
    </div>
  );
};

export default function Values() {
  const items = [
    {
      title: 'Cada día mejor',
      description:
        'Nos dedicamos a la calidad y el sabor de nuestros productos',
    },
    {
      title: 'Recuerdos innovidables',
      description: 'Buscamos ser parte de tus momentos especiales',
    },
    {
      title: 'Familiaridad',
      description: 'Nuestros postres están hechos para compartir',
    },
    {
      title: 'Cada día mejor',
      description:
        'Nos dedicamos a la calidad y el sabor de nuestros productos',
    },
  ];

  return (
    <Container
      sectionClasses='lg:h-screen px-4 py-40 lg:py-0 bg-pavlova2 bg-center bg-cover bg-no-repeat'
      containerClasses='h-full flex flex-col lg:flex-row items-center gap-4'>
      <div className='bg-white bg-opacity-40 backdrop-filter backdrop-blur p-8 rounded-md lg:w-7/12'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-2 text-pink-600'>
          Somos más que postres
        </h2>
        <p className='lg:max-w-3xl text-gray-800'>
          Sabores de Laura nació de la idea de crear postres con un toque
          familiar y reconfontarte. Su misión es darle a cada cliente una
          experiencia única, enfocada en los pequeños detalles y la atención.
        </p>
        <div className='grid lg:grid-cols-2 gap-8 mt-8'>
          {items.map((item, index) => {
            return (
              <GridItem
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
