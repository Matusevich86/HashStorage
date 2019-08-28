 "use strict";
var circle = document.getElementById('clock');
const RADIUS_CLOCK = circle.offsetWidth/2;
const NUMERAL_CLOCK = RADIUS_CLOCK/5;
var minuteArrowWidth = 5;
var hourArrowWidth = 8;


var r=RADIUS_CLOCK - NUMERAL_CLOCK; // радиус расположения цифр
var cx=RADIUS_CLOCK - NUMERAL_CLOCK/2;
var cy=RADIUS_CLOCK - NUMERAL_CLOCK/2; // координаты центра

for ( var h=1; h<=12; h++ ) { // отображаемый час
  var a=h/12*Math.PI*2; // отображаемый угол в радианах
  var x=cx-Math.cos(a)*r; // проверяем - для угла=0 sin=0
  var y=cy+Math.sin(a)*r; // проверяем - для угла=0 cos=1
  // итого цифра 12 (=0) окажется в x=cx, y=cy-r.
//  circle.innerHTML(h, x - 5 , y + 10);
    var numeralDiv=document.createElement('div');
    numeralDiv.style.width=NUMERAL_CLOCK +'px';
    numeralDiv.style.height=NUMERAL_CLOCK +'px';
    numeralDiv.style.position='absolute';
    numeralDiv.style.top=x+'px';
    numeralDiv.style.left=y+'px';
    numeralDiv.style.lineHeight=NUMERAL_CLOCK+'px';
    numeralDiv.textContent=h;
    numeralDiv.className='numeral';
    circle.appendChild(numeralDiv);
}

updateArrows(); // обновляем стрелки при открытии страницы

  function updateArrows() {
  var currTime=new Date();
    
  var t_sec = 6*currTime.getSeconds();  //Определяем угол для секунд
  var t_min = 6*(currTime.getMinutes() + (1/60)*currTime.getSeconds()); //Определяем угол для минут
  var t_hour = 30*(currTime.getHours() + (1/60)*currTime.getMinutes());  //Определяем угол для часов
    
  var secondArrow = document.getElementById('second');  // рисуем секунды
  secondArrow.style.width=NUMERAL_CLOCK/NUMERAL_CLOCK +'px';
  secondArrow.style.height=RADIUS_CLOCK-hourArrowWidth*2 +'px';
  secondArrow.style.bottom=RADIUS_CLOCK+'px';
  secondArrow.style.left=RADIUS_CLOCK+'px';
  secondArrow.style.transform='rotate('+t_sec+'deg)';
      
  var minuteArrow = document.getElementById('minute');  //рисуем минуты
  minuteArrow.style.width=minuteArrowWidth +'px';
  minuteArrow.style.height=RADIUS_CLOCK-NUMERAL_CLOCK +'px';
  minuteArrow.style.bottom=RADIUS_CLOCK+'px';
  minuteArrow.style.left=RADIUS_CLOCK+'px';
  minuteArrow.style.transform='rotate('+t_min+'deg)';
      
  var hourArrow = document.getElementById('hour');  //рисуем часы
  hourArrow.style.width=hourArrowWidth +'px';
  hourArrow.style.height=RADIUS_CLOCK/2 +'px';
  hourArrow.style.bottom=RADIUS_CLOCK+'px';
  hourArrow.style.left=RADIUS_CLOCK+'px';
  hourArrow.style.transform='rotate('+t_hour+'deg)';
    
  

  // обновляем стрелки согласно currTime

  // планируем обновление стрелок при следующей смене секунды
  setTimeout(updateArrows,1020-currTime.getMilliseconds());  // 1020 - потому что таймеры неточны, надо обновлять чуть позже смены секунды
    
  
  }


window.setInterval(
	function time(){
		var d = new Date();
		var time = document.getElementById("time");
        time.innerHTML = d.toLocaleTimeString();
        time.style.fontSize=NUMERAL_CLOCK +'px';
        time.style.top=RADIUS_CLOCK/2 +'px';
        var widthTime = document.getElementById('time').offsetWidth;
        time.style.left=RADIUS_CLOCK-widthTime/2 +'px';
});100;
