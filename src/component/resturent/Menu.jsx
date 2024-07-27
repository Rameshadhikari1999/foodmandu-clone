import React,{ useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { MenuList } from "../../assets/contents";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link, scroller } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const sidebarRef = useRef(null);
  useGSAP(() => {
    const sidebarElement = sidebarRef.current;
    gsap.to(sidebarElement, {
      scrollTrigger: {
        trigger: sidebarElement,
        start: "top 20%",
        end: "+=500%", // Adjust as needed
        pin: true,
        pinSpacing: false,
        onEnter: () => sidebarElement.classList.add("fixed", "top-0", "left-0"),
        onLeave: () => sidebarElement.classList.remove("fixed", "top-0", "left-0"),
        onEnterBack: () => sidebarElement.classList.add("fixed", "top-0", "left-0"),
        onLeaveBack: () => sidebarElement.classList.remove("fixed", "top-0", "left-0"),
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


    
  const handleSelectChange = (event) => {
    const title = event.target.value.replace(/\s+/g, "").toLowerCase();
    scroller.scrollTo(title, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  return (
    <div className="w-full py-5 px-1">
      <div className="w-full lg:w-2/3 flex gap-5 flex-col md:flex-row md:justify-between md:items-center">
        <h4 className="hidden md:block font-roboto text-green-400 mb-5 p-3 ml-5 cursor-pointer">
          Category
        </h4>

        {/* Select Box */}
        <select
          className="mx-5 md:hidden outline-none border-none shadow-sm shadow-gray-400 p-3 rounded font-roboto text-gray-400"
          name="menu"
          id="menu"
          onChange={handleSelectChange}
        >
          {MenuList.map((item, index) => (
            <option key={index} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>

        {/* Search Box */}
        <div className="md:w-2/3 flex items-center mx-5 shadow-sm shadow-gray-400 rounded">
          <input
            type="text"
            className="w-[85%] lg:w-[90%] outline-none border border-gray-300 p-3 rounded"
            placeholder="Search Food items"
          />
          <FaSearch className="w-[15%] lg:w-[10%] cursor-pointer text-gray-400 flex items-center justify-center" />
        </div>
      </div>

      <div className="w-full lg:w-2/3 flex gap-5">
        {/* Sidebar */}
        <div
        ref={sidebarRef}
        className="hidden md:block w-1/3">
          <ul className="flex flex-col items-start gap-2 px-3">
            {MenuList.map((item, index) => {
              const sanitizedTitle = item.title
                .replace(/\s+/g, "")
                .toLowerCase();
              return (
                <Link
                  key={index}
                  className="font-roboto text-gray-400 hover:text-green-400 cursor-pointer"
                  to={sanitizedTitle}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>
        </div>
            
        

        {/* Menu Items */}
        <div className="w-full md:w-2/3">
          {MenuList.map((item, index) => {
            const sanitizedTitle = item.title.replace(/\s+/g, '').toLowerCase();
            return (
              <div key={index} id={sanitizedTitle}>
                <div className="flex flex-col items-start justify-center shadow-sm shadow-gray-400 p-3 mb-4 rounded">
                  <h6 className="font-roboto text-black text-base">{item.title}</h6>
                  <p className="text-gray-400 font-roboto text-sm">
                    {item.subTitle ? item.subTitle : ""}
                  </p>
                </div>

                {Array.isArray(item.menuItem) && item.menuItem.map((element, subIndex) => (
                  <div
                    key={subIndex}
                    className="w-full flex items-center justify-between shadow-sm shadow-gray-400 p-3 rounded mb-2"
                  >
                    <div>
                      <h6 className="font-roboto text-gray-600 text-base hover:text-red-500">
                        {element.name}
                      </h6>
                      {element.desc && (
                        <p className="text-gray-400 font-roboto text-xs">
                          {element.desc}
                        </p>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <h6 className="font-roboto text-gray-800 text-base">
                        {element.price.toFixed(2)}
                      </h6>
                      <IoAddCircleOutline className="text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
