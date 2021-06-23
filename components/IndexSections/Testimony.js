import React from 'react'
import Container from '../UI/Container'
import FlexContainer from '../UI/FlexContainer'

const TestimonyCard = ({ content }) => {
  return (
    <FlexContainer
      classes={`w-3/4 lg:w-full flex-col p-4 rounded-md items-center shadow-sm border border-pink-100`}
    >
      <div className="w-32 h-32">
        <div className="w-full h-full rounded-full bg-yellow-500 transform -translate-y-12"></div>
      </div>
      <div className="w-full">
        <p className="text-gray-400 text-sm mb-2">{content}</p>
        <h3 className="text-pink-600 text-xl font-bold text-right">
          Client name
        </h3>
      </div>
    </FlexContainer>
  )
}

export default function Testimony() {
  return (
    <Container sectionClasses="py-12 relative" containerClasses="">
      <div className="mb-16">
        <h2 className="font-bold text-4xl text-yellow-500">
          Nuestros clientes
        </h2>
        <p className="text-xl text-gray-500">
          Nos prefieren por nuestra atención y calidad
        </p>
      </div>
      <section className="grid lg:grid-cols-3 gap-12 justify-items-center">
        <TestimonyCard
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora
          accusantium corporis necessitatibus cumque debitis, obcaecati quasi
          iusto! Fugit, quasi placeat animi porro aut autem."
        />
        <TestimonyCard
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora
          accusantium corporis necessitatibus cumque debitis, obcaecati quasi
          iusto! Fugit, quasi placeat animi porro aut autem."
        />
        <TestimonyCard
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora
          accusantium corporis necessitatibus cumque debitis."
        />
      </section>
    </Container>
  )
}
