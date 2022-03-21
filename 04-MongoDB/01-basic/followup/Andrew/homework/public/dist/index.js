var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var site = {
    games: [],
    renderGames: function (list) {
        var html = "";
        list.forEach(function (game) {
            html += "<div class=\"games-grid__card\">\n                        <h1 class=\"name\">" + game.name + "</h1>\n                        <img src=\"" + game.img + "\">\n                        <h3 class =\"type\">" + game.type + "</h3>\n                        <button onclick=\"handleEdit('" + game._id + "',event)\">Edit</button>\n                    </div>";
        });
        html += "<form class=\"games-grid__card\" onsubmit=\"handleSubmitAdd(event)\">\n                    <input type=\"text\" name=\"name\" placeholder=\"Name\"></input>\n                    <img src=\"https://m.media-amazon.com/images/I/41BhB5jra2L._AC_.jpg\">\n                    <input type=\"text\" name=\"img\" placeHolder=\"image link\"></input>\n                    <input type=\"text\" name=\"type\" placeHolder=\"Type\"></input>\n                    <input type=\"submit\" name=\"submit\"></input>\n                </form>";
        document.querySelector('.games-grid').innerHTML = html;
    }
};
function handleEdit(id, ev) {
    var html = '';
    var gameToEdit = site.games.filter(function (game) { return game._id == id; });
    gameToEdit.forEach(function (game) {
        html += "<form class=\"games-grid__card\" onsubmit=\"handleSubmit('" + game._id + "',event)\">\n                    <input type=\"text\" class=\"name\" name=\"name\" value=\"" + game.name + "\"></input>\n                    <img src=\"" + game.img + "\">\n                    <input type=\"text\" class=\"type\" name=\"type\" value =\"" + game.type + "\"></input>\n                    <input type=\"submit\" name=\"submit\"></input>\n                </form>";
    });
    ev.target.parentElement.outerHTML = html;
}
function handleSubmitAdd(ev) {
    var _a = ev.target.elements, name = _a.name, img = _a.img, type = _a.type;
    var game = { name: name.value, img: img.value, type: type.value };
    axios.put('/add-game', { game: game });
}
function handleSubmit(id, ev) {
    // ev.preventDefault();
    var game = site.games.filter(function (game) { return game._id == id; })[0];
    game.name = ev.target.name.value;
    game.type = ev.target.type.value;
    axios.patch('/update-game', { game: game });
}
function getAllGames() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-games')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    site.games = data;
                    site.renderGames(data);
                    return [2 /*return*/];
            }
        });
    });
}
getAllGames();
