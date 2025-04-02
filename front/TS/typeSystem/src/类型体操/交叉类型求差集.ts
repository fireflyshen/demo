// 创建一个类型 `Diff<T, U>`，返回 `T` 中不存在于 `U` 的属性。


type A4 = { name: string; age: number, l: string };
type B4 = { age: number; gender: string };

type Diff<T, U> = { [K in Exclude<keyof T, keyof U>]: T[K] }

type Result4 = Diff<A4, B4>;