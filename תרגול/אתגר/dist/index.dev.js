"use strict";

var text = document.querySelector('.textPush');
var arr = [];

function hendleSubmit(e) {
  e.preventDefault();
  var name = e.target.children.name.value;
  var lastname = e.target.children.lastname.value;
  var age = e.target.children.age.value;
  console.log(text);

  try {
    var obj = {
      name: name,
      lastName: lastname,
      age: age
    };

    if (name.length == 0 || lastname == '' || age == '') {
      alert("need to fill all the inputs");
    } else {
      text.innerHTML += "\n            <div class=\"items\">\n                <p><b>Name:</b> ".concat(obj.name, "</p>\n                <p><b>Last name:</b> ").concat(obj.lastName, "</p>\n                <p><b>Age:</b> ").concat(obj.age, "</p>\n            </div>\n            ");
      arr.push(obj);
      console.log(arr);
    }
  } catch (error) {
    console.log(error);
  }
}

console.log(arr);