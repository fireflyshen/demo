import { CustomAnimation } from ".";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <canvas id="canvas"></canvas>
`

const htmlCanvas = document.querySelector<HTMLCanvasElement>("#canvas") ;
// 启动动画
if (htmlCanvas) {
  const animation = new CustomAnimation(htmlCanvas, 20);
  animation.start();
} else {
  console.error("未找到 canvas 元素");
}
