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
    '/studioBambu/IMG-20240610-WA0087.jpg',
    '/studioBambu/IMG-20240610-WA0090.jpg',
    '/studioBambu/IMG-20240610-WA0091.jpg',
    '/studioBambu/IMG-20240610-WA0092.jpg',
    '/studioBambu/IMG-20240610-WA0093.jpg',
    '/studioBambu/IMG-20240610-WA0094.jpg',
    '/studioBambu/IMG-20240610-WA0095.jpg',
    '/studioBambu/IMG-20240610-WA0096.jpg',
    '/studioBambu/IMG-20240610-WA0097.jpg',
    '/studioBambu/IMG-20240610-WA0098.jpg',
    '/studioBambu/IMG-20240610-WA0088.jpg',
  ];
  
  const name = "Studio unit Bamburi";
  const NoOfBedroom = "1";
  const NoOfGuests = "1";
  const NoOfBeds = "1";
  const Location = "";
  const County = "";
  const Price = "ksh 2,000";
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
        <h2>Studio unit Bamburi, Mombasa</h2>
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
