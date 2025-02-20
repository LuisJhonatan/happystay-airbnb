import { Lobster } from "next/font/google";
import Image from "next/image";
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <section
      id="about"
      className="p-4 min-h-screen bg-secondary relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/fondo-contacto.jpg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Imagen de fondo en la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-[30%] lg:h-1/2 overflow-hidden">
        <div className="w-full h-8 bg-primary absolute top-0 z-10"></div>
        <Image
          src="/images/imagen-nosotros.jpg"
          alt="Luxury apartment interior"
          fill
          className="object-cover"
        />
        <div className="bgimage max-w-7xl relative top-1/2 md:top-1/4 z-10 mx-auto px-4">
          <h1
            className={`text-3xl md:text-6xl lg:text-8xl xl:text-9xl text-white ${lobster.className}`}
          >
            HappyStay
          </h1>
        </div>
        <div className="absolute inset-0 bg-black/50 "></div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-[50%] md:mt-[25%] xl:mt-[20%] 2xl:mt-[15%]">
        {/* Bloque de descripción */}
        <div className="bg-white p-1 shadow-xl bg-opacity-60">
          <div className="bg-blue-600 w-full bg-opacity-80 text-white px-6 py-10 text-2xl font-semibold rounded-md shadow-md inline-block mb-6">
            Sobre nosotros
          </div>
          <div className="p-8">
            <p className="text-primaryText text-sm lg:text-lg ">
              En HappyStay, nos especializamos en ofrecer experiencias de
              alojamiento inolvidables. Nuestro objetivo es brindarte espacios
              cómodos, bien ubicados y totalmente equipados para que disfrutes
              de tu estadía como si estuvieras en casa.
            </p>
            <p className="text-primaryText text-sm lg:text-lg ">
              Cada una de nuestras propiedades está cuidadosamente seleccionada
              para garantizar confort, estilo y funcionalidad. Ya sea que viajes
              por placer o por trabajo, en HappyStay encontrarás el lugar ideal
              para descansar y disfrutar al máximo.
            </p>
            <p className="text-primaryText text-sm lg:text-lg">
              Nos comprometemos a brindarte una experiencia sin preocupaciones,
              con atención personalizada y un proceso de reserva fácil y seguro.
            </p>
            <p className="text-primaryText font-bold text-sm lg:text-lg ">
              ¡Tu próxima aventura comienza aquí!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
