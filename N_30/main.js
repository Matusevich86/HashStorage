"use strict";


var elems=document.getElementsByTagName("IMG");
for ( var i = elems.length - 1; i >= 0; --i ) {
  var moveImg = elems[i];
  var posX = moveImg.offsetTop;
  var posY = moveImg.offsetLeft;
  moveImg.style.position='absolute';
  moveImg.style.top=posX + 'px';
  moveImg.style.left=posY + 'px';  
    console.log(moveImg);
    
}



onmousedown = function(EO) {

  EO=EO||window.event;
  moveImg = EO.target; 
    
  var coords = getCoords(moveImg);
  var shiftX = EO.pageX - coords.left;
  var shiftY = EO.pageY - coords.top;

  moveImg.style.position = 'absolute';
  document.body.appendChild(moveImg);
  moveAt(EO);

  moveImg.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    moveImg.style.left = e.pageX - shiftX + 'px';
    moveImg.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(EO) {
    moveAt(EO);
  };

  moveImg.onmouseup = function() {
    document.onmousemove = null;
    EO.onmouseup = null;
  };

}

moveImg.ondragstart = function() {
  return false;
};




function getCoords(EO) {   // кроме IE8-
  var box = EO.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}
