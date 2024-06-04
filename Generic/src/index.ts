////// region Basic Generic //////

const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// 使用泛型及非空斷言告訴 TypeScript 這個元素是 Input 而且絕對存在
console.dir(inputEl);
inputEl.value = 'hacked';

const btn = document.querySelector<HTMLButtonElement>('.btn')!;
////// end region Basic Generic //////

////// region 藉由Generic 控制函式的輸入及返回值類型相同 //////
function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// Type代表某種類型，我們接受這種類型的參數，並返回這種類型的值
function identity<T>(item: T): T {
  return item;
}

identity<string>('string back');
identity<number>('string back');

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

getRandomElement<string>(['a', 'b', 'c']);
getRandomElement<number>([1, 2, 3]);
getRandomElement(['d', 'e', 'f']); // TypeScript 能夠自動推斷

////// end region 藉由Generic 控制函式的輸入及返回值類型相同 //////

////// region Generic with multiple type //////
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
console.log(merge({ name: 'Colt' }, { num: 9 }));

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

printDoubleLength('aaa');
printDoubleLength(234);

////// end region Generic with multiple type //////

////// region 為 Generic 設置類型默認值 //////

function makeEmptyList<T = number>(): T[] {
  return [];
}

const strings = makeEmptyList(); // 若沒提供 default 值，這裡會return unknown[] 類型，設置default 值後此行則會變成number[]
const bools = makeEmptyList<boolean>();

////// end region 為 Generic 設置類型默認值 //////

////// region Class & Generic //////
interface Song {
  title: string;
  artist: string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlayList {
  public videos: Video[] = [];
}

class SongPlayList {
  public songs: Song[] = [];
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();
const videos = new PlayList<Video>();

////// end region Class & Generic //////
