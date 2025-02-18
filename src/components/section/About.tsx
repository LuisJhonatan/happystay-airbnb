import { Lobster } from "next/font/google";
import Image from "next/image";
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <section className="relative pt-40">
      {/* Imagen de fondo en la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-1/4 lg:h-1/2 overflow-hidden">
        <Image
          src="/images/imagen-nosotros.jpg"
          alt="Luxury apartment interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 "></div>
      </div>

      {/* Fondo blanco en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 lg:h-1/2 bg-white"></div>
      <div>
        <h1
          className={`relative text-4xl lg:text-8xl -top-14 text-white ml-14 ${lobster.className}`}
        >
          HappyStay
        </h1>
      </div>
      {/* Contenedor principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Bloque de descripción */}
        <div className="bg-white p-1 shadow-xl bg-opacity-60">
          <div className="bg-blue-600 w-full bg-opacity-80 text-white px-6 py-10 text-2xl font-semibold rounded-md shadow-md inline-block mb-6">
            Sobre nosotros
          </div>
          <div className="p-8">
            <p className="text-gray-700 text-right text-sm lg:text-lg ">
              En HappyStay, nos especializamos en ofrecer experiencias de
              alojamiento inolvidables. Nuestro objetivo es brindarte espacios
              cómodos, bien ubicados y totalmente equipados para que disfrutes
              de tu estadía como si estuvieras en casa.
            </p>
            <p className="text-gray-700 text-sm lg:text-lg text-right">
              Cada una de nuestras propiedades está cuidadosamente seleccionada
              para garantizar confort, estilo y funcionalidad. Ya sea que viajes
              por placer o por trabajo, en HappyStay encontrarás el lugar ideal
              para descansar y disfrutar al máximo.
            </p>
            <p className="text-gray-700 text-sm lg:text-lg text-right">
              Nos comprometemos a brindarte una experiencia sin preocupaciones,
              con atención personalizada y un proceso de reserva fácil y seguro.
            </p>
            <p className="text-black font-semibold text-sm lg:text-lg text-right">
              ¡Tu próxima aventura comienza aquí!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
