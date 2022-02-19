var box
var wall1
var wall2
var wall3
var wall4
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30) 
  edges=createEdgeSprites()
}
 
function draw() 
{
  background(30);
  text(mouseX+" "+mouseY,mouseX,mouseY)
drawSprites()
box.bounceOff (edges)
if (keyIsDown (UP_ARROW))
{
  box.velocityY=-5
}
if (keyIsDown (DOWN_ARROW))
{
  box.velocityY=5
}
if (keyIsDown (RIGHT_ARROW))
{
  box.velocityX=5
}
if (keyIsDown (LEFT_ARROW))
{
  box.velocityX=-5
}
}
function mouseClicked()
{
  wall=createSprite (mouseX, mouseY,random(10,50),random(10,50))
  wall.shapeColor="green"
}





