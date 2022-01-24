"use strict";

var helloGuest = document.querySelector('.guest');
var popup = document.querySelector('.popup_wrapper');
var closePopup = document.querySelector('.popup_close');
console.log(popup);
helloGuest.addEventListener('mouseover', function () {
  popup.style.display = 'block';
});