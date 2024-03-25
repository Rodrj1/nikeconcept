import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types";

export default function Product({ product }: IProduct) {
  const priceWithDiscount = (
    product.discount && product.price * 1 - product.discount
  )?.toFixed(0);

  const discount = product.discount && product.discount * 100;

  return (
    <li>
      <article>
        <Link href={`products/${product.key}`}>
          <picture className="bg-[#F6F6F6] h-full w-full">
            <Image
              src={product.images[0]}
              alt={product.alt}
              width={500}
              height={500}
              quality={10}
            />
          </picture>
        </Link>

        <div className="flex flex-col gap-1 items-left justify-center">
          {product.heading != undefined && (
            <span className="text-[#ff874c] font-bold">{product.heading}</span>
          )}

          <h3>{product.name}</h3>

          <p className="text-gray-500">{product.description}</p>

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
        </div>
      </article>
    </li>
  );
}
