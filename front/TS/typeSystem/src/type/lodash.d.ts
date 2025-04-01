declare module "lodash" {
  export function shuffle<T>(array: T[]): T[];

  // 声明一个基本的 sum 方法
  export function sum(array: number[]): number;

  // 自定义扩展方法：customGreet
  export function customGreet(name: string): string;
}


