"use strict";

var LiorSgrades = {
  name: 'Lior',
  last: 'Krasnopolski',
  math: 100,
  chemistry: 85,
  Biology: 75,
  English: 90
};
console.log("".concat(LiorSgrades.name, "s ").concat(LiorSgrades.last, " are:\n ").concat(LiorSgrades.math, " for Maath\n ").concat(LiorSgrades.chemistry, " for Chemistry\n ").concat(LiorSgrades.Biology, " for Biology\n ").concat(LiorSgrades.English, " for English"));

function checkIfStudenGreat(math, chemistry, biology, english) {
  var sum = LiorSgrades.math + LiorSgrades.chemistry + LiorSgrades.Biology + LiorSgrades.English;
  var average = sum / 4;

  if (average > 85) {
    console.log('Great student');
  } else if (average < 85 && average > 65) {
    console.log('Good student');
  } else if (average < 65 && average > 45) {
    console.log('Bad student');
  } else {
    console.log('I suggest you to take some time off');
  }
}

console.log(checkIfStudenGreat(LiorSgrades.math, LiorSgrades.chemistry, LiorSgrades.Biology, LiorSgrades.English)); //Q

var j = window.prompt("Enter the month's number");

function month(i) {
  i = parseInt(i);
  var list = ["תשרי", "חשוון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיוון", "תמוז", "אב", "אלול"];
  console.log(list[i - 1]);
}

month(j);