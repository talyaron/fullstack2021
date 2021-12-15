"use strict";

//------------- exercise 2
function monthsName() {
  var whatMonth = window.prompt("Whats the number of your favorite month?", "Enter month here");
  var answer = "Your favorite month is ";
  var months = ['Not a month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  alert(answer + months[whatMonth]);
}

monthsName();