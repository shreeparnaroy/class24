const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1,log1
var box3,box4,pig2,log2
var bird

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,300,50,50);
    box2 = new Box(700,300,50,50);
    pig1=new Pig (600,300)
    log1=new Log(600,290,250,PI/2)
    //box3=new Box(180,10,50,50)
    ground = new Ground(width/2,height-20,width,20)
    box3 = new Box(500,200,50,50);
    box4 = new Box(700,200,50,50);
    pig2=new Pig (600,200)
    log2=new Log(600,190,250,PI/2)
    bird=new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
   // box3.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    bird.display()
}