const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground1, ground2, ground3;
// boxes on ground 1
var box1_gr1, box2_gr1, box3_gr1, box4_gr1, box5_gr1, box6_gr1, box7_gr1, box8_gr1, box9_gr1, box10_gr1,
box11_gr1, box12_gr1, box13_gr1, box14_gr1, box15_gr1, box16_gr1;

// boxes on ground 2
var box1_gr2, box2_gr2, box3_gr2, box4_gr2, box5_gr2, box6_gr2, box7_gr2, box8_gr2, box9_gr2, box10_gr2;

var rubber;

var img;

function preload(){
  img = loadImage("hexagon.png")
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(450,400,300,15);
  ground2 = new Ground(800,250,200,15);
  ground3 = new Ground(500,590,1200,15);

  box1_gr1 = new Box(365,372.5,20,40,"red");
  box2_gr1 = new Box(385,372.5,20,40,"red");
  box3_gr1 = new Box(405,372.5,20,40,"red");
  box4_gr1 = new Box(425,372.5,20,40,"red");
  box5_gr1 = new Box(445,372.5,20,40,"red");
  box6_gr1 = new Box(465,372.5,20,40,"red");
  box7_gr1 = new Box(485,372.5,20,40,"red");
  box8_gr1 = new Box(505,372.5,20,40,"red");
  box9_gr1 = new Box(525,372.5,20,40,"red");
  box10_gr1 = new Box(545,372.5,20,40,"red");
  box11_gr1 = new Box(405,332.5,20,40,"yellow");
  box12_gr1 = new Box(425,332.5,20,40,"yellow");
  box13_gr1 = new Box(445,332.5,20,40,"yellow");
  box14_gr1 = new Box(465,332.5,20,40,"yellow");
  box15_gr1 = new Box(485,332.5,20,40,"yellow");
  box16_gr1 = new Box(505,332.5,20,40,"yellow");
  box17_gr1 = new Box(445,292.5,20,40,"pink");
  box18_gr1 = new Box(465,292.5,20,40,"pink");

  box1_gr2 = new Box(750,222.5,20,40,"red");
  box2_gr2 = new Box(770,222.5,20,40,"red");
  box3_gr2 = new Box(790,222.5,20,40,"red");
  box4_gr2 = new Box(810,222.5,20,40,"red");
  box5_gr2 = new Box(830,222.5,20,40,"red");
  box6_gr2 = new Box(850,222.5,20,40,"red");
  box7_gr2 = new Box(780,182.5,20,40,"green");
  box8_gr2 = new Box(800,182.5,20,40,"green");
  box9_gr2 = new Box(820,182.5,20,40,"green");
  box10_gr2 = new Box(800,142.5,20,40,"yellow");

  var options = {
    density:1
  }
  
  ball = Bodies.circle(200,260,20,options)
  World.add(world,ball)

  rubber = new SlingShot(this.ball,{x:250 ,y:180});

  Engine.run(engine);

}

function draw() {
  background(0,255);

  ground1.display();
  ground2.display();
  ground3.display();
  
  box1_gr1.display();
  box2_gr1.display();
  box3_gr1.display();
  box4_gr1.display();
  box5_gr1.display();
  box6_gr1.display();
  box7_gr1.display();
  box8_gr1.display();
  box9_gr1.display();
  box10_gr1.display();
  box11_gr1.display();
  box12_gr1.display();
  box13_gr1.display();
  box14_gr1.display();
  box15_gr1.display();
  box16_gr1.display();
  box17_gr1.display();
  box18_gr1.display();

  box1_gr2.display();
  box2_gr2.display();
  box3_gr2.display();
  box4_gr2.display();
  box5_gr2.display();
  box6_gr2.display();
  box7_gr2.display();
  box8_gr2.display();
  box9_gr2.display();
  box10_gr2.display();

  imageMode(CENTER)
  image(img,ball.position.x,ball.position.y,25,20)

  rubber.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rubber.fly();
}
