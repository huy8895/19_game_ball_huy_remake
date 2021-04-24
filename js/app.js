import Ball from "./ball.js";
import Paddle from "./paddle.js";
import gameOver from "./gameOver.js";

window.ball = new Ball();
window.paddle = new Paddle();

window.canvas = document.getElementById('canvas');
window.ctx = canvas.getContext('2d');
canvas.width = 810;
canvas.height = 640;

let stopId;
let score = 0;

document.getElementById("start_button").addEventListener('click', play);
window.start = function () {
    document.getElementById('Score').innerText = score.toString();
    if (ball.stopFlag === true) {
        cancelAnimationFrame(stopId);
        gameOver()
    } else {
        stopId = requestAnimationFrame(start);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.drawPaddle();
    ball.move();
    ball.moveCollision();
    checkBallAndPaddle();
}

function play() {
    requestAnimationFrame(start)
    document.getElementById('start_button').style.display = 'none';
}

window.addEventListener('keydown', ((evt) => {
    const keyDirection = evt.key.replace('Arrow', '');
    paddle.changeDirectionKeyDown(keyDirection);
}))

window.addEventListener('keyup', ((evt) => {
    const keyDirection = evt.key.replace('Arrow', '');
    paddle.changeDirectionKeyUp(keyDirection);
}))


function checkBallAndPaddle() {
    checkPositionPaddle()
    // move paddle
    if (paddle.isMoveLeft === true && paddle.x > 0) {
        paddle.x -= paddle.speed;
    }
    if (paddle.isMoveRight === true && paddle.x + paddle.width < canvas.width) {
        paddle.x += paddle.speed
    }

    // ball quay dau
    const ballRX = ball.x + ball.radius;
    const ballRY = ball.y + ball.radius;

    if (ballRY >= paddle.y
        && ball.x - ball.radius <= (paddle.x + paddle.width)
        && ballRX >= paddle.x) {
        if (paddle.isMoveLeft === true && ball.speedX > 0) {
            ball.revertX()
        }
        if (paddle.isMoveRight === true && ball.speedX < 0) {
            ball.revertX()
        }
        if (ball.speedY > 0) {
            ball.revertY()
        }
        score++;
        ball.speedUp();
    }

}

function checkPositionPaddle() {
    if (paddle.x < 0) {
        return paddle.x = 0;
    }
    if (paddle.x + paddle.width > canvas.width) {
        return paddle.x = canvas.width - paddle.width;
    }
}

