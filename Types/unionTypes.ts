// region basic unionTypes

let age: number | string = 24;
age = "24";

type Point = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};

let coordinate: Point | Loc = { x: 1, y: 1 };
coordinate = { lat: 1, long: 1 };

// end region basic unionTypes
function printAge(age: string | number): void {
  console.log(age);
}
printAge(12);
printAge("20");

function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax; // if only writing this line, getting typescript complain
}
// region unionTypes with Array

const stuff: (string | number)[] = [];

// end region unionTypes with Array

// region Literal Types
const zero: 0 = 0;
let hi: "hi" = "hi";
hi = "hello";

let moods: "happy" | "sad" = "happy";
moods = "sad";
moods = "angry";
type Days = "Monday" | "Tuesday" | "wednesday";
const day: Days = "Monday";
// end region Literal Types
