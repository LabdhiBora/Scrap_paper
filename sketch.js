
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin;
var scrap;
function preload()
{
wall1=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
     ground=new Ground(100,650,1400,10);
     dustbin=new Dustbin(630,630,70,100);
     scrap= new Scrap(200,500,30,30);
  Engine.run(engine);
  
  
}


function draw() {
   rectMode(CENTER);
   background(255);
   ground.display();
   dustbin.display();
   scrap.display();
   
   drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(scrap.body,scrap.body.position,{x:6.5,y:-6.5})
  }
}



