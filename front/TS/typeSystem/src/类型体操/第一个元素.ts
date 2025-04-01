namespace First {
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]


  type First<T extends any[] > = T[0]

  type head1 = First<arr1> // 应推导出 'a'
  type head2 = First<arr2> // 应推导出 3
}