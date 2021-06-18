import React from "react"
import Container from "../UI/Container"

const AboutCol = (props) => {
  return (
    <div className="w-full p-4 lg:my-12 flex flex-col gap-2 justify-center">
      {props.children}
    </div>
  )
}

export default function AboutSection(props) {
  return (
    <Container
      sectionClasses={
        props.reverse ? "bg-gradient-to-br from-yellow-50 to-yellow-100" : ``
      }
      containerClasses={` flex flex-col ${
        props.reverse ? `lg:flex-row-reverse` : `lg:flex-row`
      }`}
    >
      <AboutCol>
        <div
          className="bg-center bg-no-repeat bg-cover shadow w-full h-full bg-yellow-200"
          style={{ backgroundImage: props.image, minHeight: "60vh" }}
        ></div>
      </AboutCol>
      <AboutCol>
        <h2 className="font-bold text-4xl text-yellow-600">{props.title}</h2>
        <p className="text-base leading-relaxed text-gray-500">
          {props.content}
        </p>
      </AboutCol>
    </Container>
  )
}
