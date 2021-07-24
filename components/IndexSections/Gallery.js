import { ButtonSecondary } from '../UI/Button';
import Container from '../UI/Container';
import { CameraIcon } from '@heroicons/react/solid';

export default function Gallery() {
  return (
    <Container
      sectionClasses='bg-gradient-to-br from-pink-200 to-pink-300'
      containerClasses='flex flex-col lg:flex-row justify-center items-center gap-6 px-4 py-32'>
      <div>
        <h2 className='text-4xl font-bold text-gray-800'>
          Visita nuestro Instagram
        </h2>
      </div>
      <ButtonSecondary>
        <a
          href='https://www.instagram.com/saboresdelaura'
          className='w-full h-full flex flex-row items-center gap-1'>
          Instagram
          <CameraIcon className='w-5 h-5' />
        </a>
      </ButtonSecondary>
    </Container>
  );
}
