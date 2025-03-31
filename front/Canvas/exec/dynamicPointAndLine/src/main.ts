import { CustomAnimation } from ".";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <canvas id="canvas"></canvas>
`

const htmlCanvas = document.getElementById("canvas") as HTMLCanvasElement;
// 启动动画
const animation = new CustomAnimation(htmlCanvas, 20);
animation.start();