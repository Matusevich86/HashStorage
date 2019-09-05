 "use strict";


function displayCanvas(){
    var canvasHTML = document.getElementById('myClock');
    var contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0,0,canvasHTML.width, canvasHTML.height);
	
    //Расчет координат центра и радиуса часов
    var radiusClock = canvasHTML.width/2-0.5;
    var xCenterClock = canvasHTML.width/2;
    var yCenterClock = canvasHTML.height/2;
    console.log(radiusClock);
	
    //Очистка экрана. 
    contextHTML.fillStyle = "#ffffff";
    contextHTML.fillRect(0,0,canvasHTML.width,canvasHTML.height);
	
    //Рисуем контур часов
    contextHTML.strokeStyle =  "#ff8c00";
    contextHTML.lineWidth = 1;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2*Math.PI, true);
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.fillStyle='#ff8c00';
    contextHTML.fill();
    contextHTML.stroke();
    contextHTML.closePath();
	
    //Рисуем рисочки часов
    var radiusNum = radiusClock-25; //Радиус расположения рисочек	
    var radiusPoint;
    for(var tm = 1; tm <= 12; tm++){
	  contextHTML.beginPath();
	  radiusPoint = 15; //для выделения часовых рисочек
	  var xPointM = xCenterClock + radiusNum * Math.cos(-30*tm*(Math.PI/180) + Math.PI/2);
	  var yPointM = yCenterClock - radiusNum * Math.sin(-30*tm*(Math.PI/180) + Math.PI/2);
	  contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2*Math.PI, true);
      contextHTML.strokeStyle =  "#7fffd4";
      contextHTML.fillStyle='#7fffd4';
      contextHTML.fill();
	  contextHTML.stroke();
	  contextHTML.closePath();
    } 
	
    //Оцифровка циферблата часов
    for(var th = 1; th <= 12; th++){
    contextHTML.fillStyle =  "#000000";
	contextHTML.beginPath();
	contextHTML.font = '20px Arial';
	var xText = xCenterClock + radiusNum * Math.cos(-30*th*(Math.PI/180) + Math.PI/2);
	var yText = yCenterClock - radiusNum * Math.sin(-30*th*(Math.PI/180) + Math.PI/2);
	if(th <= 9){
		contextHTML.fillText(th, xText - 5 , yText + 8);
	}else{
		contextHTML.fillText(th, xText - 12 , yText + 8);
	}
        
     	contextHTML.stroke();
	contextHTML.closePath();	
    }
    
    //рисуем цифровые часы
    var currTime=new Date();
	contextHTML.beginPath();
    contextHTML.fillStyle =  "#000000";
    contextHTML.fillText(currTime.toLocaleTimeString(), xCenterClock-40, yCenterClock-40);
	contextHTML.stroke();
	contextHTML.closePath();
    
    //Рисуем стрелки
    var lengthSeconds = radiusNum - 10;
    var lengthMinutes = radiusNum - 15;
    var lengthHour = lengthMinutes / 1.5;
    var d = new Date();                //Получаем экземпляр даты
    var t_sec = 6*d.getSeconds();                           //Определяем угол для секунд
    var t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds()); //Определяем угол для минут
    var t_hour = 30*(d.getHours() + (1/60)*d.getMinutes()); //Определяем угол для часов
	
    //Рисуем секунды
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#FF0000";
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
				yCenterClock - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //Рисуем минуты
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#000000";
    contextHTML.lineWidth = 3;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
				 yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //Рисуем часы
    contextHTML.beginPath();
    contextHTML.lineWidth = 5;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
				 yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();	
	
	  
    return;
}


updateArrows(); // обновляем стрелки при открытии страницы

  function updateArrows() {
  var currTime=new Date();
    
   displayCanvas();

  // обновляем стрелки согласно currTime

  // планируем обновление стрелок при следующей смене секунды
  setTimeout(updateArrows,1020-currTime.getMilliseconds());  // 1020 - потому что таймеры неточны, надо обновлять чуть позже смены секунды
    
  
  }


