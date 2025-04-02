import { init } from './components/clock'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <canvas id="canvas" width="400" height="400"></canvas>
`
init()




