 "use strict";

const fieldWidth = 400;
const fieldHeight = 245;
const rocketWidth = 7;
const rocketHeight = 73;
const ballWidth = 23;
var gameState = 1; //состояние игры, где 1 - игра загружена, 2 - игра начата(кнопка старт не активна), 3 - забит гол(ракетки не активны)

var gameArea = document.createElementNS("http://www.w3.org/2000/svg",'rect');
    gameArea.setAttribute("stroke","black");
    gameArea.setAttribute("fill","yellow");
    gameArea.setAttribute("x1","0");
    gameArea.setAttribute("y1","0");
    gameArea.setAttribute("width",fieldWidth);
    gameArea.setAttribute("height",fieldHeight);
    gameArea.setAttribute("id",'gameArea');
    gameField.appendChild(gameArea);

var leftRacket={
    posX : 0,
    posY : 20,
    speedY : 0,
    width : rocketWidth,
    height: rocketHeight,

    update : function() {
        var rocketLeftElem=document.createElementNS("http://www.w3.org/2000/svg",'line');
        rocketLeftElem.setAttribute("stroke","green");
        rocketLeftElem.setAttribute("x1",this.posX + rocketWidth/2);
        rocketLeftElem.setAttribute("y1",this.posY);
        rocketLeftElem.setAttribute("x2",this.posX + rocketWidth/2);
        rocketLeftElem.setAttribute("y2",this.posY + rocketHeight);
        rocketLeftElem.setAttribute("stroke-width",rocketWidth);
        rocketLeftElem.setAttribute("id",'rocketLeftElem');
        rocketLeftElem.setAttribute('transform', 'translate(0 '+ this.speedY +')');
        gameField.appendChild(rocketLeftElem);
    }
}
var rightRacket={
    posX : fieldWidth - rocketWidth,
    posY : 50,
    speedY : 0,
    width : rocketWidth,
    height: rocketHeight,

    update : function() {
        var rocketRightElem=document.createElementNS("http://www.w3.org/2000/svg",'line');
        rocketRightElem.setAttribute("stroke","blue");
        rocketRightElem.setAttribute("x1",this.posX + rocketWidth/2);
        rocketRightElem.setAttribute("y1",this.posY);
        rocketRightElem.setAttribute("x2",this.posX + rocketWidth/2);
        rocketRightElem.setAttribute("y2",this.posY + rocketHeight);
        rocketRightElem.setAttribute("stroke-width",rocketWidth);
        rocketRightElem.setAttribute("id",'rocketRightElem');
        rocketRightElem.setAttribute('transform', 'translate(0 '+ this.speedY +')');
        gameField.appendChild(rocketRightElem);
    }
}
var ball={
    posX : fieldWidth/2,
    posY : fieldHeight/2,
    speedX : 0,
    speedY : 0,
    radius: ballWidth/2,

    update : function() {
        var ballElem=document.createElementNS("http://www.w3.org/2000/svg",'circle');
        ballElem.setAttribute("fill","red");
        ballElem.setAttribute("cx", this.posX);
        ballElem.setAttribute("cy", this.posY);
        ballElem.setAttribute("r", this.radius);
        ballElem.setAttribute("id","ballElem");
        gameField.appendChild(ballElem);
        ballElem.setAttribute('transform', 'translate('+ this.speedX +', '+ this.speedY +')');
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

requestAnimationFrame(tick);

function start() {
    if(gameState == 2) {
        event.preventDefault();
    }
    if(gameState == 1 || gameState == 3) {
        var ballElem = document.getElementById('ballElem');
        ballElem.setAttribute("cx", this.posX);
        ballElem.setAttribute("cy", this.posY);
        ball.speedX = 3;
        ball.speedY = 2;
        gameState = 2;
    }   
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
        function changeScoreLeft() {
            var block1Elem=document.getElementById('leftScore');
            block1Elem.innerHTML= ++block1Elem.innerHTML;
        }changeScoreLeft();
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
        function changeScoreRight() {
            var block2Elem=document.getElementById('rightScore');
            block2Elem.innerHTML= ++block2Elem.innerHTML;
        }changeScoreRight();
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

