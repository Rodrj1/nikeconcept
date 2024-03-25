import { IProduct } from "@/types";
import { airforces } from "@/app/_data/data";
import { ProductDetailed } from "@/app/_components";

type TParams = {
  params: {
    id: string;
  };
};

export default async function Product({ params }: TParams) {
  const productName = params.id.replaceAll("%20", " ");

  let airforce = {} as IProduct["product"];

  const findAirforce = airforces.find((e) => e.key === productName);

  if (findAirforce) {
    airforce = findAirforce;

    return <ProductDetailed product={airforce} />;
  }
}
