
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinImage= loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
paper=new Paper(200,450,40)
ground= new Ground(800,670,1600,20)
	//Create the Bodies Here.
dustbin1=new Dustbin(1000,650,200,30)
dustbin2=new Dustbin(900,580,30,170)
dustbin3= new Dustbin(1100,580,30,180)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("white");
  
  ground.display();
  paper.display();
  dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 image(dustbinImage, 1000,580,200,75)
}

function keyPressed() {
	if (keyCode===UP_ARROW)
	{Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20})
	}
}

