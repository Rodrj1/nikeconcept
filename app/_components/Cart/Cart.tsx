"use client";

import { ButtonCart, CartIcon } from "..";
import useCartStore from "@/app/_store/store";
import CartProduct from "./CartProduct";

export default function Cart() {
  const { isOpen, cart, price } = useCartStore();

  return (
    <>
      {isOpen && (
        <div className="w-[30%] p-4 bg-black h-screen fixed top-0 z-[500] text-white flex flex-col justify-between items-center">
          <div className="flex justify-between w-full">
            <h2>MI COMPRA</h2>

            <ButtonCart icon="X" />
          </div>

          {cart.map((p, i) => (
            <CartProduct key={i} product={p} />
          ))}

          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between w-full text-xl border-b">
              <span>IMPUESTOS</span>
              <span>$0 ARS</span>
            </div>

            <div className="flex justify-between w-full text-xl border-b">
              <span>TOTAL</span>
              <span>${price} ARS</span>
            </div>

            <button className="bg-white rounded-full py-2 px-4 text-black font-bold w-full">
              IR A CHEQUEO
            </button>
          </div>
        </div>
      )}
    </>
  );
}
