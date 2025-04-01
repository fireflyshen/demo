type A1 = { a: number };
type B1 = { b: string };
type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never
}

type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

type XORResult1 = XOR<A1, B1>; // A 或 B 但不能同时存在
const obj1: XORResult1 = { a: 1 }; // ✅
const obj2: XORResult1 = { b: "str" }; // ✅
// const obj3: XORResult1 = { a: 1, b: "str" }; // ❌