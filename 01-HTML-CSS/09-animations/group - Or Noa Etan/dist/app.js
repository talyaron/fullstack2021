/* this is meant to seperate each letter in a fancy class */
var text = document.querySelector(".fancy");
var strText = text.textContent;
var splitText = strText.split("");
console.log(splitText);
text.textContent = "";
splitText.forEach(function (i) {
    text.innerHTML += '<span>' + ("" + i) + '</span>';
});
// for (i = 0; i < splitText.length; i++) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
/* this is the animation part */
var char = 0;
var timer = setInterval(onTick, 120);
function onTick() {
    var span = text.querySelectorAll("span")[char];
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
var openModalButttons = document.querySelectorAll("[data-modal-target]");
var closeModalButttons = document.querySelectorAll("[data-close-button]");
var overlay = document.getElementById("overlay");
/* this part makes a popup screen apear in order to create a new task */
openModalButttons.forEach(function (button) {
    var modal = document.querySelector(button.dataset.modalTarget);
    button.addEventListener("click", function () {
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
    if (modal == null)
        return;
    modal.classList.add("active");
    overlay.classList.add("active");
}
function closeModal(modal) {
    if (modal == null)
        return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
/* make a new task box */
var myForm = document.getElementById("myForm");
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
// make popup fill the new box
var daysLeft = myForm.querySelector("#box__countdown");
var color = myForm.querySelector("#box__logo-square-color");
function newBox() {
    box.className = "box";
    document.getElementById("landing__task-count").appendChild(box);
    flex.id = "box__flex";
    box.appendChild(flex);
    header.className = "box__header";
    flex.appendChild(header);
    logo.className = "box__logo-square " + (color.value || "blue");
    // logo.style.backgroundColor = `${color.value}`
    header.appendChild(logo);
    p.className = "box__logo";
    logo.appendChild(p);
    p.innerText = myForm.querySelector("#box__logo").value || 'UD';
    titleArea.className = "box__title";
    header.appendChild(titleArea);
    titleText.className = "box__title-text";
    titleArea.appendChild(titleText);
    titleText.innerText = myForm.querySelector("#box__title-text").value;
    titleUrg.className = "box__title-urg";
    titleArea.appendChild(titleUrg);
    titleUrg.innerText = myForm.querySelector("#box__title-urg").value;
    expln.className = "box__expln";
    flex.appendChild(expln);
    explnTitle.innerText = myForm.querySelector("#box__expln").value || "------";
    expln.appendChild(explnTitle);
    explnText.className = "box__expln-transp";
    explnText.innerText = myForm.querySelector("#box__expln-transp").value || "------";
    expln.appendChild(explnText);
    countdown.className = "box__countdown";
    countdown.innerText = (daysLeft.value || "--") + " days left";
    flex.appendChild(countdown);
}
myForm.addEventListener("submit", function (e) {
    e.preventDefault(newBox());
    closeModal(modal);
});
console.log?.(color.value);
console.log(daysLeft.value);
