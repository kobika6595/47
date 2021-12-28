var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blast_Img;
var board_img
var p1c1,p1c2,p1c3,p1c4,p1c5,p1c6,p1c7;
var p2c1,p2c2,p2c3,p2c4,p2c5,p2c6,p2c7;
var bg_img
var coin1 , coin2;
var di1, di2 , di3,di4;
var dice;
var rules;
function preload() {
  backgroundImage = loadImage("./assets/bg.jpeg");
 // bg_img= loadImage("./assets/f1.jpeg");
  board_img=loadImage( "./assets/board.png")
  coin1=loadImage("./assets/c1 (2).png")
  coin2=loadImage("./assets/c2 (2).png")
 di1=loadImage("./assets/di1.png")
 di2=loadImage("./assets/di2.png")
 di3=loadImage("./assets/di3.png")
 di4=loadImage("./assets/di4.png")
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    rules.hide()
    game.play();
    
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
 }

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight);
}
