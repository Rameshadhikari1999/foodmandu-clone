import React, { useState, useEffect, useRef } from "react";
import { CiHeart } from "react-icons/ci";
import Menu from './Menu';
import About from './About';
import Other from './Other';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const Tab = () => {
  const [activeTab, setActiveTab] = useState("menu");
  const tabRef = useRef(null);

    useGSAP(() => {
    const tabElement = tabRef.current;

    gsap.to(tabElement, {
      scrollTrigger: {
        trigger: tabElement,
        start: "top 8%",
        end: "+=500%", // Adjust as needed
        pin: true,
        pinSpacing: false,
        onEnter: () => tabElement.classList.add("fixed", "top-0", "left-0", "w-full", "z-20", "bg-gray-500", "text-white"),
        onLeave: () => tabElement.classList.remove("fixed", "top-0", "left-0", "w-full", "z-20", "bg-gray-500", "text-white"),
        onEnterBack: () => tabElement.classList.add("fixed", "top-0", "left-0", "w-full", "z-20", "bg-gray-500", "text-white"),
        onLeaveBack: () => tabElement.classList.remove("fixed", "top-0", "left-0", "w-full", "z-20", "bg-gray-500", "text-white"),
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className="w-full">
      <div
      className="w-full flex items-center justify-between px-2 shadow-sm shadow-green-200">
        <div 
        ref={tabRef}
        className="flex items-center text-gray-500">
          <button
            onClick={() => setActiveTab("menu")}
            className={`font-roboto  px-2 py-1 cursor-pointer ${
              activeTab === "menu"
                ? "text-green-600 border-b-2 border-green-600"
                : ""
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`font-roboto  px-2 py-1 cursor-pointer ${
              activeTab === "about"
                ? "text-green-600 border-b-2 border-green-600"
                : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("other")}
            className={`font-roboto  px-2 py-1 cursor-pointer ${
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
