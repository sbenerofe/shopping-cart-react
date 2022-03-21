import React from 'react';
import { useNavigate } from 'react-router-dom';

import pokeMART from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/pokeMART.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='Home'>
      <img src={ pokeMART } alt='POKEMART ICON' />
      <div className='greetings' >
      <p>Welcome to the Poké Mart!</p>
      <p>May I help you?</p>
      <button onClick={ () => { navigate( '/pokemart-react/shop' ) } } >BUY</button>
      </div>
    </div>
  );
};

export { Home };