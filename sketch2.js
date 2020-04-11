var fixedRect, movingRect;

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
}

function draw() {
  background(0,0,0);
  
  //*****************Stuctural Method*************************//

  //algorithm for collision dection of sprites

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  /*if((movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2)
     && (fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
     && (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
     && (fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  //algorithm for bounce off sprites

  if ((movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2)
    && (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) 
    && (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) 
    && (fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);

    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }  */


    //*****************Object Method*************************//
    
  drawSprites();
}