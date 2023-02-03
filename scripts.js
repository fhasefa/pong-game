
const canvas = document.getElementById("pongGame");
const ctx = canvas.getContext("2d");

var centerX = canvas.width /2;
var centerY = canvas.height /2;

//Ball specs
//adjust dx and dy to get collision variety
var ball = {
    radius: 10,
    x: centerX,
    y: centerY,
    dx: 3,
    dy: 3

};

//drawing ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x,ball.y, ball.radius, 0, Math.PI * 2);
    // ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
};


const paddleWidth = canvas.width - 490;
const paddleHeight = canvas.height - 430;

//Paddel specs
var paddle = {
    x1: canvas.width - paddleWidth,
    x2: 0,
    y1: centerY - (paddleHeight / 2),
    y2: centerY - (paddleHeight / 2),
    dx: 3,
    dy: 3,
    upKey1: false,
    upKey2: false,
    downKey1: false,
    downKey2: false

};


//drawing paddle 1
function drawPaddle1() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle.x1,paddle.y1,paddleWidth, paddleHeight);
};

//drawing paddle 2
function drawPaddle2() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle.x2,paddle.y2,paddleWidth, paddleHeight);
};

document.addEventListener('keydown', downKey)
document.addEventListener('keyup', upKey)

//player1 key names 'ArrowUp' & 'ArrowDown'
//player2 key names 'a' & 'z'
// might be different keys depending on the browser

function downKey(i) {
    if (i.key == 'ArrowUp') {
        paddle.upKey1 = true;
      } else if (i.key == 'ArrowDown') {
        paddle.downKey1 = true;
      }
      if (i.key == 'a') {
        paddle.upKey2 = true;
      } else if (i.key == 'z') {
        paddle.downKey2 = true;
      }
};

function upKey(o) {
    if (o.key == 'ArrowUp') {
        paddle.upKey1 = false;
    } else if (o.key == 'ArrowDown') {
        paddle.downKey1 = false;
    }
    if (o.key == 'a') {
        paddle.upKey2 = false;
    } else if (o.key == 'z') {
        paddle.downKey2 = false;
    }
};

//paddle1 and ball collison 
function collisionP1(b, p) {
    b.top = ball.y - ball.radius;
    b.bottom = ball.y + ball.radius;
    b.left = ball.x - ball.radius;
    b.right = ball.x + ball.radius;

    p.top = paddle.y1; //cause the rec drawing starts from the top
    p.bottom = paddle.y1 + paddleHeight;
    p.left = paddle.x1;
    p.right = paddle.x1 + paddleWidth;

    //if return is true, then there is a collision
    return b.right > p.left && b.left < p.right && b.bottom > p.top &&
    b.top < p.bottom;
}

function collisionP2(b, p) {
    b.top = ball.y - ball.radius;
    b.bottom = ball.y + ball.radius;
    b.left = ball.x - ball.radius;
    b.right = ball.x + ball.radius;

    p.top = paddle.y2; //cause the rec drawing starts from the top
    p.bottom = paddle.y2 + paddleHeight;
    p.left = paddle.x2;
    p.right = paddle.x2 + paddleWidth;

    //if return is true, then there is a collision
    return b.right > p.left && b.left < p.right && b.bottom > p.top &&
    b.top < p.bottom;
}

function play() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall();
    drawPaddle1();
    drawPaddle2();
    //ball movement
    ball.x += ball.dx;
    ball.y  += ball.dy;

    //calling paddle ball collision
    if (collisionP1(ball,play) || collisionP2(ball, play)) {
        ball.dx *= -1;
        // ball.dy *= -1;
    }

    //detecting top and bottom walls
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    // functions to control the paddels
    if (paddle.upKey1 && paddle.y1 > 0 ) {
        paddle.y1 -= 7;
    } else if (paddle.downKey1 && paddle.y1 < canvas.height - paddleHeight) {
        paddle.y1 += 7;
    }

    if (paddle.upKey2 && paddle.y2 > 0 ) {
        paddle.y2 -= 7;
    } else if (paddle.downKey2 && paddle.y2 < canvas.height - paddleHeight) {
        paddle.y2 += 7;
    }

    requestAnimationFrame(play);
};

play()

// function ballAnimation() {
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     drawBall();
//     centerX += dx;
//     requestAnimationFrame(ballAnimation)

//     //Detect side walls
// }

// ballAnimation()