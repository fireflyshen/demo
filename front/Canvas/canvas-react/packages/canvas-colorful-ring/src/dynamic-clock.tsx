import {
  drawCenter,
  drawDial,
  drawHourHand,
  drawMark,
  drawMinuteHand,
  drawSecondHand,
} from "@canvas/utils";

export function dynamicClock(context: CanvasRenderingContext2D | null) {
  if (!context) throw new Error("Canvas context not found");
  context.beginPath();
  context.translate(400, 400);
  drawDial(context);
  drawCenter(context);
  drawHourHand(context, 12, 0);
  drawMinuteHand(context, 0, 0);
  drawSecondHand(context, 0, 0);
  drawMark(context);
  // context.stroke();

  const updateClock = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.save();
    ctx.beginPath();
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    // 仅绘制指针
    drawDial(context);
    drawCenter(context);
    drawHourHand(ctx, hours, minutes);
    drawMinuteHand(ctx, minutes, seconds);
    drawSecondHand(ctx, seconds, milliseconds);
    drawMark(context);
    // ctx.restore();
    requestAnimationFrame(() => updateClock(ctx));
  };
  updateClock(context);
}
