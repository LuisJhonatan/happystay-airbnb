"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EmailSent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div
        className={`max-w-xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12 transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center justify-center mb-8">
          <CheckCircle className="w-16 h-16 text-blue-600" />
        </div>

        <h1 className="text-4xl font-bold text-center text-primaryText mb-4">
          ¡Gracias por contactarnos!
        </h1>

        <div className="text-center space-y-4 mb-8">
          <p className="text-lg text-gray-600">
            Hemos recibido tu mensaje correctamente. Nuestro equipo se pondrá en
            contacto contigo lo antes posible.
          </p>
          <p className="text-sm text-gray-500">
            Tiempo de respuesta estimado: 24-48 horas hábiles
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="https://www.happystay.pe/"
            className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:primary transition-all duration-200 transform hover:scale-105"
          >
            Volver a la página principal
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
