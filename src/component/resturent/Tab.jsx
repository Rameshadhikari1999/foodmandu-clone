import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Menu from './Menu';
import About from './About';
import Other from './Other';


const Tab = () => {
  const [activeTab, setActiveTab] = useState("menu");
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between px-2 shadow-sm shadow-green-200">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("menu")}
            className={`font-roboto text-gray-500 px-2 py-1 cursor-pointer ${
              activeTab === "menu"
                ? "text-green-600 border-b-2 border-green-600"
                : ""
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`font-roboto text-gray-500 px-2 py-1 cursor-pointer ${
              activeTab === "about"
                ? "text-green-600 border-b-2 border-green-600"
                : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("other")}
            className={`font-roboto text-gray-500 px-2 py-1 cursor-pointer ${
              activeTab === "other"
                ? "text-green-600 border-b-2 border-green-600"
                : ""
            }`}
          >
            Other Branches
          </button>
        </div>
        <div className="p-2 shadow-sm shadow-green-200 rounded">
          <CiHeart className="w-6 h-6 font-bold text-gray-600 cursor-pointer" />
        </div>
      </div>
      {/* tab contants here */}
      <div className="w-full flex items-center justify-center gap-3 flex-wrap flex-shrink flex-grow">
        {activeTab === "menu" && <Menu />}
        {activeTab === "about" && <About />}
        {activeTab === "other" && <Other />}
      </div>
    </div>
  );
};

export default Tab;
