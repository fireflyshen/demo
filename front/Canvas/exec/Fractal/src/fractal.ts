export function graphInit() {
  const canvas = getElementById<HTMLCanvasElement>("#canvas")

  canvas.style.background = "black";

  const ctx = canvas.getContext("2d")



  ctx!.strokeStyle = "white";
  ctx!.lineWidth = 3
  ctx?.beginPath()
  drawhexagon(ctx!, 0, 50, 50, 50, 0, 6);



}


function getElementById<T extends HTMLElement>(id: string): T {
  const canvas = document.querySelector<T>(id)
  if (!canvas) throw new Error(`no element with id ${id} found`);
  return canvas;
}


/**
 * @description 绘制六角形
 */
function drawhexagon(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, n: number, m: number) {

  context.clearRect(0, 0, 800, 800)

  context.moveTo(x2, y2)
  // 以（x2,y2）做(x1,y1,x2,y2)延长线，延长线逆时针旋转60°
  const x3 = x2 + (x2 - x1) * Math.cos(Math.PI / 3) + (y2 - y1) * Math.sin(Math.PI / 3);
  const y3 = y2 - (x2 - x1) * Math.sin(Math.PI / 3) + (y2 - y1) * Math.cos(Math.PI / 3);
  context.lineTo(x3, y3);
  // 以（x3,y3）做(x2,y2,x3,y3)延长线，延长线顺时针旋转120°
  const x4 = x3 + (x3 - x2) * Math.cos((Math.PI * 2) / 3) - (y3 - y2) * Math.sin((Math.PI * 2) / 3);
  const y4 = y3 + (y3 - y2) * Math.cos((Math.PI * 2) / 3) + (x3 - x2) * Math.sin((Math.PI * 2) / 3);
  context.lineTo(x4, y4);
  context.stroke()
  n++;

  if (m === n) return;
  // 如果不满6次，递归接着画
  else drawhexagon(context, x3, y3, x4, y4, n, m)

}

