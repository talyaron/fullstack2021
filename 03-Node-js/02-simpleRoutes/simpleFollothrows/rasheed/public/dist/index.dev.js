"use strict";

var id = 0;
axios.get("/getMe").then(function (_ref) {
  var data = _ref.data;
  console.log({
    data: data
  });
  id = data[0].id;
  console.log(id);
})["catch"](function (err) {
  console.error(err);
});
axios.get("/getFriends").then(function (_ref2) {
  var data = _ref2.data;
  console.log({
    data: data
  });
  id = data[0].id;
  console.log(id);
})["catch"](function (err) {
  console.error(err);
});