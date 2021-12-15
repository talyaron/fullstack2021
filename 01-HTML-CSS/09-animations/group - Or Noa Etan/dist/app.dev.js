"use strict";

var text = document.querySelector(".fancy");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";

for (var i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

var _char = 0;
var timer = setInterval(onTick, 50);

function onTick() {
  var span = text.querySelectorAll("span")[_char];

  span.classList.add("fade");
  _char++;

  if (_char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}