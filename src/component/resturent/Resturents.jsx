import React from "react";
import { useParams } from "react-router-dom";
import { featureMenu } from "../../assets/contents";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Tab from "./Tab";

const Resturents = () => {

  const id = useParams().id;
  const backImg = featureMenu[id].img;
  const  TableRow = ({title, text}) => {
    return (
        <tr className="text-gray-500 font-roboto md:text-white ">
                <td className="ml-5 py-2 px-5 text-gray-400 md:text-white">{title}</td>
                <td className="ml-5 py-2 px-5">{text}</td>
            </tr>
    )
}

  return (
    <div className="w-full">
    <div className="w-full h-screen inset-0 relative">
      <div
        style={{ backgroundImage: `url(${backImg})` }}
        className="w-full h-1/2 lg:h-2/3 bg-cover bg-center bg-no-repeat"
      >
        <div className="w-full h-1/2 lg:h-2/3 absolute inset-0 bg-black bg-opacity-20 lg:bg-opacity-30 flex items-end gap-3 pl-5 pb-5">
          <div className="w-1/5 h-1/5 lg:w-1/12 bg-white rounded-sm flex items-center justify-center text-gray-500">
                Logo
          </div>
          <div className="text-white text-xl font-roboto">
                <p>{featureMenu[id].title}</p>
                <p className="flex items-center text-sm"><FaStar className="ml-2 text-white"/> Italian</p>
                <p className="flex items-center text-sm"><FaLocationDot className="ml-2 text-white"/> Sanepa</p>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto md:translate-x-[55%] md:translate-y-[-100%]">
        <table>
          <tbody>
            <TableRow title="Develery Hourse" text="10:00 AM - 22:00 PM" />
            <TableRow title="Minimum Order" text="Rs. 000" />
            <TableRow title="Service Charge" text="N/A" />
            <TableRow title="Vat" text="N/A" />
            </tbody>
        </table>
      </div>
      <div>
        <Tab/>
      </div>
    </div>
  </div>
  );

};


export default Resturents;
