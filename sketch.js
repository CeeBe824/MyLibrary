var fixedRect, movingRectl,car,wall,car1,wall1;

function setup() {
  createCanvas(1200,800);
  

  car = createSprite(400,100,70,30);
  car.shapeColor = "blue";
  car.velocityX = 5;

  wall = createSprite(900,100,50,100);
  wall.shapeColor = "grey";

  car1 = createSprite(400,300,70,30);
  car1.shapeColor = "blue";
  car1.velocityX = 5;

  wall1 = createSprite(900,300,50,100);
  wall1.shapeColor = "grey";
}

function draw() {
  background(0,0,0);  
   
bounceOff(car1,wall1);

if(isTouching(car,wall)){
  car.shapeColor = "red";
  wall.shapeColor = "white";
}
else {
  car.shapeColor = "blue";
  wall.shapeColor = "grey";
}
  
  drawSprites();
}
