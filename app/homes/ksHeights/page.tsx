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
    '/ksheights/IMG-20240610-WA0015.jpg',
    '/ksheights/IMG-20240610-WA0014.jpg',
    '/ksheights/IMG-20240610-WA0010.jpg',
    '/ksheights/IMG-20240610-WA0017.jpg',
    '/ksheights/IMG-20240610-WA0007.jpg',
    '/ksheights/IMG-20240610-WA0004.jpg',
    '/ksheights/IMG-20240610-WA0005.jpg',
    '/ksheights/IMG-20240610-WA0006.jpg',
    '/ksheights/IMG-20240610-WA0008.jpg',
    '/ksheights/IMG-20240610-WA0009.jpg',
    '/ksheights/IMG-20240610-WA0011.jpg',
    '/ksheights/IMG-20240610-WA0012.jpg',
    '/ksheights/IMG-20240610-WA0013.jpg',
    '/ksheights/IMG-20240610-WA0016.jpg',
    '/ksheights/IMG-20240610-WA0018.jpg',
    '/ksheights/IMG-20240610-WA0019.jpg',
    '/ksheights/IMG-20240610-WA0020.jpg',
  ];
  
  const name = "3 bedroom Kisimani Heights en route to Bamburi";
  const NoOfBedroom = "3";
  const NoOfGuests = "6";
  const NoOfBeds = "3";
  const Location = "";
  const County = "";
  const Price = "ksh 8,000";
  const Amenity = "";
  const description = "This is one of the rooms in this specious apartment. It has a very serene environment with lovely view. You will love it.";
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
        <h2>3 bedroom Kisimani Heights</h2>
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
