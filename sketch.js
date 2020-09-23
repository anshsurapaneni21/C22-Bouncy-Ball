const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var eng, world;
var ground, tennis_ball;

function setup(){
    var canvas = createCanvas(400,400);
    eng = Engine.create();
    world = eng.world;

    var ground_options ={
        isStatic: true,
        
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    var ball_options ={
        restitution: 1
        
    }
    tennis_ball = Bodies.circle(200,100,21,ball_options);
    
    World.add(world,[ground,tennis_ball]);

 

    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(eng);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(tennis_ball.position.x,tennis_ball.position.y,21,21);
}