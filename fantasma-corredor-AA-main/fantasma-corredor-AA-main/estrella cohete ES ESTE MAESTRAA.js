  
var towerImg, tower;
var estrella, estrellaImg, estrellasGroup;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var cohete, coheteImg;
var cielo, cieloImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  cieloImg = loadImage("cielo.png");
  estrellaImg = loadImage("estrella.png");
  climberImg = loadImage("climber.png");
  coheteImg = loadImage("cohete.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  cielo = createSprite(600,600);
  cielo.addImage("cielo",cieloImg);
  cielo.scale =50;
  cielo.velocityY = 1;
  
  estrellasGroup = new Group();
  //climbersGroup = new Group();
  //invisibleBlockGroup = new Group();
  
  cohete = createSprite(200,200,50,50);
  cohete.scale = 0.3;
  cohete.addImage("cohete", coheteImg);
}


function draw() {
  background(0);
 if(cielo.y > 400){
      cielo.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        cohete.x = cohete.x - 3;

      //escribir el código para mover al fantasma a la izquierda al presionar la flecha izquierda
    }
    if(keyDown("right_arrow")){
  
          cohete.x = cohete.x + 3;

      //escribir el código para mover el fantasma a la derecha al presionar la flecha derecha 
      
    }
    if(keyDown("space")){
  
         cohete.velocityY = -10;

      //escribir el código para mover el fantasma hacia arriba al presionar la flecha arriba 
       
    }
  
    cohete.velocityY = cohete.velocityY + 0.8;
  
      
      //escribir una condición para desplazar infinitamente la torre
    
      spawnDoors();

  

  if(estrellasGroup.isTouching(cohete)){
      cohete.destroy();
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fin del juego", 230,250)
  }
}

function spawnDoors()
 {
  //escribir aquí el código para aparecer los obstáculos
  if (frameCount % 240 === 0) {
    var estrella = createSprite(200, -50);
    //var climber = createSprite(200,10);
    //var invisibleBlock = createSprite(200,15);
    //visibleBlock.width = climber.width;
    //invisibleBlock.height = 2;
    //agregar la función random
    estrella.x = Math.round(random(120,400,400));
   // climber.x = door.x;
    //invisibleBlock.x = door.x;

    estrella.addImage(estrellaImg);
    estrella.scale =0.9;
    //climber.addImage(climberImg);
    
    estrella.velocityY = 1;
    //climber.velocityY = 1;
    //invisibleBlock.velocityY = 1;

    //cambiar la profundidad del fantasma y de la puerta
    
     
cohete.depth = estrella.depth;
    cohete.depth+=1;
    
    //asignar lifetime a door, climber y invisible block

   estrella.lifetime = 800;
    //invisibleBlock.lifetime = 800;
    //climber.lifetime = 800;
    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle); aquí los obstáculos son door, climber, invisible block
    
     estrellasGroup.add(estrella);
    //invisibleBlock.debug = true;
    //climbersGroup.add(climber);
    //invisibleBlockGroup.add(invisibleBlock);
  }
}

