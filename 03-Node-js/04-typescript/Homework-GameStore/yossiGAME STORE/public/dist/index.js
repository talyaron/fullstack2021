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
function handleLoad(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-games').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function renderAll(root, games) {
    var html = '';
    games.forEach(function (game) {
        html += "<div class=\"game\">\n            <div class=\"image-wrapper shine\"><img src=\"" + game.img + "\" alt=\"\"></div>\n            <div class=\"gameText\">\n            <div style=\"color: brown;\"><span style=\"color: #bbb8b8;\">Id:</span>" + game.id + "</div>\n            <div style=\"color: #69a130;\"><span style=\"color: #bbb8b8;\">Name:</span>" + game.name + "</div>\n            <div style=\"color: #ea9a9a;\"><span style=\"color: #bbb8b8;\">Price:</span>" + game.price + "$</div>\n\n            <form id=\"" + game.id + "\" onsubmit=\"handleUpdateGame(event)\">\n            <input type=\"text\" name=\"name\" placeholder=\"Name\" value=\"" + game.name + "\">\n            <input type=\"number\" name=\"price\" placeholder=\"Price\" value=\"" + game.price + "\">\n            <input type=\"text\" name=\"img\" placeholder=\"Img\" value=\"" + game.img + "\">\n            <input class=\"updateBtn\" type=\"submit\" value=\"Update\">\n            <button onclick=\"handleDelete('" + game.id + "')\">delete</button>\n            </form>\n\n            </div>\n            </div>\n            ";
    });
    root.innerHTML = html;
}
function handleDelete(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // const id = ev.target.value
                    console.log(id);
                    return [4 /*yield*/, axios.post('/delete-game', { id: id })];
                case 1:
                    data = (_a.sent()).data;
                    root = document.querySelector('#root');
                    renderAll(root, data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var addGame, data, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    addGame = { id: ev.target.elements.id.valueAsNumber, name: ev.target.elements.name.value, price: ev.target.elements.price.valueAsNumber, img: ev.target.elements.img.value };
                    return [4 /*yield*/, axios.post('/add-game', { addGame: addGame })];
                case 1:
                    data = (_a.sent()).data;
                    root = document.querySelector('#root');
                    renderAll(root, data);
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdateGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, updateGame, data, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    id = ev.target.id;
                    updateGame = { name: ev.target.elements.name.value, price: ev.target.elements.price.valueAsNumber, img: ev.target.elements.img.value };
                    return [4 /*yield*/, axios.patch('/update-game', __assign(__assign({}, updateGame), { id: id }))];
                case 1:
                    data = (_a.sent()).data;
                    root = document.querySelector('#root');
                    renderAll(root, data);
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleSearchId(ev) {
    var id = ev.target.value;
    axios.get("/get-games-id?id=" + id).then(function (_a) {
        var data = _a.data;
        console.log(data);
        var root = document.querySelector('#root');
        renderAll(root, data);
    });
}
function handleSearchPrice(ev) {
    var price = ev.target.value;
    axios
        .get("/get-games-price?price=" + price)
        .then(function (_a) {
        var data = _a.data;
        console.log(data);
        var root = document.querySelector('#root');
        renderAll(root, data);
    });
}
