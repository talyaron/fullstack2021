"use strict";

//*******************CLIENT*********************************************//
axios.get('/getusers').then(function (_ref) {
  var data = _ref.data;
  console.log(data);
});

function handleSelectYears(ev) {
  try {
    var year = ev.target.value; //console.log(gender);

    if (year) {
      //query to server to return only a certain gender
      axios.get("/getusers?year=".concat(year)).then(function (_ref2) {
        var data = _ref2.data;
        // console.log(data);
        var root = document.querySelector('#root');
        var html = '';

        if (Array.isArray(data)) {
          //verify that the query to server returns an array
          data.forEach(function (user) {
            //html+=`<p>${user.year}</p>`
            html += "<div class=\"card\"><img id=\"pic\" src= \"".concat(user.photo, "\" ></img><p class=\"bottomHeader\">").concat(user.name, "</P></div>");
          });
          root.innerHTML = html;
        } else {
          throw new Error('data is not an array');
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
}

function handleSelectCategory(ev) {
  try {
    var category = ev.target.value; //console.log(gender);

    if (category) {
      //query to server to return only a certain gender
      axios.get("/getusers?category=".concat(category)).then(function (_ref3) {
        var data = _ref3.data;
        // console.log(data);
        var root = document.querySelector('#root');
        var html = '';

        if (Array.isArray(data)) {
          //verify that the query to server returns an array
          data.forEach(function (user) {
            //html+=`<p>${user.category}</p>`
            html += "<div class=\"card\"><img id=\"pic\" src=\"".concat(user.photo, "\" ></img><p class=\"bottomHeader\">").concat(user.name, "</P></div>");
          });
          root.innerHTML = html;
        } else {
          throw new Error('data is not an array');
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
}