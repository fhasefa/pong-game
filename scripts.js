
var canvas = document.getElementById("pongGame");
var ctx = canvas.getContext("2d");

var centerX = canvas.width /2;
var centerY = canvas.height /2;

//drawing ball
ctx.beginPath();
ctx.arc(centerX,centerY, 10, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

var paddleWidth = canvas.width - 490;
var paddleHeight = canvas.height - 430;
var paddle1X = canvas.width - paddleWidth;
var paddle1Y = centerY - (paddleHeight / 2);

//drawing paddle 1
ctx.fillStyle = 'blue';
ctx.fillRect(paddle1X,paddle1Y,paddleWidth, paddleHeight);

var paddle2X = 0;
var paddle2Y = paddle1Y;

//drawing paddle 2
ctx.fillStyle = 'blue';
ctx.fillRect(paddle2X,paddle2Y,paddleWidth, paddleHeight);