const DEFAULT_PADDLE_POSITION_X = 100;
const DEFAULT_PADDLE_POSITION_y = 600;
const DEFAULT_PADDLE_WIDTH = 200;
const DEFAULT_PADDLE_HEIGHT = 40;
const DEFAULT_PADDLE_SPEED = 25;
const ORIENTATION_LEFT = "Left";
const ORIENTATION_RIGHT = "Right";

export default class Paddle {
    isMoveRight = false;
    isMoveLeft = false;

    constructor() {
        this.x = DEFAULT_PADDLE_POSITION_X;
        this.y = DEFAULT_PADDLE_POSITION_y;
        this.width = DEFAULT_PADDLE_WIDTH;
        this.height = DEFAULT_PADDLE_HEIGHT;
        this.speed = DEFAULT_PADDLE_SPEED;

    }

    drawPaddle() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#1B5E20";
        ctx.fill();
        ctx.closePath();
    }

    changeDirectionKeyUp(keyDirection) {
        switch (keyDirection){
            case ORIENTATION_LEFT:
                this.isMoveLeft = false;
                break;
            case ORIENTATION_RIGHT:
                this.isMoveRight = false;
                break;
        }

    }

    changeDirectionKeyDown(keyDirection) {
        switch (keyDirection){
            case ORIENTATION_LEFT:
                this.isMoveLeft = true;
                break;
            case ORIENTATION_RIGHT:
                this.isMoveRight = true;
                break;
        }

    }
}