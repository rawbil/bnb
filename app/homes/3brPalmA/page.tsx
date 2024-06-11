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
    '/3brPalmA/IMG-20240610-WA0049.jpg',
    '/3brPalmA/IMG-20240610-WA0045.jpg',
    '/3brPalmA/IMG-20240610-WA0046.jpg',
    '/3brPalmA/IMG-20240610-WA0043.jpg',
    '/3brPalmA/IMG-20240610-WA0040.jpg',
    '/3brPalmA/IMG-20240610-WA0039.jpg',
    '/3brPalmA/IMG-20240610-WA0041.jpg',
    '/3brPalmA/IMG-20240610-WA0042.jpg',
    '/3brPalmA/IMG-20240610-WA0044.jpg',
    '/3brPalmA/IMG-20240610-WA0047.jpg',
    '/3brPalmA/IMG-20240610-WA0048.jpg',
  ];
  
  const name = "3 bedroom Palm Terraces Nyali";
  const NoOfBedroom = "3";
  const NoOfGuests = "6";
  const NoOfBeds = "3";
  const Location = "";
  const County = "";
  const Price = "ksh 10,000";
  const Amenity = "";
  const description = "This is one of the apartments with a rooftop swimming pool and an ample parking space.";
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
        <h2>3 bedroom Palm Terraces Nyali, Mombasa</h2>
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
