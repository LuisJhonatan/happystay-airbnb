import { ArrowDownFromLine } from "lucide-react";

export default function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 px-4">
      <button
        className="w-full py-6 text-left font-bold flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg ">{question}</span>
        <ArrowDownFromLine
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-6">{answer}</p>
      </div>
    </div>
  );
}
