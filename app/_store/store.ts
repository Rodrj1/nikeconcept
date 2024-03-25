import { IProduct } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TCart = IProduct["product"][];

interface CartState {
  cart: TCart;
  isOpen: boolean;
  price: number;
}

interface CartActions {
  addToCart: (product: IProduct["product"]) => void;
  removeFromCart: (product: IProduct["product"]) => void;
  setIsOpen: () => void;
  calculateNewPrice: () => void;
}

const useCartStore = create<CartState & CartActions>()(
  persist(
    (set, get) => ({
      cart: [],

      isOpen: false,

      price: 0,

      addToCart: (product: IProduct["product"]) => {
        const productsInCart = get().cart;

        const isInCart = isProductInCart(productsInCart, product);

        if (isInCart) return;
        else
          set((state) => ({
            cart: [...state.cart.concat(product)],
          }));
      },

      removeFromCart: (product: IProduct["product"]) => {
        const productsInCart = get().cart;

        const isInCart = isProductInCart(productsInCart, product);

        if (isInCart) {
          const updateCart = productsInCart.filter((p) => p.key != product.key);

          set(() => ({
            cart: updateCart,
          }));
        } else return;
      },

      setIsOpen: () => {
        set((state) => ({
          isOpen: !state.isOpen,
        }));
      },

      calculateNewPrice: () => {
        const productsInCart = get().cart;

        const totalPrice = getTotalPrice(productsInCart);

        set(() => ({
          price: totalPrice,
        }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;

const isProductInCart = (cart: TCart, p: IProduct["product"]) => {
  const getProduct = cart.find((e) => e.key === p.key);

  if (getProduct) return true;
  else return false;
};

const getTotalPrice = (cart: TCart) => {
  const getPrices = cart.map((p) => p.price);

  let totalPrice = 0;

  for (let i = 0; i < getPrices.length; i++) {
    totalPrice += getPrices[i];
  }

  return totalPrice;
};
