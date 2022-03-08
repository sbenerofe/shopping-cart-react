import React, { useState } from 'react';

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

const Shop = () => {
  const [ pokeBall, setPokeBall ] = useState({ icon: pokeBallIcon, name: 'POKE BALL', price: 200 });
  const [ greatBall, setGreatBall ] = useState({ icon: greatBallIcon, name: 'GREAT BALL', price: 600 });
  const [ ultraBall, setUltraBall ] = useState({ icon: ultraBallIcon, name: 'ULTRA BALL', price: 1200 });
  const [ potion, setPotion ] = useState({ icon: potionIcon, name: 'POTION', price: 300 });
  const [ superPotion, setSuperPotion ] = useState({ icon: superPotionIcon, name: 'SUPER POTION', price: 700 });
  const [ hyperPotion, setHyperPotion ] = useState({ icon: hyperPotionIcon, name: 'HYPER POTION', price: 1200 });
  const [ maxPotion, setmaxPotion ] = useState({ icon: maxPotionIcon, name: 'MAX POTION', price: 2500 });
  const [ fullRestore, setFullRestore ] = useState({ icon: fullRestoreIcon, name: 'FULL RESTORE', price: 3000 });
  const [ revive, setRevive ] = useState({ icon: reviveIcon, name: 'REVIVE', price: 1500 });
  const [ antidote, setAntidote ] = useState({ icon: antidoteIcon, name: 'ANTIDOTE', price: 100 });
  const [ paralyzeHeal, setParalyzeHeal ] = useState({ icon: paralyzeHealIcon, name: 'PARALYZE HEAL', price: 200 });
  const [ awakening, setAwakening ] = useState({ icon: awakeningIcon, name: 'AWAKENING', price: 250 });
  const [ burnHeal, setBurnHeal ] = useState({ icon: burnHealIcon, name: 'BURN HEAL', price: 250 });
  const [ iceHeal, setIceHeal ] = useState({ icon: iceHealIcon, name: 'ICE HEAL', price: 250 });
  const [ fullHeal, setFullHeal ] = useState({ icon: fullHealIcon, name: 'FULL HEAL', price: 600 });
  const [ escapeRope, setEscapeRope ] = useState({ icon: escapeRopeIcon, name: 'ESCAPE ROPE', price: 550 });
  const [ repel, setRepel ] = useState({ icon: repelIcon, name: 'REPEL', price: 350 });
  const [ superRepel, setSuperRepel ] = useState({ icon: superRepelIcon, name: 'SUPER REPEL', price: 500 });
  const [ maxRepel, setMaxRepel ] = useState({ icon: maxRepelIcon, name: 'MAX REPEL', price: 700 });

  return (
    <div></div>
  );
};

export { Shop };
