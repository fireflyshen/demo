type Person = {
  name: string;
  age: number;
  isActive: boolean;
}

// anwser
type FilterByValue<T, U> = Pick<T,
  {
    [Item in keyof T]: T[Item] extends U ? Item : never
  }[keyof T]>

type StringProps = FilterByValue<Person, string>;