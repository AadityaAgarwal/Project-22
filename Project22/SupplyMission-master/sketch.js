var helicopterIMG,packageImg;
var ground,helicopter,package,packageSprite;
var eng, w;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	packageSprite= createSprite(400,200,10,10);
	packageSprite.addImage(packageImg);
	packageSprite.scale=0.2;
	console.log(packageSprite);

	eng= Matter.Engine.create();
	w= eng.world;

	var re={
		restitution: 1 ,
		isStatic: true
	}
	
	
	 
	package= Matter.Bodies.rectangle(400, 200, 10,10,re);
	Matter.World.add(w,package);
	

	
	helicopter=createSprite(400, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	var st= {
		isStatic: true
	}
	ground=Matter.Bodies.rectangle(400,690,800,10,st);
	ground.shapeColor=color(255)
	Matter.World.add(w, ground);

}


function draw() {
  background(0);
  Matter.Engine.update(eng);
  rectMode(CENTER);
  
  rect(ground.position.x,ground.position.y,800,10);
  rect(package.position.x,package.position.y,10,10);
  
  packageSprite.x= package.position.x;
  packageSprite.y= package.position.y; 
  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode=== DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(package,false);   
  }
}



