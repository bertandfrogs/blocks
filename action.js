let counter = 0;
let Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine,
    world,
    boxes = [];
let ground, wall1, wall2;

function setup(){
    createCanvas(1000, 800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    let options = {
        isStatic: true
    };
    ground = Bodies.rectangle(500, height, width, 50, options);
    World.add(world, ground);
}

function mouseDragged(){
    let rand = random(20, 40);
    boxes.push(new Box(mouseX, mouseY, rand, rand));
    counter++;
    console.log(counter);
}

function mousePressed(){
    let rand = random(20, 60);
    boxes.push(new Box(mouseX, mouseY, rand, rand));
    counter++;
    console.log(counter);
}

function draw(){
    background(51);
    for(let i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
    noStroke();
    fill(170);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 50);
    // rect(0,0,50,800);
    // rect(950,0,50,800);
}







