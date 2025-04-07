import { graphInit } from "./fractal";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <canvas id="canvas" width="800" height="800"></canvas>
`

graphInit()
