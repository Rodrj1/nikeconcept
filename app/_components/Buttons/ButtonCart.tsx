"use client";

import useCartStore from "@/app/_store/store";

interface IButtonCart {
  icon: React.ReactNode | string;
}

export default function ButtonCart({ icon }: IButtonCart) {
  const { setIsOpen } = useCartStore();

  return <button onClick={setIsOpen}>{icon}</button>;
}
