"use client";

import { useState } from "react";

export default function Info() {
  return (
    <>
      {infoModal.map((info) => (
        <Modal heading={info.heading} text={info.text} key={info.heading} />
      ))}
    </>
  );
}

type TModal = {
  heading: string;
  text: string;
};

function Modal({ heading, text }: TModal) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="flex flex-col gap-4 py-4 mt-4 relative">
      <span
        className="font-bold text-xl hover:cursor-pointer border-t border-gray-200"
        onClick={handleIsOpen}
      >
        {heading}
      </span>

      <div
        className={`${
          !isOpen ? "absolute opacity-0 -z-10 mt-8" : "relative opacity-100 mt-0"
        } transition-opacity`}
      >
        <p>{text}</p>
        <p className="font-bold underline">Ver más</p>
      </div>
    </div>
  );
}

const infoModal = [
  {
    heading: "Envíos y devoluciones",
    text: "Envíos a todo el país, excepto a las provincias de Misiones y Tierra del Fuego. Entregas a domicilio o podes retirar en puntos seleccionados. Devolución gratuita dentro de un plazo de 30 días.",
  },
  {
    heading: "Promociones bancarias",
    text: "Comprá con 2 cuotas sin interés en todos los productos y hasta 6 sin interés con bancos seleccionados. Aceptamos Tarjetas de Crédito, Tarjetas de Débito y Mercado Pago.",
  },
];
