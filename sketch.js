var path,pathImg;
var runner,runnerImg;
var leftB,rightB;
function preload(){
  
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  runner=createSprite(180,340,30,30);
  runner.addAnimation("JakeRunning",runnerImg);
  runner.scale=0.08;
  leftB=createSprite(0,0,100,800);
  leftB.visible=false;
  rightB=createSprite(410,0,100,800);
  rightB.visible=false;
}

function draw() {
  background(0);
  runner.x=World.mouseX;
  path.velocityY = 4;

  edges=createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftB);
  runner.collide(rightB);
  //code to reset the background
  if(path.y > 400){
    path.y = height/2;
  }

  drawSprites();
}
