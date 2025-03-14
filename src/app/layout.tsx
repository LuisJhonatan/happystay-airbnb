import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HappyStay - Encuentra el Airbnb perfecto",
  description:
    "Descubre alojamientos cómodos y bien ubicados para una estancia inolvidable. ¡Bienvenido a HappyStay!",
  keywords: "Airbnb, alojamientos, viajes, vacaciones, apartamentos, HappyStay",
  authors: [{ name: "HappyStay" }],
  robots: "index, follow",
  openGraph: {
    title: "HappyStay - Encuentra el Airbnb perfecto",
    description:
      "Descubre alojamientos cómodos y bien ubicados para una estancia inolvidable. ¡Bienvenido a HappyStay!",
    url: "https://www.happystay.pe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@happystay",
    title: "HappyStay - Encuentra el Airbnb perfecto",
    description:
      "Descubre alojamientos cómodos y bien ubicados para una estancia inolvidable. ¡Bienvenido a HappyStay!",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/images/favicon.ico" />
        <MetaPixel />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
