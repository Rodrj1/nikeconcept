import {
  Opportunities,
  Sports,
  Shoes,
  MainPageTwoImages,
  Product,
} from "./_components";
import { airforces, mainImage, secondImage } from "./_data/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <picture className="h-full w-full">
        <Image
          className="h-full w-full object-cover px-14"
          src={mainImage}
          alt="Girl Running"
          width={650}
          height={650}
          quality={100}
          priority
        />
      </picture>

      <div className="flex flex-col justify-center items-center font-bold font-sans gap-5 my-5">
        <h2 className="text-5xl">RUN YOUR RUN</h2>

        <button className="bg-black rounded-full text-white py-2 px-8">
          Comprar
        </button>
      </div>

      <Shoes />

      <picture className="w-full h-full px-14 my-5">
        <Image
          className="h-full w-full"
          src={secondImage}
          alt="Girl Boxing"
          width={850}
          height={850}
          quality={100}
        />
      </picture>

      <div className="flex flex-col justify-center items-center font-bold font-sans gap-5 my-5">
        <h2 className="text-5xl">ENTRENÁ CON NIKE</h2>

        <button className="bg-black rounded-full text-white py-2 px-8">
          Ver más
        </button>
      </div>

      <Airforces />

      <MainPageTwoImages />

      <Opportunities />

      <Sports />
    </main>
  );
}

function Airforces() {
  return (
    <section className="max-w-[calc(99vw-112px)] relative overflow-x-hidden">
      <h2 className="text-left w-full text-2xl mb-4">Air Force</h2>

      <ul className="flex gap-2 w-[120vw] relative">
        {airforces.map((airforce, i) => (
          <Product product={airforce} key={i} />
        ))}
      </ul>
    </section>
  );
}
