/**
 * 下沉操作，数组建堆
 * @param nums 要排序的数组
 * @param n 当前堆的有效长度
 * @param i 需要下沉的节点索引
 */
/* 堆的长度为 n ，从节点 i 开始，从顶至底堆化 */
function siftDown(nums: number[], n: number, i: number): void {
  while (true) {
    // 判断节点 i, l, r 中值最大的节点，记为 ma
    let l = 2 * i + 1; // 计算当前节点的左子节点的索引
    let r = 2 * i + 2; // 计算当前节点的右子节点的索引
    let ma = i;
    if (l < n && nums[l] > nums[ma]) {
      // 若左子节点存在且大于当前节点，则更新 ma 为 l
      ma = l;
    }
    if (r < n && nums[r] > nums[ma]) {
      // 若右子节点存在且大于当前节点，则更新 ma 为 r
      ma = r;
    }
    // 若节点 i 最大，则无须继续堆化，跳出
    if (ma === i) {
      break;
    }
    // 交换两节点
    [nums[i], nums[ma]] = [nums[ma], nums[i]];

    // 循环向下堆化
    i = ma;
  }
}

/* 堆排序 */
function heapSort(nums: number[]): void {
  // 建堆操作：堆化除叶节点以外的其他所有节点
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    siftDown(nums, nums.length, i);
  }
  // 从堆中提取最大元素，循环 n-1 轮
  for (let i = nums.length - 1; i > 0; i--) {
    // 交换根节点与最右叶节点（交换首元素与尾元素）
    [nums[0], nums[i]] = [nums[i], nums[0]];
    // 以根节点为起点，从顶至底进行堆化
    siftDown(nums, i, 0);
  }
}

console.log("排序前:", [4, 1, 3, 1, 5, 2]);
