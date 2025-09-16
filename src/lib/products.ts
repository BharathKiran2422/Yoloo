export type Product = {
  id: string;
  name: string;
  price: string;
  imageId: string;
};

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Azure Denim Jacket",
    price: "$129.99",
    imageId: "product1",
  },
  {
    id: "2",
    name: "Minimalist Graphic Tee",
    price: "$39.99",
    imageId: "product2",
  },
  {
    id: "3",
    name: "Midnight Black Joggers",
    price: "$79.99",
    imageId: "product3",
  },
  {
    id: "4",
    name: "Classic Beige Trench",
    price: "$199.99",
    imageId: "product4",
  },
];
