var canvas;
var gameState
var king
var spaceship
//BP
var gravity = 0.7
var backgroundImg
var ninja
var bg
var shipAnimation, spacePlayer, spaceAnimation
var bullet
var fire
var gameState = 1
var level1Img
var level1
var formImg
function preload() {
 backgroundImg = loadImage("./assets/background.jpg")
 spacePlayer = loadImage("./assets/spaceship1.png")
shipAnimation = loadAnimation("./assets/ship1.png","./assets/ship2.png", "./assets/ship3.png")

 spaceAnimation = loadAnimation("./assets/spaceship1.png","./assets/spaceship2.png", "./assets/spaceship3.png")
 fire= loadImage("./assets/fireImage.png")
 level1Img = loadImage("./assets/level1.png")
 formImg = loadImage("./assets/formImg.jpg")
}

//BP
function setup() {
  canvas = createCanvas(2000,1000);

//  bg = createSprite(1000,500)
 //bg.addImage("background", backgroundImg)
 //bg.addImage("FormImg", formImg);
 //bg.scale = 1.6
 //bg.x = bg.width/2
 //bg.velocityX  = -0.5
 

 
 
 //bullet = createSprite(spaceship.position.x,spaceship.position.y,20,20)
 //bullet.visible = false
 


 

  
  
 


 
 
}

//BP
function draw() {
 // background("white");
  if(gameState === 0){
    
    bg = createSprite(1000,500)
    bg.scale = 1.8
    bg.addImage("FormImg", formImg);

    level1 = createSprite(800,200)
    level1.addImage("level1", level1Img)

    playButton = createButton("Play")
    playButton.position(720, 500);
    playButton.class("customButton");
    playButton.mousePressed(()=>{
      gameState = 1
      playButton.hide();
      
    })
    
  }

  if(gameState === 1){
    
    
   
   
    bg = createSprite(1000,500)
    bg.addImage("background", backgroundImg)
   
    bg.scale = 1.6
    bg.x = bg.width/2
    bg.velocityX  = -0.5
    


    spaceship = createSprite(600,300,100,100)

    spaceship.addImage("goodBoy", spacePlayer)
   spaceship.scale = 2.5
   
  if(keyWentDown("d")){
    spaceship.velocityX = 2
    
    spaceship.addAnimation("goodBoy", spaceAnimation)

  }
  if(keyWentUp("d")){
    spaceship.velocityX = 1
    spaceship.addAnimation("goodBoy", spaceAnimation)
    
    
    
  }
  if (bg.x < 0){
    bg.x = bg.width/2;
  }

  if(keyDown("space")){
    bullet = createSprite(spaceship.position.x,spaceship.position.y,20,20)
    bullet.addImage("bullet1", fire)
    bullet.scale = 0.3

    bullet.visible = true
    bullet.velocityX = 5
  }
  //spaceship.velocity.x = 1
  }

  drawSprites()
  
}






