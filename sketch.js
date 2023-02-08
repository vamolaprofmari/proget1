var sea,ship;
var seaImg, shipImg;


function preload(){


seaImg = loadImage("assests/sea.png");

SafeArray.Img = loadImage("sea.png");
shipImg = loadAnimation("assets/ship-1.png", 
"assets/ship-2.png",

 "assets/ship-3.png",

 "assets/ship-4.png");




}

function setup(){
  createCanvas(400,400);
  background("blue");

sea =createSprite (400,200);
sea.addImage(seaImg);
sea.velocityX = -5;
sea.scale = 0.3;


ship =createSprite(130,200,30,30);
ship.addAnimation("movingShip", shipImg);
ship.scale = 0.25;









}

function draw() {
  background("blue");

  sea.velocityX = -3;
    drawSprites();

 
}
