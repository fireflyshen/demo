interface grid {
  x: number;
  y: number;
  width: number;
  height: number;
  row: number;
  col: number;
  state: State;
}

const canvasWidth = 300;
const canvasHeight = 300;
const grids = new Array<grid>()
const winningCombos = generateWinningCombos(3);
const borad = new Array<XorO | null>(9).fill(null);

enum XorO {
  X = "X",
  O = "O"
}

enum State {
  drawed = "drawed",
  empty = "empty",
}


export function init() {
  const canvas = getElementById<HTMLCanvasElement>('#tictactoe')
  const xRadio = getElementById<HTMLInputElement>('#x')
  const oRadio = getElementById<HTMLInputElement>('#o')
  let currentValue: XorO = XorO.X;

  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error('Context not found')

  canvas.style.border = "1px solid black"

  drawBorad(ctx)

  xRadio.addEventListener('change', () => {
    // const radio = e.target as HTMLInputElement
    currentValue = XorO.X

  })

  oRadio.addEventListener('change', () => {
    currentValue = XorO.O
  })


  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect()

    // 计算点击的位置，相对于canvas的位置
    const x = Math.floor(e.clientX - rect.left)
    const y = Math.floor(e.clientY - rect.top)
    const clickedGrid = grids.find(cell =>
      x >= cell.x && x <= cell.x + cell.width && y >= cell.y && y <= cell.y + cell.height
    );

    if (clickedGrid) {
      if (clickedGrid.state === State.drawed) {
        return
      }
      clickedGrid.state = State.drawed
      ctx.fillStyle = "#000"
      ctx.font = "30px Arial"
      ctx.fillText(`${currentValue}`, clickedGrid.x + clickedGrid.width / 2 - 10, clickedGrid.y + clickedGrid.height / 2 + 10)
      const index = clickedGrid.row * 3 + clickedGrid.col;
      borad[index] = currentValue;

      if (!!checkWinning(borad, currentValue)) {
        drawWinningLine(ctx, checkWinning(borad, currentValue)!)
        setTimeout(() => {
          alert(`${currentValue} wins!`)
          resetBoard(ctx)
        }, 0);
        return;
      }

      if (borad.every(cell => cell !== null)) {

        setTimeout(() => {
          alert(`Draw!`)
          resetBoard(ctx)
          return;
        }, 0);

        return;

      }
    }


    if (currentValue === XorO.X) {
      currentValue = XorO.O
      xRadio.checked = false
      oRadio.checked = true
    } else {
      currentValue = XorO.X
      xRadio.checked = true
      oRadio.checked = false
    }

  })

}


function drawBorad(ctx: CanvasRenderingContext2D) {

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const grid: grid = {
        x: row * canvasWidth / 3,
        y: col * canvasHeight / 3,
        width: canvasWidth / 3,
        height: canvasHeight / 3,
        row: row,
        col: col,
        state: State.empty
      }
      grids.push(grid)
    }

  }
  ctx!.canvas.width = canvasWidth
  ctx!.canvas.height = canvasHeight

  ctx.strokeStyle = "#000"
  ctx.beginPath();
  for (let i = 1; i < 3; i++) {
    ctx.moveTo(canvasWidth / 3 * i, 0);
    ctx.lineTo(canvasWidth / 3 * i, canvasHeight);
  }

  for (let i = 1; i < 3; i++) {
    ctx.moveTo(0, canvasHeight / 3 * i);
    ctx.lineTo(canvasWidth, canvasHeight / 3 * i);
  }
  ctx.lineWidth = 1
  ctx.stroke();
  ctx.closePath();

}

function resetBoard(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  grids.forEach(cell => {
    cell.state = State.empty
  })
  borad.fill(null)
  drawBorad(ctx)
}

function getElementById<T extends HTMLElement>(id: string): T {
  const element = document.querySelector<T>(id);
  if (!element) throw new Error(`Element with id ${id} not found`);
  return element;
}


function generateWinningCombos(size: number) {
  const combos = [];

  // 横向胜利组合
  for (let row = 0; row < size; row++) {
    const combo = [];
    for (let col = 0; col < size; col++) {
      combo.push(row * size + col);
    }
    combos.push(combo);
  }

  // 纵向胜利组合
  for (let col = 0; col < size; col++) {
    const combo = [];
    for (let row = 0; row < size; row++) {
      combo.push(row * size + col);
    }
    combos.push(combo);
  }

  // 主对角线
  const mainDiagonal = [];
  for (let i = 0; i < size; i++) {
    mainDiagonal.push(i * (size + 1));
  }
  combos.push(mainDiagonal);

  // 副对角线
  const antiDiagonal = [];
  for (let i = 1; i <= size; i++) {
    antiDiagonal.push(i * (size - 1));
  }
  combos.push(antiDiagonal);

  return combos;
}

function checkWinning(qipan: (XorO | null)[], player: XorO): number[] | null {
  const combo = winningCombos.find(combo =>
    combo.every(index => qipan[index] === player)
  );
  return combo || null;
}

// 画出胜利的线条
function drawWinningLine(ctx: CanvasRenderingContext2D, combo: number[]) {
  const [start, , end] = combo;

  const startX = grids[start].x + grids[start].width / 2;
  const startY = grids[start].y + grids[start].height / 2;
  const endX = grids[end].x + grids[end].width / 2;
  const endY = grids[end].y + grids[end].height / 2;

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.closePath();
}