
var bullet,wall

var speed,weight,thickness

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weignt = random(30,52);
  thickness = random(22,83);

  bullet= createSprite(50, 200, 10, 8);
  bullet.velocityX =speed;
  bullet.shapecolor = color(255,255,255);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapecolor =color (80,80,80);
  
}

function draw() {
  background(0); 
  
  if(hasCollide(bullet,wall)){
    bullet.velocityX=0
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage > 10){
     wall.shapeColor = color(255,0,0)
    }

    if(damage > 10){
      wall.shapeColor = color(0,255,0)
    }
    
  }
  bullet.collide(wall);
  drawSprites();
}

function haeCollided() {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
     return true
  }
  return false;
}