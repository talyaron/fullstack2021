"use strict";

var touchBox = document.querySelectorAll(".boxes_box");
var changeWords = document.getElementById("write");
var touchCircle = document.getElementById("circle");
touchBox[0].addEventListener("mouseover", function () {
  changeWords.innerHTML = "g";
});
touchBox[1].addEventListener("mouseover", function () {
  changeWords.innerHTML = "go";
});
touchBox[2].addEventListener("mouseover", function () {
  changeWords.innerHTML = "goo";
});
touchBox[3].addEventListener("mouseover", function () {
  changeWords.innerHTML = "good";
});
touchCircle.addEventListener("mouseover", function () {
  changeWords.innerHTML = "goodbye";
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = touchBox[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;
    i.addEventListener("mouseout", function () {
      changeWords.innerHTML = "";
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}