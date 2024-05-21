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
    '/sample/IMG-20240504-WA0051.jpg',
    '/sample/IMG-20240504-WA0052.jpg',
    '/sample/IMG-20240504-WA0053.jpg',
    '/sample/IMG-20240504-WA0054.jpg',
    '/sample/IMG-20240504-WA0055.jpg',
    '/sample/IMG-20240504-WA0056.jpg',
    '/sample/IMG-20240504-WA0057.jpg',
    '/sample/IMG-20240504-WA0058.jpg',
    '/sample/IMG-20240504-WA0059.jpg',
    '/sample/IMG-20240504-WA0060.jpg',
    '/sample/IMG-20240504-WA0061.jpg',
    '/sample/IMG-20240504-WA0062.jpg',
    '/sample/IMG-20240504-WA0064.jpg',
    '/sample/IMG-20240504-WA0066.jpg',
  ];
  
  const name = "Family Beach House - right on the beach";
  const NoOfBedroom = "1";
  const NoOfGuests = "2";
  const NoOfBeds = "2";
  const Location = "";
  const County = "";
  const Price = "ksh 4,000";
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
