import React, { useState } from 'react';

import { Item } from './Item';

import pokeBallIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/pokeBall.webp';
import greatBallIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/greatBall.png';
import ultraBallIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/ultraBall.webp';
import potionIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/potion.webp';
import superPotionIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/superPotion.png';
import hyperPotionIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/hyperPotion.webp';
import maxPotionIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/maxPotion.png';
import fullRestoreIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/fullRestore.webp';
import reviveIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/revive.webp';
import antidoteIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/antidote.webp';
import paralyzeHealIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/paralyzeHeal.webp';
import awakeningIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/awakening.png';
import burnHealIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/burnHeal.webp';
import iceHealIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/iceHeal.webp';
import fullHealIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/fullHeal.webp';
import escapeRopeIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/escapeRope.webp';
import repelIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/repel.webp';
import superRepelIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/superRepel.webp';
import maxRepelIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/maxRepel.webp';
import pokeDollIcon from '/home/akmal-izuddin/Desktop/the-odin-project/pokemart-react/src/assets/item-images/pokeDoll.webp';


const Shop = ( props ) => {
  const [ pokeballQty, setPokeballQty ] = useState( 0 );
  const [ greatballQty, setGreatballQty ] = useState( 0 );
  const [ ultraballQty, setUltraballQty ] = useState( 0 );
  const [ potionQty, setPotionQty ] = useState( 0 );
  const [ superpotionQty, setSuperpotionQty ] = useState( 0 );
  const [ hyperpotionQty, setHyperpotionQty ] = useState( 0 );
  const [ maxpotionQty, setMaxpotionQty ] = useState( 0 );
  const [ fullrestoreQty, setFullrestoreQty ] = useState( 0 );
  const [ reviveQty, setReviveQty ] = useState( 0 );
  const [ antidoteQty, setAntidoteQty ] = useState( 0 );
  const [ paralyzehealQty, setParalyzehealQty ] = useState( 0 );
  const [ awakeningQty, setAwakeningQty ] = useState( 0 );
  const [ burnhealQty, setBurnhealQty ] = useState( 0 );
  const [ icehealQty, setIcehealQty ] = useState( 0 );
  const [ fullhealQty, setFullhealQty ] = useState( 0 );
  const [ escaperopeQty, setEscaperopeQty ] = useState( 0 );
  const [ repelQty, setRepelQty ] = useState( 0 );
  const [ superrepelQty, setSuperrepelQty ] = useState( 0 );
  const [ maxrepelQty, setMaxrepelQty ] = useState( 0 );
  const [ pokedollQty, setPokedollQty ] = useState( 0 );

  const addPokeBall = () => {
    const newArray = props.array.concat(0);
    props.setArray( newArray );
    console.log( newArray );
  };

  return (
    <div className='Shop'>
      <div className='items-container'>
        <Item name={ 'POKE BALL' } itemID={ '01' } icon={ pokeBallIcon } price={ 200 } quantity={ pokeballQty } func={ addPokeBall }/>
        <Item name={ 'GREAT BALL' } itemID={ '02' } icon={ greatBallIcon } price={ 600 } quantity={ pokeballQty } />
        <Item name={ 'ULTRA BALL' } itemID={ '03' } icon={ ultraBallIcon } price={ 1200 } quantity={ pokeballQty } />
        <Item name={ 'POTION' } itemID={ '04' } icon={ potionIcon } price={ 300 } quantity={ pokeballQty } />
        <Item name={ 'SUPER POTION' } itemID={ '05' } icon={ superPotionIcon } price={ 700 } quantity={ pokeballQty } />
        <Item name={ 'HYPER POTION' } itemID={ '06' } icon={ hyperPotionIcon } price={ 1200 } quantity={ pokeballQty } />
        <Item name={ 'MAX POTION' } itemID={ '07' } icon={ maxPotionIcon } price={ 2500 } quantity={ pokeballQty } />
        <Item name={ 'FULL RESTORE' } itemID={ '08' } icon={ fullRestoreIcon } price={ 3000 } quantity={ pokeballQty } />
        <Item name={ 'REVIVE' } itemID={ '09' } icon={ reviveIcon } price={ 1500 } quantity={ pokeballQty } />
        <Item name={ 'ANTIDOTE' } itemID={ '10' } icon={ antidoteIcon } price={ 100 } quantity={ pokeballQty } />
        <Item name={ 'PARALYZE HEAL' } itemID={ '11' } icon={ paralyzeHealIcon } price={ 250 } quantity={ pokeballQty } />
        <Item name={ 'AWAKENING' } itemID={ '12' } icon={ awakeningIcon } price={ 250 } quantity={ pokeballQty } />
        <Item name={ 'BURN HEAL' } itemID={ '13' } icon={ burnHealIcon } price={ 250 } quantity={ pokeballQty } />
        <Item name={ 'ICE HEAL' } itemID={ '14' } icon={ iceHealIcon } price={ 250 } quantity={ pokeballQty } />
        <Item name={ 'FULL HEAL' } itemID={ '15' } icon={ fullHealIcon } price={ 600 } quantity={ pokeballQty } />
        <Item name={ 'ESCAPE ROPE' } itemID={ '16' } icon={ escapeRopeIcon } price={ 550 } quantity={ pokeballQty } />
        <Item name={ 'REPEL' } itemID={ '17' } icon={ repelIcon } price={ 350 } quantity={ pokeballQty } />
        <Item name={ 'SUPER REPEL' } itemID={ '18' } icon={ superRepelIcon } price={ 500 } quantity={ pokeballQty } />
        <Item name={ 'MAX REPEL' } itemID={ '19' } icon={ maxRepelIcon } price={ 700 } quantity={ pokeballQty } />
        <Item name={ 'POKE DOLL' } itemID={ '20' } icon={ pokeDollIcon } price={ 300 } quantity={ pokeballQty } />
      </div>
    </div>
  );
};

export { Shop };
