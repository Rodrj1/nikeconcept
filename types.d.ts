type TSize = {
  size: number;
  available: boolean;
};

export interface IProduct {
  product: {
    name: string;
    images: string[];
    alt: string;
    description: string;
    expandedDescription: string;
    price: number;
    sizes: TSize[];
    discount?: number;
    heading?: string;
    warning?: string;
    key: string
  };
}
