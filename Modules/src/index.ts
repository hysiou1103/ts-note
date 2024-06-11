// JavaScript 規範，任何沒有 import 宣告、export 或頂層 await 的 JavaScript 檔案應被視為 script 而非 module ，在 script 檔案中的 變數及類型宣告將被共享於全域中

import { add, sample as randomSample } from './utils.js'; // 不能加上.ts後綴，可以不加或加上.js，因為他最終會被編譯為 js 檔案，且 TS 知道該如何處理
import User, { userHelper } from './User.js';

const sample = 123;
console.log('hello world');

console.log(randomSample([12, 3, 34]));
console.log(add(1, 2));

const x = 2;
