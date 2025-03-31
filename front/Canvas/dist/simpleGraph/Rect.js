import { Shape } from "./Shape";
export class Rect extends Shape {
    constructor(x, y, angle, opacity) {
        super(x, y, angle, opacity);
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.opacity = opacity;
        console.log(this.x, this.y, this.angle, this.opacity);
    }
}
