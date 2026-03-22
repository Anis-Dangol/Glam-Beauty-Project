import React from 'react'
import Logo from '../components/elements/Logo';
import Hero from '../components/modules/Hero';
import BestSeller from '../components/modules/BestSeller';
import ShadeFinger from '../components/modules/ShadeFinger';
import ShopByCategory from '../components/modules/ShopByCategory';

const Homepage = () => {
  return (
    <>
    <Hero />
    <BestSeller />
    <ShopByCategory />
    <ShadeFinger />
    </>
  );
};

export default Homepage