"use client";

import useCartStore from "@/app/_store/store";
import { IProduct } from "@/types";

interface ICartButton {
  product: IProduct["product"];
}

export default function AddToCartButton({ product }: ICartButton) {
  const { addToCart, calculateNewPrice } = useCartStore();

  const handleAddToCart = () => {
    addToCart(product);
    calculateNewPrice()
  };


  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-black py-4 rounded-full text-white"
    >
      Agregar al carrito
    </button>
  );
}
