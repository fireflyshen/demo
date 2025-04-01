/***********************************************************************
 * @fileoverview 位运算实现位向量
 * @author firefly
 * @date 2025-04-01
 * @version 1.0.0
 * @license MIT
 ***********************************************************************/

let bitmap: Uint8Array = new Uint8Array(1);

/**
 * @description 设置对应的位数为1
 * @param n 要操作的位数（第几位）
 */
function setBit(n: number) {
  bitmap[n / 8] |= 1 << n % 8;
}

/**
 * @description 清空对应的位数，设置对应的位数为0
 * @param n 要操作的位数
 */
function clearBit(n: number) {
  bitmap[n / 8] &= ~(1 << n % 8);
}

/**
 * @description 测试当前为是否为1
 * @param n 要操作的位数
 */
function testBit(n: number) {
  bitmap[n / 8] & (1 << n % 8);
}


/**
 * @description 翻转对应的位数
 * @param n 要操作的位数
 */
function reverseBit(n: number) {
  bitmap[n / 8] ^= 1 << n % 8;
}
