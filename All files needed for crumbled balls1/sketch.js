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
log1=new Stick(830,475,215,12);
log2=new Stick(713.5,444,15,80);
log3=new Stick(940,435,15,220);
log5=new Stick(990,500,10,1000)
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
  log5.display();
 
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:
  0.5,y:-0.5})

}


}


