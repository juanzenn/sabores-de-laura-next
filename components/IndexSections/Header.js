import { ButtonPrimary, ButtonSecondary } from '../UI/Button';
import Container from '../UI/Container';
import Link from 'next/link';
import FlexContainer from '../UI/FlexContainer';
import { Grid, Phone } from 'akar-icons';

export default function Header() {
  return (
    <Container
      sectionClasses='h-screen bg-cover bg-center bg-no-repeat bg-header bg-gray-600 bg-blend-multiply'
      containerClasses='h-full flex flex-col justify-center items-center'>
      <div className='w-full text-center'>
        <div className='w-72 h-72 bg-logo bg-center bg-cover bg-no-repeat rounded-full inline-block mb-2'></div>
      </div>

      <div className='w-full text-center'>
        <p className='my-2 text-3xl text-pink-100 font-black tracking-tight'>
          Respotería y pastelería
        </p>
        <h2 className='text-lg font-light text-pink-100'>
          Nuestros postres van directo al corazón
        </h2>

        <FlexContainer classes='gap-8 justify-center my-12'>
          <ButtonPrimary fontSize='text-xl'>
            <Link href='/menu'>
              <a className='w-full h-full flex flex-row items-center gap-2'>
                Menú
                <Grid size={20} />
              </a>
            </Link>
          </ButtonPrimary>
          <ButtonSecondary fontSize='text-xl'>
            <Link href='/contact'>
              <a className='w-full h-full flex flex-row items-center gap-2'>
                Contacto
                <Phone size={20} />
              </a>
            </Link>
          </ButtonSecondary>
        </FlexContainer>
      </div>
    </Container>
  );
}
