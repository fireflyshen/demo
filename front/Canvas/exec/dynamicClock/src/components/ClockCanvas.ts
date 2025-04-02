

export function init() {
  const dial = document.querySelector<HTMLCanvasElement>('#dial');
  const clock = document.querySelector<HTMLCanvasElement>('#clock');
  if (!dial) throw new Error('Canvas not found');

  dial.style.backgroundColor = 'black';
  dial.style.borderRadius = '35px';

  const ctx = dial.getContext("2d");
  const clockCtx = clock?.getContext("2d");
  if (!ctx) throw new Error('Context not found');

  ctx.canvas.width = 200;
  ctx.canvas.height = 200;

  drawDial(ctx);
  drawCenter(ctx);



  drawMark(ctx);

  if (clockCtx) {
    animateClock(clockCtx);
  } else {
    throw new Error('Clock context not found');
  }
}

function animateClock(ctx: CanvasRenderingContext2D) {


  //   function updateClock() {
  //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //     const date = new Date();
  //     const hours = date.getHours();
  //     const minutes = date.getMinutes();
  //     const seconds = date.getSeconds();

  //     // 仅绘制指针
  //     drawHourHand(ctx, hours, minutes);
  //     drawMinuteHand(ctx, minutes, seconds);
  //     drawSecondHand(ctx, seconds);

  //     requestAnimationFrame(updateClock);
  //   }

  function updateClock() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();  // 获取毫秒

    // 仅绘制指针
    drawHourHand(ctx, hours, minutes);
    drawMinuteHand(ctx, minutes, seconds);
    drawSecondHand(ctx, seconds, milliseconds);  // 传递毫秒

    requestAnimationFrame(updateClock);
  }

  updateClock();
}






// 绘制表盘
function drawDial(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(100, 100, 90, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.restore();
}

// 绘制中心点
function drawCenter(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(100, 100, 2, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}
// 绘制刻度和数字
function drawMark(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.translate(100, 100);

  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    const isHourTick = i % 5 === 0;
    const tickLength = isHourTick ? 10 : 5;
    const tickWidth = isHourTick ? 3 : 1;
    const tickColor = isHourTick ? "black" : "gray";

    ctx.lineWidth = tickWidth;
    ctx.strokeStyle = tickColor;

    // 绘制刻度线
    ctx.moveTo(0, -90);
    ctx.lineTo(0, -90 + tickLength);
    ctx.stroke();

    ctx.rotate((Math.PI * 2) / 60);  // 每次旋转6度
  }

  ctx.restore();

  // 绘制数字
  ctx.save();
  ctx.translate(100, 100);
  for (let i = 1; i <= 12; i++) {
    const angle = (Math.PI * 2 * i) / 12 - Math.PI / 2;
    const numX = Math.cos(angle) * 70;
    const numY = Math.sin(angle) * 70;

    ctx.font = "13px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(i.toString(), numX, numY);
  }

  ctx.restore();
}

// 绘制秒针
// function drawSecondHand(ctx: CanvasRenderingContext2D, seconds: number) {
//   const angle = (Math.PI * 2 * seconds) / 60;
//   ctx.save();
//   ctx.translate(100, 100);
//   ctx.rotate(angle);
//   ctx.beginPath();
//   // 往下挪一点
//   ctx.moveTo(0, 10);
//   ctx.lineTo(0, -60);
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = "red";
//   ctx.stroke();
//   ctx.closePath();
//   ctx.restore();
// }

function drawSecondHand(ctx: CanvasRenderingContext2D, seconds: number, milliseconds: number) {
  // 计算平滑秒针角度
  const angle = (Math.PI * 2 * (seconds + milliseconds / 1000)) / 60;
  ctx.save();
  ctx.translate(100, 100);
  ctx.rotate(angle);
  ctx.beginPath();
  // 往下挪一点
  ctx.moveTo(0, 10);
  ctx.lineTo(0, -60);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

// 绘制分针
function drawMinuteHand(ctx: CanvasRenderingContext2D, minutes: number, seconds: number) {
  const angle = (Math.PI * 2 * (minutes + seconds / 60)) / 60;
  ctx.save();
  ctx.translate(100, 100);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 5);
  ctx.lineTo(0, -50);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

// 绘制时针
function drawHourHand(ctx: CanvasRenderingContext2D, hours: number, minutes: number) {
  const angle = (Math.PI * 2 * ((hours % 12) + minutes / 60)) / 12;
  ctx.save();
  ctx.translate(100, 100);
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


