export class Person {
  private _name: string;
  private _id: number;

  constructor(name: string, id: number) {
    this._name = name;
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public get id(): number {
    return this._id;
  }

  getTest() {
    console.log("hello");
  }
}

const person = new Person("hello", 12);

// p 是 Person 类的实例类型
type p = typeof person;

// p1 是 Person 类的构造函数类型
type p1 = typeof Person;

// 使用 p 创建实例，调用实例方法
const person2: p = new Person("Alice", 100);


person2.getTest();  // 正确：可以调用实例方法

// 使用 p1 创建实例
const personByConstructor: p1 = Person;
const person3 = new personByConstructor("Bob", 200);
person3.getTest();  // 正确：通过构造函数创建的实例可以调用实例方法
