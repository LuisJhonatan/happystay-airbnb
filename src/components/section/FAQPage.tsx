"use client ";
import { useState } from "react";
import FAQItem from "../ui/FAQItem";
import { FAQ_DATA } from "@/data/FAQ";
import { Georama, Roboto } from "next/font/google";

const georama = Georama({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
    id="faq">
      <div className="text-primaryText flex items-center justify-center min-h-screen bg-secondary p-4 pb-10">
        <div className="">
          <div className="max-w-[1200px] text-center mb-12 mx-auto">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 pt-24 md:pt-0 ${georama.className}`}
            >
              Preguntas frecuentes
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl ${roboto.className}`}
            >
              Aquí encontrarás respuestas a las dudas más comunes sobre
              reservas, pagos, políticas de cancelación y más. Si necesitas más
              información, no dudes en contactarnos. ¡Estamos aquí para
              ayudarte!
            </p>
          </div>

          <div
            className={`bg-tertiary rounded-2xl shadow-xl overflow-hidden max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto ${roboto.className}`}
          >
            {FAQ_DATA.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
