import "../globals.css";
import React from 'react';
import { TbBeach } from "react-icons/tb";
import { TbSwimming } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";
import { TiWiFi } from "react-icons/ti";
import { BiSolidBinoculars } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbParking } from "react-icons/tb";
import { PiWashingMachine } from "react-icons/pi";
import { PiCourtBasketball } from "react-icons/pi";
import { FaKitchenSet } from "react-icons/fa6";
import { TbBrandCarbon } from "react-icons/tb";


export default function Amenities(){
    return(
        <div className="offers">
      <h2>
        What this place offers
      </h2>
      <ul>
        <li><TbBeach />Beach access | Beachfront</li>
        <li><TbSwimming />Swimming pool</li>
        <li><TbAirConditioning />Air conditioning</li>
        <li><TiWiFi />Wifi connection</li>
        <li><BiSolidBinoculars />Amazing view</li>
        <li><MdOutlineSecurity />Security</li>
        <li><PiWashingMachine />Washing machine</li>
        <li><PiCourtBasketball />Basketball coat</li>
        <li><FaKitchenSet />Kitchen</li>
        <li><TbParking />Free parking</li>
        <li><TbBrandCarbon />Carbon monoxide alarm</li>
      </ul> 
     {/*<button>Show all 33 amenities</button>*/}
    </div>
    );
};