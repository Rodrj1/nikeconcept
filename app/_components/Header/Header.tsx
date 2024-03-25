import { NikeBasket, NikeLogo, CartIcon, Offers, ButtonCart } from "..";

export default function Header() {
  return (
    <>
      <header className="w-full font-serif flex flex-col sticky top-0 z-50">
        <div className="py-2 px-14 bg-gray-100 flex justify-between items-center">
          <NikeBasket />

          <ul className="flex gap-4 justify-center items-center">
            <li className="border-l-2 text-xs border-black pl-4">
              Buscar tienda
            </li>

            <li className="border-l-2 text-xs border-black pl-4">Ayuda</li>
          </ul>
        </div>

        <nav className="bg-white flex py-3 px-14 justify-between items-center">
          <NikeLogo />
          <ul className="flex gap-4">
            <Categories />
          </ul>

          <div className="flex gap-4 justify-center items-center">
            <span>A</span>
            <ButtonCart icon={<CartIcon />} />
          </div>
        </nav>
      </header>
      <Offers />
    </>
  );
}

function Categories() {
  const categories = [
    "Destacados",
    "Hombre",
    "Mujer",
    "Niño/a",
    "Accesorios",
    "Oportunidades",
  ];

  return (
    <>
      {categories.map((category) => (
        <li
          key={category}
          className="border-b-2 border-transparent pb-2 hover:cursor-pointer hover:border-b-2 hover:border-b-black"
        >
          {category}
        </li>
      ))}
    </>
  );
}
