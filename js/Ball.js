const DEFAULT_BALL_POSITION_X = 100;
const DEFAULT_BALL_POSITION_y = 100;
const DEFAULT_BALL_RADIUS = 30;
const DEFAULT_BALL_SPEED_X = 5;
const DEFAULT_BALL_SPEED_y = 5;

export default class Ball {
    stopFlag = false;

    constructor() {
        this.x = DEFAULT_BALL_POSITION_X;
        this.y = DEFAULT_BALL_POSITION_y;
        this.radius = DEFAULT_BALL_RADIUS;
        this.speedX = DEFAULT_BALL_SPEED_X
        this.speedY = DEFAULT_BALL_SPEED_y
    }

    move() {
        this.y += this.speedY;
        this.x += this.speedX;
    }

    moveCollision() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }
        if (this.y + this.radius > paddle.y + paddle.height) {
            this.stopFlag = true;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill()
    }

    revertX() {
        this.speedX = -this.speedX;
    }

    revertY() {
        this.speedY = -this.speedY;
    }
}