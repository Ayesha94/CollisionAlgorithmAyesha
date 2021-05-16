var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(300, 200, 70, 80);

  rect1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //isTouching();
  if(isTouching(movingRect, rect1)){
    movingRect.shapeColor = "red";
  rect1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  rect1.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(obj1, obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  
      return true
}
else {
    return false;
}
}