const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200, 600);


  engine = Engine.create();
  
	world = engine.world;
	ground = new Ground(600,598,1200,15);
	holder = new Holder(600,100,600,30);

	ball = new Ball(600,350,20);
	constraint1 = new constraint({x:600, y:100},ball.body);

	ball1 = new Ball(560,350,20);
	constraint2 = new constraint({x:560, y:100},ball1.body);

	ball2 = new Ball(520,350,20);
	constraint3 = new constraint({x:520, y:100},ball2.body);

	ball3 = new Ball(640,350,20);
	constraint4 = new constraint({x:640, y:100},ball3.body);

	ball4 = new Ball(680,350,20);
	constraint5 = new constraint({x:680, y:100},ball4.body);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  holder.display();
  ball.display();
  constraint1.display();
  ball1.display();
  constraint2.display();
  ball2.display();
  constraint3.display();
  ball3.display();
  constraint4.display();
  ball4.display();
  constraint5.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(ball2.body, {x: 42 , y: -42});
}
  

}

