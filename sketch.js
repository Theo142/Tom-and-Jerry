var tom;
var tomImage1;
var tomImage2;
var tomImage3;

var jerry;
var jerryImage1;
var jerryImage2;
var jerryImage3;

var backgroungImage;

function preload() {
    //load the images here
    tomImage1 =loadImage("images/cat1.png")
    tomImage2 = loadImage("images/cat2.png","images/cat3.png")
    tomImage3 = loadImage("images/cat4.png")

    jerryImage1 = loadImage("images/mouse1.png")
    jerryImage2 = loadImage("images/mouse2.png","images/mouse3.png")
    jerryImage3 = loadImage("images/mouse4.png")

    backgroundImage = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(950,690)
    tom.addAnimation("sitting",tomImage1)
    tom.scale = 0.1
    tom.debug = true
    tom.setCollider("circle",0,0,30)

    jerry = createSprite(100,690)
    jerry.addAnimation("happy",jerryImage1)
    jerry.scale = 0.1
    jerry.debug = true
    jerry.setCollider("circle",0,0,30)
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2)
    {
        tom.velocityX = 0
        tom.addAnimation("caught",tomImage3)
        tom.changeAnimation("caught",tomImage3)

        jerry.addAnimation("finds",jerryImage3)
        jerry.changeAnimation("finds",jerryImage3)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
      tom.velocityX = -6
      tom.addAnimation("walking",tomImage2)
      tom.changeAnimation("walking",tomImage2)

      jerry.addAnimation("happy",jerryImage2)
      jerry.changeAnimation("happy",jerryImage2)
  }


}
