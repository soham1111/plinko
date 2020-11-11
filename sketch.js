const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gr;
var divisions = [];
var plinkos = [];
var particles = [];
function setup(){
    createCanvas(800,800)
    engine = Engine.create();
    world = engine.world;

    gr = new ground(400,790,800,20);

    for(var i = 0; i<=width; i= i+80){
        divisions.push(new division(i,600,10,400 ))
    }
    for(var i = 0; i<=width; i= i+80){
      plinkos.push(new plinko(i,150 ))
    }
    for(var i = 30; i<=width; i= i+80){
      plinkos.push(new plinko(i,210 ))
    }
    for(var i = 0; i<=width; i= i+80){
      plinkos.push(new plinko(i,270 ))
    }
    for(var i = 30; i<=width; i= i+80){
      plinkos.push(new plinko(i,320 ))
    }
    
  
}
function draw(){
background ("black");
Engine.update(engine);
gr.display();

for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
if(frameCount%60===0){
  particles.push(new particle(random(100,400), 10,15));
  
}
for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}
for(var i = 0; i<divisions.length; i++){
  divisions[i].display();
}  
}