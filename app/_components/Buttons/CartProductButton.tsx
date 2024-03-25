interface ICartProductButton {
  removeFromCart: () => void;
}

export default function CartProductButton({ removeFromCart }: ICartProductButton) {
  return <button className="absolute -top-2 -left-2 z-50 rounded-full bg-gray-800 px-2" onClick={removeFromCart}>X</button>;
}
