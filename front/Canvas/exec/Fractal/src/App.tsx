import { useEffect, useRef } from "react";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.canvas.style.background = "black";
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;
      ctx.clearRect(0, 0, 500, 500); // 只清空一次
      ctx.beginPath();

      // 初始线段
      // ctx.moveTo(100, 100);
      // ctx.lineTo(100, 100);
      // ctx.stroke();

      // 递归绘制分形
      drawFractal(ctx, 200, 200, 200, 250, 0, 1);
    }
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="fractal" width="500" height="500"></canvas>
    </>
  );
}

function drawFractal(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  n: number,
  m: number
) {
  if (n >= m) return;

  // 顺时针 60度
  const theta1 = -Math.PI / 3;
  const x3 = x2 + (x2 - x1) * Math.cos(theta1) - (y2 - y1) * Math.sin(theta1);
  const y3 = y2 + (x2 - x1) * Math.sin(theta1) + (y2 - y1) * Math.cos(theta1);

  console.log(x3, y3);


  ctx.moveTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.stroke();

  // 逆时针 120度
  const theta2 = (Math.PI * 2) / 3;
  const x4 = x3 + (x3 - x2) * Math.cos(theta2) - (y3 - y2) * Math.sin(theta2);
  const y4 = y3 + (x3 - x2) * Math.sin(theta2) + (y3 - y2) * Math.cos(theta2);

  ctx.moveTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.stroke();

  // 递归调用
  drawFractal(ctx, x3, y3, x4, y4, n + 1, m);
}

export default App;