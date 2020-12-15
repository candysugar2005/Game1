var gameName, gameImg, gameText,continuebutton,five,six,seven,eight;

function preload(){
gameImg= loadImage("bg.jpg");
nameImg= loadImage("save.png");
continuebuttonimg= loadImage("continue.png");
fiveimg=loadImage("5.png");
siximg=loadImage("6.png");
sevenimg=loadImage("7.png");
eightimg=loadImage("8.png");
}
function setup() {
  createCanvas(1200,700);
 // createSprite(400, 200, 50, 50);

 gameName = createSprite(300,300,20,20);
  gameName.scale=0.7;
  //gameName.addImage(gameImg);
  name1=createSprite(600,350,10,10);
name1.addImage(nameImg);
name1.scale=0.5;
gameText="Hello player, this game is a user friendly game and anyone can play this game .you can learn and have fun at the same time. to have this learn nd fun experience you should know the story and the mission of the game........."
text(gameText,100,100);
continuebutton = createSprite(900,350,20,20);
continuebutton.addImage(continuebuttonimg);
continuebutton.scale=0.2;
}

function draw() {
  background(0);  
  start();
  drawSprites();
}

function start(){
  
if(mousePressedOver(continuebutton)){
  level1();
 
}
}


function level1(){
//console.log("LEVEL 1");

gameName.visible=false;
continuebutton.visible=false;
textSize(30);
fill("white");
text("WHICH CLASS ARE YOU IN??",100,200);
five=createSprite(150,250,10,10);
five.addImage(fiveimg);
five.scale=0.5;
six=createSprite(200,250,10,10);
six.addImage(siximg);
six.scale=0.5;
seven=createSprite(250,250,10,10);
seven.addImage(sevenimg);
seven.scale=0.5;
eight=createSprite(300,250,10,10);
eight.addImage(eightimg);
eight.scale=0.5;
}