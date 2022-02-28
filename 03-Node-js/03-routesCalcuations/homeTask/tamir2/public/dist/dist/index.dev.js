"use strict";

axios.get("/tamir").then(function (_a) {
  var data = _a.data;
});

function handlefind(ev) {
  axios.get("/tamir").then(function (_a) {
    var data = _a.data;
    console.log(data); // const user = ev.target.value
    // const rexEa = new RegExp(user, 'i')
  });
}

console.log('hay');