import { shoes } from "@/app/_data/data";
import Image from "next/image";

export default function Shoes() {
  return (
    <section className="max-w-[calc(99vw-112px)] relative overflow-x-hidden">
      <ul className="flex gap-2 w-[120vw] relative">
        {shoes.map((shoe) => (
          <Shoe shoe={shoe} key={shoe.name} />
        ))}
      </ul>
    </section>
  );
}

interface IShoe {
  shoe: {
    name: string;
    image: string;
    alt: string;
    backgroundColor: string;
  };
}

function Shoe({ shoe }: IShoe) {
  return (
    <li>
      <article className="flex flex-col gap-4 items-center justify-center h-full w-full">
        <picture className={`${shoe.backgroundColor}`}>
          <Image
            src={shoe.image}
            alt={shoe.alt}
            width={450}
            height={450}
            quality={10}
          />
        </picture>
        <h3 className="text-2xl">{shoe.name}</h3>
      </article>
    </li>
  );
}
