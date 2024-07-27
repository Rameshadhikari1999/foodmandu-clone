import React from 'react'
import Buttons from '../../utility/Buttons';
import { useNavigate } from 'react-router-dom';

const Aboutus = () => {

  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate('/about');
  };
  return (
    <div className='w-full'>
      <div className='w-full h-[50vh] lg:h-[70vh] mt-10 '>
        <div className='w-full h-full bg-[url("./assets/images/about.jpg")] lg:h-2/3 bg-cover bg-center bg-no-repeat'>
        <div className='bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center'>
          <h1 className='text-3xl text-white'>About Us</h1>
          <p className='text-white font-sans text-sm text-center py-4 px-2 lg:w-1/2 lg:mx-auto'>Foodmandu is the fastest, easiest and most convenient way to enjoy the best food of your favourite restaurants at home, at the office or wherever you want to.</p>
          <p className='text-white font-sans text-sm text-center py-4 px-2 lg:w-1/2 lg:mx-auto'>We know that your time is valuable and sometimes every minute in the day counts. That’s why we deliver! So you can spend more time doing the things you love.</p>

          <Buttons bgColor={"bg-white"} textColor={"text-gray-800"} title={"Learn More"} onClick={handleLearnMore} />
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Aboutus
