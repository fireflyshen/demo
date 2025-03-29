function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // 比较并合并两个数组
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // 如果有剩余的元素，直接添加
    return result.concat(left.slice(i), right.slice(j));
}

/**
 * 
 * @param {Array} arr 
 */
function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0,mid);

    let right = arr.slice(mid);

    let leftArr = mergeSort(left)
    let rightArr = mergeSort(right)
    return merge(leftArr,rightArr)

}

const arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr)  // 输出: [3, 9, 10, 27, 38, 43, 82]