function bubble_Sort(nums: number[]): void {
  for (let i = nums.length - 1; i > 0; i--) {
    // 优化
    let flag = false;
    for (let j = 0; j < i; j++) {
      // 如果前面的大于后面的
      if (nums[j] > nums[j + 1]) {
        // 交换元素
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        flag = true;
      }
      if (!flag) break;
    }
  }
}


bubbleSort([4,1,3,1,5,2])