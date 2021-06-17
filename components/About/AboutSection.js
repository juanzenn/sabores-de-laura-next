import React from "react"

const AboutCol = (props) => {
  return (
    <div className="w-full p-4 lg:my-12 flex flex-col gap-2 justify-center">
      {props.children}
    </div>
  )
}

export default function AboutSection(props) {
  return (
    <section className={props.reverse ? 'bg-pink-100' : ``}>
      <div
        className={
          `container mx-auto flex flex-col ` +
          (props.reverse ? `lg:flex-row-reverse` : `lg:flex-row`)
        }
      >
        <AboutCol>
          <div
            className="bg-center bg-no-repeat bg-cover shadow w-full h-full bg-pink-200"
            style={{ backgroundImage: props.image, minHeight: '60vh' }}
          ></div>
        </AboutCol>
        <AboutCol>
          <h2 className="font-bold text-4xl text-pink-600">{props.title}</h2>
          <p className="text-base leading-relaxed text-gray-500">
            {props.content}
          </p>
        </AboutCol>
      </div>
    </section>
  )
}
