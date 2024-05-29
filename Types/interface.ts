interface Person {
  last: string;
  first: string;
  nickName?: string;
  readonly id: number;
  // sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  last: "Thomas",
  first: "Wen",
  id: 182,
  sayHi: () => "hello",
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "shoes",
  price: 124,
  applyDiscount: (amount: number) => {
    const newPrice = this.price * (1 - amount);
    return newPrice;
  },
};

interface Dog {
  breed: string;
  age: number;
}

interface Dog {
  bark(): string;
}

interface Dog {
  name: string;
  age: number;
}

const eleton: Dog = {
  breed: "mixed",
  bark: () => "woof",
};

// extend interface

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const Chewy: ServiceDog = {
  name: "Chewy",
  age: 0.5,
  breed: "mixed",
  bark: () => "woof",
  job: "drug sniffer",
};
