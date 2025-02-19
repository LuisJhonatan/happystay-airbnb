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
      {/* About Section */}
      <About />
      {/* Airbnb Section */}
      <AirbnbPage />
      {/* <div className="w-full h-8 bg-primary "></div>

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
        </div> */}
      {/* Contact Section */}
      <ContactPage />
      {/* FAQ Section */}
      <FAQPage />
      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </main>
  );
}
