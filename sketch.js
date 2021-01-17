const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin1 = new Dustbin(700, 390, 100, 20);
  dustbin2 = new Dustbin(650, 390, 20, 100);
  dustbin3 = new Dustbin(750, 390, 20, 100);

  paper = new Paper(160, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}
function draw() {
    rectMode(CENTER);
    background("black");
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
    paper.display();
  }



function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 15,y: -14});
  }
}
