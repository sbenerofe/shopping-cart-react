import React from 'react';

import { Item } from './Item';

const Shop = ( props ) => {
  const { catalog, addItem } = props;

  return (
    <div className='Shop'>
      <div className='items-container'>
        { catalog.map((item) => {
          return <Item key={ item.id } item={ item } addItem={ addItem } />;
        })}
      </div>
    </div>
  );
};

export { Shop };
