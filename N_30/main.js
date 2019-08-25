"use strict";


var elems=document.getElementsByTagName("IMG"); //находим все картинки на странице
for ( var i = elems.length - 1; i >= 0; --i ) { //проходим циклом с конца
  var moveImg = elems[i];
  var posX = moveImg.offsetTop;
  var posY = moveImg.offsetLeft; //вычисляем координаты картинок
  moveImg.style.position='absolute';
  moveImg.style.top=posX + 'px';
  moveImg.style.left=posY + 'px'; //позиционируем абсолютно   
}



onmousedown = function(EO) {

  EO=EO||window.event;
  moveImg = EO.target; 
    
  var coords = getCoords(moveImg);
  var shiftX = EO.pageX - coords.left; //смещение курсора мыши
  var shiftY = EO.pageY - coords.top;

  document.body.appendChild(moveImg); //распологаем перемещаемую картинку над остальными
  moveAt(moveImg);

  function moveAt(e) { // передвинуть мяч под координаты курсора
                       // и сдвинуть на половину ширины/высоты для центрировани
    moveImg.style.left = e.pageX - shiftX + 'px';
    moveImg.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(EO) { //перемещать по экрану
    moveAt(EO);
  };

  moveImg.onmouseup = function() { //заканчиваем перенос
    document.onmousemove = null;
    moveImg.onmouseup = null;
  };
    
    moveImg.ondragstart = function() { //отменяем dragstart
      return false;
    };
}

function getCoords(e) {   // кроме IE8- узнаём положение каринки относительно страницы
  var coordsClickImg = e.getBoundingClientRect();
  return {
    top: coordsClickImg.top + pageYOffset,
    left: coordsClickImg.left + pageXOffset
  };

}
