import React, { useState } from 'react';
import uniqid from 'uniqid';

import { Item } from './Item';
import { RenderItems } from './RenderItems';

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


const Shop = () => {
  const [ pokeBall, setPokeBall ] = useState({ icon: pokeBallIcon, name: 'POKE BALL', price: 200, quantity: 1 });
  const [ greatBall, setGreatBall ] = useState({ icon: greatBallIcon, name: 'GREAT BALL', price: 600, quantity: 1 });
  const [ ultraBall, setUltraBall ] = useState({ icon: ultraBallIcon, name: 'ULTRA BALL', price: 1200, quantity: 1 });
  const [ potion, setPotion ] = useState({ icon: potionIcon, name: 'POTION', price: 300, quantity: 1 });
  const [ superPotion, setSuperPotion ] = useState({ icon: superPotionIcon, name: 'SUPER POTION', price: 700, quantity: 1 });
  const [ hyperPotion, setHyperPotion ] = useState({ icon: hyperPotionIcon, name: 'HYPER POTION', price: 1200, quantity: 1 });
  const [ maxPotion, setmaxPotion ] = useState({ icon: maxPotionIcon, name: 'MAX POTION', price: 2500, quantity: 1 });
  const [ fullRestore, setFullRestore ] = useState({ icon: fullRestoreIcon, name: 'FULL RESTORE', price: 3000, quantity: 1 });
  const [ revive, setRevive ] = useState({ icon: reviveIcon, name: 'REVIVE', price: 1500, quantity: 1 });
  const [ antidote, setAntidote ] = useState({ icon: antidoteIcon, name: 'ANTIDOTE', price: 100, quantity: 1 });
  const [ paralyzeHeal, setParalyzeHeal ] = useState({ icon: paralyzeHealIcon, name: 'PARALYZE HEAL', price: 200, quantity: 1 });
  const [ awakening, setAwakening ] = useState({ icon: awakeningIcon, name: 'AWAKENING', price: 250, quantity: 1 });
  const [ burnHeal, setBurnHeal ] = useState({ icon: burnHealIcon, name: 'BURN HEAL', price: 250, quantity: 1 });
  const [ iceHeal, setIceHeal ] = useState({ icon: iceHealIcon, name: 'ICE HEAL', price: 250, quantity: 1 });
  const [ fullHeal, setFullHeal ] = useState({ icon: fullHealIcon, name: 'FULL HEAL', price: 600, quantity: 1 });
  const [ escapeRope, setEscapeRope ] = useState({ icon: escapeRopeIcon, name: 'ESCAPE ROPE', price: 550, quantity: 1 });
  const [ repel, setRepel ] = useState({ icon: repelIcon, name: 'REPEL', price: 350, quantity: 1 });
  const [ superRepel, setSuperRepel ] = useState({ icon: superRepelIcon, name: 'SUPER REPEL', price: 500, quantity: 1 });
  const [ maxRepel, setMaxRepel ] = useState({ icon: maxRepelIcon, name: 'MAX REPEL', price: 700, quantity: 1 });
  const [ pokeDoll, setPokeDoll ] = useState({ icon: pokeDollIcon, name: 'POKE DOLL', price: 300, quantity: 1 });

  const itemsArray = [
    <Item name={ pokeBall.name } icon={ pokeBall.icon } price={ pokeBall.price } quantity={ pokeBall.quantity } key={ uniqid() } />,
    <Item name={ greatBall.name } icon={ greatBall.icon } price={ greatBall.price } quantity={ greatBall.quantity } key={ uniqid() } />,
    <Item name={ ultraBall.name } icon={ ultraBall.icon } price={ ultraBall.price } quantity={ ultraBall.quantity } key={ uniqid() } />,
    <Item name={ potion.name } icon={ potion.icon } price={ potion.price } quantity={ potion.quantity } key={ uniqid() } />,
    <Item name={ superPotion.name } icon={ superPotion.icon } price={ superPotion.price } quantity={ superPotion.quantity } key={ uniqid() } />,
    <Item name={ hyperPotion.name } icon={ hyperPotion.icon } price={ hyperPotion.price } quantity={ hyperPotion.quantity } key={ uniqid() } />,
    <Item name={ maxPotion.name } icon={ maxPotion.icon } price={ maxPotion.price } quantity={ maxPotion.quantity } key={ uniqid() } />,
    <Item name={ fullRestore.name } icon={ fullRestore.icon } price={ fullRestore.price } quantity={ fullRestore.quantity } key={ uniqid() } />,
    <Item name={ revive.name } icon={ revive.icon } price={ revive.price } quantity={ revive.quantity } key={ uniqid() } />,
    <Item name={ antidote.name } icon={ antidote.icon } price={ antidote.price } quantity={ antidote.quantity } key={ uniqid() } />,
    <Item name={ paralyzeHeal.name } icon={ paralyzeHeal.icon } price={ paralyzeHeal.price } quantity={ paralyzeHeal.quantity } key={ uniqid() } />,
    <Item name={ awakening.name } icon={ awakening.icon } price={ awakening.price } quantity={ awakening.quantity } key={ uniqid() } />,
    <Item name={ burnHeal.name } icon={ burnHeal.icon } price={ burnHeal.price } quantity={ burnHeal.quantity } key={ uniqid() } />,
    <Item name={ iceHeal.name } icon={ iceHeal.icon } price={ iceHeal.price } quantity={ iceHeal.quantity } key={ uniqid() } />,
    <Item name={ fullHeal.name } icon={ fullHeal.icon } price={ fullHeal.price } quantity={ fullHeal.quantity } key={ uniqid() } />,
    <Item name={ escapeRope.name } icon={ escapeRope.icon } price={ escapeRope.price } quantity={ escapeRope.quantity } key={ uniqid() } />,
    <Item name={ repel.name } icon={ repel.icon } price={ repel.price } quantity={ repel.quantity } key={ uniqid() } />,
    <Item name={ superRepel.name } icon={ superRepel.icon } price={ superRepel.price } quantity={ superRepel.quantity } key={ uniqid() } />,
    <Item name={ maxRepel.name } icon={ maxRepel.icon } price={ maxRepel.price } quantity={ maxRepel.quantity } key={ uniqid() } />,
    <Item name={ pokeDoll.name } icon={ pokeDoll.icon } price={ pokeDoll.price } quantity={ pokeDoll.quantity } key={ uniqid() } />
  ];

  return (
    <div className='Shop'>
      <RenderItems array={ itemsArray }/>
    </div>
  );
};

export { Shop };
