/*
Pseudo code:

Main goals:
1. Create a canvas and a black background.

2. Create a ship at the bottom of the screen.

3. Allow that ship to move to the left or right when the user clicks on the approprate keyboard button.

4. When the user clicks on the space bar, allow for a projectile to shoot from the ship upward.

5. Create an enemy that can be destroyed when the projectile hits it.

6. Display a win screen if enemy has been destroyed.

Extra credit:
1. Allow the enemy to move in a pattern similar to traditional space invaders.
2. Allow the enemy to be able to hurt the player when touched (one hit kills are ok)
3. Create a way to reset the board
4. Track the users score
  - Number of hits
  - Number of ships remaining
5. Randomize enemy speed.

*/

var shipX;
var shipY;

var bulletX, bulletY;

var shipImage;
var spaceBkg;

var isShooting;

function preload() {
  shipImage = loadImage('images/spaceship.png');
  spaceBkg = loadImage('images/background.jpeg')
}

function setup() {
  createCanvas(500, 500);
  shipX = width / 2 - 25;
  shipY = height - 100;

  bulletX = shipX;
  bulletY = shipY;

  isShooting = false;
}

var dir = 1;

function draw() {
  background("black");
  // image(spaceBkg, 0, 0);

  //bullet
  fill('yellow');
  circle(bulletX, bulletY, 20);

  if (keyIsDown(ENTER)) {
    isShooting = true;
    bulletY = shipY;
    bulletX = shipX;
  }

  if (isShooting) {
    bulletY -= 3;
  }


  if (keyIsDown(RIGHT_ARROW)) {
    shipX += 1;
  } else if (keyIsDown(LEFT_ARROW)) {
    shipX -= 1;
  }

  image(shipImage, shipX, shipY);
}