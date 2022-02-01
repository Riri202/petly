import React from 'react';
import Cards from '../components/Cards'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar'
import PetSearch from '../components/PetSearch';

function HomePage() {
  return <div>
      <NavBar/>
      <Hero/>
      <Cards/>
      <PetSearch/>
      <Footer/>
  </div>;
}

export default HomePage;
