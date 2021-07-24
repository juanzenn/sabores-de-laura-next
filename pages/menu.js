import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import MenuNavigation from '../components/Menu/MenuNavigation';
import MenuItem from '../components/Menu/MenuItem';
import { fetchProducts, fetchTags } from '../contentful.js';

export default function Menu(props) {
  const [category, setCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleClick = (param, event) => {
    setCategory(param);
  };

  useEffect(() => {
    const MenuItems = props.products;
    if (category === 'all') {
      setFilteredItems(MenuItems);
    } else {
      function filterArray(item) {
        if (item.metadata.tags[0].sys.id === category) {
          return true;
        }
        return false;
      }
      const filteredArray = MenuItems.filter(filterArray);
      setFilteredItems(filteredArray);
    }
  }, [category, props.products]);

  return (
    <>
      <Head>
        <title>Sabores de Laura - Menú</title>
        <meta
          name='description'
          content='Todos nuestros productos en un solo sitio. Tenemos variedad de cupcakes, tortas, pie de limon, cheesecake, galletas y más.'
        />
        <meta name='robots' content='noindex' />
      </Head>
      <main className='min-h-screen my-12 lg:my-24'>
        <h2 className='font-bold text-6xl text-center text-gray-800'>Menu</h2>
        <p className='text-gray-600 mb-4 text-sm text-center'>
          ¡Ve nuestros postres y prepara tu pedido!
        </p>
        <MenuNavigation tags={props.tags} selectCategory={handleClick} />
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-6 px-2'>
          {filteredItems.map(product => (
            <MenuItem
              key={product.sys.id}
              background={'bg-red-700'}
              title={product.fields.title}
              price={product.fields.price}
              description={product.fields.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const tags = await fetchTags();
  const products = await fetchProducts();

  return {
    props: {
      tags,
      products,
    },
  };
}
