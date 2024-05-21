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
     '/StudioUnitNyali/IMG-20240504-WA0009.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0008.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0010.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0011.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0012.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0013.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0014.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0015.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0016.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0017.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0018.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0019.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0020.jpg',
     '/StudioUnitNyali/IMG-20240504-WA0021.jpg',
     '/StudioUnitNyali/IMG-20240520-WA0028.jpg',
     '/StudioUnitNyali/IMG-20240520-WA0029.jpg',
     '/StudioUnitNyali/IMG-20240520-WA0031.jpg',
     '/StudioUnitNyali/IMG-20240520-WA0034.jpg',
     '/StudioUnitNyali/IMG-20240520-WA0035.jpg',
  ];
  
  const name = "Studio Nyali unit apartments";
  const NoOfBedroom = "1";
  const NoOfGuests = "2";
  const NoOfBeds = "1";
  const Location = "Nyali";
  const County = "Mombasa";
  const Price = "ksh 4,000";
  const Amenity = "";
  const description = "This is one of the rooms in this specious apartment. It has a very serene environment with lovely view. You will love it.";
  const description1 = "This is one of the apartments with a swimming pool.";

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
