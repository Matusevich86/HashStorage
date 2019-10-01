 "use strict";

const fieldWidth = 400;
const fieldHeight = 245;
const rocketWidth = 7;
const rocketHeight = 73;
const ballWidth = 23;
var gameState = 1;

var gameField = document.getElementById('gameField');
gameField.style.width = fieldWidth + 'px';
gameField.style.height = fieldHeight + 'px';

var leftRacket={
    posX : 0,
    posY : 20,
    speedY : 0,
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
    posY : 50,
    speedY : 0,
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
    speedX : 0,
    speedY : 0,
    width : ballWidth,
    height: ballWidth,
    radius: ballWidth/2,

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
 
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 17) {
        event.preventDefault();
        if(gameState == 2) {
            leftRacket.speedY=2;
        }  
    }
    if(event.keyCode == 16) {
        event.preventDefault();
        if(gameState == 2) {
            leftRacket.speedY=-2;
        }
    }
    if(event.keyCode == 40) {
        event.preventDefault();
        if(gameState == 2) {
            rightRacket.speedY=2;
        }
    }
    if(event.keyCode == 38) {
        event.preventDefault();
        if(gameState == 2) {
            rightRacket.speedY=-2;
        }
    }
});
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 17) {
        event.preventDefault();
        leftRacket.speedY=0;
    }
    if(event.keyCode == 16) {
        event.preventDefault();
        leftRacket.speedY=0;
    }
    if(event.keyCode == 40) {
        event.preventDefault();
        rightRacket.speedY=0;
    }
    if(event.keyCode == 38) {
        event.preventDefault();
        rightRacket.speedY=0;
    }
});

function start() {
    if(gameState == 2) {
        event.preventDefault();
    }
    if(gameState == 1 || gameState == 3) {
        ball.posX = fieldWidth/2 - ballWidth/2;
        ball.posY = fieldHeight/2 - ballWidth/2;
        ball.speedX = 2;
        ball.speedY = 1;
        gameState = 2;
    }   
        requestAnimationFrame(tick);
} 

function tick() { 

    leftRacket.posY+=leftRacket.speedY;

    if (leftRacket.posY < 0) {
        leftRacket.speedY=0;
        leftRacket.posY=0;
    }
    if (leftRacket.posY+leftRacket.height>areaH.height) {
        leftRacket.speedY=0;
        leftRacket.posY=areaH.height-leftRacket.height;
    }
    
    rightRacket.posY+=rightRacket.speedY;

    if (rightRacket.posY < 0) {
        rightRacket.speedY=0;
        rightRacket.posY=0;
    }
    if (rightRacket.posY+rightRacket.height>areaH.height) {
        rightRacket.speedY=0;
        rightRacket.posY=areaH.height-rightRacket.height;
    }
    
    ball.posX+=ball.speedX;
    // ударился ли мячь об правую ракетку
    if (ball.posX + ball.width >= areaH.width - rightRacket.width && ball.posY > rightRacket.posY && ball.posY < rightRacket.posY + rightRacket.height) {
        ball.speedX=-ball.speedX;
    }
    // вылетел ли мяч правее стены?
    if (ball.posX+ball.width>areaH.width) {
        ball.speedX=0;
        ball.speedY=0;
        ball.posX=areaH.width-ball.width;
        gameState=3;
        rightRacket.speedY=0;
    }
    // ударился ли мячь об левую ракетку
    if (ball.posY>=leftRacket.posY && ball.posY<=leftRacket.posY+leftRacket.height-ball.radius && ball.posX<=leftRacket.width ) {
        ball.speedX=-ball.speedX;
    }
    // вылетел ли мяч левее стены?
    if ( ball.posX<0 ) {
        ball.speedX=0;
        ball.speedY=0;
        ball.posX=0;
        gameState=3;
        leftRacket.speedY=0;
    }

    ball.posY+=ball.speedY;
    // вылетел ли мяч ниже пола?
    if ( ball.posY+ball.height>areaH.height ) {
        ball.speedY=-ball.speedY;
        ball.posY=areaH.height-ball.height;
    }
    // вылетел ли мяч выше потолка?
    if ( ball.posY<0 ) {
        ball.speedY=-ball.speedY;
        ball.posY=0;
    }
    
    leftRacket.update();
    rightRacket.update();
    ball.update();

    requestAnimationFrame(tick);
}

leftRacket.update();
rightRacket.update();
ball.update();

