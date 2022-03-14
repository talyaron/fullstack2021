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
function handleOnLoad() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // const { data } = await axios.get('/newGames')
            // renderGames(data)
            getGame();
            return [2 /*return*/];
        });
    });
}
var games = [];
function getGame() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/newGames')];
                case 1:
                    data = (_a.sent()).data;
                    //  console.log(data)
                    renderGames(data);
                    games = data;
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var game, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    game = {};
                    game["title"] = ev.target.title.value;
                    game["photo"] = ev.target.photo.value;
                    game["price"] = ev.target.price.valueAsNumber;
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
function renderGames(data) {
    console.log(data);
    var root = document.querySelector('#rootGames');
    var html = " ";
    data.forEach(function (game) {
        html += "\n        <div class=\"rootGames--game\">\n       <img src=\"" + game.photo + "\">\n        <div class = \"name\">" + game.title + "</div>\n        <div class=\"price\">" + game.price + "$</div>\n        <button onclick=\"handleUpdate('" + game.id + "')\">Update Game</button>\n        <button onclick=\"handleDelete('" + game.id + "')\">Delete Game</button>\n        </div>\n        ";
    });
    //root.innerHTML = html;
    html += "<div class=\"rootGames--add\">\n    <form class=\"update visUpdate\" onsubmit=\"handleAddUpdate(event)\">\n        <label for=\"name\"> Name</label>\n        <input type=\"text\" name=\"name\" id=\"name\">\n        <label for=\"pic\"> Image</label>\n        <input type=\"text\" name=\"pic\" id=\"photo\">\n        <label for=\"price\"> Price</label>\n        <input type=\"number\" name=\"price\" id=\"price\">\n        <label for=\"id\"> id</label>\n        <input type=\"text\" name=\"ID\" id=\"id\" readonly>\n        <input type=\"submit\" name=\"update\">\n    </form>\n</div>";
    document.querySelector('#rootGames').innerHTML = html;
}
function handleUpdate(id) {
    var form = document.querySelector('.update');
    form.classList.toggle('visUpdate');
    var game = games.filter(function (game) { return game.id == id; })[0];
    form[0].value = game.title;
    form[1].value = game.photo;
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
function handleAddUpdate(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var game, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    game = {};
                    game["title"] = ev.target.title.value;
                    game["photo"] = ev.target.photo.value;
                    game["price"] = ev.target.price.value;
                    game["id"] = ev.target.id.value;
                    return [4 /*yield*/, axios.post('/updateGames', { game: game })];
                case 1:
                    data = (_a.sent()).data;
                    renderGames(data);
                    games = data;
                    document.querySelector('.update').classList.toggle('visUpdate');
                    return [2 /*return*/];
            }
        });
    });
}
