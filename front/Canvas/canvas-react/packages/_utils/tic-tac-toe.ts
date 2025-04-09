export const drawBoard = (ctx: CanvasRenderingContext2D, size: number) => {
  const startX = (ctx.canvas.width - size) / 2;
  const startY = (ctx.canvas.height - size) / 2;

  // 保存当前状态
  ctx.save();
  ctx.translate(startX, startY);

  ctx.beginPath();
  ctx.rect(0, 0, size, size); // 画外边框

  const cellSize = size / 3;

  // 画垂直线
  for (let i = 1; i < 3; i++) {
    const x = cellSize * i;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
  }

  // 画水平线
  for (let i = 1; i < 3; i++) {
    const y = cellSize * i;
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
  }

  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000';
  ctx.stroke();

  // 恢复坐标系统
  ctx.restore();
};
