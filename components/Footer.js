import React from "react"
import Link from "next/link"

const FooterLink = (props) => {
  return (
    <Link href={props.href}>
      <a className="hover:text-pink-500 transition-all duration-300">{props.title}</a>
    </Link>
  )
}

const FooterInfo = (props) => {
  return (
    <div>
      <strong>{props.title}</strong>: {props.info}
    </div>
  )
}

export default function Footer() {
  const footerLinks = [
    {
      title: "Página principal",
      href: "/",
    },
    {
      title: "Menú",
      href: "/menu",
    },
    {
      title: "Nosotros",
      href: "/about",
    },
    {
      title: "Contacto",
      href: "/contact",
    },
  ]

  const footerInfo = [
    {
      title: "Ubicación",
      info: "Venezuela, estado Miranda, San Antonio de los Altos",
    },
    {
      title: "Teléfono",
      info: "+58 414-123-4567",
    },
    {
      title: "Horarios",
      info: "8:00am - 6:00pm",
    },    
  ]

  return (
    <footer className="bg-pink-900 text-pink-300 pt-4 pb-24 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-24">
        <div>
          <h4 className="font-bold text-3xl mb-4">Sabores de Laura</h4>
          <div className="flex flex-col gap-1">
            {footerLinks.map((item, index) => (
              <FooterLink key={index} href={item.href} title={item.title} />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-3xl mb-4">Información</h4>
          <div className="flex flex-col gap-1">
            {footerInfo.map((item, index) => (
              <FooterInfo key={index} title={item.title} info={item.info}/>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
