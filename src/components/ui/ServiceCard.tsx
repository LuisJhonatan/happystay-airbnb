import Image from "next/image";

interface Service {
  name: string;
  image: string;
  description: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white border rounded-2xl shadow-lg mx-4 md:mx-8 my-2">
      <Image
        src={service.image}
        alt={service.name}
        width={100}
        height={100}
        className="rounded-lg m-auto"
        priority
      />
      <div className="px-2 py-4 text-center">
        <h2 className="text-lg font-bold">{service.name}</h2>
        <p className="">{service.description}</p>
      </div>
    </div>
  );
}
