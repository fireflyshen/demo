export class Shape {
    public x: number;
    public y: number;
    public angle: number;
    public opacity: number;


    constructor(x: number, y: number, angle: number, opacity: number) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.opacity = opacity;
    }



    get X(): number {
        console.log("执行了getX方法");
        
        return this.x;
    }

    get Y(): number {
        return this.y;
    }

    get Angle(): number {
        return this.angle;
    }

    get Opacity(): number {
        return this.opacity;
    }


}

