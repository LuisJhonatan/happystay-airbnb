"use client ";
import { useState } from "react";
import FAQItem from "../ui/FAQItem";
import { FAQ_DATA } from "@/data/FAQ";
import { Georama, Roboto } from "next/font/google";
import { ChevronsUp } from "lucide-react";
import { useRouter } from "next/navigation";

const georama = Georama({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-secondary px-4 text-primaryText">
        <div className="">
          <div className="max-w-[1200px] text-center mb-12 mx-auto">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${georama.className}`}
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
      <div className="w-full h-4 bg-primary relative ">
        <div className="triangle">
          <ChevronsUp
            className="w-12 h-12 absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              router.push("/");
            }}
          />{" "}
        </div>
      </div>
    </>
  );
}
