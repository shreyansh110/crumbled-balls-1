const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
log1=new Stick(300,350,10,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  log1.display();
  drawSprites();
 
}



