export function init() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas.getContext('2d');

  if (context) {
    // 获取设备像素比
    const ratio =  1;

    // 逻辑尺寸（CSS 尺寸）
    const width = 400;
    const height = 400;

    // 物理尺寸（乘以像素比）ej
    canvas.width = width * ratio;
    canvas.height = height * ratio;

    // CSS 尺寸保持不变
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // 缩放上下文以匹配像素比
    context.scale(ratio, ratio);

    // 清除画布
    context.clearRect(0, 0, width, height);

    // 设置样式
    context.fillStyle = 'black';
    context.strokeStyle = 'white';
    context.lineWidth = 5;

    // 绘制一个圆
    context.beginPath();
    context.arc(width / 2, height / 2, 50, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
  }
}
