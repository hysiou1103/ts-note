////// region typeof Guards //////

function triple(value: number | string) {
  if (typeof value === 'string') {
    return value.repeat(3);
  }
  return value * 3;
}

////// end region typeof Guards //////

////// region Truthiness Guards //////

const el = document.getElementById('idk');
if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      // 因為只有有效字串能夠進入這個條件式，所以這裡的型別一定是 string
      // ... do something
    }
  } else {
    word; // type 可能是 string 或 undefined，因為空字串也可能走到這個條件
  }
};

////// end region Truthiness Guards //////

////// region Equality Narrowing //////
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

someDemo(3, '3'); // 傳遞數字
////// end region Equality Narrowing //////

////// region in Operator //////
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ('numEpisodes' in media) {
    return media.episodeDuration * media.numEpisodes;
  }
  return media.duration;
}

getRuntime({ title: 'Amadeus', duration: 160 });
getRuntime({
  title: 'Spongebob',
  numEpisodes: 80,
  episodeDuration: 30,
});
////// end region in Operator //////

////// region instance of Narrowing //////
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    date.toUTCString();
  } else {
    new Date(date).toUTCString();
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

// 這個情況下兩種方法都可以
function printName(entity: User | Company) {
  if ('username' in entity) {
    entity;
  }
  if (entity instanceof Company) {
  }
}
////// end region instance of Narrowing //////

////// region Type Predicated //////
interface Cat {
  name: string;
  numLives: number;
}
interface Dog {
  name: string;
  breed: string;
}
function isCat(animal: Cat | Dog): animal is Cat {
  // --> 加上這一行(animal is Cat) TS 才會知道
  return (animal as Cat).numLives !== undefined; // 我們斷言這個參數是Cat，然後檢查numLives是否不等於undefined，目前為止還不能讓 TS 知道是 Cat
}
function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal; // 這個時候知道animal 是 Cat
    return 'Meow';
  }
}
////// end region Type Predicated //////

////// region Discriminated unions //////
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}
interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}
interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}
interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: 'sheep';
}
type FarmAnimal = Pig | Rooster | Cow | Sheep;
function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case 'pig':
      animal; // TS知道animal是Pig Type
      return 'Oink';
    case 'cow':
      animal; // TS知道animal是Cow Type
      return 'Mooo';
    case 'rooster':
      animal; // TS知道animal是Rooster Type
      return 'Cocka';
    default:
      //  We should never make it here, if we handled all cases correctly
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}
const stevie: Rooster = {
  name: 'steive chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster', // 若設成別的值會得到抱怨
};
console.log(getFarmAnimalSound(stevie));
////// end region Discriminated unions //////

////// region Exhaustiveness checking //////

////// end region Exhaustiveness checking //////
