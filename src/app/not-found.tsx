"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Space as Alpaca, MapPin, Home } from "lucide-react";

export default function NotFound() {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <Alpaca
            className={`w-32 h-32 mx-auto text-blue-600 transition-transform duration-500 ${
              bounce ? "transform -translate-y-4" : ""
            }`}
          />
          <MapPin className="absolute bottom-0 right-1/2 translate-x-16 text-red-500 w-8 h-8" />
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900">¡Ups! 404</h1>
          <h2 className="text-2xl font-medium text-gray-700">
            ¡Esta página se fue de paseo a Machu Picchu!
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Parece que nuestra alpaca se llevó esta página de aventura. ¿Qué tal
            si volvemos a casa y tomamos un pisco sour? 🍸
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Volver a Inicio
          </Link>
        </div>

        <div className="pt-8 text-sm text-gray-500">
          <p>Mientras tanto, disfruta de este dato curioso:</p>
          <p className="font-medium mt-2">
            ¿Sabías que el Perú tiene 28 de los 32 tipos de clima que existen en
            el mundo? ¡Casi tantos como páginas en nuestro sitio! 🌞❄️🌧️
          </p>
        </div>
      </div>
    </main>
  );
}
