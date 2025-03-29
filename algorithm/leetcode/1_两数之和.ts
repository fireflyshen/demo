/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (map.has(complement)) {
            return [...map.get(complement)!, i];
        }
        if (!map.has(num)) {
            map.set(num, []);
        }
        map.get(num)?.push(i);
    }
    return [];
};
// @lc code=end

