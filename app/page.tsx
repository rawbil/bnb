import Image from "next/image";
import Card from '@/app/ui/card';
import "./globals.css";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="section-1 flex p-5">
      <Card
        rate="4.92"
        hrefLink="./homes/DianiVilla"
        county="Mombasa, Kenya"
        region="Diani 4 Br Villa"
        specific="4 bedroom apartment"
        price="ksh 4,500"
        imageUrl='./DianiVilla/IMG-20240520-WA0020.jpg'
      />
        <Card
        rate="4.80"
        hrefLink="./homes/PalmTerraces"
        county="Mombasa, Kenya"
        region="2 Br Palm Terraces"
        specific="2 bedroom apartment"
        price="ksh 2,500"
        imageUrl='./PalmTerraces/IMG-20240520-WA0037.jpg'
      />
      <Card
        rate="4.70"
        hrefLink="./homes/BeachRoad"
        county="Mombasa, Kenya"
        region="2 Br Beach Road"
        specific="2 bedroom apartment"
        price="ksh 3,000"
        imageUrl='./BeachRoad/IMG-20240520-WA0046.jpg'
      />
      <Card
        rate="4.90"
        hrefLink="./homes/StudioNyali"
        county="Mombasa, Kenya"
        region="Studio Nyali Unit"
        specific="1 bedroom apartment"
        price="ksh 4,500"
        imageUrl='./StudioUnitNyali/IMG-20240520-WA0034.jpg'
      />
      <Card
        rate="4.78"
        hrefLink="./homes/BuxtonPoint"
        county="Mombasa, Kenya"
        region="Buxton Point"
        specific="1 bedroom apartment"
        price="ksh 3,000"
        imageUrl='./sample/IMG-20240504-WA0051.jpg'
      />
      <Card
        rate="4.88"
        hrefLink="./homes/Shanzu"
        county="Mombasa, Kenya"
        region="1 Br Shanzu"
        specific="1 bedroom apartment"
        price="ksh 2,300"
        imageUrl='./Shanzu/IMG-20240504-WA0050.jpg'
      />
      <Card
        rate="4.75"
        hrefLink="./homes/Malindi"
        county="Malindi, Kenya"
        region="1 Br Malindi"
        specific="1 bedroom apartment"
        price="ksh 2,500"
        imageUrl='./Malindi/IMG-20240504-WA0040.jpg'
      />
      <Card
        rate="4.65"
        hrefLink="./homes/Nyali"
        county="Mombasa, Kenya"
        region="1 Br  Nyali"
        specific="1 bedroom apartment"
        price="ksh 3,500"
        imageUrl='./Nyali/IMG-20240504-WA0029.jpg'
      />
      </div>
    </main></>
  );
}
