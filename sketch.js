let dance = [];
let num;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  num = width*0.05
  //num = 30;
  for (i = 0; i < num; i++){
    dance.push(new Element());
  }
}

function draw() {
  background(random(30), 0.1);
  colorMode(HSB)
  
  for (i = 0; i < dance.length; i++){
    dance[i].display();
   dance[i].update();
    dance[i].edges();
  }
  scribble();
  
}

function scribble(){
  noFill();
  for (i = 0; i < num; i++){
    stroke(random(300,360), random(0,100), 360);
    curveTightness(random(3,6));
    curve(random(width), random(height), mouseX, mouseY, mouseX, mouseY,random(width), random(height));
  }
}

class Element{
  constructor(){
    this.loc = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.len = random(10,30);
    //this.len = random(width*0.03, width*0.07);
    this.ts = 3;
    this.a = 0;
  }
  
  display(){
    fill(random(200,300), random(360), random(360));
     //tethers
    stroke(random(0,100), random(0,100), 360, 0.5);
    line(this.loc.x, this.loc.y, mouseX, mouseY);
    //bodies
    stroke(0);
    rectMode(CENTER);
    circle(this.loc.x, this.loc.y, this.len);
  }
  
  update(){
    this.a = p5.Vector.random2D();
    //this.a.mult(random(4));
    this.a.mult(this.len*.3)
    //this.a = createVector(random(-.1, .1), random(-.1, .1));
    this.vel.add(this.a);
    this.vel.limit(this.ts);
    this.loc.add(this.vel);
  }
  
  edges(){
    if (this.loc.x > width) {
      this.loc.x = 0;
    }
    if (this.loc.x < 0) {
      this.loc.x = width;
    }
    if (this.loc.y > height) {
      this.loc.y = 0;
    }
    if (this.loc.y < 0) {
      this.loc.y = height;
    }
  }
  
}
