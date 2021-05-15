var playerskin1,playerskin2;
var zombieskin,alienskin;
var backgroundImg,backgroundStartImg;
var form,player,game;
var gameState=0;


function preload(){
playerskin1 = loadImage("images/playerskin1.jpg")
playerskin2 = loadImage("images/playerskin2.jpg")
zombieskin = loadImage("images/NonPlayerSkin1.png")
alienskin = loadImage("images/NonPlayerSkin2.png")
backgroundImg = loadImage("images/background.jpg")
backgroundStartImg = loadImage("images/Startbackground.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    game=new Game()

    

}
function draw(){
    background(backgroundImg)
    if(gameState===0){
        game.start();
    }
    drawSprites();

}