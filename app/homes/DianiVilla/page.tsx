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
    '/DianiVilla/IMG-20240520-WA0004.jpg',
    '/DianiVilla/IMG-20240520-WA0005.jpg',
    '/DianiVilla/IMG-20240520-WA0006.jpg',
    '/DianiVilla/IMG-20240520-WA0007.jpg',
    '/DianiVilla/IMG-20240520-WA0008.jpg',
    '/DianiVilla/IMG-20240520-WA0009.jpg',
    '/DianiVilla/IMG-20240520-WA0010.jpg',
    '/DianiVilla/IMG-20240520-WA0011.jpg',
    '/DianiVilla/IMG-20240520-WA0012.jpg',
    '/DianiVilla/IMG-20240520-WA0013.jpg',
    '/DianiVilla/IMG-20240520-WA0014.jpg',
    '/DianiVilla/IMG-20240520-WA0015.jpg',
    '/DianiVilla/IMG-20240520-WA0016.jpg',
    '/DianiVilla/IMG-20240520-WA0017.jpg',
    '/DianiVilla/IMG-20240520-WA0018.jpg',
    '/DianiVilla/IMG-20240520-WA0019.jpg',
    '/DianiVilla/IMG-20240520-WA0020.jpg',
  ];
  
  const name = "Diani 4 bedroom villa";
  const NoOfBedroom = "4";
  const NoOfGuests = "4";
  const NoOfBeds = "4";
  const Location = "Diani";
  const County = "Mombasa";
  const Price = "ksh 4,000";
  const Amenity = "";
  const description = "This is one of the rooms in this specious apartment. It has a very serene environment with lovely view. You will love it.";

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
        <h2 class="section-bed">Where you'll sleep</h2>
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
