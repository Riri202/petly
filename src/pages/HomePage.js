import React from 'react';
import Cards from '../components/Cards'
import Hero from '../components/Hero';
import PetSearch from '../components/PetSearch';

function HomePage( { theme,darkMode} ) {
  return <div>
      
      <Hero  theme={theme} darkMode={darkMode}/>
      <Cards/>
      <PetSearch/>
     
  </div>;
}

export default HomePage;
