interface Service {
  name: string;
  image: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    name: "Menú en Casa",
    image: "/images/services/service-1.svg",
    description:
      "Disfruta de nuestra carta con comida y bebidas exclusivas para huéspedes.",
  },
  {
    name: "Alquiler de Cuatrimotos",
    image: "/images/services/service-2.svg",
    description:
      "Vive la aventura con nuestras cuatrimotos a precio especial. ",
  },
  {
    name: "Servicio de taxi",
    image: "/images/services/service-3.svg",
    description:
      "Traslados cómodos y seguros desde el aeropuerto, Lima o cualquier lugar hasta tu Airbnb.",
  },
];
