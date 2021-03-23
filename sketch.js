const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myengine,myworld;
var ground,ball1;

function setup(){
  var canvas=createCanvas(400,400);


  myengine = Engine.create();
  myworld = myengine.world;


  var ground_options ={
    isStatic: true
  }

  var ball1_options ={
    restitution:  1
  }



ball1 = Bodies.circle(150,150,20,ball1_options)
World.add(myworld,ball1)


  ground = Bodies.rectangle(200,390,200,30,ground_options);
  World.add(myworld,ground)
  
}
function draw()
{
  background(0);

  Engine.update(myengine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,30)
  ellipseMode(RADIUS)
 ellipse(ball1.position.x,ball1.position.y,20,20)
}
