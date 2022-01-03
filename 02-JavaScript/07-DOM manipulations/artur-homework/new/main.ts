const header = document.getElementById('header')
document.getElementById("header").style.fontFamily = "Impact,Charcoal,sans-serif";
document.getElementById("wrapper").style.textAlign = "center";
document.getElementById("wrapper").style.padding = "15px";
document.getElementById("link").style.color = "red";
document.getElementById("fb").style.color = "blue";
document.getElementById("inst").style.color = "purple";
document.getElementById("body").style.fontSize = "50px";
document.getElementById("body").style.backgroundColor = "#FFF8F3";

document.getElementById("our-sm").style.fontSize = "200px";

const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
  document.getElementById("header").innerHTML = 'thank you for helping us to keep in Touch';}


