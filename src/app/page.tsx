"use client";

import ContactPage from "@/components/section/ContactPage";
import FAQPage from "@/components/section/FAQPage";
import Footer from "@/components/section/Footer";
import { Button } from "@/components/ui/button";
import { CiUser } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import HomeSection from "@/components/section/HomeSection";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <FaHome className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-600">
                HappyStay
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" onClick={() => scrollToSection("home")}>
                  Home
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("about")}
                >
                  Información
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("testimonials")}
                >
                  Testimonios
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("contact")}
                >
                  Contacto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}

      <HomeSection scrollToSection={scrollToSection} />
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaHome className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Alojamientos Premium
              </h3>
              <p className="text-gray-600">
                Espacios cuidadosamente seleccionados para garantizar tu
                comodidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CiUser className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atención 24/7</h3>
              <p className="text-gray-600">
                Soporte personalizado durante toda tu estancia.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FiMessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Experiencias Únicas
              </h3>
              <p className="text-gray-600">
                Cada alojamiento tiene su propia historia y encanto especial.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Lo que dicen nuestros huéspedes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4" />
                  <div>
                    <h4 className="font-semibold">Cliente Satisfecho {i}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  &quot;Una experiencia increíble. El apartamento era
                  exactamente como en las fotos y el servicio fue
                  excepcional.&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <ContactPage />
      {/* FAQ Section */}
      <FAQPage />
      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </main>
  );
}
