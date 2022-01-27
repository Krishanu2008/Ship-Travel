var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(600,600);
  background("blue");

  // Moving background
  sea=createSprite(1.5,300);
  sea.addImage(seaImg);
  sea.scale=0.5;
  sea.velocityx=0.25;
  
  //creating ship
  ship = createSprite(200,330,200,200);
  ship.addAnimation("movingShip",shipImg1);
  

  //adding scale and position to ship
  ship.scale =0.25;
 
  
}
function draw() {
  background(0);
 
//stop ship from falling down

//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3;
  sea.velocityX = -3;
  //sea.velocityX = 3;
  

  drawSprites();
}
