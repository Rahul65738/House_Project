var eggVar, eggImage, eggGroup;
var birdVar, birdImage, birdGroup;
var pigVar, pigImage, pigGroup;
var pinkBalloonVar, pinkBalloonImage, pinkBalloonGroup;
var destroyer, destroyerImage
var ground, groundImage, ground2, ground2Image;
var score = 0;
var randomNum; 

function bird() {
  birdVar = createSprite(-30, randomNum, 20, 20);
  birdVar.addImage("bird", birdImage);
  //birdVar.scale = 0.08;
  birdVar.velocityX = 8;
  birdVar.lifetime = 100;
  birdGroup.add(birdVar);
}
function pig() {
  pigVar = createSprite(-30, randomNum, 20, 20);
  pigVar.addImage("pig", pigImage);
  //pigVar.scale = 0.08;
  pigVar.velocityX = 7;
  pigVar.lifetime = 100;
  pigGroup.add(pigVar);
}
function egg() {
  eggVar = createSprite(-30, randomNum, 20, 20);
  eggVar.addImage("egg", eggImage);
  eggVar.scale = 0.4;
  eggVar.velocityX = 7;
  eggVar.lifetime = 100;
  eggGroup.add(eggVar);
}
function pinkBalloon() {
  pinkBalloonVar = createSprite(-30, randomNum, 20, 20);
  pinkBalloonVar.addImage("pink balloon", pinkBalloonImage);
  pinkBalloonVar.scale = 0.8;
  pinkBalloonVar.velocityX = 6;
  pinkBalloonVar.lifetime = 100;
  pinkBalloonGroup.add(pinkBalloonVar);
}
function preload() {
  eggImage = loadImage("eggImg.png");
  birdImage = loadImage("bird.png");
  pigImage = loadImage("pig.png");
  destroyerImage = loadImage("destroyerImg.png");
  //arrowImage = loadImage("arrow0.png");
  groundImage = loadImage("background0.png");
  ground2Image = loadImage("background0.png");
  pinkBalloonImage = loadImage("pink_balloon0.png");
}

function setup() {
  createCanvas(600, 600);
  ground = createSprite(300, 300, 600, 5);
  ground.addImage("ground image", groundImage);
  ground.scale = 1.5;
  ground2 = createSprite(900, 300, 600, 5);
  ground2.addImage("ground2 image", ground2Image);
  ground2.scale = 1.5;
  destroyer = createSprite(540, 300, 10, 10);
  destroyer.addImage("destroyer Image", destroyerImage);
  destroyer.scale = 0.5;
  //arrowGroup = new Group();
  eggGroup = new Group()
  pigGroup = new Group()
  birdGroup = new Group()
  pinkBalloonGroup = new Group()
  
  var speed = frameCount/100;
}

function draw() {
  background("white");
  randomNum = Math.round(random(55, 505));
  destroyer.y = mouseY;
  if(ground.x <= -300) {
    ground.x = 900;
  }
  if(ground2.x <= -300) {
    ground2.x = 900;
  }
  ground.velocityX = -6;
  ground2.velocityX = -6;
  /*if(keyWentDown("space")) {
    shootArrow();
  }*/
  var enemyType = Math.round(random(1, 4));
  if(World.frameCount % 50 == 0) {
    if(enemyType == 1) {
      pig();
    }
    else if(enemyType == 2) {
      egg();
    }
    else if(enemyType == 3) {
      bird();
    }
    else if(enemyType == 4) {
      pinkBalloon();
    }
    enemyType = Math.round(random(1, 4));
    
  }
  
  if(destroyer.isTouching(birdGroup)) {
    birdGroup.destroyEach();
    score+= 1;
  }
  if(destroyer.isTouching(eggGroup)) {
    eggGroup.destroyEach();
    score += 2;
  }
  if(destroyer.isTouching(pigGroup)) {
    pigGroup.destroyEach();
    score += 4;
  }
  if(destroyer.isTouching(pinkBalloonGroup)) {
    pinkBalloonGroup.destroyEach();
    score += 16;
  }
  
  
  drawSprites();
  text("Score: " + score, 285, 30);
}

