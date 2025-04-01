type Nested = Promise<Promise<Promise<number>>>;

type UnwrapPromise<T> = T extends Promise<infer E> ? UnwrapPromise<E> : T

type Result3 = UnwrapPromise<Nested>;