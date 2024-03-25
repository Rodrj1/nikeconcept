import Link from "next/link";
import Image from "next/image";
import { thirdImage } from "@/app/_data/data";

export default function Footer() {
  return (
    <>
      <picture className="w-full h-full px-14 my-5">
        <Image
          className="h-full w-full"
          src={thirdImage}
          alt="Banner Saying Sumate a la comunidad"
          width={1500}
          height={450}
          quality={100}
        />
      </picture>
      <footer className="bg-[#111111] text-[#7e7e7e] py-4 px-14">
        <div className="flex justify-between">
          <h4 className="text-lg text-white">BUSCAR TIENDA</h4>

          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <h4 className="text-lg text-white">AYUDA</h4>
            </li>
            {helpLinks.map((link: IFooterLink) => (
              <FooterLink
                key={link.text}
                redirectsTo={link.redirectsTo}
                text={link.text}
              />
            ))}
          </ul>

          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <h4 className="text-lg text-white">ACERCA DE NIKE</h4>
            </li>
            {aboutLinks.map((link: IFooterLink) => (
              <FooterLink
                key={link.text}
                redirectsTo={link.redirectsTo}
                text={link.text}
              />
            ))}
          </ul>

          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <h4 className="text-lg text-white">NOVEDADES NIKE</h4>
            </li>
            {newsLinks.map((link: IFooterLink) => (
              <FooterLink
                key={link.text}
                redirectsTo={link.redirectsTo}
                text={link.text}
              />
            ))}
          </ul>
        </div>

        <div className="border-t-[0.2px] border-[#7e7e7e1f] pt-4 mt-24 flex justify-between">
          <div className="text-[10px] font-sans flex gap-3 items-center">
            <span className="text-white text-xs">Argentina</span>
            <span>© 2023 Southbay S.R.L.</span>
            <span>Todos los derechos reservados.</span>
          </div>

          <div className="text-[10px] font-sans flex gap-3 items-center">
            <span>Terminos y Condiciones</span>
            <span>Política de privacidad y cookies</span>
          </div>
        </div>
      </footer>
    </>
  );
}

interface IFooterLink {
  redirectsTo: string;
  text: string;
}

function FooterLink({ redirectsTo, text }: IFooterLink) {
  return (
    <Link className="hover:text-gray-200 transition-colors" href={redirectsTo}>
      {text}
    </Link>
  );
}

const helpLinks = [
  { text: "Devoluciones", redirectsTo: "" },
  { text: "Cambios", redirectsTo: "" },
  { text: "Autogestionar mi devolución", redirectsTo: "" },
  { text: "Opciones de pago", redirectsTo: "" },
  { text: "Contactate", redirectsTo: "" },
  { text: "Defensa al consumidor", redirectsTo: "" },
  { text: "Libro de quejas online", redirectsTo: "" },
];

const aboutLinks = [
  { text: "Noticias", redirectsTo: "" },
  { text: "Inversionistas", redirectsTo: "" },
  { text: "Sustentabilidad", redirectsTo: "" },
];

const newsLinks = [
  { text: "Encontrá tu calzado", redirectsTo: "" },
  { text: "¿Cómo elegir tu top?", redirectsTo: "" },
  { text: "Tips saludables", redirectsTo: "" },
  { text: "Promociones", redirectsTo: "" },
  { text: "¿Cómo sigo tu pedido?", redirectsTo: "" },
];
