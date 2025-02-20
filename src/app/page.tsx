"use client";

import About from "@/components/section/About";
import AirbnbPage from "@/components/section/AirbnbPage";
import ContactPage from "@/components/section/ContactPage";
import FAQPage from "@/components/section/FAQPage";
import Footer from "@/components/section/Footer";
import HomeSection from "@/components/section/HomeSection";
import Nav from "@/components/section/Nav";
import { pageview } from "@/lib/pixel";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    pageview();
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: "url('/images/fondo-contacto.jpg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <Nav scrollToSection={scrollToSection} />
      {/* Hero Section */}
      <HomeSection scrollToSection={scrollToSection} />
      {/* Airbnb Section */}
      <AirbnbPage />
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <ContactPage />
      {/* FAQ Section */}
      <FAQPage />
      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/51989856864"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all z-50 flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </main>
  );
}
