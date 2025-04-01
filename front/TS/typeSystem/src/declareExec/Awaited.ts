namespace Awaited {

  type ExampleType = Promise<string>


  type MyAwaited<T> = T extends Promise<infer U> ? U : T

  type Result = MyAwaited<ExampleType> // string
}