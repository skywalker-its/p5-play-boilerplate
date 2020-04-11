var fixedRect, movingRect;
var gameObject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(50,80,50,80);
  movingRect = createSprite(400,400,80,30);

  //fixedRect = createSprite(200, 100, 50, 80);
  //movingRect = createSprite(400, 400,80,30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX= +5;

  movingRect.velocityY = -5;
  fixedRect.velocityY= +5;

  gameObject1 = createSprite(200,200,80,10);
  gameObject2 = createSprite(400,400,80,10);
  gameObject3 = createSprite(600,600,80,10);
  gameObject4 = createSprite(100,100,80,10);
}

function draw() {
  background(0,0,0);

  //*****************Object Oriented Method*************************
  text("Hello", 100, 200);
  //algorithm for collision dection of sprites
  isTouching(fixedRect,movingRect);

  //algorithm for bounce off sprites
  bounceOff(fixedRect,movingRect);

  drawSprites();
}

