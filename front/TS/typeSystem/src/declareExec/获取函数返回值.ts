// 获取函数返回值
type Return<T extends Function> = T extends (...args: infer T) => infer U ? U : never