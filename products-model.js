const productsData = [
    { id: 1, title: "Gaseosa", price: 800 },
    { id: 2, title: "Chocolate", price: 300 },
    { id: 3, title: "Papitas", price: 500 },
    { id: 4, title: "Galletitas", price: 600 },
    { id: 5, title: "Snacks", price: 200 },
];
export function getProductsSortedByPrice() {
    return [...productsData].sort((a, b) => a.price - b.price);
}
