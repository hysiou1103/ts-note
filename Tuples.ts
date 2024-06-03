// region Basic Tuples

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'ok'];
// const goodRes: HTTPResponse = [200, 'ok', 300]; // 不符合長度，報錯
// goodRes[0] = '200'; // 不符合規則，TS報錯
goodRes.push('notOk'); // Tuple奇怪的部分，TS不會報錯
goodRes.pop();
goodRes.pop();
goodRes.pop(); // 現在已經是空陣列，但TS仍然不會報錯

// end region Basic Tuples
