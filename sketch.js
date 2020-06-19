var sun, mercury, venus, mars, earth, jupiter, saturn, uranus, neptune;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;



function setup() {
  createCanvas(800, 800);
  sun = createSprite(0, 0, 150, 150);
  sun.shapeColor = "orange";
  sun.setCollider("circle", -85, -60, -140);
  sun.debug = true;

  mercury = createSprite(70, 50, 75, 75);
  mercury.shapeColor = "red";
  mercury.setCollider("circle", 0, 0, 300);
  mercury.debug = true;

  venus = createSprite(210, 60, 75, 75);
  venus.shapeColor = "grey";
  venus.setCollider("circle", 0, 0, -100);
  venus.debug = true;

  earth = createSprite(250, -18, 75, 75);
  earth.shapeColor = "turqoise";
  earth.setCollider("circle", 0, 0, 200);
  earth.debug = true;

  mars = createSprite(30, 220, 75, 75);
  mars.shapeColor = "red";
  mars.setCollider("circle", 0, 0, 100);
  mars.debug = true;

  jupiter = createSprite(-180, 210, 75, 75);
  jupiter.shapeColor = "yellow";
  jupiter.setCollider("circle", 0, 0, - 250);
  jupiter.debug = true;

  saturn = createSprite(340, -30, 75, 75);
  saturn.shapeColor = "brown";
  saturn.setCollider("circle", 0, 0, 250);
  saturn.debug = true;

  uranus = createSprite(220, 350, 75, 75);
  uranus.shapeColor = "cyan";
  uranus.setCollider("circle", 0, 0, -150);
  uranus.debug = true;

  neptune = createSprite(-340, -320, 75, 75);
  neptune.shapeColor = "blue";
  neptune.setCollider("circle", 0, 0, 350);
  neptune.debug = true;
}

function draw() {
  backround(0);

  angleMode(DEGREES);
  translate(width/2, height/2);
  rotate(angle);

  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }

  if(sun.collide(earth)){
    earth.destroy();
  }

  if(sun.collide(mars)){
    mars.destroy();
  }

  if(sun.collide(jupiter)){
    jupiter.destroy();
  }

  if(sun.collide(saturn)){
    saturn.destroy();
  }

  if(sun.collide(uranus)){
    uranus.destroy();
  }

  if(sun.collide(neptune)){
    neptune.destroy();
  }
  angle = angle + anglespeed;
  
  if(framecount %  1 === 0){
      sun.scale = sun.scale + 0.01;
  }
  drawSprites();
}