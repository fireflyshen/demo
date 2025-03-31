export class Shape {
    x;
    y;
    angle;
    opacity;
    constructor(x, y, angle, opacity) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.opacity = opacity;
    }
    get X() {
        console.log("执行了getX方法");
        return this.x;
    }
    get Y() {
        return this.y;
    }
    get Angle() {
        return this.angle;
    }
    get Opacity() {
        return this.opacity;
    }
}
