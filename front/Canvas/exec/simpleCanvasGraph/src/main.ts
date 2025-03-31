import { init } from "./script/index.ts";

window.addEventListener('DOMContentLoaded', () => {

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
    <input type="color" id="color" />
    <canvas id="graph"></canvas>`
    init();
})


