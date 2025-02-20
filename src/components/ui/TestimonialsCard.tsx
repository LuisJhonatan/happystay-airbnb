import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  coment: string;
  image: string;
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-white border rounded-2xl shadow-lg mx-4 md:mx-8 my-2">
      <div className="w-12 h-12 rounded-full overflow-hidden mt-4 mx-auto">
        <Image
          src={testimonial.image}
          alt={`Foto de ${testimonial.name}`}
          width={50}
          height={50}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>
      <div className="px-2 py-4 text-center">
        <h2 className="text-lg font-bold">{testimonial.name}</h2>
        <p className="">{testimonial.coment}</p>
      </div>
    </div>
  );
}
