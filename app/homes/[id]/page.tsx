// app/homes/[id]/page.tsx

import Rules from '@/app/ui/rules';
import Payment from '@/app/ui/payment';
import Amenities from '@/app/Amenities/amen';
import "@/app/globals.css";
import Collage from '@/app/ui/collages';
import Assets from '@/app/ui/mainAssets';
import React from 'react';
import { MdOutlineBed } from "react-icons/md";
import CustomCarousel from '@/app/ui/carousel';
import { MdOutlineBedroomParent } from "react-icons/md";

interface Home {
  _id: string;
  rating: string;
  name: string;
  location: string;
  description: string;
  price: string;
  imageUrl?: string;
}

const HomePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  let home: Home | null = null;

  try {
    const response = await fetch(`http://localhost:5000/api/homes/${id}`);
    if (response.ok) {
      home = await response.json();
    } else {
      console.error('Failed to fetch home data');
    }
  } catch (error) {
    console.error('Error fetching home:', error);
  }

  if (!home) {
    return <div>Home not found</div>;
  }

  const images: string[] = [
    '/1brNyali/IMG-20240504-WA0025.jpg',
    '/1brNyali/IMG-20240504-WA0026.jpg',
    '/1brNyali/IMG-20240504-WA0028.jpg',
    '/1brNyali/IMG-20240504-WA0030.jpg',
    '/1brNyali/IMG-20240504-WA0033.jpg',
    '/1brNyali/IMG-20240504-WA0031.jpg',
    '/1brNyali/IMG-20240504-WA0032.jpg',
  ];
  
  const name = home.name;
  const NoOfBedroom = "1";
  const NoOfGuests = "2";
  const NoOfBeds = "1";
  const Location = "";
  const County = "";
  const Price = "ksh 4,000";
  const Amenity = "";
  const description = "This apartment has air conditioning and wifi. It also has an ample parking space.";
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
        <h2>{home.name}, {home.location}</h2>
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
        <Payment price={home.price} description={home.description} />
     </div>
     <hr />
     <Rules />
    </div>
  );
};

export default HomePage;
