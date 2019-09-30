 "use strict";
const fieldWidth = 400;
const fieldHeight = 245;
const rocketWidth = 7;
const rocketHeight = 73;
const ballWidth = 23;

var gameField = document.getElementById('gameField');
gameField.style.width = fieldWidth + 'px';
gameField.style.height = fieldHeight + 'px';



 var leftRacket={
        posX : 0,
        posY : 20,
        speedY : 1,
        width : rocketWidth,
        height: rocketHeight,

        update : function() {
            var rocketLeftElem=document.getElementById('leftRacket');
            rocketLeftElem.style.left=this.posX+"px";
            rocketLeftElem.style.top=this.posY+"px";
            rocketLeftElem.style.width=this.width+"px";
            rocketLeftElem.style.height=this.height+"px";
        }
    }

var rightRacket={
        posX : fieldWidth - rocketWidth,
        posY : 0,
        speedY : 1,
        width : rocketWidth,
        height: rocketHeight,

        update : function() {
            var rocketRightElem=document.getElementById('rightRacket');
            rocketRightElem.style.left=this.posX+"px";
            rocketRightElem.style.top=this.posY+"px";
            rocketRightElem.style.width=this.width+"px";
            rocketRightElem.style.height=this.height+"px";
        }
    }
  var ball={
        posX : fieldWidth/2 - ballWidth/2,
        posY : fieldHeight/2 - ballWidth/2,
        speedX : 1,
        speedY : 1,
        width : ballWidth,
        height: ballWidth,

        update : function() {
            var ballElem=document.getElementById('ball');
            ballElem.style.left=this.posX+"px";
            ballElem.style.top=this.posY+"px";
            ballElem.style.width=this.width+"px";
            ballElem.style.height=this.height+"px";
        }
    }
  
 var areaH={
        width : fieldWidth,
        height : fieldHeight
    }
 
tick(); 

function tick() { 

       
    document.addEventListener('keydown', function(event) {
    if(event.keyCode == 17) {
        event.preventDefault();
        moveDown();
        console.log('17down');
        } 
    });
    document.addEventListener('keyup', function(event) {
    if(event.keyCode == 17) {
        moveStop();
        console.log('17up');  
        }    
    });   
    document.addEventListener('keydown', function(event) {
    if(event.keyCode == 16) {
        event.preventDefault();
        moveUp();
        console.log('16down');
        }  
    });
    document.addEventListener('keyup', function(event) {
    if(event.keyCode == 16) {
        moveStop();
        console.log('16up');
        }    
    });
  
    function moveUp(){
        leftRacket.posY-=leftRacket.speedY;
        if ( leftRacket.posY<0 ) {
        leftRacket.speedY=0;
        }
      }  
     function moveDown(){
         leftRacket.posY+=leftRacket.speedY;
         if ( leftRacket.posY+leftRacket.height>areaH.height ) {
         leftRacket.speedY=0;
        }
     }
          
      
     function moveStop(){
        leftRacket.speedY=0;
    }

    leftRacket.update();
    rightRacket.update();
    ball.update();

        requestAnimationFrame(tick);
    
    }

leftRacket.update();
rightRacket.update();
ball.update();

