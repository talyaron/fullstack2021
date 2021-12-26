"use strict";

var data = 0;
document.getElementById("root").innerText = data;

function decrement() {
<<<<<<< Updated upstream
  data = data - 1;
=======
  data = data - 0.6;
>>>>>>> Stashed changes
  document.getElementById("root").innerText = data;
}

function increment() {
<<<<<<< Updated upstream
  data = data + 1;
  document.getElementById("root").innerText = data;
} ///////////////////////////////////////////////////////////////////

=======
  data = data + 0.6;
  document.getElementById("root").innerText = data;
}
>>>>>>> Stashed changes

var data = 0;
document.getElementById("num").innerText = data;

<<<<<<< Updated upstream
function decrement2() {
  data = data - 0.1;
  document.getElementById("num").innerText = data;
}

function increment2() {
  data = data + 0.1;
=======
function decrem() {
  data = data - 1;
  document.getElementById("num").innerText = data;
}

function increaz() {
  data = data + 1;
>>>>>>> Stashed changes
  document.getElementById("num").innerText = data;
}