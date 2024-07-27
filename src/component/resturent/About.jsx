import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const About = () => {
  return (
    <div className="w-full lg:pb-6">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between px-3">
        <div className="lg:w-1/2">
          <p className="p-3 text-sm text-justify font-sans text-gray-800">
            In-house patisserie serving delectable gourmet sweets, baked
            goodies, fresh salads and other dainties. Refreshing beverages and
            juices are also available for guests to enjoy onsite or for
            take-away.
          </p>
          <div className="w-full h-40 mt-2 shadow-sm shadow-gray-500 flex items-center justify-center">
            {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={{ lat: 40.7128, lng: -74.0060 }}
                zoom={10}
              >
                <Marker position={{ lat: 40.7128, lng: -74.0060 }} />
              </GoogleMap>
            </LoadScript> */}
            Google Maps
          </div>
        </div>
        <div>
          <h4 className="text-xl font-roboto text-gray-800 p-2">Delivery Hours</h4>
          <table className="w-full p-2 text-gray-600 text-lg">
            
            <tbody>
              <tr>
                <td>Sunday</td>
                <td>11am - 11pm</td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>11am - 11pm</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>11am - 11pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>11am - 11pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>11am - 11pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>11am - 11pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
