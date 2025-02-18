import { useState } from "react";
import { Button } from "../ui/button";
import { Lobster } from "next/font/google";

export type NavProps = {
  scrollToSection: (section: string) => void;
};
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function Nav({ scrollToSection }: NavProps) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="w-full h-8 bg-blue-700"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 relative">
          <div className="relative">
            <div
              style={{
                clipPath: "polygon(50% 100%, 100% 60%, 100% 0, 0 0, 0 60%)",
              }}
              className="absolute -top-9 left-0 bg-blue-700 px-6 py-3 w-28 text-white font-bold h-28"
            ></div>
            <span
              className={`absolute ${lobster.className} -top-4 left-1 text-white font-bold text-2xl`}
            >
              HappyStay
            </span>
          </div>

          {/* Menú de Navegación */}
          <div className="hidden md:block text-lg">
            <div className="flex items-center space-x-4">
              {["home", "about", "airbnbs", "contact", "faq"].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  className={`text-lg ${
                    activeSection === section
                      ? "text-blue-700 font-bold"
                      : "text-black hover:font-bold"
                  }`}
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <span
                  className={`block w-5 absolute h-0.5 bg-current transform transition duration-500 ease-in-out ${
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block w-5 absolute h-0.5 bg-current transform transition duration-500 ease-in-out ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 absolute h-0.5 bg-current transform transition duration-500 ease-in-out ${
                    isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  ">
          {["home", "about", "airbnbs", "contact", "faq"].map((section) => (
            <Button
              key={section}
              variant="ghost"
              className={`block w-full text-right text-lg ${
                activeSection === section
                  ? "text-blue-700 font-bold"
                  : "text-black hover:font-bold"
              }`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
