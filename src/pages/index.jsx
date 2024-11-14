import React from 'react';

import BottleA from '../assets/pdf/Bottle Price List-1.png';
import BottleB from '../assets/pdf/Bottle Price List-2.png';
import BottleC from '../assets/pdf/Bottle Price List-3.png';
import CocktailA from '../assets/pdf/Cocktail Menu-1.png';
import CocktailB from '../assets/pdf/Cocktail Menu-2.png';
import Mocktail from '../assets/pdf/Mocktail Menu-1.png';
import Shots from '../assets/pdf/Shots & Shooters-1.png';
import FoodA from '../assets/pdf/Food Price List-1.png';
import FoodB from '../assets/pdf/Food Price List-2.png';
import FoodC from '../assets/pdf/Food Price List-3.png';
import FoodD from '../assets/pdf/Food Price List-4.png';
import Grills from '../assets/pdf/GRILLS PRICE LIST-1.png';
import Beer from '../assets/pdf/BEER MENU-1.png';
import Shisha from '../assets/pdf/Cigarette & Shisha-1.png';


const HomePage = () => {
  
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <img src={FoodA} alt="Menu" style={{ width: '100%' }} />
        <img src={FoodB} alt="Menu" style={{ width: '100%' }} />
        <img src={FoodC} alt="Menu" style={{ width: '100%' }} />
        <img src={FoodD} alt="Menu" style={{ width: '100%' }} />
        <img src={Grills} alt="Menu" style={{ width: '100%' }} />
        <img src={Mocktail} alt="Menu" style={{ width: '100%' }} />
        <img src={CocktailA} alt="Menu" style={{ width: '100%' }} />
        <img src={CocktailB} alt="Menu" style={{ width: '100%' }} />
        <img src={Shots} alt="Menu" style={{ width: '100%' }} />
        <img src={BottleA} alt="Menu" style={{ width: '100%' }} />
        <img src={BottleB} alt="Menu" style={{ width: '100%' }} />
        <img src={BottleC} alt="Menu" style={{ width: '100%' }} />
        <img src={Beer} alt="Menu" style={{ width: '100%' }} />
        <img src={Shisha} alt="Menu" style={{ width: '100%' }} />
   
    </div>
  );
};

export default HomePage;
