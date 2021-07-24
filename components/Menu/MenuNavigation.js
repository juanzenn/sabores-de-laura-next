import React from 'react';

const NavItem = props => {
  return (
    <li
      onClick={props.customEvent}
      category={props.category}
      className='cursor-pointer hover:bg-yellow-400 text-black tracking-wide transition-all p-2'>
      {props.children}
    </li>
  );
};

export default function MenuNavigation({ selectCategory, tags }) {
  const items = [
    {
      title: 'Todos',
      category: 'all',
    },
    {
      title: 'Cupcakes',
      category: 'cupcake',
    },
    {
      title: 'Tortas',
      category: 'cake',
    },
    {
      title: 'Pies',
      category: 'pie',
    },
    {
      title: 'Galletas',
      category: 'cookie',
    },
  ];

  return (
    <div className='bg-yellow-300 mb-4 flex items-center pl-2 lg:pl-12 overflow-scroll lg:overflow-hidden'>
      <ul className='flex gap-2'>
        <NavItem customEvent={e => selectCategory('all', e)}> Todos </NavItem>
        {tags.map(tag => (
          <NavItem
            key={tag.sys.id}
            customEvent={e => selectCategory(tag.sys.id, e)}>
            {tag.name}
          </NavItem>
        ))}
      </ul>
    </div>
  );
}
