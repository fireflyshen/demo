namespace tupleLength {

  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type aa = 'number'

  type Length<T extends any[]> = T['length']
  // type Length<T extends readonly any[]> = T extends { length: infer L }  ?  L : never;
  type teslaLength = Length<tesla> // expected 4
  type spaceXLength = Length<spaceX> // expected 5
}