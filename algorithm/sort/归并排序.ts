function mergeSort(nums: number[], left: number, right: number): void {
  // 终止条件：如果子数组的长度为 1（即 left >= right），直接返回
  if (left >= right) return;

  // 计算中点，避免溢出用 `Math.floor(left + (right - left) / 2)`
  let mid = Math.floor(left + (right - left) / 2);

  // 递归排序左子数组 nums[left...mid]
  mergeSort(nums, left, mid);

  // 递归排序右子数组 nums[mid+1...right]
  mergeSort(nums, mid + 1, right);

  // 合并左右子数组
  merge(nums, left, mid, right);
}

function merge(arr: number[], left: number, mid: number, right: number): void {
  // 创建临时数组 `temp`，用于存放合并后的有序数组
  const temp = new Array(right - left + 1);

  // 定义左右子数组的起始索引
  let i = left, // 左子数组的起始索引（arr[left...mid]）
    j = mid + 1, // 右子数组的起始索引（arr[mid+1...right]）
    k = 0; // `temp` 数组的索引

  // 1. 依次比较左右子数组的元素，将较小的元素放入 `temp`
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++]; // 如果左侧元素较小，放入 `temp`
    } else {
      temp[k++] = arr[j++]; // 否则放入右侧的元素
    }
  }

  // 2. 如果左子数组还有剩余元素，则全部复制到 `temp`
  while (i <= mid) temp[k++] = arr[i++];

  // 3. 如果右子数组还有剩余元素，则全部复制到 `temp`
  while (j <= right) temp[k++] = arr[j++];

  // 4. 将 `temp` 复制回 `arr`，替换原来的内容
  for (let i = 0; i < temp.length; i++) arr[left + i] = temp[i];
}

// 测试代码
const arr = [4, 1, 3, 1, 5, 2];
console.log("排序前:", arr);
mergeSort(arr, 0, arr.length - 1);
console.log("排序后:", arr);


// 归并排序拆分 & 合并过程
//
// 初始数组: [4, 1, 3, 1, 5, 2]
//
// ├── [4, 1, 3]                     ├── [1, 5, 2]
// │   ├── [4, 1]                    │   ├── [1, 5]
// │   │   ├── [4]                   │   │   ├── [1]
// │   │   ├── [1]                   │   │   ├── [5]
// │   │   └── 合并为 [1, 4]          │   └── 合并为 [1, 5]
// │   ├── [3]                       │   ├── [2]
// │   └── 合并为 [1, 3, 4]           │   └── 合并为 [1, 2, 5]
// └── 最终合并为 [1, 1, 2, 3, 4, 5]
