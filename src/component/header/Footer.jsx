import React from 'react'
import Buttons from '../../utility/Buttons'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-1/2 bg-gray-100 flex flex-col items-center justify-center'>
            <h1 className=' w-full text-xl md:text-2xl lg:text-4xl font-roboto md:text-center md:px-20 lg:w-1/2 mx-auto mb-6'>List your Restaurant at Foodmandu!
            Reach 2,00,000 + new customers.</h1>
            <Buttons bgColor={"bg-yellow-400"} textColor={"text-white"} title={"Send a Request"} />
      </div>
      <div className="container mx-auto px-4 text-gray-500">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0 ">
            <h2 className="text-xl font-bold text-gray-700">We're Foodmandu</h2>
            <ul>
              <li>About Us</li>
              <li>Available Areas</li>
              <li>Delivery Charges</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-700">Service Hour</h3>
            <p>08:00 AM to 9:00 PM (NST)</p>
            <h3 className="text-xl font-bold mt-4 text-gray-700">Get Help</h3>
            <ul>
              <li>How to Order?</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-700">Call us</h3>
            <p>Kathmandu: 5970477, 4544177, 4540979, 9802034008</p>
            <p>Pokhara: 9802859990, 9802853330</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-700">Download App</h3>
            <Buttons bgColor={"bg-blue-400"} textColor={"text-white"} title={"Download App"} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-700">Connect with Us</h3>
            <div className="flex space-x-4 items-center justify-center gap-2 mt-2">
              <a href="#" className="text-blue-400 p-2 rounded-full hover:text-white hover:bg-gray-400"><FaFacebook /></a>
              <a href="#" className="text-blue-400 p-2 rounded-full hover:text-white hover:bg-gray-400"><FaTwitter /></a>
              <a href="#" className="text-blue-400 p-2 rounded-full hover:text-white hover:bg-gray-400"><FaInstagram /></a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <a href="#" className="text-gray-400">Terms of Usage</a> | 
            <a href="#" className="text-gray-400"> Privacy Policy</a>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-400">© 2020 Foodmandu Pvt. Ltd. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
