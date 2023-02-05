# pong-game 

### Pong-Game is a two-player game with the best of 3. The game is played on a canvas with two paddles and a ball. The goal of the game is to use the paddles to prevent the ball from passing through the player's side of the canvas.

## Code Structure
The code consists of the following components:

* The canvas and its context canvas and ctx
* The ball object ball with its specifications such as radius, x and y coordinates, dx and dy for movement and speed.
* The first paddle paddle1 with its specifications such as x and y coordinates, dx and dy for movement, width, height, upKey and downKey for movement, and score.
* The second paddle paddle2 with the same specifications as paddle1.
* The text drawing function drawText to display the score.
* Event listeners for keyboard inputs for paddle movements.
* Collision detection function collision to determine when the ball hits a paddle.
* Reset ball functions resetBall1 and resetBall2 to reset the ball to the center of the canvas after a player scores.

## How to Play
The game can be played using two sets of keys, one for each player:

* Player 1: ArrowUp and ArrowDown
* Player 2: a and z

The goal is to prevent the ball from passing through your side of the canvas. To move your paddle, use the keys assigned to your player. The first player to score 3 points wins the game.

To visit and play the game visit: <https://fhasefa.github.io/pong-game/>

## Updates for later versions 
I would really like to make some changes down the line to better the game play and experience. One of those things being manipulating the direction of the ball based on the collision point on the paddle. You can see my attempt at this on the "paddle collision detection with angles" commit.