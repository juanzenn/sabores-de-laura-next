import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import MenuNavigation from '../components/Menu/MenuNavigation'
import MenuItem from '../components/Menu/MenuItem'

export default function Menu() {
  const [category, setCategory] = useState('all')
  const [filteredItems, setFilteredItems] = useState([])

  const handleClick = (param, event) => {
    setCategory(param)
  }

  useEffect(() => {
    const MenuItems = [
      {
        title: 'Cupcake 1',
        price: '15',
        color: 'yellow-400',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',
        category: 'cupcake',
      },
      {
        title: 'Cupcake 2',
        price: '15',
        color: 'yellow-400',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'cupcake',
      },
      {
        title: 'Cupcake 3',
        price: '15',
        color: 'yellow-400',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'cupcake',
      },
      {
        title: 'Torta 1',
        price: '40',
        color: 'yellow-500',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'cake',
      },
      {
        title: 'Torta 2',
        price: '40',
        color: 'yellow-500',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'cake',
      },
      {
        title: 'Torta 3',
        price: '40',
        color: 'yellow-500',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'cake',
      },
      {
        title: 'Pie 1',
        price: '35',
        color: 'yellow-600',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'pie',
      },
      {
        title: 'Pie 2',
        price: '35',
        color: 'yellow-600',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'pie',
      },
      {
        title: 'Pie 3',
        price: '35',
        color: 'yellow-600',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'pie',
      },
      {
        title: 'Galleta 1',
        price: '5',
        color: 'yellow-700',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'cookie',
      },
      {
        title: 'Galleta 2',
        price: '5',
        color: 'yellow-700',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'cookie',
      },
      {
        title: 'Galleta 3',
        price: '5',
        color: 'yellow-700',
        'description':
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni tenetur quia vero facilis perferendis, omnis sed soluta possimus distinctio vitae architecto tempore praesentium ea? Impedit soluta, ipsum suscipit eligendi assumenda ipsa laboriosam obcaecati eum repudiandae vitae? Aut sapiente voluptas doloribus ipsam veniam beatae tempora, autem ipsum esse incidunt inventore laboriosam eum nisi laudantium, veritatis alias!',

        category: 'cookie',
      },
    ]
    if (category === 'all') {
      setFilteredItems(MenuItems)
    } else {
      function filterArray(item) {
        if (item.category === category) {
          return true
        }
        return false
      }
      const filteredArray = MenuItems.filter(filterArray)
      setFilteredItems(filteredArray)
    }
  }, [category])

  return (
    <>
      <Head>
        <title>Sabores de Laura - Menú</title>
      </Head>
      <main className="min-h-screen my-12 lg:my-24">
        <h2 className="font-bold text-6xl text-center">Menu</h2>
        <p className="text-gray-500 mb-4 text-sm text-center">
          Todos nuestros postres, con precios actualizados.
        </p>
        <MenuNavigation selectCategory={handleClick} />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 md:gap-6 my-6">
          {/* Filter the array with "category"
              Map the array after */}
          {filteredItems.map((item, index) => (
            <MenuItem
              key={index}
              background={item.color}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </main>
    </>
  )
}
