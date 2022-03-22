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
function appInit() {
    getGames();
}
function getGames() {
    return __awaiter(this, void 0, void 0, function () {
        var data, ok, games;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/get-games")];
                case 1:
                    data = (_a.sent()).data;
                    ok = data.ok, games = data.games;
                    if (games) {
                        renderGames(games);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, img, data, games;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, title = _a.title, img = _a.img;
                    title = title.value;
                    img = img.value;
                    return [4 /*yield*/, axios.post('/add-game', { title: title, img: img })];
                case 1:
                    data = (_b.sent()).data;
                    games = data.games;
                    renderGames(games);
                    return [2 /*return*/];
            }
        });
    });
}
function renderGames(games) {
    var html = '';
    var rootGames = document.querySelector('.myGames__list');
    if (games) {
        games.forEach(function (game) {
            html += "\n                <h4>" + game.title + "</h4>\n                <input type = 'text' name = 'newImg' placeholder = 'Update Image' onblur = 'handleUpdate(event, \"" + game._id + "\")'>\n                <img src = " + game.img + ">\n                <button onclick='handleDelete(\"" + game._id + "\")'> Delete Game </button>\n                ";
        });
        rootGames.innerHTML = html;
    }
}
function handleUpdate(ev, gameId) {
    return __awaiter(this, void 0, void 0, function () {
        var newImg, data, games;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newImg = ev.target.value;
                    return [4 /*yield*/, axios.patch('/update-game', { gameId: gameId, newImg: newImg })];
                case 1:
                    data = (_a.sent()).data;
                    games = data.games;
                    renderGames(games);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDelete(gameId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, games;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]('/delete-game', { data: { gameId: gameId } })];
                case 1:
                    data = (_a.sent()).data;
                    games = data.games;
                    renderGames(games);
                    return [2 /*return*/];
            }
        });
    });
}
