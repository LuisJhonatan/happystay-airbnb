import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import * as z from "zod";

const schema = z.object({
  name: z.string().nonempty("Este campo es obligatorio"),
  email: z.string().email("Correo electrónico no válido"),
  whatsapp: z.string().nonempty("Este campo es obligatorio"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof schema>;

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  link: string;
}

export default function ContactForm({
  isOpen,
  onClose,
  name,
  link,
}: ContactFormProps) {
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const {
    register,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-lg bg-white text-primaryText relative z-10 p-4 rounded-lg shadow-lg my-8 h-[80vh] md:h-[70vh] 2xl:h-[60vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="text-2xl absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-[36px] font-medium my-6">
          {name}
        </h2>
        <h3 className="text-primary text-2xl text-center md:text-3xl lg:text-4xl xl:text-[36px] font-medium my-4">
          Desde S/. 850.00
        </h3>

        <form
          className="space-y-6"
          action={`https://formsubmit.co/${email}`}
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value={`https://www.happystay.pe/email-sent?link=${encodeURIComponent(
              link
            )}`}
          ></input>
          <input type="hidden" name="airbnb" value={name} />

          <div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <label
              htmlFor="name"
              className="block text-sm md:text-base lg:text-lg xl:text-xl mb-2"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-100 rounded-md"
              {...register("name")}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm md:text-base lg:text-lg xl:text-xl mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-100 rounded-md"
              {...register("email")}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm md:text-base lg:text-lg xl:text-xl mb-2"
            >
              WhatsApp
            </label>
            <input
              type="text"
              id="whatsapp"
              className="w-full p-3 bg-gray-100 rounded-md"
              {...register("whatsapp")}
              required
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm md:text-base lg:text-lg xl:text-xl mb-2"
            >
              ¿Qué fechas te gustaría agendar tu estadía?
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-3 bg-gray-100 rounded-md"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Enviar mensaje
            <Mail className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
