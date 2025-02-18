import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Lobster } from "next/font/google";
import { HiChevronDoubleRight, HiChevronRight } from "react-icons/hi2";
import { useState } from "react";

export type HomeSectionProps = {
  scrollToSection: (section: string) => void;
};

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  const [hover, setHover] = useState(false);

  return (
    <section id="home" className="relative w-full h-screen">
      {/* Desktop view: Two split images */}
      <div className="hidden md:grid grid-cols-2 h-full">
        <div className="relative w-full h-full overflow-hidden group">
          <Image
            src="/images/imagen-depa-1.jpg"
            alt="Luxury apartment interior"
            fill
            className="w-full  h-full object-cover brightness-75 group-hover:scale-110 transition-all duration-500 group-hover:brightness-100"
          />
          <div className="absolute inset-0  bg-black/50 transition-all duration-500 group-hover:bg-none"></div>
        </div>
        <div className="relative w-full h-full overflow-hidden group">
          <Image
            src="/images/imagen-depa-2.jpg"
            alt="Modern apartment view"
            fill
            className="w-full h-full group-hover:scale-110 object-cover brightness-75 transition-all duration-500 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-none"></div>
        </div>
      </div>

      <div className="md:hidden relative w-full h-screen">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        >
          <Image
            src="/images/imagen-depa-1.jpg"
            alt="Luxury apartment interior"
            fill
            className="w-full h-full object-cover"
          />{" "}
          <div className="absolute inset-0  bg-black/50 transition-all duration-500 group-hover:bg-none"></div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src="/images/imagen-depa-2.jpg"
            alt="Modern apartment view"
            fill
            className="w-full h-full object-cover"
          />{" "}
          <div className="absolute inset-0  bg-black/50 transition-all duration-500 group-hover:bg-none"></div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <h1
            className={`text-white text-6xl md:text-8xl font-bold mb-4 ${lobster.className} text-center`}
          >
            HappyStay
          </h1>
          <div className="flex flex-col items-end text-white   w-full lg:max-w-4xl">
            <span className="lg:text-xl  text-sm font-mono font-bold text-right">
              ¡Bienvenido a HappyStay!
            </span>
            <span className="lg:text-xl text-sm font-mono text-right">
              Encuentra el Airbnb perfecto para tu próxima aventura.
            </span>
            <span className="lg:text-xl text-sm font-mono text-right">
              Ofrecemos alojamientos cómodos, bien ubicados y diseñados para que
              disfrutes una estancia inolvidable.
            </span>
            <Button
              className="hover:bg-primary mt-3 rounded-lg text-sm py-3 lg:text-xl  bg-white text-primary hover:text-white "
              onClick={() => scrollToSection("contact")}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Contáctanos
              {hover ? (
                <HiChevronDoubleRight size={20} />
              ) : (
                <HiChevronRight size={20} />
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
