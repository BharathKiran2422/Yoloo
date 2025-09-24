
export type Product = {
  id: string;
  name: string;
  price: string;
  imageId: string;
};

export type Brand = {
  id: string;
  name: string;
  imageId: string;
}

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Azure Denim Jacket",
    price: "₹4,499",
    imageId: "product1",
  },
  {
    id: "2",
    name: "Minimalist Graphic Tee",
    price: "₹1,299",
    imageId: "product2",
  },
  {
    id: "3",
    name: "Midnight Black Joggers",
    price: "₹2,799",
    imageId: "product3",
  },
  {
    id: "4",
    name: "Classic Beige Trench",
    price: "₹7,999",
    imageId: "product4",
  },
  {
    id: "5",
    name: "Stylish Leather Boots",
    price: "₹5,999",
    imageId: "product5",
  },
  {
    id: "6",
    name: "Cozy Wool Sweater",
    price: "₹3,499",
    imageId: "product6",
  },
  {
    id: "7",
    name: "Sleek Silver Watch",
    price: "₹12,999",
    imageId: "product7",
  },
  {
    id: "8",
    name: "Floral Summer Dress",
    price: "₹4,299",
    imageId: "product8",
  },
];

export const trendingProducts: Product[] = [
  { id: "t1", name: "Stylish Ethnic Kurta", price: "₹3,499", imageId: "trending1" },
  { id: "t2", name: "Modern Casual Shirt", price: "₹2,199", imageId: "trending2" },
  { id: "t3", name: "Premium Winter Jacket", price: "₹8,999", imageId: "trending3" },
  { id: "t4", name: "Elegant Party Dress", price: "₹6,499", imageId: "trending4" },
  { id: "t5", name: "Azure Denim Jacket", price: "₹4,499", imageId: "product1" },
  { id: "b1", name: "Spiderman Graphic Tee", price: "₹1,799", imageId: "brand1" },
  { id: "b2", name: "Batman Hoodie", price: "₹3,299", imageId: "brand2" },
  { id: "b3", name: "Harry Potter Scarf", price: "₹1,499", imageId: "brand3" },
  { id: "3", name: "Midnight Black Joggers", price: "₹2,799", imageId: "product3" },
  { id: "5", name: "Stylish Leather Boots", price: "₹5,999", imageId: "product5" },
  { id: "b4", name: "Classic White Sneakers", price: "₹4,999", imageId: "brand4" },
  { id: "2", name: "Minimalist Graphic Tee", price: "₹1,299", imageId: "product2" },
];

export const brandSpotlightProducts: Product[] = [
  { id: "b1", name: "Spiderman Graphic Tee", price: "₹1,799", imageId: "brand1" },
  { id: "b2", name: "Batman Hoodie", price: "₹3,299", imageId: "brand2" },
  { id: "b3", name: "Harry Potter Scarf", price: "₹1,499", imageId: "brand3" },
  { id: "b4", name: "Classic White Sneakers", price: "₹4,999", imageId: "brand4" },
  { id: "t1", name: "Stylish Ethnic Kurta", price: "₹3,499", imageId: "trending1" },
  { id: "t2", name: "Modern Casual Shirt", price: "₹2,199", imageId: "trending2" },
  { id: "t3", name: "Premium Winter Jacket", price: "₹8,999", imageId: "trending3" },
  { id: "t4", name: "Elegant Party Dress", price: "₹6,499", imageId: "trending4" },
];

export const brands: Brand[] = [
  { id: "brand-logo-1", name: "Marvel", imageId: "brand-logo-marvel" },
  { id: "brand-logo-2", name: "DC Comics", imageId: "brand-logo-dc" },
  { id: "brand-logo-3", name: "Harry Potter", imageId: "brand-logo-hp" },
  { id: "brand-logo-4", name: "Puma", imageId: "brand-logo-puma" },
  { id: "brand-logo-5", name: "Adidas", imageId: "brand-logo-adidas" },
  { id: "brand-logo-6", name: "Nike", imageId: "brand-logo-nike" },
  { id: "brand-logo-7", name: "Levi's", imageId: "brand-logo-levis" },
];

    

    