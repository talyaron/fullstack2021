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
function handleClick() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post("/api/create-table", {})];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
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
function handleAddCar(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, year, model, license, manufacturer, data, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = ev.target.elements, year = _a.year, model = _a.model, license = _a.license, manufacturer = _a.manufacturer;
                    if (!year || !license || !model || !manufacturer)
                        throw new Error("Missing data");
                    year = year.value;
                    license = license.value;
                    model = model.value;
                    manufacturer = manufacturer.value;
                    return [4 /*yield*/, axios.post("/api/add-car", {
                            year: year,
                            model: model,
                            license: license,
                            manufacturer: manufacturer
                        })];
                case 2:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleAddBuyer(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, buyerId, year_of_birth, data, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = ev.target.elements, name = _a.name, buyerId = _a.buyerId, year_of_birth = _a.year_of_birth;
                    if (!name || !year_of_birth || !buyerId)
                        throw new Error("Missing data");
                    name = name.value;
                    year_of_birth = year_of_birth.value;
                    buyerId = buyerId.value;
                    return [4 /*yield*/, axios.post("/api/add-buyer", {
                            name: name,
                            buyerId: buyerId,
                            year_of_birth: year_of_birth
                        })];
                case 2:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _b.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleGetBuyers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, buyers, years_1, buyersRoot, html_1, maxYear, minYear, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/api/get-buyers")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    buyers = data.buyers;
                    years_1 = [];
                    if (!buyers)
                        throw new Error('No buyers in DB result');
                    buyersRoot = document.querySelector('#showUsers');
                    html_1 = '';
                    buyers.forEach(function (buyer) {
                        years_1.push(buyer.year_of_birth);
                        html_1 += "<p>" + buyer.name + ", year of birth " + buyer.year_of_birth + "</p>";
                    });
                    maxYear = Math.max.apply(Math, years_1);
                    minYear = Math.min.apply(Math, years_1);
                    html_1 += "<input type='range' max=" + maxYear + " min=" + minYear + " onchange='handleGetByYear(event)'>";
                    buyersRoot.innerHTML = html_1;
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleGetByYear(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var year, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    year = ev.target.valueAsNumber;
                    console.log(year);
                    return [4 /*yield*/, axios.get("/api/get-buyers-by-year?year=" + year)];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleGetYoungestBuyer() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/api/get-youngest-buyer")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleSearch(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, data, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    name = ev.target.value;
                    return [4 /*yield*/, axios.get("/api/search-buyers?name=" + name)];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
