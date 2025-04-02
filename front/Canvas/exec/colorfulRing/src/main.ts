import { init } from "./components/Colorful"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <canvas id="colorful"></canvas>
`

init()