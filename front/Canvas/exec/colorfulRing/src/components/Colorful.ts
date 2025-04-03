export function init() {
  const canvas = getElementById<HTMLCanvasElement>('#colorful');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Context not found');
  }

  ctx.canvas.width = 400;
  ctx.canvas.height = 400;
  ctx.canvas.style.backgroundColor = 'white';

  let angle = 0;


  function animate() {
    ctx!.clearRect(0, 0, ctx!.canvas.width, ctx!.canvas.height);
    ctx!.save();
    ctx!.translate(200, 200);
    ctx!.rotate(angle);

    drawRainbowRing(ctx!, 150);

    ctx!.restore();
    angle += 0.01;  // 控制旋转速度

    requestAnimationFrame(animate);
  }


  animate();
}

function drawRainbowRing(ctx: CanvasRenderingContext2D, radius: number) {
  // 创建圆周渐变
  const gradient = ctx.createConicGradient(0, 0, 0);
  for (let i = 0; i <= 1; i += 0.02) {
    const hue = i * 360;  // 色相从 0 到 360
    gradient.addColorStop(i, `hsl(${hue}, 100%, 50%)`);
  }



  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.lineWidth = 20;
  ctx.strokeStyle = gradient;  // 使用圆周渐变
  ctx.stroke();
}



function getElementById<T extends HTMLElement>(id: string): T {
  if (id === null || id[0] !== '#' || id.length < 2) {
    throw new Error('id is invalid');
  }

  const element = document.querySelector<T>(id);
  if (!element) {
    throw new Error('Element not found');
  }
  return element;
}


