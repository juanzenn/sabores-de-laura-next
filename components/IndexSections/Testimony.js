import React from "react"
import Container from "../UI/Container"
import FlexContainer from "../UI/FlexContainer"

const TestimonyCard = ({ position }) => {
  return (
    <FlexContainer
      classes={`w-full lg:w-1/2 flex-col lg:flex-row p-4 bg-gray-50 gap-2 rounded items-center shadow ${position}`}
    >
      <div className="w-24 h-24 lg:w-80 lg:h-60 mb-4 lg:mb-0">
        <div className="w-full h-full rounded-full lg:rounded-none bg-yellow-500"></div>
      </div>
      <div className="w-full">
        <p className="text-gray-600 text-sm pl-2 border-l-4 border-pink-500 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora
          accusantium corporis necessitatibus cumque debitis, obcaecati quasi
          iusto! Fugit, quasi placeat animi porro aut autem.
        </p>
        <h3 className="text-pink-600 font-bold text-center lg:text-left grid">
          Client name
        </h3>
      </div>
    </FlexContainer>
  )
}

export default function Testimony() {
  return (
    <Container sectionClasses="py-12 relative" containerClasses="grid gap-12 lg:gap-4">
      <div>
        <h2 className='font-bold text-4xl text-yellow-500'>Nuestros clientes</h2>
        <p className='text-xl text-gray-500'>Nos prefieren por nuestra atención y calidad</p>  
      </div> 
      <TestimonyCard />
      <TestimonyCard position="justify-self-center" />
      <TestimonyCard position="justify-self-end" />
      <div className='absolute bg-cookies bg-no-repeat bg-cover bg-center w-96 h-96 top-12 right-12 transform hidden lg:block'></div>
      <div className='absolute bg-birthdaycake bg-no-repeat bg-cover bg-center w-96 h-96 bottom-12 left-12 transform hidden lg:block'></div>
    </Container>
  )
}
