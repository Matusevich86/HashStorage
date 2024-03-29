 "use strict";

const fieldWidth = 400;
const fieldHeight = 245;
const rocketWidth = 7;
const rocketHeight = 73;
const ballWidth = 23;
var gameState = 1; //состояние игры, где 1 - игра загружена, 2 - игра начата(кнопка старт не активна), 3 - забит гол(ракетки не активны)

var gameArea = document.createElementNS("http://www.w3.org/2000/svg",'rect');//рисуем поле
    gameArea.setAttribute("stroke","black");
    gameArea.setAttribute("fill","yellow");
    gameArea.setAttribute("x1","0");
    gameArea.setAttribute("y1","0");
    gameArea.setAttribute("width",fieldWidth);
    gameArea.setAttribute("height",fieldHeight);
    gameArea.setAttribute("id",'gameArea');
    gameField.appendChild(gameArea);

var rocketLeftElem=document.createElementNS("http://www.w3.org/2000/svg",'line');//рисуем левую рокетку
    rocketLeftElem.setAttribute("stroke","green");
    rocketLeftElem.setAttribute("stroke-width",rocketWidth);
    rocketLeftElem.setAttribute("id",'rocketLeft');
    gameField.appendChild(rocketLeftElem);

var rocketRightElem=document.createElementNS("http://www.w3.org/2000/svg",'line');//рисуем правую рокетку
    rocketRightElem.setAttribute("stroke","blue");
    rocketRightElem.setAttribute("stroke-width",rocketWidth);
    rocketRightElem.setAttribute("id",'rocketRight');
    gameField.appendChild(rocketRightElem);

var ballElem=document.createElementNS("http://www.w3.org/2000/svg",'circle');//рисуем мячик
    ballElem.setAttribute("fill","red");
    ballElem.setAttribute("id","ball");
    gameField.appendChild(ballElem);

var leftRacket={                //позиционирум левую рокетку
    posX : 0,
    posY : 20,
    speedY : 0,
    width : rocketWidth,
    height: rocketHeight,

    update : function() {
        rocketLeftElem.setAttribute("x1",this.posX + rocketWidth/2);
        rocketLeftElem.setAttribute("y1",this.posY);
        rocketLeftElem.setAttribute("x2",this.posX + rocketWidth/2);
        rocketLeftElem.setAttribute("y2",this.posY + rocketHeight);   
    }
}
var rightRacket={                    //позиционирум правую рокетку
    posX : fieldWidth - rocketWidth,
    posY : 50,
    speedY : 0,
    width : rocketWidth,
    height: rocketHeight,

    update : function() {
        rocketRightElem.setAttribute("x1",this.posX + rocketWidth/2);
        rocketRightElem.setAttribute("y1",this.posY);
        rocketRightElem.setAttribute("x2",this.posX + rocketWidth/2);
        rocketRightElem.setAttribute("y2",this.posY + rocketHeight);
    }
}
var ball={                            //позиционирум мячик
    posX : fieldWidth/2,
    posY : fieldHeight/2,
    speedX : 0,
    speedY : 0,
    radius: ballWidth/2,

    update : function() {
        ballElem.setAttribute("cx", this.posX);
        ballElem.setAttribute("cy", this.posY);
        ballElem.setAttribute("r", this.radius);
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
        ball.posX = fieldWidth/2;
        ball.posY = fieldHeight/2;
        ball.speedX = 2;
        ball.speedY = 1;
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
    if (ball.posX + ball.radius >= areaH.width - rightRacket.width && ball.posY > rightRacket.posY && ball.posY < rightRacket.posY + rightRacket.height) {
        ball.speedX=-ball.speedX;
    }
    // вылетел ли мяч правее стены?
    if (ball.posX+ball.radius>areaH.width) {
        ball.speedX=0;
        ball.speedY=0;
        ball.posX=areaH.width-ball.radius;
        gameState=3;
        function changeScoreLeft() {
            var block1Elem=document.getElementById('leftScore');
            block1Elem.innerHTML= ++block1Elem.innerHTML;
        }changeScoreLeft();
    }
    // ударился ли мячь об левую ракетку
    if (ball.posY>=leftRacket.posY && ball.posY<=leftRacket.posY+leftRacket.height && ball.posX-ball.radius<=leftRacket.width ) {
        ball.speedX=-ball.speedX;
    }
    // вылетел ли мяч левее стены?
    if ( ball.posX-ball.radius<0 ) {
        ball.speedX=0;
        ball.speedY=0;
        ball.posX=ball.radius;
        gameState=3;
        function changeScoreRight() {
            var block2Elem=document.getElementById('rightScore');
            block2Elem.innerHTML= ++block2Elem.innerHTML;
        }changeScoreRight();
    }

    ball.posY+=ball.speedY;
    // вылетел ли мяч ниже пола?
    if ( ball.posY+ball.radius>areaH.height ) {
        ball.speedY=-ball.speedY;
        ball.posY=areaH.height-ball.radius;
    }
    // вылетел ли мяч выше потолка?
    if ( ball.posY-ball.radius<0 ) {
        ball.speedY=-ball.speedY;
        ball.posY=ball.radius;
    }
    
    leftRacket.update();
    rightRacket.update();
    ball.update();

    requestAnimationFrame(tick);
}

leftRacket.update();
rightRacket.update();
ball.update();

