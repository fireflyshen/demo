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
  let currentValue:XorO = XorO.X;

  xRadio.addEventListener('change', () => {
    // const radio = e.target as HTMLInputElement
    currentValue = XorO.X

  })


  oRadio.addEventListener('change', () => {
    currentValue = XorO.O
  })

  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error('Context not found')



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



  canvas.style.border = "1px solid black"
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
      console.log(clickedGrid);
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



function getElementById<T extends HTMLElement>(id: string): T {
  const element = document.querySelector<T>(id);
  if (!element) throw new Error(`Element with id ${id} not found`);
  return element;
}
