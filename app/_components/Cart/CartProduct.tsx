import { IProduct } from "@/types";
import Image from "next/image";
import CartProductButton from "../Buttons/CartProductButton";
import useCartStore from "@/app/_store/store";

interface CartProduct {
  product: IProduct["product"];
}

export default function CartProduct({ product }: CartProduct) {
  const { removeFromCart, calculateNewPrice } = useCartStore();

  const handleRemoveFromCart = () => {
    removeFromCart(product);
    calculateNewPrice();
  };

  return (
    <article className="flex gap-4 w-full relative">
      <picture className="h-full w-max rounded-md border p-1">
        <Image
          className="opacity-80"
          src={product.images[0]}
          alt={product.alt}
          width={80}
          height={80}
          quality={10}
        />
      </picture>

      <div className="flex flex-col gap-1 ">
        <h3>{product.name}</h3>

        <p>${product.price}</p>
      </div>

      <CartProductButton removeFromCart={handleRemoveFromCart} />
    </article>
  );
}
