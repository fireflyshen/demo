/***********************************************************************
 * @fileoverview 简单画布图形绘制
 * @author firefly
 * @date 2025-04-01
 * @version 1.0.0
 * @license MIT
 ***********************************************************************/


import { Rect } from "../components/Rect";
import { Shape } from "../components/Shape";

const shapes: Shape[] = [];

/**
 * @description 初始化画布
 * @return void
 */
export function init() {
    const canvas = document.querySelector<HTMLCanvasElement>("#graph");
    const color = document.querySelector<HTMLInputElement>("#color");

    let currentColor: string | null = null;

    if (color) {
        color.onchange = (event) => {
            if (event.target) {
                currentColor = (event.target as HTMLInputElement).value;
            }
        }
    }


    if (canvas) {
        canvas.style.backgroundColor = "#000000";
        const context = canvas.getContext("2d");
        if (context) {
            context.canvas.width = 800;
            context.canvas.height = 600;
        }

        let currentRect: Rect | null = null;

        canvas.addEventListener("mousedown", (event) => {
            const startX = event.offsetX;
            const startY = event.offsetY;

            currentRect = new Rect(startX, startY, 0, 1);
            currentRect.fillColor = currentColor || "skyblue";

            const onMouseMove = (event: MouseEvent) => {
                if (currentRect) {
                    // 这里矩形左上角坐标要动态的进行计算
                    const { x, y, endX, endY } = calculateRect(event, startX, startY);
                    currentRect.x = x;
                    currentRect.y = y;
                    currentRect.endX = endX;
                    currentRect.endY = endY;

                    if (context) {
                        // 清除画布并重绘所有形状
                        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                        shapes.forEach(shape => (shape as Rect).draw(context));
                        currentRect.draw(context);
                    }
                }
            };

            const onMouseUp = () => {
                if (currentRect) {
                    shapes.push(currentRect);
                    currentRect = null;
                }
                canvas.removeEventListener("mousemove", onMouseMove);
                canvas.removeEventListener("mouseup", onMouseUp);
            };

            canvas.addEventListener("mousemove", onMouseMove);
            canvas.addEventListener("mouseup", onMouseUp);
        });
    }
}


/**
 * @description 计算矩形信息
 * @param event 鼠标事件
 * @param startX 起始X坐标
 * @param startY 起始Y坐标
 * @returns 计算后的矩形信息
 */
function calculateRect(event: MouseEvent, startX: number, startY: number) {
    const endX = event.offsetX;
    const endY = event.offsetY;

    const minX = Math.min(startX, endX);
    const minY = Math.min(startY, endY);
    const maxX = Math.max(startX, endX);
    const maxY = Math.max(startY, endY);

    return {
        x: minX,
        y: minY,
        endX: maxX,
        endY: maxY,
        width: maxX - minX,
        height: maxY - minY,
    };
}
