import React from 'react';

const Navbar = ( props ) => {
  return (
    <button onClick={ props.function }>{ props.text }</button>
  );
};

export { Navbar };