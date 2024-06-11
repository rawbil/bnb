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
    '/1brShanzu/IMG-20240610-WA0167.jpg',
    '/1brShanzu/IMG-20240610-WA0168.jpg',
    '/1brShanzu/IMG-20240610-WA0169.jpg',
    '/1brShanzu/IMG-20240610-WA0170.jpg',
    '/1brShanzu/IMG-20240610-WA0171.jpg',
    '/1brShanzu/IMG-20240610-WA0172.jpg',
    '/1brShanzu/IMG-20240610-WA0174.jpg',
    '/1brShanzu/IMG-20240610-WA0175.jpg',
    '/1brShanzu/IMG-20240610-WA0176.jpg',
    '/1brShanzu/IMG-20240610-WA0177.jpg',
    '/1brShanzu/IMG-20240610-WA0178.jpg',
    '/1brShanzu/IMG-20240610-WA0179.jpg',
    '/1brShanzu/IMG-20240610-WA0180.jpg',
    '/1brShanzu/IMG-20240610-WA0181.jpg',
    '/1brShanzu/IMG-20240610-WA0182.jpg',
    '/1brShanzu/IMG-20240610-WA0183.jpg',
    '/1brShanzu/IMG-20240610-WA0184.jpg',
  ];
  
  const name = "1 bedroom Shanzu - right on the beach";
  const NoOfBedroom = "1";
  const NoOfGuests = "2";
  const NoOfBeds = "2";
  const Location = "";
  const County = "";
  const Price = "ksh 8,000";
  const Amenity = "";
  const description = "The house is located at the beach front. Has a swimming pool and fitted with air conditioning.";
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
        <h2>Entire home in Jambiani, Tanzania</h2>
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
