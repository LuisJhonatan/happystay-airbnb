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

export const AIRBNBS: Airbnb[] = [
  {
    name: "Costa Peruana 2182 | Playa Señoritas",
    images: [
      "/images/depa1/imagen-depa1-1.jpeg",
      "/images/depa1/imagen-depa1-2.jpeg",
      "/images/depa1/imagen-depa1-3.jpeg",
      "/images/depa1/imagen-depa1-4.jpeg",
      "/images/depa1/imagen-depa1-5.jpeg",
      "/images/depa1/imagen-depa1-6.jpeg",
      "/images/depa1/imagen-depa1-7.jpeg",
      "/images/depa1/imagen-depa1-8.jpeg",
    ],
    link: "https://www.airbnb.com.pe/rooms/1258269089262135421?viralityEntryPoint=1&unique_share_id=5567B669-2968-4491-B05B-8F663D4360E5&slcid=f13b050fd4dd4fa89475b3709a98a492&s=76&feature=share&adults=1&channel=native&slug=hYLrufYP&_set_bev_on_new_domain=1739157249_EAOWQyNDZiNGZhZT&source_impression_id=p3_1739995969_P3tZDMaF2KoKVhvT",
    services: [
      {
        icon: "TreePalm",
        description: "Acceso a la playa - Frente a la playa",
      },
      {
        icon: "Wifi",
        description: "Wifi",
      },
      {
        icon: "CarFront",
        description: "Descripción del servicio 3",
      },
      {
        icon: "Video",
        description:
          "Cámaras de seguridad en la parte exterior de la propiedad",
      },
      {
        icon: "CookingPot",
        description: "Cocina",
      },
      {
        icon: "WavesLadder",
        description: "Piscina",
      },
      {
        icon: "Fence",
        description: "Zona de trabajo",
      },
    ],
  },
  {
    name: "Blue Paradise XIII | Playa Caballeros",
    images: [
      "/images/depa2/imagen-depa2-1.jpeg",
      "/images/depa2/imagen-depa2-2.jpeg",
      "/images/depa2/imagen-depa2-3.jpeg",
      "/images/depa2/imagen-depa2-4.jpeg",
      "/images/depa2/imagen-depa2-5.jpeg",
      "/images/depa2/imagen-depa2-6.jpeg",
      "/images/depa2/imagen-depa2-7.jpeg",
      "/images/depa2/imagen-depa2-8.jpeg",
    ],
    link: "https://www.airbnb.com.pe/rooms/1260866035537968519?viralityEntryPoint=1&unique_share_id=66E755C6-DC56-44B0-871F-CED966774A73&slcid=d52394df436c4fd584cccff5dba426e0&s=76&feature=share&adults=1&channel=native&slug=L0mV0USn&_set_bev_on_new_domain=1739157249_EAOWQyNDZiNGZhZT&source_impression_id=p3_1739995955_P33eMHGO4zrQwzjo",
    services: [
      {
        icon: "TreePalm",
        description: "Acceso a la playa - Frente a la playa",
      },
      {
        icon: "Wifi",
        description: "Wifi",
      },
      {
        icon: "CarFront",
        description: "Descripción del servicio 3",
      },
      {
        icon: "Video",
        description:
          "Cámaras de seguridad en la parte exterior de la propiedad",
      },
      {
        icon: "CookingPot",
        description: "Cocina",
      },
      {
        icon: "WavesLadder",
        description: "Piscina",
      },
      {
        icon: "Fence",
        description: "Zona de trabajo",
      },
    ],
  },
];
