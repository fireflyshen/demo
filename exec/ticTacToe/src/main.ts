import { init } from "./components/tictac"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
<div id="app">
  <div class="game-container">
    <div class="controls">
      <input type="radio" id="x" name="xoro" value="X"/>
      <input type="radio" id="o" name="xoro" value="O"/>
    </div>
    <canvas id="tictactoe"></canvas>
  </div>
</div>
`

init()
