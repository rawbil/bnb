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
    '/3brPalmB/IMG-20240610-WA0099.jpg',
    '/3brPalmB/IMG-20240610-WA0100.jpg',
    '/3brPalmB/IMG-20240610-WA0101.jpg',
    '/3brPalmB/IMG-20240610-WA0102.jpg',
    '/3brPalmB/IMG-20240610-WA0103.jpg',
    '/3brPalmB/IMG-20240610-WA0104.jpg',
    '/3brPalmB/IMG-20240610-WA0105.jpg',
    '/3brPalmB/IMG-20240610-WA0106.jpg',
    '/3brPalmB/IMG-20240610-WA0108.jpg',
    '/3brPalmB/IMG-20240610-WA0109.jpg',
    '/3brPalmB/IMG-20240610-WA0110.jpg',
    '/3brPalmB/IMG-20240610-WA0111.jpg',
    '/3brPalmB/IMG-20240610-WA0112.jpg',
    '/3brPalmB/IMG-20240610-WA0113.jpg',
    '/3brPalmB/IMG-20240610-WA0114.jpg',
    '/3brPalmB/IMG-20240610-WA0115.jpg',
    '/3brPalmB/IMG-20240610-WA0116.jpg',
    '/3brPalmB/IMG-20240610-WA0117.jpg',
    '/3brPalmB/IMG-20240610-WA0118.jpg',
    '/3brPalmB/IMG-20240610-WA0119.jpg',
    '/3brPalmB/IMG-20240610-WA0121.jpg',
  ];
  
  const name = "3 bedroom Palm terraces";
  const NoOfBedroom = "3";
  const NoOfGuests = "6";
  const NoOfBeds = "4";
  const Location = "";
  const County = "";
  const Price = "ksh 10,000";
  const Amenity = "";
  const description = "This is one of the apartments with a swimming pool.It has a very serene environment with lovely view. You will love it.";
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
