// region Array基礎寫法

const activeUsers: string[] = [];
activeUsers.push('Tony');

const ageList: number[] = [45, 55];
ageList[0] = 99;
ageList[0] = 'Amy';

// end region Array基礎寫法

// region 另一種 Array type寫法

const bools: Array<boolean> = [];
// 等同於 const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 0, y: 0 });

// end region Array type寫法

// region 多維 Array

const board: string[][] = [
  ['X', 'O'],
  ['X', 'O'],
  ['X', 'O'],
];

// end region 多維 Array
