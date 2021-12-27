/* this is meant to seperate each letter in a fancy class */
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
/* this is the animation part */
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

/* open popup window */
const openModalButttons = document.querySelectorAll("[data-modal-target]");
const closeModalButttons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

/* this part makes a popup screen apear in order to create a new task */
openModalButttons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButttons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
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
let box = document.createElement("li");
let flex = document.createElement("div");
let header = document.createElement("div");
let logo = document.createElement("div");
let p = document.createElement("p");
let titleArea = document.createElement("div");
let titleText = document.createElement("p");
let titleUrg = document.createElement("p");
let expln = document.createElement("div");
let explnTitle = document.createElement("h4");
let explnText = document.createElement("p");
let countdown = document.createElement("div");
let color = window.prompt(
  "what color would you like ur task to be?",
  "orange, green, blue, black or white?"
);


function newBox() {
  box.className = "box";
  document.getElementById("landing__task-count").appendChild(box);
  flex.id = "box__flex";
  box.appendChild(flex);
  header.className = "box__header";
  flex.appendChild(header);
  logo.className = `box__logo-square ${color}`;
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
  countdown.innerText = "5 days left";
  flex.appendChild(countdown);
}


// function boxFlex() {
//   flex.id = "box__flex";
//   box.appendChild(flex);
// }
// boxFlex();

// function boxHeader() {
//   header.className = "box__header";
//   flex.appendChild(header);
// }
// boxHeader();

// function boxLogo() {
//   logo.className = `box__logo-square ${color}`;

//   header.appendChild(logo);
// }
// boxLogo();

// function boxLogoP() {
//   p.className = "box__logo";
//   logo.appendChild(p);
//   p.innerText = prompt("whats the logo?", "Bē");
// }
// boxLogoP();

// function boxTitleArea() {
//   titleArea.className = "box__title";
//   header.appendChild(titleArea);
// }
// boxTitleArea();

// function boxTitleText() {
//   titleText.className = "box__title-text";
//   titleArea.appendChild(titleText);
//   titleText.innerText = prompt("whats the title?", "porfolio");
// }
// boxTitleText();

// function boxTitleUrg() {
//   titleUrg.className = "box__title-urg";
//   titleArea.appendChild(titleUrg);
//   titleUrg.innerText = prompt("whats the urgency?", "high");
// }
// boxTitleUrg();

// function boxExpln() {
//   expln.className = "box__expln";
//   flex.appendChild(expln);
// }
// boxExpln();

// function boxExplnTitle() {
//   explnTitle.innerText = prompt("what is it you need to do?", "landing page");
//   expln.appendChild(explnTitle);
// }
// boxExplnTitle();

// function boxExplnText() {
//   explnText.className = "box__expln-transp";
//   explnText.innerText = prompt("what company is it for?", "nilson project");
//   expln.appendChild(explnText);
// }
// boxExplnText();

// function boxCountdown() {
//   countdown.className = "box__countdown";
//   countdown.innerText = "5 days left";
//   flex.appendChild(countdown);
// }
// boxCountdown();

/* make a list of tasks*/
/* connect each field to its place */
/* make submit create a new task box*/
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault(newBox());
  closeModal(modal)
});
