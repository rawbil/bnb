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
    '/BuxtonPoint/IMG-20240504-WA0051.jpg',
    '/BuxtonPoint/IMG-20240504-WA0052.jpg',
    '/BuxtonPoint/IMG-20240504-WA0053.jpg',
    '/BuxtonPoint/IMG-20240504-WA0054.jpg',
    '/BuxtonPoint/IMG-20240504-WA0055.jpg',
    '/BuxtonPoint/IMG-20240504-WA0056.jpg',
    '/BuxtonPoint/IMG-20240504-WA0057.jpg',
    '/BuxtonPoint/IMG-20240504-WA0058.jpg',
    '/BuxtonPoint/IMG-20240504-WA0059.jpg',
    '/BuxtonPoint/IMG-20240504-WA0060.jpg',
    '/BuxtonPoint/IMG-20240504-WA0061.jpg',
    '/BuxtonPoint/IMG-20240504-WA0062.jpg',
    '/BuxtonPoint/IMG-20240504-WA0064.jpg',
    '/BuxtonPoint/IMG-20240504-WA0066.jpg',
  ];
  
  const name = "1 Bedroom apartment Buxton Point";
  const NoOfBedroom = "1";
  const NoOfGuests = "2";
  const NoOfBeds = "1";
  const Location = "Buxton Point";
  const County = "Mombasa";
  const Price = "ksh 4,000";
  const Amenity = "";
  const description = "This is one of the apartments with a swimming pool. It has a very serene environment with lovely views of Mombasa. You will love it.";

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
        <h2>{name}, {Location}</h2>
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
