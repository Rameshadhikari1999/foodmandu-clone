import React from 'react'
import Heading from '../../utility/Heading'
import { Link } from 'react-router-dom'
import { featureMenu } from '../../assets/contents'
import { useNavigate } from 'react-router-dom'

const Feature = () => {

  const navigate = useNavigate();
  
  return (
    <div className='w-full'>
      <Heading title="FEATURED RESTAURANTS"/>
      <div className='w-full flex items-center justify-center gap-3 flex-wrap flex-shrink flex-grow'>
        {
          featureMenu.map((item, index) => {
            return (
              <Link to={`/resturents/detail/${item.id}`}
              key={index}
               className='w-1/3 lg:w-1/5 py-2 px-4 shadow-sm shadow-orange-200 rounded cursor-pointer' 
               >
                <div className='w-full  h-1/6 p-3'>
                <img src={item.img} alt="feature" className='w-full h-full rounded hover:scale-110 ease-in-out duration-200'/>
                </div>
                <p className='text-xl py-4 hover:text-green-400 font-roboto text-center text-gray-600'>{item.title}</p>
              </Link>
            )
          })
        }
      </div>
    </div> 
  )
}

export default Feature
