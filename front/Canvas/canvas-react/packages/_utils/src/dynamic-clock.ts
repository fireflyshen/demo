

export const drawDial = (ctx: CanvasRenderingContext2D) => {
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 90, 0, Math.PI * 2);
  ctx.fillStyle = '#f0f0f0';
  ctx.fill();
  ctx.restore();
}


export const drawCenter = (ctx: CanvasRenderingContext2D) => {
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 2, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.restore();
}

export const drawMark = (ctx: CanvasRenderingContext2D, radius: number = 100) => {
  ctx.save(); // 全局 save 一次，确保坐标系中心在 (0,0)
  // ctx.translate(300, 100); // 将坐标系原点移动到画布中心
  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    const isHourTick = i % 5 === 0;
    const tickLength = isHourTick ? 10 : 5;
    const tickWidth = isHourTick ? 3 : 1;
    const tickColor = isHourTick ? "black" : "gray";

    ctx.lineWidth = tickWidth;
    ctx.strokeStyle = tickColor;

    // 绘制刻度线
    ctx.moveTo(0, -radius);
    ctx.lineTo(0, -radius + tickLength);
    ctx.stroke();

    ctx.rotate((Math.PI * 2) / 60);  // 每次旋转6度
  }
  ctx.restore(); // 全局 restore

  drawNumber(ctx);
};



export const drawNumber = (ctx: CanvasRenderingContext2D) => {
  ctx.save();
  for (let i = 1; i <= 12; i++) {
    const angle = (Math.PI * 2 * i) / 12 - Math.PI / 2;
    const numX = Math.cos(angle) * 70;
    const numY = Math.sin(angle) * 70;
    ctx.font = "bold 16px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(i.toString(), numX, numY);
  }
  ctx.restore();

}


export const drawSecondHand = (ctx: CanvasRenderingContext2D, seconds: number, milliseconds: number) => {
  const angle = (Math.PI * 2 * (seconds + milliseconds / 1000)) / 60;
  ctx.save();
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 10);
  ctx.lineTo(0, -60);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

export const drawMinuteHand = (ctx: CanvasRenderingContext2D, minute: number, seconds: number) => {
  const angle = (Math.PI * 2 * (minute + seconds / 60)) / 60;
  ctx.save();
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 5);
  ctx.lineTo(0, -50);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath()
  ctx.restore();
}


export const drawHourHand = (ctx: CanvasRenderingContext2D, hours: number, minutes: number) => {
  const angle = (Math.PI * 2 * ((hours % 12) + minutes / 60)) / 12;
  ctx.save();
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 5);
  ctx.lineTo(0, -40);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}
