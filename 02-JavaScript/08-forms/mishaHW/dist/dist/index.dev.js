"use strict";

function createCard(event) {
  event.preventDefault();
  var formObj = {};
  console.log(event.target);

  for (var i = 0; i < event.target.length; i++) {
    var field = event.target[i]; // console.log(field.name, field.value)

    if (field.name !== 'Submit') formObj[field.name] = field.value;
  }

  console.log(formObj);
  var fname = formObj.name;
  console.log(fname); // console.log(formObj[1]);
} // fname.innerHTML = formObj[0];