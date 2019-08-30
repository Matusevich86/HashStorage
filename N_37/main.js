 "use strict";
var radius = document.getElementById('container');
var circle = document.getElementById('clock');

var RADIUS_CLOCK = radius.offsetWidth/2;
var NUMERAL_CLOCK = RADIUS_CLOCK/5;

var clockFace=document.createElementNS("http://www.w3.org/2000/svg",'circle');
        clockFace.setAttribute("fill","yellow");
        clockFace.setAttribute("cx",RADIUS_CLOCK);
        clockFace.setAttribute("cy",RADIUS_CLOCK);
        clockFace.setAttribute("r",RADIUS_CLOCK);
        clockFace.setAttribute("id","clockFace");
        circle.appendChild(clockFace);

var r=RADIUS_CLOCK - NUMERAL_CLOCK; // радиус расположения цифр
var cx=RADIUS_CLOCK;
var cy=RADIUS_CLOCK; // координаты центра

for ( var h=1; h<=12; h++ ) { // отображаемый час
  var a=h/12*Math.PI*2;   // отображаемый угол в радианах
  var x=cx+Math.sin(a)*r; // проверяем - для угла=0 sin=0
  var y=cy-Math.cos(a)*r; // проверяем - для угла=0 cos=1
                          // итого цифра 12 (=0) окажется в x=cx, y=cy-r.
    var numeralDiv=document.createElementNS("http://www.w3.org/2000/svg",'circle');
     numeralDiv.setAttribute("r",15);
     numeralDiv.setAttribute("cx",x);
     numeralDiv.setAttribute("cy",y);
     numeralDiv.setAttribute("fill","green");
     document.querySelector('svg').appendChild(numeralDiv);
    var svgText = document.createElementNS('http://www.w3.org/2000/svg','text');
     svgText.textContent=h;
    if(h>=10){
        svgText.setAttribute("x",x-8)
    }else svgText.setAttribute("x",x-4);    
     svgText.setAttribute("y",y+5);
     svgText.setAttribute("fill",'black');
     circle.appendChild(svgText);
}

var time = document.createElementNS("http://www.w3.org/2000/svg",'text');
    time.setAttribute("id",'time');
    time.setAttribute("stroke","black");
    time.setAttribute("x",RADIUS_CLOCK);
    time.setAttribute("y",RADIUS_CLOCK/2+NUMERAL_CLOCK);
    time.setAttribute("text-anchor","middle");
    circle.appendChild(time);

var hourArrow = document.createElementNS("http://www.w3.org/2000/svg",'line');
    hourArrow.setAttribute("stroke","black");
    hourArrow.setAttribute("x1",RADIUS_CLOCK);
    hourArrow.setAttribute("y1",RADIUS_CLOCK);
    hourArrow.setAttribute("x2",RADIUS_CLOCK);
    hourArrow.setAttribute("y2",RADIUS_CLOCK/2);
    hourArrow.setAttribute("stroke-width",'8');
    hourArrow.setAttribute("stroke-linecap",'round');
    hourArrow.setAttribute("id",'hourArrow');
    hourArrow.setAttribute('transform', 'rotate(240 '+ RADIUS_CLOCK +' '+ RADIUS_CLOCK +')');
    circle.appendChild(hourArrow);

var minuteArrow = document.createElementNS("http://www.w3.org/2000/svg",'line');
    minuteArrow.setAttribute("stroke","black");
    minuteArrow.setAttribute("x1",RADIUS_CLOCK);
    minuteArrow.setAttribute("y1",RADIUS_CLOCK);
    minuteArrow.setAttribute("x2",RADIUS_CLOCK);
    minuteArrow.setAttribute("y2",NUMERAL_CLOCK*2);
    minuteArrow.setAttribute("stroke-width",'5');
    minuteArrow.setAttribute("stroke-linecap",'round');
    minuteArrow.setAttribute("id",'minuteArrow');
    minuteArrow.setAttribute('transform', 'rotate(180 '+ RADIUS_CLOCK +' '+ RADIUS_CLOCK +')');
    circle.appendChild(minuteArrow);

var secondArrow = document.createElementNS("http://www.w3.org/2000/svg",'line');
    secondArrow.setAttribute("stroke","red");
    secondArrow.setAttribute("x1",RADIUS_CLOCK);
    secondArrow.setAttribute("y1",RADIUS_CLOCK);
    secondArrow.setAttribute("x2",RADIUS_CLOCK);
    secondArrow.setAttribute("y2",NUMERAL_CLOCK);
    secondArrow.setAttribute("stroke-width",'2');
    secondArrow.setAttribute("id",'secondArrow');
    secondArrow.setAttribute('transform', 'rotate(6 '+ RADIUS_CLOCK +' '+ RADIUS_CLOCK +')');
    circle.appendChild(secondArrow);

updateArrows(); // обновляем стрелки при открытии страницы

  function updateArrows() {
  var currTime=new Date();
    
  var t_sec = 6*currTime.getSeconds();  //Определяем угол для секунд
  var t_min = 6*(currTime.getMinutes() + (1/60)*currTime.getSeconds()); //Определяем угол для минут
  var t_hour = 30*(currTime.getHours() + (1/60)*currTime.getMinutes());  //Определяем угол для часов
    
  var secondArrow = document.getElementById('secondArrow');  // рисуем секунды
  secondArrow.setAttribute('transform', 'rotate('+ t_sec +' '+ RADIUS_CLOCK +' '+ RADIUS_CLOCK +')');
      
  var minuteArrow = document.getElementById('minuteArrow');  //рисуем минуты
  minuteArrow.setAttribute('transform', 'rotate('+ t_min +' '+ RADIUS_CLOCK +' '+ RADIUS_CLOCK +')');
      
  var hourArrow = document.getElementById('hourArrow');  //рисуем часы
  hourArrow.setAttribute('transform', 'rotate('+ t_hour +' '+ RADIUS_CLOCK +' '+ RADIUS_CLOCK +')');
    
  var time = document.getElementById("time");
        time.textContent = currTime.toLocaleTimeString();

  // обновляем стрелки согласно currTime

  // планируем обновление стрелок при следующей смене секунды
  setTimeout(updateArrows,1020-currTime.getMilliseconds());  // 1020 - потому что таймеры неточны, надо обновлять чуть позже смены секунды
    
  
  }


