"use strict";

var myPics = document.getElementById('myPics');
var context = myPics.getContext('2d');
var x = 0;
var y = 0;
var isDrawing = false;
myPics.addEventListener('mousedown', function (e) {
  console.log(e);
  x = e.offsetX;
  y = e.offsetY;
  console.log("e.offsetX is ".concat(x));
  console.log("e.offsetY is ".concat(y));
  console.log(x, y);
  isDrawing = true;
}); //hold the button of mouse

myPics.addEventListener('mousemove', function (e) {
  if (isDrawing == true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
}); //move the mouse

myPics.addEventListener('mouseup', function (e) {
  if (isDrawing == true) {
    isDrawing = false;
  }
}); //let go the button of mouse

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath(); //מתחיל דרך חדשה

  context.strokeStyle = 'black'; //צבע של המרקר

  context.lineWidth = 1; //עובי של המרקר

  context.moveTo(x1, y1); //שם את ההקודה בפרמנטרים שניתנו

  context.lineTo(x2, y2); //מעביר קו לנקודה שצויינה

  context.stroke(); //מצייר את המעבר/מראה

  context.closePath(); //סוגר את הדרך
}