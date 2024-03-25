import { opportunitiesImages } from "@/app/_data/data";
import Image from "next/image";

export default function Opportunities() {
  return (
    <section className="w-full px-14 m-5">
      <picture className="h-max mb-4">
        <Image
          className="h-full w-full"
          src={opportunitiesImages.main}
          alt="Opportunities Banner"
          width={1450}
          height={600}
          quality={100}
        />
      </picture>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="col-[1/2] row-[1/3] h-max relative">
          <picture>
            <Image
              className="h-full w-full"
              src={opportunitiesImages.tshirt}
              alt="Opportunities T shirt"
              width={850}
              height={850}
              quality={20}
            />
          </picture>

          <div className="absolute bottom-4 left-3">
            <h3 className="text-2xl mb-2">Ropa</h3>

            <button className="bg-black rounded-full text-white py-2 px-8">
              Comprar
            </button>
          </div>
        </div>

        <div className="col-[2/3] row-[1/2] h-max relative">
          <picture>
            <Image
              className="h-full w-full"
              src={opportunitiesImages.footwear}
              alt="Opportunities Footwear"
              width={850}
              height={550}
              quality={20}
            />
          </picture>

          <div className="absolute bottom-4 left-3">
            <h3 className="text-2xl mb-2">Calzado</h3>

            <button className="bg-black rounded-full text-white py-2 px-8">
              Comprar
            </button>
          </div>
        </div>

        <div className="col-[2/3] row-[2/3] h-max relative">
          <picture>
            <Image
              className="h-full w-full"
              src={opportunitiesImages.bag}
              alt="Opportunities Bag"
              width={850}
              height={550}
              quality={20}
            />
          </picture>

          <div className="absolute bottom-4 left-3">
            <h3 className="text-2xl mb-2">Accesorios</h3>

            <button className="bg-black rounded-full text-white py-2 px-8">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
