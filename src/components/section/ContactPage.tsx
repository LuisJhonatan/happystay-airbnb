import { Mail, Phone, Instagram } from "lucide-react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import ContactForm from "../ui/ContactForm";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function ContactPage() {
  return (
    <section
      id="contact"
      className={`min-h-screen relative p-4 flex items-center justify-center ${roboto.className}`}
      style={{
        backgroundImage: "url('/images/fondo-contacto.jpg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] flex flex-col lg:flex-row  items-center lg:justify-around relative z-10 mx-auto lg:grid md:grid-cols-2 lg:gap-8">
        <div className=" space-y-8">
          <Image
            src="/images/imagen-contacto.png"
            alt="Pareja trabajando junta"
            width={500}
            height={500}
            className="shadow-lg relative lg:left-[25%] lg:z-0"
          />

          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-primaryText text-base sm:text-lg md:text-xl">
                  Email
                </p>
                <p className="text-secondaryText text-base sm:text-lg md:text-xl">
                  contacto@happystay.pe
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 my-2">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-primaryText text-base sm:text-lg md:text-xl">
                  Email
                </p>
                <p className="text-secondaryText text-base sm:text-lg md:text-xl">
                  wsmith@happystay.pe
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <p className="text-primaryText text-base sm:text-lg md:text-xl">
                  Teléfono
                </p>
                <p className="text-secondaryText text-base sm:text-lg md:text-xl">
                  999999999
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-primaryText mb-4 text-base md:text-lg lg:text-xl">
                Nuestras redes
              </h3>

              <a
                href="https://www.instagram.com/puntahermosairbnb?igsh=MWt2ajUzbHhnbjF1cw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="text-primaryText text-base sm:text-lg md:text-xl">
                  Instagram
                </p>
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
      <div className="w-full h-8 absolute bottom-0 bg-primary "></div>
    </section>
  );
}
