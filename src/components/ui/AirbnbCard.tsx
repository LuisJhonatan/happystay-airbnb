import Image from "next/image";
import {
  TreePalm,
  Wifi,
  CarFront,
  Video,
  CookingPot,
  WavesLadder,
  Fence,
  HelpCircle, // Importa el ícono por defecto
} from "lucide-react";
import { Button } from "./button";

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
  };

export default function AirbnbCard({ airbnb }: { airbnb: Airbnb }) {
  console.log(airbnb.name);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h2 className="text-xl lg:text-2xl font-semibold">{airbnb.name}</h2>{" "}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 pb-8 px-4 items-center lg:items-start ">
        <div className="w-10/12 lg:w-1/2">
          <Image
            src={airbnb.images[0]}
            alt={airbnb.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-lg"
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
            <Button
              className=" text-white"
              onClick={() => window.open(airbnb.link, "_blank")}
            >
              Ir al Airbnb...
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
