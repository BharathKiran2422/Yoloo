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

export const trendingProducts: Product[] = [
  { id: "t1", name: "Stylish Ethnic Kurta", price: "$89.99", imageId: "trending1" },
  { id: "t2", name: "Modern Casual Shirt", price: "$59.99", imageId: "trending2" },
  { id: "t3", name: "Premium Winter Jacket", price: "$249.99", imageId: "trending3" },
  { id: "t4", name: "Elegant Party Dress", price: "$149.99", imageId: "trending4" },
   { id: "t5", name: "Azure Denim Jacket", price: "$129.99", imageId: "product1" },
];

export const brandSpotlightProducts: Product[] = [
  { id: "b1", name: "Spiderman Graphic Tee", price: "$49.99", imageId: "brand1" },
  { id: "b2", name: "Batman Hoodie", price: "$99.99", imageId: "brand2" },
  { id: "b3", name: "Harry Potter Scarf", price: "$39.99", imageId: "brand3" },
  { id: "b4", name: "Classic White Sneakers", price: "$119.99", imageId: "brand4" },
  { id: "b5", name: "Minimalist Graphic Tee", price: "$39.99", imageId: "product2" },
];
