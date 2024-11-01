import React, { useEffect, useRef, useState } from 'react';

import Bottle from '../assets/pdf/bottle_price_list-1.png';
import Cocktail from '../assets/pdf/Cocktail Menu-1.png';
import Mocktail from '../assets/pdf/Mocktail Menu-1.png';
import Shots from '../assets/pdf/Shots & Shooters-1.png';
import Food from '../assets/pdf/FOOD MENU-1.png';
import Grills from '../assets/pdf/GRILLS PRICE LIST-1.png';


const HomePage = () => {
  
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <img src={Bottle} alt="Menu" style={{ width: '100%' }} />
        <img src={Cocktail} alt="Menu" style={{ width: '100%' }} />
        <img src={Mocktail} alt="Menu" style={{ width: '100%' }} />
        <img src={Shots} alt="Menu" style={{ width: '100%' }} />
        <img src={Food} alt="Menu" style={{ width: '100%' }} />
        <img src={Grills} alt="Menu" style={{ width: '100%' }} />
   
    </div>
  );
};

export default HomePage;
