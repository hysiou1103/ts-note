interface Product {
  price: number;
  name: string;
  quantity: number;
}

const printSummaryProduct = (product: Product): void => {
  console.log(product);
};
