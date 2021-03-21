var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxLeft,boxRight,boxCenter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	boxCenter = Bodies.rectangle(width/2,660,200,20,{isStatic:true});
	World.add(world, boxCenter);
	fill("red");
	boxRight = Bodies.rectangle(width/2-100,570,20,200,{isStatic:true});
	World.add(world, boxRight);
	fill("red");
	boxLeft = Bodies.rectangle(width/2+100,570,20,200,{isStatic:true});
	World.add(world, boxLeft);
	fill("red");
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  rect(boxCenter.position.x , boxCenter.position.y,200,20);
  rect(boxRight.position.x , boxRight.position.y,20,200);
  rect(boxLeft.position.x , boxLeft.position.y,20,200);
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
    
  }
}



