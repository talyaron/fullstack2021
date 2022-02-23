"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var express_1 = __importDefault(require("express"));

var app = express_1["default"]();
var port = process.env.PORT || 3005;
app.use(express_1["default"]["static"]('public')); //middlware

app.get('/getUsers', function (req, res) {
  setTimeout(function () {
    res.send([{
      name: "Moshe",
      id: 343534
    }]);
  }, 2000);
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});