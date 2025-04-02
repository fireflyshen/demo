namespace Includes {

  type Includes<T extends any[], U> = { [P in keyof T]: T[P] extends U ? true : false }[number] extends true ? true : false

  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
}