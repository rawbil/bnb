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
    '/3brNyali/IMG-20240610-WA0022.jpg',
    '/3brNyali/IMG-20240610-WA0028.jpg',
    '/3brNyali/IMG-20240610-WA0033.jpg',
    '/3brNyali/IMG-20240610-WA0038.jpg',
    '/3brNyali/IMG-20240610-WA0032.jpg',
    '/3brNyali/IMG-20240610-WA0021.jpg',
    '/3brNyali/IMG-20240610-WA0030.jpg',
    '/3brNyali/IMG-20240610-WA0027.jpg',
    '/3brNyali/IMG-20240610-WA0023.jpg',
    '/3brNyali/IMG-20240610-WA0024.jpg',
    '/3brNyali/IMG-20240610-WA0025.jpg',
    '/3brNyali/IMG-20240610-WA0026.jpg',
    '/3brNyali/IMG-20240610-WA0029.jpg',
    '/3brNyali/IMG-20240610-WA0031.jpg',
    '/3brNyali/IMG-20240610-WA0034.jpg',
    '/3brNyali/IMG-20240610-WA0035.jpg',
    '/3brNyali/IMG-20240610-WA0036.jpg',
    '/3brNyali/IMG-20240610-WA0037.jpg',
    '/3brNyali/IMG-20240610-WA0107.jpg',
    '/3brNyali/VID-20240610-WA0001.mp4',
    '/3brNyali/VID-20240610-WA0004.mp4',
  ];
  
  const name = "3 bedroom Nyali";
  const NoOfBedroom = "3";
  const NoOfGuests = "6";
  const NoOfBeds = "3";
  const Location = "";
  const County = "";
  const Price = "ksh 12,000";
  const Amenity = "";
  const description = "This is one of the apartments with a swimming pool and AC. It has a very serene environment with lovely view. You will love it.";
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
        <h2>3 bedroom Nyali, Mombasa</h2>
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
