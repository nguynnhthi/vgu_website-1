"use client"
import { Carousel } from "@material-tailwind/react";
export default function HeroSection() {
  return (

    <div>
      <Carousel transition={{ type: "tween", duration: 1 }} className="rounded-xl">
        <img
          src="/vgu_1.jpeg"
          alt="image 1"
          className="h-auto w-full object-cover"
        />
        <img
          src="/vgu_1.jpeg"
          alt="image 2"
          className="h-auto w-full object-cover"
        />
        <img
          src="/vgu_1.jpeg"
          alt="image 3"
          className="h-auto w-full object-cover"
        />
      </Carousel>
    </div >

  );
}



