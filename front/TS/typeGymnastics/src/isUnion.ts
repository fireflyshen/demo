type IsUnion<T, U = T> = T extends any
  ? [U] extends [T]
  ? false
  : true
  : never;


type A5 = IsUnion<string | number>; // true
type B5 = IsUnion<string>; // false