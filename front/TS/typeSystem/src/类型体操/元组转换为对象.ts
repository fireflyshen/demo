namespace tupleToObject {

  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const


  type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K
  }

  type result = TupleToObject<typeof tuple>
}