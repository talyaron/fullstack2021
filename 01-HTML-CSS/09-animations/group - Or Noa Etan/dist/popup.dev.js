"use strict";

/* open popup window */
var openModalButttons = document.querySelectorAll('[data-modal-target]');
var closeModalButttons = document.querySelectorAll('[data-close-button]');
var overlay = document.getElementById('overlay');
openModalButttons.forEach(function (button) {
  button.addEventListener('click', function () {
    var modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
overlay.addEventListener('click', function () {
  var modals = document.querySelectorAll('.modal.active');
  modals.forEach(function (modal) {
    closeModal(modal);
  });
});
closeModalButttons.forEach(function (button) {
  button.addEventListener('click', function () {
    var modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}