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
    '/ShanzuPentH/IMG-20240610-WA0149.jpg',
    '/ShanzuPentH/IMG-20240610-WA0150.jpg',
    '/ShanzuPentH/IMG-20240610-WA0151.jpg',
    '/ShanzuPentH/IMG-20240610-WA0152.jpg',
    '/ShanzuPentH/IMG-20240610-WA0153.jpg',
    '/ShanzuPentH/IMG-20240610-WA0154.jpg',
    '/ShanzuPentH/IMG-20240610-WA0155.jpg',
    '/ShanzuPentH/IMG-20240610-WA0156.jpg',
    '/ShanzuPentH/IMG-20240610-WA0157.jpg',
    '/ShanzuPentH/IMG-20240610-WA0158.jpg',
    '/ShanzuPentH/IMG-20240610-WA0159.jpg',
    '/ShanzuPentH/IMG-20240610-WA0160.jpg',
    '/ShanzuPentH/IMG-20240610-WA0161.jpg',
    '/ShanzuPentH/IMG-20240610-WA0162.jpg',
    '/ShanzuPentH/IMG-20240610-WA0163.jpg',
    '/ShanzuPentH/IMG-20240610-WA0164.jpg',
    '/ShanzuPentH/IMG-20240610-WA0165.jpg',
    '/ShanzuPentH/IMG-20240610-WA0166.jpg',
    '/ShanzuPentH/VID-20240610-WA0002.mp4',
  ];
  
  const name = "Shanzu 2 bedroom penthouse - beachfront";
  const NoOfBedroom = "2";
  const NoOfGuests = "2";
  const NoOfBeds = "2";
  const Location = "";
  const County = "";
  const Price = "ksh 14,000";
  const Amenity = "";
  const description = "This is one of the apartments at the beachfront and with a swimming pool. It also has air condtioning.";
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
