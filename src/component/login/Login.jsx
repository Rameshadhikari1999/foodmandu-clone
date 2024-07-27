import React, {useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IoClose } from "react-icons/io5";
import Buttons from "../../utility/Buttons";
import InputField from "../../utility/InputField";

const Login = ({ isOpen, onClose }) => {


  // const modalRef = useRef();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        "#modal",
        { y: -1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power1.inOut" }
      );
    } else {
      gsap.to("#modal", {
        y: -1000,
        opacity: 0,
        duration: 0.8,
        ease: "power1.inOut",
      });
    }
  }, [isOpen]);

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(loginData));
    console.log(loginData);

  };  

  return (
    <div id="modal" className="fixed inset-0 flex items-center justify-center">
      <div
        // ref={modalRef}
        className="w-3/4  lg:w-full mx-auto bg-white lg:bg-black lg:bg-opacity-50 rounded lg:bg-[url('./assets/images/login.jpg')] lg:bg-cover lg:bg-center lg:bg-no-repeat"
      >
        <div className="lg:w-2/3 lg:h-full lg:float-right lg:bg-white rounded">
          <IoClose
            className="float-right text-gray-400 text-3xl cursor-pointer"
            onClick={onClose}
          />
          <form>
          <div className="pt-4">
            <h2 className="text-xl px-2 py-4 text-gray-700 shadow-sm shadow-gray-300  mb-4">
              {isForm?"Login" : "Register"} to Foodmandu
            </h2>
            {!isForm && 
              <InputField
              label="Enter Full Name"
              type="text"
              placeholder="Ramesh Adhikari"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
            }
            <InputField
              label="Enter Email"
              type="email"
              placeholder="example@ex.com"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
            <InputField
              label="Enter Password"
              type="password"
              placeholder="********"
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />

            <div className="p-2 px-3 flex items-center gap-5">
              <input type="checkbox" />
              <span className="text-gray-600 font-roboto text-sm font-bold">
                Remember me
              </span>
            </div>
            <div className="px-2 py-2">
              <Buttons
                bgColor={"bg-yellow-400"}
                textColor={"text-gray-800"}
                title={isForm?"Login":"Sign Up"}
                onClick={handleLogin}
              />
            </div>
            <p className="text-center text-gray-600 font-roboto">
              OR Login Using
            </p>
            <div className="p-2 w-full flex items-center justify-center gap-5">
              <Buttons
                bgColor={"bg-blue-800"}
                textColor={"text-gray-200"}
                title={"Facebook"}
              />
              <Buttons
                bgColor={"bg-red-800"}
                textColor={"text-gray-200"}
                title={"Google"}
              />
            </div>

            <span className="flex items-center justify-center my-5 text-gray-600 font-roboto">Don't have an account?
               <button onClick={() => setIsForm(!isForm)} className="cursor-pointers text-green-400">{!isForm?"Login":"Sign Up"}</button> </span>
            <button className=" block mx-auto cursor-pointer hover:text-green-400">Forgot Password</button>

          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
