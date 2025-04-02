type A = { a: { b: number; c: string } };
type B = { a: { c: number; d: boolean } }

type DeepMerge<T, U> = T extends object
  ? U extends object
  ? {
    [K in keyof T | keyof U]: K extends keyof T
    ? K extends keyof U
    ? DeepMerge<T[K], U[K]>
    : T[K]
    : K extends keyof U
    ? U[K]
    : never;
  }
  : T
  : T | U;

type Merged = DeepMerge<A, B>;