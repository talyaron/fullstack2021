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
// import axios from "axios";
var games = [];
function initPage() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/getAllGames')];
                case 1:
                    data = (_a.sent()).data;
                    renderGames(data);
                    games = data;
                    return [2 /*return*/];
            }
        });
    });
}
function renderGames(gameList) {
    var html = '';
    gameList.forEach(function (game) {
        html += "<div class=\"grid__game\">\n                    <p>" + game.name + "</p>\n                    <img src=\"" + game.pic + "\">\n                    <p>" + game.price + "$</p>\n                    <p>copies available:" + game.copiesLeft + "</p>\n                    <button onclick=\"handleEdit('" + game.id + "')\">Update Game</button>\n                    <button onclick=\"handleDelete('" + game.id + "')\">Delete Game</button>\n                </div>";
    });
    html += "<div class=\"grid__add\">\n                <form onsubmit=\"handleAdd(event)\">\n                    <label for=\"name\"> Name</label>\n                    <input type=\"text\" name=\"name\" id=\"name\">\n                    <label for=\"pic\"> Image</label>\n                    <input type=\"text\" name=\"pic\" id=\"pic\">\n                    <label for=\"price\"> Price</label>\n                    <input type=\"number\" name=\"price\" id=\"price\">\n                    <input type=\"submit\" value=\"Add\">\n                </form>\n            </div>";
    document.querySelector('.grid').innerHTML = html;
}
function handleEdit(id) {
    var form = document.querySelector('.edit-form');
    form.classList.toggle('in-vis');
    var game = games.filter(function (game) { return game.id == id; })[0];
    form[0].value = game.name;
    form[1].value = game.pic;
    form[2].value = game.price;
    form[3].value = game.id;
}
function handleDelete(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]('/deleteGame', { data: { id: id } })];
                case 1:
                    data = (_a.sent()).data;
                    renderGames(data);
                    games = data;
                    return [2 /*return*/];
            }
        });
    });
}
function handleSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var game, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    game = {};
                    game["name"] = ev.target.name.value;
                    game["pic"] = ev.target.pic.value;
                    game["price"] = ev.target.price.value;
                    game["id"] = ev.target.id.value;
                    return [4 /*yield*/, axios.post('/editGame', { game: game })];
                case 1:
                    data = (_a.sent()).data;
                    renderGames(data);
                    games = data;
                    document.querySelector('.edit-form').classList.toggle('in-vis');
                    return [2 /*return*/];
            }
        });
    });
}
function handleAdd(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var game, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    game = {};
                    game["name"] = ev.target.name.value;
                    game["pic"] = ev.target.pic.value;
                    game["price"] = ev.target.price.value;
                    return [4 /*yield*/, axios.post('/addGame', { game: game })];
                case 1:
                    data = (_a.sent()).data;
                    renderGames(data);
                    games = data;
                    return [2 /*return*/];
            }
        });
    });
}
initPage();
