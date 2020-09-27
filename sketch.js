var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness=Math.round(random(22,83));
  bullet = createSprite(50,200,20,10);
  bullet.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  bullet.velocityX = speed;
  console.log(speed);
  console.log(weight);
}

function draw() {
  background(0);
 if (hasCollided(bullet, wall)){
   bullet.velocityX = 0;
   var damage=0.5 * weight * speed * speed /(thickness * thickness * thickness);
  if (damage < 10){
    bullet.shapeColor=rgb(0,255,0);
  }
  if (damage > 10 ){
    bullet.shapeColor=rgb(255,0,0);
  }
}
  drawSprites();
}
function hasCollided(lbullet, lwall){

  var bulletRightEdge=lbullet.x +lbullet.width;
  var wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}