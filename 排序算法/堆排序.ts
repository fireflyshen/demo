
/**
 * 下沉操作，数组建堆
 * @param nums 要排序的数组
 * @param n 当前堆的有效长度
 * @param i 需要下沉的节点索引
 */
function siftDown(nums: number[], n: number, i: number) {
  while (true) {
    // 找到节点的左边的子节点
    let l = 2 * i + 1;
    // 找到节点的右边的子节点
    let r = 2 * i + 2;

    let max = i;

    if (i < n && nums[l] > nums[max]) {
      max = l;
    }

    if (r < n && nums[r] > nums[max]) {
      max = r;
    }

    if (max === i) {
      break;
    }
    
    [nums[i], nums[max]] = [nums[max], nums[i]];
    i = max;
  }
}
