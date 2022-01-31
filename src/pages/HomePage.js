import React from 'react';
import Cards from '../components/Cards'
import Hero from '../components/Hero';
import NavBar from '../components/NavBar'
import PetTypeNav from '../components/PetTypeNav'


function HomePage() {
  return <div>
      <NavBar/>
      <Hero/>
      <Cards/>
      <PetTypeNav/>
      
  </div>;
}

export default HomePage;
