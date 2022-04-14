"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use(_express["default"]["static"]("public"));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});