import React from "react"

export default function Container({ containerClasses, children, sectionClasses, height='h-full' }) {
  return (
    <section className={sectionClasses}>
      <div className={`container mx-auto w-11/12 lg:w-10/12 ${height} ${containerClasses}`}>
        {children}
      </div>
    </section>
  )
}
