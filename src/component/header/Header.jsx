import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import Buttons from '../../utility/Buttons'
import { FaSearch } from "react-icons/fa";
import Login from '../login/Login'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const user = localStorage.getItem("user");

  const openModal = () =>{
    // alert('login clicked')
    setModalOpen(true);
  } 
  const closeModal = () => setModalOpen(false);

  
  return (
    <nav className='w-full h-1/6  flex justify-between lg:justify-around items-center shadow-sm shadow-gray-300 px-3 py-5 lg:px-0 '>
        <div className='w-1/3 md:1/4 lg:w-1/6'>
            <img src={logo} className='w-full' alt="logo" />
        </div>
        <div className='flex gap-3 items-center'>
            <div>
                <FaSearch className='w-6 h-6 font-bold text-gray-600 cursor-pointer lg:hidden'/>
            </div>
               {!user ? <Buttons onClick={openModal} bgColor={"bg-gray-800"} textColor={"text-yellow-400"} title={"Login"}/>
               :
               <div className='flex items-center gap-5ss'>
               <IoMdNotificationsOutline className='w-6 h-6 font-bold text-gray-600 cursor-pointer'/> 
               <CgProfile className='w-6 h-6 font-bold text-gray-600 cursor-pointer' 
                 onClick={() => {
                  localStorage.removeItem("user"); 
                  window.location.reload();
                }}               />
               </div>
               }
        </div>
        <Login  isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  )
}

export default Header
