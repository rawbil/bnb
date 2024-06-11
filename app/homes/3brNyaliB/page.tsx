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
    '/3brNyaliB/IMG-20240610-WA0067.jpg',
    '/3brNyaliB/IMG-20240610-WA0068.jpg',
    '/3brNyaliB/IMG-20240610-WA0069.jpg',
    '/3brNyaliB/IMG-20240610-WA0070.jpg',
    '/3brNyaliB/IMG-20240610-WA0071.jpg',
    '/3brNyaliB/IMG-20240610-WA0072.jpg',
    '/3brNyaliB/IMG-20240610-WA0073.jpg',
    '/3brNyaliB/IMG-20240610-WA0074.jpg',
    '/3brNyaliB/IMG-20240610-WA0075.jpg',
    '/3brNyaliB/IMG-20240610-WA0076.jpg',
    '/3brNyaliB/IMG-20240610-WA0077.jpg',
    '/3brNyaliB/IMG-20240610-WA0078.jpg',
    '/3brNyaliB/IMG-20240610-WA0079.jpg',
    '/3brNyaliB/IMG-20240610-WA0080.jpg',
    '/3brNyaliB/IMG-20240610-WA0081.jpg',
    '/3brNyaliB/IMG-20240610-WA0082.jpg',
    '/3brNyaliB/IMG-20240610-WA0083.jpg',
    '/3brNyaliB/IMG-20240610-WA0084.jpg',
    '/3brNyaliB/IMG-20240610-WA0085.jpg',
    '/3brNyaliB/IMG-20240610-WA0086.jpg',
    '/3brNyaliB/IMG-20240610-WA0089.jpg',
    '/3brNyaliB/IMG-20240610-WA0191.jpg',
  ];
  
  const name = "3 bedroom Nyali -Beachfront";
  const NoOfBedroom = "3";
  const NoOfGuests = "6";
  const NoOfBeds = "3";
  const Location = "";
  const County = "";
  const Price = "ksh 17,000";
  const Amenity = "";
  const description = "The house is at the beachfront. This is one of the apartments with a swimming pool, an air condition and ample parking.";
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
