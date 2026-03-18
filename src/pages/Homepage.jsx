import React from 'react'
import Logo from '../components/elements/Logo';
import Hero from '../components/modules/Hero';
import BestSeller from '../components/modules/BestSeller';
import ShadeFinger from '../components/modules/ShadeFinger';

const Homepage = () => {
  return (
    <>
    <Hero />
    <BestSeller />
    <ShadeFinger />
    </>
  );
};

export default Homepage