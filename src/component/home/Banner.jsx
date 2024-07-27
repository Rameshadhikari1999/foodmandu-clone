import React from 'react'
import Heading from '../../utility/Heading'
import bannerImg from '../../assets/images/banner.jpeg'

const Banner = () => {

    const handleBannerClick = () => {
        alert("Banner Clicked");
    }
  return (
    <div className='w-full'>
        <Heading title="FOODMANDU FRESH" />
      <div className='w-3/4 mx-auto'>
        <img src={bannerImg} alt="banner" className='w-full cursor-pointer' onClick={handleBannerClick} />
      </div>
    </div>
  )
}

export default Banner
