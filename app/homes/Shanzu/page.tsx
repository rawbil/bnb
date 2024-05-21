import Rules from '@/app/ui/rules';
import Payment from '@/app/ui/payment';
/*import Amenities from '@/app/ui/amenities';*/
import Amenities from '@/app/Amenities/amen1';
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
    '/Shanzu/IMG-20240504-WA0048.jpg',
    '/Shanzu/IMG-20240504-WA0049.jpg',
    '/Shanzu/IMG-20240504-WA0050.jpg',
    '/Shanzu/IMG-20240504-WA0063.jpg',
    '/Shanzu/IMG-20240504-WA0065.jpg',
    '/Shanzu/IMG-20240504-WA0067.jpg',
    '/Shanzu/IMG-20240504-WA0068.jpg',
    '/Shanzu/IMG-20240504-WA0069.jpg',
    '/Shanzu/IMG-20240504-WA0070.jpg',
    '/Shanzu/IMG-20240504-WA0071.jpg',
    '/Shanzu/IMG-20240504-WA0072.jpg',
    '/Shanzu/IMG-20240504-WA0073.jpg',
  ];
  
  const name = "2 Bedroom Beach Road";
  const NoOfBedroom = "1";
  const NoOfGuests = "2";
  const NoOfBeds = "1";
  const Location = "1 Br Shanzu";
  const County = "Mombasa";
  const Price = "ksh 4,200";
  const Amenity = "";
  const description = "This is one of the apartments with a swimming pool. It has a very serene environment with lovely views of Mombasa. You will love it.";

  return (
    <div class="home-more">
      <div class="gallery-carousel">
        <CustomCarousel images={images} name= {name} />
      </div>
      <div class="gallery-collage">
        <Collage images={images} name= {name} />
      </div>
      <div class="des">
       <div class="des-sc">
        <h2>{name}, {Location}</h2>
        <Assets guests={NoOfGuests} bedroom={NoOfBedroom} bed={NoOfBeds} bath="2" />
        <hr />
        <h2 class="section-bed">Where you&apos;ll sleep</h2>
        <div class="bed">
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
