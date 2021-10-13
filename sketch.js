var blockGroup,gamestate=0
var start,quit,restart,robot,robotGif,bg,bgImg,logo,logoImg,robotGif2,startImg,quitImg,restartImg,welcome,circle
var vx,vy

function preload(){
robotGif2=createImg('assets/robot.gif')
bgImg=loadImage('assets/jungle.jpg')
logoImg=loadImage('assets/logo.png')
startImg=createImg('assets/start.png')
quitImg=createImg('assets/quit.png')
restartImg=createImg('assets/restart.png')
welcome=loadSound('assets/welcome.mp3')
circle=loadImage('assets/circle.png')
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  //start=createButton()
  image(startImg,20,20,50,50)
  startImg.size(260,200)
  startImg.hide()
  startImg.class('start')
   vx=windowWidth/2-50
   vy=windowHeight/2-50
  image(restartImg,windowWidth-200,5,50,50)
  
  restartImg.size(200,200)
  restartImg.hide()
  restartImg.class('RESTART')
  image(quitImg,windowWidth-200,5,50,50)
  quitImg.size(200,200)
  quitImg.class('QUIT')
  quitImg.hide()
  
  logo=createSprite(1100,250)
  logo.addImage('logo',logoImg)
  
blockGroup= new Group()
 
 image(robotGif2,20,20,20,20)
 robotGif2.size(300,300)
 robotGif2.position(windowWidth/2-700,windowHeight-350)
 //welcome.play()

// bg=createSprite(windowWidth,windowHeight)
 //bg.addImage('jungle',bgImg)



}

function draw() {
  
  if(gamestate===0){
    background(bgImg);
    logo.visible=true
    var s=0
    
    robotGif2.show()
   startImg.show()
   startImg.position(windowWidth/2-100,windowHeight/2)
   startImg.mousePressed(()=>{
     gamestate=1
     startImg.hide()
     robotGif2.hide()
     logo.visible=false
   })
  }  
  if(gamestate===1){
    background('teal')
     quitImg.show()
     quitImg.position(windowWidth-200,5)
     quitImg.mousePressed(()=>{
       gamestate=2
       quitImg.hide()
       blockGroup.destroyEach()
     })
    
    // push ()
    if(frameCount%30===0){
     // vx+=20
    vy-=20
    if(vx<100){
      vx+=20
    }
    if(vx>windowWidth-100){
      vx-=20
    }

    createBlock(vx,vy,20,20)
    }  
      


     //pop () 
    
  }
  if(gamestate===2){
    background('black')
  restartImg.show()
  restartImg.position(windowWidth-200,5)
  restartImg.mousePressed(()=>{
    gamestate=0
    restartImg.hide()
  
  }
  )
  }
  drawSprites();

}
var v=0
var a=15
function createBlock(x,y,w,h){

  //vs=vs-10
  
  var block=createSprite(x,y,w,h)
   
blockGroup.add(block)
block.lifetime=40

//tint (255,vs)
block.addImage(circle)
block.scale=0.15

  
 
}
