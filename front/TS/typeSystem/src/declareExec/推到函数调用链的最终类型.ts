// 定义一个类型 ChainResult<T>，能够推导出函数调用链的最终返回类型。
declare function chain<T>(x: T): {
  map<U>(fn: (arg: T) => U): ReturnType<typeof chain<U>>;
  get(): T;
};
type ChainResult<T> = T extends { get(): infer U } ? U : never;
const result = chain(5).map(x => x * 2).map(x => `${x}`);

type ResultType = ChainResult<typeof result>;