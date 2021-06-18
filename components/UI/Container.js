import React from "react"

export default function Container({ containerClasses, children, sectionClasses }) {
  return (
    <section className={sectionClasses}>
      <div className={`container mx-auto w-11/12 lg:w-10/12 h-full ${containerClasses}`}>
        {children}
      </div>
    </section>
  )
}
