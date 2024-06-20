import Image from "next/image";
import Card from '@/app/ui/card';
import "./globals.css";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="section-1 flex p-5">
      <Card
        rate="4.50"
        hrefLink="./homes/ksHeights"
        county="Bamburi, Mombasa"
        region="Kisimani Heights"
        specific="3 bedroom apartment"
        price="ksh 8,000"
        imageUrl='./ksheights/IMG-20240610-WA0015.jpg'
      />
      <Card
        rate="4.45"
        hrefLink="./homes/1brNyali"
        county="Mombasa, Kenya"
        region="1 bedroom Nyali"
        specific="1 bedroom apartment"
        price="ksh 4,000"
        imageUrl='./1brNyali/IMG-20240504-WA0025.jpg'
      />
      <Card
        rate="4.90"
        hrefLink="./homes/3brNyali"
        county="Mombasa, Kenya"
        region="3 bedroom Nyali"
        specific="3 bedroom apartment"
        price="ksh 12,000"
        imageUrl='./3brNyali/IMG-20240610-WA0022.jpg'
      />
      <Card
        rate="4.88"
        hrefLink="./homes/3brPalmA"
        county="Mombasa, Kenya"
        region="Palm Terraces Nyali"
        specific="4 bedroom apartment"
        price="ksh 10,000"
        imageUrl='./3brPalmA/IMG-20240610-WA0049.jpg'
      />
      <Card
        rate="4.90"
        hrefLink="./homes/3brNyaliA"
        county="Mombasa, Kenya"
        region="3 bedroom Nyali"
        specific="3 bedroom apartment"
        price="ksh 15,000"
        imageUrl='./3brNyaliA/IMG-20240610-WA0036.jpg'
      />
      <Card
        rate="4.95"
        hrefLink="./homes/3brNyaliB"
        county="Mombasa, Kenya"
        region="3 bedroom Nyali"
        specific="3 bedroom apartment"
        price="ksh 15,000"
        imageUrl='./3brNyaliB/IMG-20240610-WA0067.jpg'
      />
      <Card
        rate="4.90"
        hrefLink="./homes/StudioBamburi"
        county="Mombasa, Kenya"
        region="Studio Unit Bamburi"
        specific="1 bedroom apartment"
        price="ksh 2,000"
        imageUrl='./studioBambu/IMG-20240610-WA0087.jpg'
      />
      <Card
        rate="4.91"
        hrefLink="./homes/3brPalmB"
        county="Mombasa, Kenya"
        region="Palm Terraces"
        specific="3 bedroom apartment"
        price="ksh 10,000"
        imageUrl='./3brPalmB/IMG-20240610-WA0099.jpg'
      />
      <Card
        rate="4.97"
        hrefLink="./homes/Diani4BrB"
        county="Mombasa, Kenya"
        region="Diani 4 bedroom"
        specific="4 bedroom apartment"
        price="ksh 27,000"
        imageUrl='./Diani4brB/IMG-20240610-WA0134.jpg'
      />
      <Card
        rate="4.88"
        hrefLink="./homes/ShanzuPentH"
        county="Mombasa, Kenya"
        region="Shanzu Penthouse"
        specific="2 bedroom apartment"
        price="ksh 14,000"
        imageUrl='./ShanzuPentH/IMG-20240610-WA0149.jpg'
      />
      <Card
        rate="4.92"
        hrefLink="./homes/1brShanzu"
        county="Mombasa, Kenya"
        region="1 bedroom shanzu"
        specific="1 bedroom apartment"
        price="ksh 8,000"
        imageUrl='./1brShanzu/IMG-20240610-WA0167.jpg'
      />
        {/*The cards below are for the earlier homes*/}
      
      <Card
        rate="4.92"`
        hrefLink="./homes/DianiVilla"
        county="Mombasa, Kenya"
        region="3 bedroom Nyali"
        specific="3 bedroom apartment"
        price="ksh 15,000"
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
