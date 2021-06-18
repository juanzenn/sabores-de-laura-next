import React from "react"
import Link from "next/link"

const FooterLink = (props) => {
  return (
    <Link href={props.href}>
      <a className="hover:text-yellow-400 transition-all duration-300">
        {props.title}
      </a>
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
    <footer className="bg-gray-900 text-yellow-100 py-12">
      <div className="`container mx-auto w-11/12 lg:w-10/12 flex flex-col lg:flex-row gap-4 lg:gap-24">
        <div className="w-full">
          <h4 className="font-bold text-3xl mb-4">Sabores de Laura</h4>
          <div className="flex flex-col gap-1">
            {footerLinks.map((item, index) => (
              <FooterLink key={index} href={item.href} title={item.title} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <h4 className="font-bold text-3xl mb-4">Información</h4>
          <div className="flex flex-col gap-1">
            {footerInfo.map((item, index) => (
              <FooterInfo key={index} title={item.title} info={item.info} />
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          <div className="h-48 w-48 inline-block bg-logo bg-cover bg-center bg-no-repeat rounded-full"></div>
          <p className="text-xs text-gray-500">Sabores de Laura - Todos los derechos reservados</p>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-12">Diseñado y programado con <strong className='text-blue-400'>♥</strong> en <a href="" className="hover:text-blue-400 transition-all duration-300">ZEN Websites</a></p>
    </footer>
  )
}
