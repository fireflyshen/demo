type foo = {
    a: number;
    b: string;
    0: number;
};
type bar = keyof foo;
declare let c: bar;
type Capital<T extends string> = Capitalize<T>;
type MyKeys<Obj extends object> = Capital<string & keyof Obj>;
