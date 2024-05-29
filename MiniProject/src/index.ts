console.log("hi");
// const btn = document.getElementById("btn"); // return type 是 HTMLelement｜null

// JavaScript解法: question mark operator (?)
// btn?.addEventListner

// TypeScript解法: 非空斷言操作符(!)
const btn = document.getElementById("btn")!;

//這告訴 TS 不要擔心，btn 一定不為空值，這時 hover 到 btn 時，type 會變成只有 HTMLelement
