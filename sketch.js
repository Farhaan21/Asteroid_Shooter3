var asteroidImg, boomImg, asteroidGroup;
var earthImg, jetImg, lifeImg, bg;
var jet, asteroid, earth;
var bullets, bulletsImg;
function preload(){
    asteroidImg = loadImage("images/asteroid-removebg-preview.png");
    boomImg = loadImage("images/boom-removebg-preview.png");
    earthImg = loadImage("images/earth-removebg-preview.png");
    jetImg = loadImage("images/jet.webp");
    lifeImg = loadImage("images/life-removebg-preview.png");
    bg = loadImage("images/bg.jpg");
    bulletsImg = loadImage("images/bullet-removebg-preview (1).png");
}

function setup() {
  createCanvas(1400,1000);
  earth = createSprite(200, 325, 50, 50);
  earth.addImage(earthImg);
  earth.scale = 1.75;
  
  jet = createSprite(500, 350, 50, 50);
  jet.addImage(jetImg);
  jet.scale = 0.325;
  jet.rotation = 90
}

function draw() {
  background(255,255,255);
  image(bg, 0, 0, width, height)  

  if(keyWentDown('SPACE')) {
    bullets = createSprite(jet.x, jet.y, 10, 10);
    bullets.addImage(bulletsImg);
    bullets.scale = 0.5
    bullets.velocityX = 10;
  }

  if(keyDown('W') || keyDown('UP_ARROW')) {
    jet.y = jet.y - 5;
  }

  if(keyDown('S') || keyDown('DOWN_ARROW')) {
    jet.y = jet.y + 5;
  }

  createAsteroids();
  
  drawSprites();
}

function createAsteroids() {
  if(frameCount%100 === 0) {

    asteroid = createSprite(width, random(10, 700), 50, 50);
    asteroid.velocityX = -10
  }
}