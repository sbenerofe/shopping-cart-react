import React from 'react';

const Navbar = ( props ) => {
  return (
    <div className='Navbar' >
      <button onClick={ props.func }>{ props.text }</button>
    </div>
  );
};

export { Navbar };