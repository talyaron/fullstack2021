"use strict";

axios.get("/getMe").then(function (_ref) {
  var data = _ref.data;
  console.log(data[0].name);
});
axios.get("/getFriends").then(function (_ref2) {
  var data = _ref2.data;
  console.log(data);
});