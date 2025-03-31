import { Rect } from "./Rect";
function init() {
    const canvas = document.getElementById("graph");
    const context = canvas?.getContext("2d");
    if (!context)
        return;
    context.canvas.width = 800;
    context.canvas.height = 600;
    canvas.style.backgroundColor = "#000000";
    canvas.onmousedown = (event) => {
        console.log("点击了画布O", event.offsetX, event.offsetY);
        console.log("点击了画布C", event.clientX, event.clientY);
        new Rect(0, 0, 0, 0);
    };
}
init();
