
const canvas = document.getElementById("pongGame");
const ctx = canvas.getContext("2d");

var centerX = canvas.width /2;
var centerY = canvas.height /2;
const ballRadius = 10;
var dx = 3;
var dy = 3;
//adjust dx and dy to get collision variety
// const ball = {
//     x: centerX,
//     y: centerY,
//     dx: 3,
//     dy: 3
// };

//drawing ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(centerX,centerY, 10, 0, Math.PI * 2);
    // ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
}

const paddleWidth = canvas.width - 490;
const paddleHeight = canvas.height - 430;
const paddle1X = canvas.width - paddleWidth;
var paddle1Y = centerY - (paddleHeight / 2);
var upPaddle1 = false;
var downPaddle1 = false;


//drawing paddle 1
function drawPaddle1() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle1X,paddle1Y,paddleWidth, paddleHeight);
}

const paddle2X = 0;
var paddle2Y = paddle1Y;
var upPaddle2 = false;
var downPaddle2 = false;

//drawing paddle 2
function drawPaddle2() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle2X,paddle2Y,paddleWidth, paddleHeight);
}

document.addEventListener('keydown', downKey)
document.addEventListener('keyup', upKey)

//player1 key names 'ArrowUp' & 'ArrowDown'
//player2 key names 'a' & 'z'
// might be different keys depending on the browser

function downKey(i) {
    if (i.key == 'ArrowUp') {
        upPaddle1 = true;
      } else if (i.key == 'ArrowDown') {
        downPaddle1 = true;
      }
      if (i.key == 'a') {
        upPaddle2 = true;
      } else if (i.key == 'z') {
        downPaddle2 = true;
      }
}

function upKey(o) {
    if (o.key == 'ArrowUp') {
        upPaddle1 = false;
    } else if (o.key == 'ArrowDown') {
        downPaddle1 = false;
    }
    if (o.key == 'a') {
        upPaddle2 = false;
    } else if (o.key == 'z') {
        downPaddle2 = false;
    }
}

function play() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
    drawPaddle1();
    drawPaddle2();
// functions to control the paddels
    if (upPaddle1 && paddle1Y > 0 ) {
        paddle1Y -= 7;
    } else if (downPaddle1 && paddle1Y < canvas.height - paddleHeight) {
        paddle1Y += 7;
    }

    if (upPaddle2 && paddle2Y > 0 ) {
        paddle2Y -= 7;
    } else if (downPaddle2 && paddle2Y < canvas.height - paddleHeight) {
        paddle2Y += 7;
    }

    requestAnimationFrame(play);
}

play()

// function ballAnimation() {
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     drawBall();
//     centerX += dx;
//     requestAnimationFrame(ballAnimation)

//     //Detect side walls
// }

// ballAnimation()