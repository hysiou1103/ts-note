function square(num: number) {
  return num * num;
}

square(3);
square(true);

function greet(person: string = "ted") {
  return person;
}

greet("ted");

const doSomething = (name: string, age: number, isFunny: boolean) => {};
doSomething("chickenFace", 76, false);

const colors = ["red", "white", "yellow"];
colors.map(color => color.toLocaleLowerCase());

function printTwice(msg: string): void {
  console.log(msg);
}
