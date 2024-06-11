// 只在一個function前加上 export ，這個 file 就變成 module，而非全局的 script，每個 file 都被視為自己的 file 和命名空間，必須手動 import 和 export

export function add(x: number, y: number) {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

const x = 1;
