
type Union = "a" | "b" | "c";

type UnionToPartialObject<U extends string | number | symbol> = {
  [Item in U]?: true;
};


type Result2 = UnionToPartialObject<Union>;