import React, { useState } from 'react';

import { Item } from './Item';

import pokeBallIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/pokeBall.webp';
import greatBallIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/greatBall.png';
import ultraBallIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/ultraBall.webp';
import maxPotionIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/maxPotion.png';
import reviveIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/revive.webp';
import fullHealIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/fullHeal.webp';
import escapeRopeIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/escapeRope.webp';
import superRepelIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/superRepel.webp';



const Shop = ( props ) => {
  const [ pokeBall, setPokeBall ] = useState({ icon: pokeBallIcon, name: 'POKE BALL', price: 200, itemID: '01' });
  const [ greatBall, setGreatBall ] = useState({ icon: greatBallIcon, name: 'GREAT BALL', price: 600, itemID: '02' });
  const [ ultraBall, setUltraBall ] = useState({ icon: ultraBallIcon, name: 'ULTRA BALL', price: 1200, itemID: '03' });
  const [ maxPotion, setMaxPotion ] = useState({ icon: maxPotionIcon, name: 'MAX POTION', price: 2500, itemID: '04' });
  const [ revive, setRevive ] = useState({ icon: reviveIcon, name: 'REVIVE', price: 1500, itemID: '05' });
  const [ fullHeal, setFullHeal ] = useState({ icon: fullHealIcon, name: 'FULL HEAL', price: 600, itemID: '06' });
  const [ escapeRope, setEscapeRope ] = useState({ icon: escapeRopeIcon, name: 'ESCAPE ROPE', price: 550, itemID: '07' });
  const [ superRepel, setSuperRepel ] = useState({ icon: superRepelIcon, name: 'SUPER REPEL', price: 500, itemID: '08' });

  const catalogue = [ pokeBall, greatBall, ultraBall, maxPotion, revive, fullHeal, escapeRope, superRepel ];

  return (
    <div className='Shop'>
      <div className='items-container'>
      <Item item={pokeBall} setItem={setPokeBall} array={props.array} setArray={props.setArray} />
      <Item item={greatBall} setItem={setGreatBall} array={props.array} setArray={props.setArray} />
      <Item item={ultraBall} setItem={setUltraBall} array={props.array} setArray={props.setArray} />
      <Item item={maxPotion} setItem={setMaxPotion} array={props.array} setArray={props.setArray} />
      <Item item={revive} setItem={setRevive} array={props.array} setArray={props.setArray} />
      <Item item={fullHeal} setItem={setFullHeal} array={props.array} setArray={props.setArray} />
      <Item item={escapeRope} setItem={setEscapeRope} array={props.array} setArray={props.setArray} />
      <Item item={superRepel} setItem={setSuperRepel} array={props.array} setArray={props.setArray} />
      </div>
    </div>
  );
};

export { Shop };
