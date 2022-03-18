import React from 'react';

const Navbar = ( props ) => {
  return (
    <button onClick={ props.func }>{ props.text }</button>
  );
};

export { Navbar };