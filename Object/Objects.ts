const dog = {
  name: 'Elton',
  breed: 'Australian Shepherd',
  age: 0.5,
};

const printName = (person: { first: string; last: string }): void => {
  console.log(`${person.first} ${person.last}`);
};

printName({ first: 'molly', last: 'lin' });

printName({ first: 'ted', last: 'wen', age: 47 });

const singer = { first: 'ted', last: 'wen', age: 47 };
printName(singer);

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};
function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(song);
}

const song: Song = {
  title: 'some song',
  artist: 'someone',
  //   numStreams: 10,
  credits: {
    producer: 'myself',
    writer: 'myself',
  },
};

calculatePayout(song);
printSong(song);

// region Intersection Types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

// 也可以直接加上新型別，但通常不會這樣寫
type CatDog = Cat &
  Dog & {
    age: number;
  };

const myDog: CatDog = {
  numLives: 2,
  breed: 'mixed',
  age: 1,
};

// end region Intersection Types
