var box1,box2;



function setup() {
  createCanvas(800,400);
  box4=createSprite(250,250,50,50);
  box1=createSprite(200,200,50,50);
  box2=createSprite(150,150,50,50);
  box3=createSprite(100,100,50,50);
  box1.shapeColor="blue"
  box2.shapeColor="green"
  box3.shapeColor="black"
  box4.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  box1.x=World.mouseX;
  box1.y=World.mouseY;
if(box1.x-box2.x<box1.width/2+box2.width/2 &&
   box2.x-box1.x<box1.width/2+box2.width/2 &&
   box1.y-box2.y<box1.height/2+box2.height/2 &&
   box2.y-box1.y<box1.height/2+box2.height/2){
   box1.shapeColor="purple"
   box2.shapeColor="grey"
}
else{
  box1.shapeColor="blue"
  box2.shapeColor="green"
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}