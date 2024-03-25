import { sports } from "@/app/_data/data";
import Image from "next/image";

export default function Sports() {
  return (
    <section className="max-w-[calc(99vw-112px)] relative overflow-x-hidden">
      <h2 className="text-left w-full text-2xl mb-4">Filtrar por deporte</h2>

      <ul className="flex gap-2 w-[120vw] relative">
        {sports.map((sport) => (
          <Sport sport={sport} key={sport.name} />
        ))}
      </ul>
    </section>
  );
}

interface ISport {
  sport: {
    name: string;
    image: string;
    alt: string;
  };
}

function Sport({ sport }: ISport) {
  return (
    <li>
      <article className="flex flex-col gap-4 items-center justify-center h-full w-full">
        <picture>
          <Image
            src={sport.image}
            alt={sport.alt}
            width={500}
            height={500}
            quality={10}
          />
        </picture>
        <h3 className="text-2xl">{sport.name}</h3>
      </article>
    </li>
  );
}
