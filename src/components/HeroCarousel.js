import React from 'react';
import Slide1 from '../assets/hero/image-1.png';
import Slide2 from '../assets/hero/image-2.png';
import Slide3 from '../assets/hero/image-3.png';

export default function HeroCarousel() {

    const imageOptions = {
        width: '100%'
    };
  
    return (
    <div 
        data-flickity='{ "wrapAround": true, "pageDots": false, "autoplay": true }'
    >
        <div className="carousel-cell"><img src={Slide1} style={imageOptions}/></div>
        <div className="carousel-cell"><img src={Slide2} style={imageOptions}/></div>
        <div className="carousel-cell"><img src={Slide3} style={imageOptions}/></div>
    </div>
    );
  }