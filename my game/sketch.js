var player, p1Image, p2Image, p3Image, p4Image, p5Image;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	p1Image=loadAnimation("sprites/p1.jpg")
	p2Image=loadAnimation("sprites/p2.jpg")
	p3Image=loadAnimation("sprites/p3.jpg")
	p4Image=loadAnimation("sprites/p4.jpg")

}

function setup() {
	createCanvas(windowWidth, windowHeight)
	player=createSprite(width/2, height/2)
    player.addAnimation("running",p1Image, p2Image, p3Image, p4Image)
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
      
    Matter.Body.setStatic(packageBody,false)

  }
}
