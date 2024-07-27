import React from 'react'
import Header from './component/header/Header';
import {RouterProvider} from 'react-router-dom'
import router from './Routes';


const App = () => {
  return (
    <div className='w-[98.7vw] mx-auto overflow-x-hidden'>
      <div className='w-full fixed top-0 z-20 bg-white '>
        <Header/>
      </div> 
      <div className='w-full'>
        <RouterProvider router={router}/>
      </div>
    </div>
  ) 
}

export default App
