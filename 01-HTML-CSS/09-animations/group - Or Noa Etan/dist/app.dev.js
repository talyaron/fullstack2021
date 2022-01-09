"use strict";

/* this is meant to seperate each letter in a fancy class */
var text = document.querySelector(".fancy");
var strText = text.textContent;
var splitText = strText.split("");
console.log(splitText);
text.textContent = "";
splitText.forEach(function (i) {
  text.innerHTML += '<span>' + "".concat(i) + '</span>';
}); // for (i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }

/* this is the animation part */

var _char = 0;
var timer = setInterval(onTick, 120);

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
/* open popup window */


var openModalButttons = document.querySelectorAll("[data-modal-target]");
var closeModalButttons = document.querySelectorAll("[data-close-button]");
var overlay = document.getElementById("overlay");
/* this part makes a popup screen apear in order to create a new task */

openModalButttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
overlay.addEventListener("click", function () {
  var modals = document.querySelectorAll(".modal.active");
  modals.forEach(function (modal) {
    closeModal(modal);
  });
});
closeModalButttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
/* make a new task box */


var box = document.createElement("li");
var flex = document.createElement("div");
var header = document.createElement("div");
var logo = document.createElement("div");
var p = document.createElement("p");
var titleArea = document.createElement("div");
var titleText = document.createElement("p");
var titleUrg = document.createElement("p");
var expln = document.createElement("div");
var explnTitle = document.createElement("h4");
var explnText = document.createElement("p");
var countdown = document.createElement("div");
var color = window.prompt("what color would you like ur task to be?", "orange, green, blue, black or white?");

function newBox() {
  box.className = "box";
  document.getElementById("landing__task-count").appendChild(box);
  flex.id = "box__flex";
  box.appendChild(flex);
  header.className = "box__header";
  flex.appendChild(header);
  logo.className = "box__logo-square ".concat(color);
  header.appendChild(logo);
  p.className = "box__logo";
  logo.appendChild(p);
  p.innerText = prompt("whats the logo?", "Bē");
  titleArea.className = "box__title";
  header.appendChild(titleArea);
  titleText.className = "box__title-text";
  titleArea.appendChild(titleText);
  titleText.innerText = prompt("whats the title?", "porfolio");
  titleUrg.className = "box__title-urg";
  titleArea.appendChild(titleUrg);
  titleUrg.innerText = prompt("whats the urgency?", "high");
  expln.className = "box__expln";
  flex.appendChild(expln);
  explnTitle.innerText = prompt("what is it you need to do?", "landing page");
  expln.appendChild(explnTitle);
  explnText.className = "box__expln-transp";
  explnText.innerText = prompt("what company is it for?", "nilson project");
  expln.appendChild(explnText);
  countdown.className = "box__countdown";
  countdown.innerText = prompt("In how many days do you need it done?") + ' days left';
  flex.appendChild(countdown);
}

var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault(newBox());
  closeModal(modal);
});