"use strict";

//------------- exercise 2
function monthsName() {
  var whatMonth = window.prompt("Whats the number of your favorite month?", "Enter month here");
  var answer = "Your favorite month is ";
  var months = ['Tishrey', 'Heshvan', 'Kislev', 'Tevet', 'Shvat', 'Hadar', 'Nisan', 'Iyar', 'sivan', 'tamuz', 'av', 'elul'];
  console.log(answer + months[whatMonth - 1]);
}

monthsName();