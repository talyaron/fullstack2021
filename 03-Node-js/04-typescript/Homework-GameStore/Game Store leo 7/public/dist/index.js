var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function handleLoad() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/get-games")];
                case 1:
                    data = (_a.sent()).data;
                    renderGames(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddGame(event) {
    return __awaiter(this, void 0, void 0, function () {
        var addGame, data, root, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(event);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    event.preventDefault();
                    addGame = { name: event.target.elements.name.value, price: event.target.elements.price.valueAsNumber };
                    return [4 /*yield*/, axios.post("/add-games", { addGame: addGame })];
                case 2:
                    data = (_a.sent()).data;
                    root = document.querySelector('#root');
                    renderGames(data);
                    event.target.reset();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderGames(data) {
    var root = document.querySelector('#root');
    var html = '';
    data.forEach(function (game) {
        html += "<div class=\"gameCard\">" + game.name + ":" + game.price + "\n\n     <form  id=\"" + game.id + "\" onsubmit=\"handleupdate(event)\">\n     <input type=\"text\" id=\"\" name=\"name\" required placeholder=\"enter game\"> \n     <input type=\"number\" id=\"\" name=\"price\" required placeholder=\"enter price\"> \n     <input type=\"submit\" name=\"submit\" value=\"Update\">\n     </form>\n     <button onclick=\"handleDelete(" + game.id + ")\">Delete</button>\n     </div>";
    });
    root.innerHTML = html;
}
function handleupdate(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var updateGame, id, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    updateGame = { name: ev.target.elements.name.value, price: ev.target.elements.price.valueAsNumber };
                    id = ev.target.id;
                    console.log(id);
                    return [4 /*yield*/, axios.patch("/update-games", __assign(__assign({}, updateGame), { id: id }))];
                case 1:
                    data = (_a.sent()).data;
                    renderGames(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleDelete(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(id);
                    return [4 /*yield*/, axios["delete"]('/delete-games', { data: { id: id } })];
                case 1:
                    data = (_a.sent()).data;
                    renderGames(data);
                    return [2 /*return*/];
            }
        });
    });
}
