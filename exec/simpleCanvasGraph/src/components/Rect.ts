import { Shape } from './Shape';

export class Rect extends Shape {
    constructor(x: number, y: number, angle: number, opacity: number, width: number = 0, height: number = 0) {
        super(x, y, angle, opacity);
        this.endX = x + width;
        this.endY = y + height;
        console.log(this.x, "执行了Rect");
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.fillColor;
        context.fillRect(this.X, this.Y, this.Width, this.Height);
    }
}
