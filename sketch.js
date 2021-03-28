var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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


	engine = Engine.create();
	world = engine.world;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	p1 = createSprite(400, 650, 200, 20);
	p1.shapeColor = "red";

	p2 = createSprite(500, 610, 20, 100);
	p2.shapeColor = "red";

	p3 = createSprite(300, 610, 20, 100);
	p3.shapeColor = "red";

	base = Bodies.rectangle(p1.x, p1.y, 200,40 , {isStatic:true} );
 	World.add(world, base);

 	leftrect =Bodies.rectangle(p2.x, p2.y, 40,100);
 	World.add(world, leftrect)

 	rightrect = Bodies.rectangle(p3.x, p3.y, 40, 100 , {isStatic:true} );
 	World.add(world, rightrect);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
}
}


