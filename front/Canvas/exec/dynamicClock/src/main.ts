
import { init } from "./components/ClockCanvas";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */`
<style>
  #clock {
    position: absolute;
  }
</style>
<canvas id="clock" width="200" height="200"></canvas>
<canvas id="dial" width="200" height="200"></canvas>
`

init()
