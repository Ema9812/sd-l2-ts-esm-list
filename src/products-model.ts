export interface Product {
  id: number;
  title: string;
  price: number;
}

const productsData: Product[] = [
  { id: 1, title: "Gaseosa", price: 800 },
  { id: 2, title: "Chocolate", price: 300 },
  { id: 3, title: "Papitas", price: 500 },
  { id: 4, title: "Galletitas", price: 600 },
  { id: 5, title: "Snacks", price: 200 },
];

export function getProductsSortedByPrice(): Product[] {
  return [...productsData].sort((a, b) => a.price - b.price);
}