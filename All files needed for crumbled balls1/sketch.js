const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3,log4,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
log1=new Stick(790,475,150,15);
log2=new Stick(713.5,444,15,120);
log3=new Stick(870,438,15,120);

log4=new Ground(500,490,1100,20)
paper=new Ball(50,470,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  log1.display();

  log2.display();
  log3.display();
  log4.display();
  paper.display();

 
  drawSprites();
  
 
}

function keyPressed(){
if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:
  85,y:-85})

}


}


