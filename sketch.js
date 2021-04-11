const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;


function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
   

    ball = new Ball(700,320,70,70);


    player = new Player(100,100);
    chain=new chain(player.body,ball.body);
    

}

function draw(){

    Engine.update(engine);
   
    ball.display();
    player.display();


   chain.display();

}
