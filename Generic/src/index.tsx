// function getRandomElement<Type>(list: Type[]): Type {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }

// const getRandomElement=<Type> (list:Type[]): Type=>{
//     const randIdx = Math.floor(Math.random() * list.length);
//     return list[randIdx];
// }

// 若使用箭頭函式來寫Generic並且在.tsx檔案中，Generic標籤會被誤認為是JSX tag`，
// 解決方法是在類型參數後加上一個逗號;
const getRandomElement = <Type,>(list: Type[]): Type => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};
