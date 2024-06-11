import Rules from '@/app/ui/rules';
import Payment from '@/app/ui/payment';
/*import Amenities from '@/app/ui/amenities';*/
import Amenities from '@/app/Amenities/amen';
import "@/app/globals.css";
import Collage from '@/app/ui/collages';
import Assets from '@/app/ui/mainAssets';
import React, { useState } from 'react';
import { LuBedDouble } from "react-icons/lu";
import { MdWorkspacesOutline } from "react-icons/md";
import { MdOutlineBed } from "react-icons/md";
import CustomCarousel from '@/app/ui/carousel';
import { MdOutlineBedroomParent } from "react-icons/md";

const IndexPage: React.FC = () => {
  // Example array of image URLs
  const images: string[] = [
    '/Diani4brB/IMG-20240610-WA0134.jpg',
    '/Diani4brB/IMG-20240610-WA0135.jpg',
    '/Diani4brB/IMG-20240610-WA0136.jpg',
    '/Diani4brB/IMG-20240610-WA0138.jpg',
    '/Diani4brB/IMG-20240610-WA0140.jpg',
    '/Diani4brB/IMG-20240610-WA0141.jpg',
    '/Diani4brB/IMG-20240610-WA0142.jpg',
    '/Diani4brB/IMG-20240610-WA0143.jpg',
    '/Diani4brB/IMG-20240610-WA0144.jpg',
    '/Diani4brB/IMG-20240610-WA0145.jpg',
    '/Diani4brB/IMG-20240610-WA0146.jpg',
    '/Diani4brB/IMG-20240610-WA0147.jpg',
    '/Diani4brB/IMG-20240610-WA0148.jpg',
  ];
  
  const name = "Diani 4 bedroom - close to the beach";
  const NoOfBedroom = "4";
  const NoOfGuests = "5";
  const NoOfBeds = "5";
  const Location = "";
  const County = "";
  const Price = "ksh 27,000";
  const Amenity = "";
  const description = "The house has an exclusive outdoor, a swimming pool and its close to the beach. It also has air conditioning.";
  const description1 = "This is one of the apartments with a swimming pool.";

  return (
    <div className="home-more">
      <div className="gallery-carousel">
        <CustomCarousel images={images} name= {name} />
      </div>
      <div className="gallery-collage">
        <Collage images={images} name= {name} />
      </div>
      <div className="des">
       <div className="des-sc">
        <h2>Diani 4 bedroom, Mombasa</h2>
        <Assets guests={NoOfGuests} bedroom={NoOfBedroom} bed={NoOfBeds} bath="2" />
        <hr />
        <h2 className="section-bed">Where you&apos;ll sleep</h2>
        <div className="bed">
          <div>
            <MdOutlineBedroomParent />
            <span>Bedrooms</span>
            <span>{NoOfBedroom} bedroom</span>
          </div>
          <div>
            <MdOutlineBed />
            <span>Beds</span>
            <span>{NoOfBeds} bed</span>
          </div>
        </div>
        <hr />
        <Amenities />
       </div>
        <Payment price={Price} description={description} />
     </div>
     <hr />
     <Rules />
    </div>
  );
};

export default IndexPage;
