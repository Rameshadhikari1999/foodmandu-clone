import React from 'react'
import Hero from './Hero'
import Banner from './Banner';
import Feature from '../feature/Feature';
import Spacel from '../spacel/Spacel';
import Aboutus from '../about/Aboutus';

const Home = () => {
  return (
    <div className='w-full'>
      <Hero/>
        <Banner/>
        <Feature/>
        <Spacel/>
        <Aboutus/>
    </div>
  )
}

export default Home
