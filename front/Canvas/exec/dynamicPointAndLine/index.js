"use strict";
class Point {
    constructor(x, y, ed = 600) {
        this.x = x;
        this.y = y;
        this.ed = ed;
        // 随机速度，确保每个点的速度不同
        this.dx = (Math.random() - 0.5) * 4; // -2 到 2 之间的随机值
        this.dy = (Math.random() - 0.5) * 4; // -2 到 2 之间的随机值
    }
    // 更新点的位置
    updatePosition(canvasWidth, canvasHeight) {
        this.x += this.dx;
        this.y += this.dy;
        // 当点到达边界时反弹
        if (this.x <= 0 || this.x >= canvasWidth)
            this.dx = -this.dx;
        if (this.y <= 0 || this.y >= canvasHeight)
            this.dy = -this.dy;
    }
}
// 计算透明度函数
function calculateOpacity(distance, maxDistance) {
    return Math.max(0, 1 - distance / maxDistance);
}
// 封装动画逻辑
class CustomAnimation {
    constructor(canvas, pointCount = 20) {
        this.points = [];
        this.animationId = null;
        this.animate = () => {
            console.log("start");
            this.draw();
            if (this.animationId === 1000) {
                cancelAnimationFrame(this.animationId);
                this.animationId = null;
            }
            this.animationId = requestAnimationFrame(this.animate);
            console.log("end");
        };
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        // 生成随机点
        for (let i = 0; i < pointCount; i++) {
            this.points.push(new Point(Math.random() * this.canvas.width, Math.random() * this.canvas.height));
        }
    }
    draw() {
        // 清空画布
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // 更新点的位置并绘制
        for (const point of this.points) {
            point.updatePosition(this.canvas.width, this.canvas.height);
            this.context.beginPath();
            this.context.arc(point.x, point.y, 2, 0, Math.PI * 2, false);
            this.context.fillStyle = "black";
            this.context.fill();
            this.context.closePath();
        }
        // 绘制连线
        for (let i = 0; i < this.points.length; i++) {
            for (let j = i + 1; j < this.points.length; j++) {
                const distance = Math.sqrt(Math.pow(this.points[i].x - this.points[j].x, 2) +
                    Math.pow(this.points[i].y - this.points[j].y, 2));
                this.context.beginPath();
                this.context.moveTo(this.points[i].x, this.points[i].y);
                this.context.lineTo(this.points[j].x, this.points[j].y);
                this.context.strokeStyle = `rgba(0,0,0,${calculateOpacity(distance, this.points[i].ed)})`;
                this.context.stroke();
                this.context.closePath();
            }
        }
    }
    // 启动动画
    start() {
        if (!this.animationId) {
            this.animate();
        }
    }
    // 停止动画
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}
const htmlCanvas = document.getElementById("canvas");
// 启动动画
const animation = new CustomAnimation(htmlCanvas, 20);
animation.start();
