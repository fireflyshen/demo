/**
 * 问题 1：类型透传与映射转换
 * 实现一个类型 Remap<T>，将对象类型中的值类型映射成 string。
 * 示例：
 */

type User = {
  id: number;
  name: string;
  active: boolean;
};
type Remap<T> = {
  [K in keyof T]: string;
}

type Result = Remap<User>;

// Result 应为：
// {
//   id: string;
//   name: string;
//   active: string;
// }
