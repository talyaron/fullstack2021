"use strict";

document.getElementById('applyNum').addEventListener('click', function () {
  document.getElementById('numCon').innerHTML = document.getElementById('numInput').value;
  var v = document.getElementById('numCon').innerHTML;

  if (v >= 5) {
    document.getElementById('numCon').style.borderLeft = '2px solid aqua';
    document.getElementById('numCon').style.borderBottom = '2px solid aqua';
  } else if (v < 5) {
    document.getElementById('numCon').style.borderLeft = '2px solid orange';
    document.getElementById('numCon').style.borderBottom = '2px solid orange';
  }
});