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
function handleLoadPrayers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, prayers, root, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/get-prayers')];
                case 1:
                    data = (_a.sent()).data;
                    prayers = data.prayers;
                    root = document.querySelector('#root');
                    renderPrayers(prayers, root);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, family, role, kids, birth, data, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = ev.target.elements, name = _a.name, family = _a.family, role = _a.role, kids = _a.kids, birth = _a.birth;
                    name = name.value;
                    family = family.value;
                    role = role.value;
                    kids = kids.value;
                    birth = birth.value;
                    return [4 /*yield*/, axios.post('/add-prayer', { name: name, family: family, role: role, kids: kids, birth: birth })];
                case 2:
                    data = (_b.sent()).data;
                    if (!name || !family || !role || !kids || !birth)
                        throw new Error("no name, family, role, kids, birth in handleRegister");
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 4];
                case 4:
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetGabaim() {
    return __awaiter(this, void 0, void 0, function () {
        var data, gabaim, rootGabai;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-gabaim')];
                case 1:
                    data = (_a.sent()).data;
                    gabaim = data.gabaim;
                    rootGabai = document.querySelector('#rootGabai');
                    renderGabaim(gabaim, rootGabai);
                    return [2 /*return*/];
            }
        });
    });
}
;
function renderPrayers(prayers, root) {
    try {
        var html = prayers.map(function (prayer) {
            return "<div class=\"card\"><p>" + prayer.name + " " + prayer.family + "</p><p>  number of kids: " + prayer.kids + "</p><p>   Role: " + prayer.role + "</p>\n            </div>\n            <button id=\"" + prayer._id + "\" onclick=\"handleDelete(event)\">Delete</button>\n            ";
        }).join('');
        root.innerHTML = html;
        if (!root)
            throw new Error("no root in renderPrayers");
    }
    catch (error) {
        console.error(error.message);
    }
}
function renderGabaim(gabaim, rootGabai) {
    try {
        var html = gabaim.map(function (gabai) {
            return "<div class=\"cardGabai\"><h2>Gabai: " + gabai.name + " " + gabai.family + " </h2>\n            <form id=\"" + gabai._id + "\" onsubmit=\"handleUpdateGabai(event)\">\n\n            <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"name\" value=\"" + gabai.name + "\" required>\n            <input type=\"text\" name=\"family\" id=\"family\" placeholder=\"family name\" value=\"" + gabai.family + "\" required>\n            <input type=\"number\" name=\"kids\" id=\"kids\" placeholder=\"number of kids\" value=\"" + gabai.kids + "\" required>\n            <input type=\"date\" name=\"birth\" id=\"birth\" placeholder=\"date of birth\" required>\n            <input type=\"submit\" name=\"submit\" value=\"UPDATE GABAI\">\n\n            </form>\n            </div>";
        }).join('');
        rootGabai.innerHTML = html;
        if (!rootGabai)
            throw new Error("no rootGabai in renderGabaim");
    }
    catch (error) {
        console.error(error.message);
    }
}
function handleUpdateGabai(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, name, family, kids, birth, data, gabaim, rootGabai, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    id = ev.target.id;
                    _a = ev.target.elements, name = _a.name, family = _a.family, kids = _a.kids, birth = _a.birth;
                    name = name.value;
                    family = family.value;
                    kids = kids.value;
                    birth = birth.value;
                    return [4 /*yield*/, axios.patch('/update-gabaim', { name: name, family: family, kids: kids, birth: birth, id: id })];
                case 2:
                    data = (_b.sent()).data;
                    gabaim = data.gabaim;
                    rootGabai = document.querySelector('#rootGabai');
                    renderGabaim(gabaim, rootGabai);
                    if (!gabaim)
                        throw new Error("no gabaim in handleUpdateGabai");
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _b.sent();
                    console.error(error_3.message);
                    return [3 /*break*/, 4];
                case 4:
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleDelete(e) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = e.target.id;
                    return [4 /*yield*/, axios["delete"]('/delete-prayer', { data: { id: id } })];
                case 1:
                    data = (_a.sent()).data;
                    if (!id || !data)
                        throw new Error("no id || data in handleDelete");
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
