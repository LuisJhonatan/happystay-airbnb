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
import ContactForm from "./ContactForm";

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
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h2 className="text-xl lg:text-2xl font-semibold">{airbnb.name}</h2>{" "}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 pb-8 px-4 items-center lg:items-start ">
        <div className="relative w-10/12 lg:w-1/2 rounded-xl shadow-xl overflow-hidden">
          <Image
            src={airbnb.images[2]}
            alt={airbnb.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 lg:hover:scale-125"
            priority
          />
          <h3 className="absolute top-4 left-4 text-primary text-2xl lg:text-3xl font-bold">
            Desde S/. 850.00
          </h3>
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

          <div className="flex gap-2 lg:gap-8 mt-4 w-full">
            <Button
              className="bg-blue-600 text-white text-base px-6 rounded-full"
              onClick={() => setIsCarouselOpen(true)}
            >
              Ver fotos...
            </Button>
            <Button
              className="text-lg text-white px-8 rounded-full"
              onClick={() => {
                setIsFormOpen(true);
              }}
            >
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
      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        name = {airbnb.name}
        link={airbnb.link}
      />
    </>
  );
}
