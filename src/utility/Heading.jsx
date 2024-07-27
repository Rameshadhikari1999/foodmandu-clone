import React from 'react'
import { GrFormNextLink } from "react-icons/gr";

const Heading = ({title}) => {
  return (
    <div className='w-3/4 mx-auto flex items-center justify-between py-10'>
        <h2 className='text-sm font-semibold uppercase font-roboto text-gray-700'>{title}</h2>
        <a className='flex items-center font-roboto cursor-pointer' href="#">View All 
            <GrFormNextLink className='text-xl'/></a>
    </div>
  )
}

export default Heading