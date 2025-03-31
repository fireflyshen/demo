

type foo = {
    a: number;
    b: string;
    0: number;
}


type bar = keyof foo

let c: bar = 0;

type Capital<T extends string> = Capitalize<T>;

type MyKeys<Obj extends object> = Capital<string & keyof Obj>;

