var bg,background,groundImage,ground,mario,mario_running
var coin,coinImage
var obstacleImage,obstacle
var brick,brickImage
var coinGroup,obstaclesGroup,bricksGroup
var score
function preload(){
  bg=loadImage("background.jpg")
  groundImage=loadImage("ground.png")
  mario_running=loadAnimation("mario1.png","mario2.png")
  coinImage=loadImage("coin.png") 
  obstacleImage=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png")

  brickImage=loadImage("brick.png")

}

function setup(){
  canvas= createCanvas(windowWidth-240, windowHeight-10)
  background=createSprite(300,200,1,1)
  background.addImage(bg)
  background.velocityX=-6
  background.scale=2.3
 
  ground=createSprite(10,550,20,600)
  ground.addImage(groundImage)
  ground.velocityX=-6

  mario=createSprite(75,490,10,10)
  mario.addAnimation("running",mario_running)
  mario.scale=0.4

  coinGroup=new Group();
  bricksGroup=new Group();
  obstaclesGroup=new Group();

 score = 0

console.log(windowWidth);

}

function draw(){
  if(background.x<190){
    background.x=background.width/1.5;
   
 }
 
 if(ground.x<0){
    ground.x=450
   
}

if (keyDown("space")&& mario.y>200){
mario.velocityY= -7
}

mario.velocityY=mario.velocityY+0.6
mario.collide(ground)

if(coinGroup.isTouching(mario)){
  score= score+10
  
}

if(bricksGroup.isTouching(mario)){
  score= score-5
}

spawnCoin();
spawnBricks();
spawnObstacles();
  drawSprites()
  textSize(25);
  fill("white");
  text("score-"+ score,800,50)
}

function spawnCoin(){
  if (frameCount %90===0){
  var r= random(150,300)
  coin =createSprite(windowWidth -250,r,10,10)
  coin.addImage(coinImage)
  coin.velocityX= -2
  coin.lifetime= 650
  coinGroup.add(coin)
}
}

function spawnBricks(){
  if(frameCount %150===0){
    var r = random(350,450)
  brick= createSprite(windowWidth -300,r,20,20)
  brick.addImage(brickImage)
  brick.velocityX= -2
  brick.lifetime= 650
  bricksGroup.add(brick)
}
}

function spawnObstacles(){
  if(frameCount%200===0){
    obstacle= createSprite(windowWidth -300,500,10,10)
    obstacle.addAnimation("obstacleImage",obstacleImage)
    obstacle.velocityX= -2
    obstacle.lifetime= 650
    obstaclesGroup.add(obstacle)
  }
}





/*
var enemy,enemy_running,coin,coinImage
function draw(){
  
  
  if(keyDown("space")){
     mario.velocityY=-7
  }
 
  if(coinGroup.isTouching(mario)){
     score=score+5
}
  
  if(bricksGroup.isTouching(mario)){
     score=score-10
}
  
  
  
  mario.velocityY=mario.velocityY+0.5
  
  mario.collide(ground)
  
  spawnBricks()
  spawnCoins()
  spawnObstacles()
  drawSprites()
}


*/