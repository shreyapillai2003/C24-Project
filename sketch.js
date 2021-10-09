
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground, paperObject;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(600,548,40,10);
	box1= new Dustbin(700,320,70,70);
    box2=new Dustbin(920,320,70,70);
	box3=new Dustbin(990,372,70,70);
	paperObject= new Paper(460,510,30,20);
	dustbin= new Dustbin(430,720,10,20);
    

	 keyPressed();
	Engine.run(engine);
  
}


function draw() {
  background(200);
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paperObject.display();
  
  drawSprites();
 
}

function keyPressed() {

      if(keyCode===UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
     
     }

}




