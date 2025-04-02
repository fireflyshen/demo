/*
 * @lc app=leetcode.cn id=2300 lang=typescript
 *
 * [2300] 咒语和药水的成功对数
 */

// @lc code=start
function successfulPairs(spells: number[], potions: number[], success: number): number[] {

    const result: number[] =[];
    const sorted = potions.sort((a, b) => a - b)
    spells.forEach((spell) => {
        const ceil = Math.ceil(success / spell);

        const index = binarySearch(potions, ceil);

        result.push(sorted.length - index);

    })



    // 二分查找函数
    function binarySearch(arr: number[], target: number): number {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }


    return result;

};
// @lc code=end

