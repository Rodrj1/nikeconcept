import { ArrowLeftIcon, ArrowRightIcon } from "..";

const offersData = [
  "Hasta 6 cuotas sin interés con bancos seleccionados",
  "Hasta 3 cuotas sin interés",
  "Hasta 2 cuotas sin interés",
  "Hasta 4 cuotas sin interés",
];

export default function Offers() {
  return (
    <div className="text-sm w-full py-4 px-14 bg-gray-100 flex justify-center items-center gap-20">
      <ArrowLeftIcon />
      <div className="flex flex-col justify-center items-center">
        <span>{offersData[0]}</span>
        <a className="underline" href="/">
          Ver promociones bancarias
        </a>
      </div>
      <ArrowRightIcon />
    </div>
  );
}
