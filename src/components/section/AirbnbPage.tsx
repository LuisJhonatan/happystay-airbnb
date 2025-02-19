import Image from "next/image";
import { Roboto } from "next/font/google";
import { AIRBNBS } from "@/data/Airbnbs";
import AirbnbCard from "../ui/AirbnbCard";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function AirbnbPage() {
  return (
    <section id="airbnbs" className={`bg-secondary text-primaryText min-h-screen ${roboto.className}`}>
      <div className="w-full h-8 bg-primary"></div>

      <div className="max-w-7xl mx-auto my-16 px-4">
        <div className="max-w-56 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            src="/images/logo-airbnb.png"
            alt="Logo de Airbnb"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {
            AIRBNBS.map((airbnb, index) => (
                <AirbnbCard key={index} airbnb={airbnb}/>
            ))
        }
      </div>
    </section>
  );
}
