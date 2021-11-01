var box
function setup() {
  createCanvas(1000,1000);
  box=createSprite(45,68,16,45)

}

function draw() 
{
  background(30);
  drawSprites()
  if(keyDown("RIGHT_ARROW")){
    box.x=box.x+5
  }
}

