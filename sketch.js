
var cat ,garden;
var mouse1,background1;

function preload() {
    //load the images here
    cat = loadImage("images/cat1.png");   
    catRunning = loadAnimation("images/cat2.png","images/cat3.png");
    
    garden = loadImage("images/garden.png");
    mouseStanding = loadImage("images/mouse1.png");
    mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadImage("images/mouse4.png","images/mouse1.png")
    
}

function setup(){ 
    createCanvas(1000,800);
   // background("blue");
    //create tom and jerry sprites here
   background1 = createSprite(500,400,10,50);
   background1.addImage(garden);
   

  cat1 = createSprite(700,600,30,30)
  cat1.addImage(cat);
  cat1.scale = 0.3;

  mouse1 = createSprite(100,660,30,30)
  mouse1.addImage(mouseStanding);
  mouse1.scale = 0.1;

}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    console.log(cat1.x - mouse1.x);
   

    
if(keyDown("LEFT_ARROW")){

cat1.velocityX = -5;
cat1.addAnimation("cat",catRunning);
cat1.changeAnimation("cat");
mouse1.addAnimation("mouse",mouseTeasing);
mouse1.changeAnimation("mouse");

}

if(cat1.x - mouse1.x < cat1.width / 2 - mouse1.width / 2){

    cat1.velocityX = 0;
    mouse1.addAnimation("mouseTeasing",mouse3)
    mouse1.changeAnimation("mouseTeasing")
    cat1.addAnimation("catRunning",cat)
    cat1.changeAnimation("catRunning")

}

    drawSprites();
}
