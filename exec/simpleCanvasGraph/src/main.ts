/***********************************************************************
 * @fileoverview 简单画布图形绘制(入口文件)
 * @author firefly
 * @date 2025-04-01
 * @version 1.0.0
 * @license MIT
 ***********************************************************************/

import { init } from "./script/index.ts";

window.addEventListener('DOMContentLoaded', () => {

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
    <input type="color" id="color" />
    <canvas id="graph"></canvas>`
    init();
})


