
const canvas = document.getElementById("pongGame");
const ctx = canvas.getContext("2d");

var centerX = canvas.width /2;
var centerY = canvas.height /2;
const winningScore = 3

//Ball specs
//adjust dx and dy to get collision variety
let ball = {
    radius: 10,
    x: centerX,
    y: centerY,
    dx: 4,
    dy: 2,
    speed: 2

};

//drawing ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x,ball.y, ball.radius, 0, Math.PI * 2);
    // ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
};


// const paddleWidth = canvas.width - 490;
// const paddleHeight = canvas.height - 430;

//Paddel1 specs
let paddle1 = {
    x: canvas.width - (canvas.width - 490),
    y: centerY - ((canvas.height - 430) / 2),
    dx: 3,
    dy: 3,
    upKey: false,
    downKey: false,
    width: canvas.width - 490,
    height: canvas.height - 430,
    score: 0
};


//drawing paddle 1
function drawPaddle1() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle1.x,paddle1.y,paddle1.width, paddle1.height);
};

//Paddel2 specs
let paddle2 = {
    x: 0,
    y: centerY - ((canvas.height - 430) / 2),
    dx: 3,
    dy: 3,
    upKey: false,
    downKey: false,
    width: canvas.width - 490,
    height: canvas.height - 430,
    score: 0
};

//drawing paddle 2
function drawPaddle2() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle2.x,paddle2.y,paddle2.width, paddle2.height);
};

//drawing score
function drawText(text,x,y,color) {
    ctx.fillStyle = color;
    ctx.font = '45px arial';
    ctx.fillText(text,x,y);
}; 

document.addEventListener('keydown', downKey)
document.addEventListener('keyup', upKey)

//player1 key names 'ArrowUp' & 'ArrowDown'
//player2 key names 'a' & 'z'
// might be different keys depending on the browser

function downKey(i) {
    if (i.key == 'ArrowUp') {
        paddle1.upKey = true;
      } else if (i.key == 'ArrowDown') {
        paddle1.downKey = true;
      }
      if (i.key == 'a') {
        paddle2.upKey = true;
      } else if (i.key == 'z') {
        paddle2.downKey = true;
      }
};

function upKey(o) {
    if (o.key == 'ArrowUp') {
        paddle1.upKey = false;
    } else if (o.key == 'ArrowDown') {
        paddle1.downKey = false;
    }
    if (o.key == 'a') {
        paddle2.upKey = false;
    } else if (o.key == 'z') {
        paddle2.downKey = false;
    }
};

//paddle and ball collison function for angles
// function collision(b,p) {
//     b.top = b.y - b.radius;
//     b.bottom = b.y + b.radius;
//     b.left = b.x - b.radius;
//     b.right = b.x + b.radius;

//     p.top = p.y; //cause the rec drawing starts from the top
//     p.bottom = p.y + p.height;
//     p.left = p.x;
//     p.right = p.x + p.width;

//     //if return is true, then there is a collision
//     return b.right > p.left && b.left < p.right && b.bottom > p.top &&
//     b.top < p.bottom;
// }

// function collisionP1(b,p) {
//     b.top = ball.y - ball.radius;
//     b.bottom = ball.y + ball.radius;
//     b.left = ball.x - ball.radius;
//     b.right = ball.x + ball.radius;

//     p.top = paddle1.y; //cause the rec drawing starts from the top
//     p.bottom = paddle.y1 + paddleHeight;
//     p.left = paddle1.x;
//     p.right = paddle1.x + paddleWidth;

//     //if return is true, then there is a collision
//     return b.right > p.left && b.left < p.right && b.bottom > p.top &&
//     b.top < p.bottom;
// }

function render() {
    drawBall();
    drawPaddle1();
    drawPaddle2();
    drawText(paddle1.score, 3 * canvas.width/4, canvas.height/5, 'black');
    drawText(paddle2.score, canvas.width/4, canvas.height/5, 'black');
}

function play() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render()
    //ball movement
    ball.x += ball.speed * ball.dx;
    ball.y += ball.speed * ball.dy;

    //detecting top and bottom walls
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    };

    // var for angles
    let player = (ball.x < (canvas.width/2)) ? paddle2 : paddle1;

    //calling paddle ball collision
    if (collision(ball,player)) {
        //ball direction
        ball.dx *= -1;
        // ball.dy *= -1;

        //ball direction with angles?
        // let collisionPoint = ball.y - (player.y + player.height);
        // //collisionPoint = collisionPoint/(player.height/2);
        // let angelRad = collisionPoint * Math.PI/4;
        // let direction = (ball.x > (canvas.width/2)) ? 1 : -1;
        // ball.dx = ball.speed * direction * Math.cos(angelRad);
        // ball.dy = ball.speed * Math.sin(angelRad);

    };

    // functions to control the paddels
    if (paddle1.upKey && paddle1.y > 0 ) {
        paddle1.y -= 7;
    } else if (paddle1.downKey && paddle1.y < canvas.height - paddle1.height) {
        paddle1.y += 7;
    };

    if (paddle2.upKey && paddle2.y > 0 ) {
        paddle2.y -= 7;
    } else if (paddle2.downKey && paddle2.y < canvas.height - paddle2.height) {
        paddle2.y += 7;
    };

    requestAnimationFrame(play);
};


function gameAtPlay() {
    play();


}

gameAtPlay()