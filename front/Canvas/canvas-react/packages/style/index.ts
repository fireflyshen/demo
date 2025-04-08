export function initCanvasStyle(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  width: number = 800,
  height: number = 800,
  backgroundColor: string = '#fff'
) {

  // 设置canvas显示尺寸
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  // 适配高DPI设备
  context.canvas.width = width * window.devicePixelRatio;
  context.canvas.height = height * window.devicePixelRatio;

  // 缩放context以适配高DPI设备
  context.scale(devicePixelRatio, devicePixelRatio);

  // 平滑设置
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';

  // 设置线条的圆角和平滑度
  context.lineCap = 'round';
  context.lineJoin = 'round';

  // 设置canvas背景颜色
  context.canvas.style.backgroundColor = backgroundColor;

  // 如果绘制时有线宽，需要考虑devicePixelRatio进行缩放
  context.lineWidth = 7 / devicePixelRatio;  // 根据你的需求调整线宽
}
