export function genColorfulRing(ctx: CanvasRenderingContext2D): CanvasGradient {
  // 使用当前变换后的坐标系的原点
  const gradient = ctx.createConicGradient(0, 0, 0);

  for (let i = 0; i <= 1; i += 0.01) {
    const hue = i * 360;
    gradient.addColorStop(i, `hsl(${hue}, 100%, 50%)`);
  }

  return gradient;
}
