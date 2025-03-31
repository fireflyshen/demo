import { Shape } from "./Shape";

export class Rect extends Shape {
    constructor(x: number, y: number, angle: number, opacity: number) {
        super(x, y, angle, opacity);
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.opacity = opacity;

        console.log(this.x, this.y, this.angle, this.opacity);
        
    }

}


