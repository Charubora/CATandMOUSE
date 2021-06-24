var cat,catStill,catMoving,catStops
var mouse,catStill,mouseMoving,mouseStops
var wallpaper, wallpaperImage




function preload() {
    //load the images here
  catStill=loadAnimation("cat1.png")
  mouseStill=loadAnimation("mouse1.png")  
  wallpaperImage=loadImage("garden.png")
  catMoving=loadAnimation("cat2.png","cat3.png")
  mouseMoving=loadAnimation("mouse2.png","mouse3.png")
  catStops=loadAnimation("cat4.png")
  mouseStops=loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,80,70)
    cat.addAnimation("catnothing",catStill)
    cat.scale=0.2;
    mouse=createSprite(200,600,80,70)
    mouse.addAnimation("mousenothing",mouseStill)
    mouse.scale=0.2;
}

function draw() {

    background(wallpaperImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     
    cat.addAnimation("happyCat",catStops)
    cat.changeAnimation("happyCat")

    mouse.addAnimation("happyMouse",mouseStops)
    mouse.changeAnimation("happyMouse")
    }
    drawSprites();
}


function keyPressed(){
 
  //For moving and changing animation write code here

   if(keyCode === RIGHT_ARROW){
    
       mouse.addAnimation("comingMouse",mouseMoving)
     
       mouse.changeAnimation("comingMouse")
   }
   if(keyCode === LEFT_ARROW){
   
    cat.addAnimation("comingCat",catMoving)
    cat.changeAnimation("comingCat")
   
   }
}
