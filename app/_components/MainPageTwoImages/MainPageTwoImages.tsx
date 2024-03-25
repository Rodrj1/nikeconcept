import { backToCollegeImage, footballImage } from "@/app/_data/data";
import Image from "next/image";

export default function TwoImages() {
    return (
      <section className="flex gap-4 w-full px-14 my-5">
        <div className="w-full h-full">
          <picture>
            <Image
              className="h-full w-full"
              src={backToCollegeImage}
              alt="Boy and girl with bags"
              width={850}
              height={850}
              quality={100}
            />
          </picture>
  
          <h3 className="text-2xl mt-4 ml-4">Vuelta al cole</h3>
        </div>
  
        <div className="w-full h-full">
          <picture>
            <Image
              className="h-full w-full"
              src={footballImage}
              alt="Football boot on top of tree"
              width={850}
              height={850}
              quality={100}
            />
          </picture>
  
          <h3 className="text-2xl mt-4 ml-4">Fútbol</h3>
        </div>
      </section>
    );
  }