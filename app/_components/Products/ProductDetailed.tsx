import Image from "next/image";
import { IProduct } from "@/types";
import Info from "./Info";
import { AddToCartButton } from "..";

export default function Product({ product }: IProduct) {
  const priceWithDiscount = (
    product.discount && product.price * 1 - product.discount
  )?.toFixed(0);

  const discount = product.discount && product.discount * 100;

  return (
    <li>
      <article className="grid grid-cols-4 justify-items-start">
        <ul className="grid grid-cols-2 col-[1/4]">
          {product.images.map((image) => (
            <li key={image}>
              <Image
                src={image}
                alt={product.alt}
                width={700}
                height={700}
                quality={10}
              />
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-1 items-left justify-start px-14">
          {product.heading != undefined && (
            <span className="text-[#ff874c] font-bold">{product.heading}</span>
          )}

          <h3 className="text-xl font-bold">{product.name}</h3>

          <p className="text-zinc-800 font-bold">{product.description}</p>

          {product.discount ? (
            <div className="flex flex-col">
              <div>
                <span className="line-through mr-2 text-gray-500">
                  ${product.price}
                </span>
                <span>${priceWithDiscount}</span>
              </div>
              <span className="text-[#209117] font-bold">
                {discount}% de descuento
              </span>
            </div>
          ) : (
            <span>${product.price}</span>
          )}

          <div className="flex flex-col gap-5">
            <p className="underline">Conocé las promociones</p>

            <div className="flex justify-between">
              <span>Seleccionar Talle</span>
              <span>Guía de talles</span>
            </div>

            <ul className="grid grid-cols-5 gap-2">
              {product.sizes.map((e) => (
                <li
                  key={e.size}
                  className={`${
                    e.available === false
                      ? "bg-[#F7F7F7] text-gray-300"
                      : "bg-transparent"
                  } p-2 rounded-md flex justify-center items-center border border-gray-400`}
                >
                  {e.size}
                </li>
              ))}
            </ul>

            <AddToCartButton product={product} />
          </div>

          <div>
            <p>{product.expandedDescription}</p>
          </div>

          <Info />
        </div>
      </article>
    </li>
  );
}
