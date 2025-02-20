"use client";

import About from "@/components/section/About";
import AirbnbPage from "@/components/section/AirbnbPage";
import ContactPage from "@/components/section/ContactPage";
import FAQPage from "@/components/section/FAQPage";
import Footer from "@/components/section/Footer";
import HomeSection from "@/components/section/HomeSection";
import Nav from "@/components/section/Nav";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
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
    </main>
  );
}
