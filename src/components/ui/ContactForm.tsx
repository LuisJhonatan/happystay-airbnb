import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data : ContactFormData) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-white text-primaryText relative z-10 p-4 rounded-lg shadow-lg my-8">
      <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-[36px] font-medium mb-8">
        Contáctanos
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
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
            {...register("name", { required: "Este campo es obligatorio" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{String(errors.name.message)}</p>
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
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Correo electrónico no válido",
              },
            })}
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Correo electrónico no válido",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{String(errors.email.message)}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm md:text-base lg:text-lg xl:text-xl mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full p-3 bg-gray-100 rounded-md"
            {...register("message", { required: "Este campo es obligatorio" })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{String(errors.message.message)}</p>
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
  );
}
