"use strict";

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
var color = prompt("what color would you like ur task to be?", "orange or blue?");

function newBox() {
  box.className = "box";
  document.getElementById("landing__task-count").appendChild(box);
}

newBox();

function boxFlex() {
  flex.id = "box__flex";
  box.appendChild(flex);
}

boxFlex();

function boxHeader() {
  header.className = "box__header";
  flex.appendChild(header);
}

boxHeader();

function boxLogo() {
  logo.className = "box__logo-square ".concat(color); // logo.className = `box__logo-square ${logoColor}`;

  header.appendChild(logo);
}

boxLogo();

function boxLogoP() {
  p.className = "box__logo";
  logo.appendChild(p);
  p.innerText = prompt("whats the logo?", "Bē");
}

boxLogoP();

function boxTitleArea() {
  titleArea.className = "box__title";
  header.appendChild(titleArea);
}

boxTitleArea();

function boxTitleText() {
  titleText.className = "box__title-text";
  titleArea.appendChild(titleText);
  titleText.innerText = prompt("whats the title?", "porfolio");
}

boxTitleText();

function boxTitleUrg() {
  titleUrg.className = "box__title-urg";
  titleArea.appendChild(titleUrg);
  titleUrg.innerText = prompt("whats the urgency?", "high");
}

boxTitleUrg();

function boxExpln() {
  expln.className = "box__expln";
  flex.appendChild(expln);
}

boxExpln();

function boxExplnTitle() {
  explnTitle.innerText = prompt("what is it you need to do?", "landing page");
  expln.appendChild(explnTitle);
}

boxExplnTitle();

function boxExplnText() {
  explnText.className = "box__expln-transp";
  explnText.innerText = prompt("what company is it for?", "nilson project");
  expln.appendChild(explnText);
}

boxExplnText();

function boxCountdown() {
  countdown.className = "box__countdown";
  countdown.innerText = "5 days left";
  flex.appendChild(countdown);
}

boxCountdown();
/* make a list of tasks*/

/* connect each field to its place */

/* make submit create a new task box*/