"use client";
import Image from "next/image";
import {
  TreePalm,
  Wifi,
  CarFront,
  Video,
  CookingPot,
  WavesLadder,
  Fence,
  HelpCircle,
  AirVent,
  Rows4,
  Sun,
  Shirt,
  Coffee,
} from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { ImageCarousel } from "./ImageCarousel";
import { event } from "@/lib/pixel";

interface Service {
  icon: string;
  description: string;
}

interface Airbnb {
  name: string;
  images: string[];
  link: string;
  services: Service[];
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    TreePalm: TreePalm,
    Wifi: Wifi,
    CarFront: CarFront,
    Video: Video,
    CookingPot: CookingPot,
    WavesLadder: WavesLadder,
    Fence: Fence,
    AirVent: AirVent,
    Rows4: Rows4,
    Sun: Sun,
    Shirt: Shirt,
    Coffee: Coffee,
  };

export default function AirbnbCard({ airbnb }: { airbnb: Airbnb }) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const handleAirbnbClick = () => {
    event("airbnb_click", { airbnb_name: airbnb.name });

    window.open(airbnb.link, "_blank");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h2 className="text-xl lg:text-2xl font-semibold">{airbnb.name}</h2>{" "}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 pb-8 px-4 items-center lg:items-start ">
        <div
          className="w-10/12 lg:w-1/2 rounded-xl shadow-xl cursor-pointer overflow-hidden"
          onClick={() => setIsCarouselOpen(true)}
        >
          <Image
            src={airbnb.images[2]}
            alt={airbnb.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 lg:hover:scale-125"
            priority
          />
        </div>
        <div className="w-10/12 lg:w-1/2">
          <h3 className="text-lg lg:text-2xl font-semibold mt-4 lg:mt-0">
            Lo que ofrecemos
          </h3>
          <div className="mt-4">
            {airbnb.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || HelpCircle;
              return (
                <div key={index} className="flex items-center gap-2 lg:gap-4">
                  <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" />
                  <span className="text-sm lg:text-base">
                    {service.description}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex items-end justify-center mt-4">
            <Button className=" text-white" onClick={handleAirbnbClick}>
              Ir al Airbnb...
            </Button>
          </div>
        </div>
      </div>
      <ImageCarousel
        images={airbnb.images}
        isOpen={isCarouselOpen}
        onClose={() => setIsCarouselOpen(false)}
      />
    </>
  );
}
