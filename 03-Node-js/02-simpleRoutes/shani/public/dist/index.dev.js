"use strict";

axios.get('/getMe').then(function (_ref) {
  var data = _ref.data;
  console.log(data);
});
axios.get('/getMyFriend').then(function (_ref2) {
  var data = _ref2.data;
  console.log(data);
});