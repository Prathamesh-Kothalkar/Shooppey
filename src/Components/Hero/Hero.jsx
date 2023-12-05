import React from 'react';
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero">
        <div class="hero-left">
      <img src={hero_image} alt="Hero Image"/>
    </div>
    <div class="hero-right">
      <h1>Hey Welcome <img src={hand_icon} alt="" /></h1>
      <p>Shoppeey is best ecommerce Website to buy Clothes online Explore and Buy</p>
      <button>Explore More</button>
    </div>
    </div>
  );
};

export default Hero;
