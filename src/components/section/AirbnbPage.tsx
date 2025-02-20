import Image from "next/image";
import { Roboto } from "next/font/google";
import { AIRBNBS } from "@/data/Airbnbs";
import { SERVICES } from "@/data/Services";
import { TESTIMONIALS } from "@/data/Testimonials";
import AirbnbCard from "../ui/AirbnbCard";
import ServiceCard from "../ui/ServiceCard";
import TestimonialCard from "../ui/TestimonialsCard";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function AirbnbPage() {
  return (
    <section
      id="airbnbs"
      className={`bg-secondary pb-4 text-primaryText min-h-screen ${roboto.className}`}
    >
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
        {AIRBNBS.map((airbnb, index) => (
          <AirbnbCard key={index} airbnb={airbnb} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto mb-8">
        <div className="px-4 mb-6">
          <h2 className="text-2xl lg:text-center lg:text-4xl font-semibold">
            Testimonios
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="px-4 mb-6">
          <h2 className="text-2xl lg:text-center lg:text-4xl font-semibold">
            Otros servicios
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
