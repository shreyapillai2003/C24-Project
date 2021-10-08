
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, ground;
var box1,box2,box3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var paperObject_options={ isStatic:false,
		                      restitution: 0.5,
							  friction:1.2};
	paperObject= Bodies.circle(100,100,20,paperObject_options);
	paperObject.shapeColour= color(235);
    World.add(world,paperObject);
	
	var ground_options= {isStatic:true}
    ground= Bodies.rectangle(200,390,200,20,ground_options);
	ground.shapeColor=color(255)
 	World.add(world, ground);

	box1= new Dustbin(700,320,70,70);
    box2=new Dustbin(920,320,70,70);
	box3=new Dustbin(990,372,70,70);

	 keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed() {

      if(keyCode===UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
     
     }

}




