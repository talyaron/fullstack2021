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
function handleLoadStore() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/all-games")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderAll(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleNewGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, price, ref, src, id, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    title = ev.target.title.value;
                    price = ev.target.price.valueAsNumber;
                    ref = ev.target.ref.value;
                    src = ev.target.src.files[0].name;
                    console.dir(src);
                    id = uid();
                    return [4 /*yield*/, axios.post("/new-game", {
                            src: src,
                            title: title,
                            ref: ref,
                            id: id,
                            price: price
                        })];
                case 1:
                    data = (_a.sent()).data;
                    renderAll(data);
                    return [2 /*return*/];
            }
        });
    });
}
function deleteGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data, ok, games;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = ev[0].id;
                    return [4 /*yield*/, axios["delete"]('/delete-game', { data: { id: id } })];
                case 1:
                    data = (_a.sent()).data;
                    ok = data.ok, games = data.games;
                    console.log(games);
                    console.log(ok);
                    renderAll(games);
                    return [2 /*return*/];
            }
        });
    });
}
;
function changeRef(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data, ok, games;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.dir(ev.target.id);
                    id = ev.target.id;
                    return [4 /*yield*/, axios.patch('/update-gameRef', function (req, res) { id; })];
                case 1:
                    data = (_a.sent()).data;
                    ok = data.ok, games = data.games;
                    console.log({ ok: ok, games: games });
                    return [2 /*return*/];
            }
        });
    });
}
function renderAll(gameArray) {
    var html;
    try {
        gameArray.forEach(function (game) {
            return (html += "<div class=\"game\">\n        <a href=\"" + game.ref + "\" class=\"game_ref-wrapper\">\n  <div class=\"game_image\">\n  <img src=\"./images/" + game.src + "\">\n  </div>\n  </a>\n  <input onblur=\"changeTitle(event," + game.id + ")\" id='" + game.id + "' type='text' value='" + game.title + "' class=\"game_title-update\">\n  <input onblur=\"changePrice(event," + game.id + ")\" id='" + game.id + "' type='number' value='" + game.price + "' class=\"game_price-update\">\n  <input onblur=\"changeRef(event)\" id='" + game.id + "' type=\"text\" value=\"" + game.ref + "\" class=\"game_ref\">\n  <button onclick=\"deleteGame(" + game.id + ")\" id='" + game.id + "' class=\"game_id\">delete</button>\n</div>");
        });
        document.querySelector(".wrapper_table-bottom").innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleSrcPreview(ev) {
    var previewContainer = document.querySelector('.game_src-preview');
    var imageLink = ev.target.files[0].name;
    var html = "<img src=\"./Images/" + imageLink + "\" alt=\"\">";
    try {
        previewContainer.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
