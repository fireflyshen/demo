export class Shape {
    public x: number;
    public y: number;
    public angle: number;
    public opacity: number;
    public endX: number;
    public endY: number;
    public fillColor: string;

    constructor(x: number, y: number, angle: number, opacity: number, endX: number = 0, endY: number = 0, fillColor: string = "skyblue") {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.opacity = opacity;
        this.endX = endX;
        this.endY = endY;
        this.fillColor = fillColor;
    }

    set EndX(x: number) {
        this.endX = x;
    }

    set EndY(y: number) {
        this.endY = y;
    }

    get X(): number {
        return this.x;
    }

    get Y(): number {
        return this.y;
    }

    get Width(): number {
        return Math.abs(this.endX - this.x);
    }

    get Height(): number {
        return Math.abs(this.endY - this.y);
    }
}
