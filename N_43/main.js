 "use strict";
const fieldWidth = 400;
const fieldHeight = 245;
const rocketWidth = 7;
const rocketHeight = 73;
const ballWidth = 23;

var gameField = document.getElementById('gameField');
gameField.style.width = fieldWidth + 'px';
gameField.style.height = fieldHeight + 'px';


//window.addEventListener("keypress",inputKey);

 var leftRacket={
        posX : 0,
        posY : 0,
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
  

  
     function upScr() {

        leftRacket.posY+=leftRacket.speedY;
        // вылетел ли мяч ниже поля?
        if ( leftRacket.posY+leftRacket.height>areaH.height ) {
            leftRacket.speedY=0;
        }
        leftRacket.update();  
        requestAnimationFrame(upScr);
    }

   function downScr() {

        leftRacket.posY-=leftRacket.speedY;
           //вылетел ли мяч выше поля?
        if ( leftRacket.posY<0 ) {
            leftRacket.speedY=0;
            
        }
        leftRacket.update();  
        requestAnimationFrame(downScr);
    }
  
    document.addEventListener('keydown', function(event) {
    if(event.keyCode == 17) {
        event.preventDefault();
        requestAnimationFrame(upScr);
    }
    
});
  
    document.addEventListener('keydown', function(event) {
    if(event.keyCode == 16) {
        event.preventDefault();
        requestAnimationFrame(downScr);
    }
    
});   
  
  

  
  
  
  
  
  
  
  
  
leftRacket.update();
rightRacket.update();
ball.update();


  function playGame() {
  

  
  setTimeout(updateArrows,1020-currTime.getMilliseconds());   
    
  
  }


