//get data
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
var store = {
    getProducts: function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios.get("/get-products")];
                    case 1:
                        data = (_a.sent()).data;
                        console.log(data);
                        if (Array.isArray(data))
                            return [2 /*return*/, data];
                        throw new Error("data is not an array");
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    loadStore: function () {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProducts()];
                    case 1:
                        products = _a.sent();
                        this.renderStore(products);
                        return [2 /*return*/];
                }
            });
        });
    },
    loadERP: function () {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProducts()];
                    case 1:
                        products = _a.sent();
                        this.renderERP(products);
                        return [2 /*return*/];
                }
            });
        });
    },
    renderStore: function (products) {
        var root = document.querySelector("#root");
        //render
        var html = "";
        products.forEach(function (product) {
            html += "<p>" + product.title + "</p>";
        });
        root.innerHTML = html;
    },
    renderERP: function (products) {
        var root = document.querySelector("#root");
        //render
        var html = "";
        products.forEach(function (product) {
            html += "<form class='stam' id=\"" + product.id + "\" onsubmit=\"handleUpdateProduct(event)\"><input type=\"text\" value=\"" + product.title + "\" name=\"title\" placeholder=\"product title\"><button>UPDATE</button></form>";
        });
        root.innerHTML = html;
    }
};
function handleStoreLoad() {
    store.loadStore();
}
function handleERPLoad() {
    store.loadERP();
}
function handleUpdateProduct(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, id_1, data, ok, products, error, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    title = ev.target.elements.title.value;
                    id_1 = ev.target.id;
                    id_1 = id_1 + "aa";
                    console.log(id_1);
                    return [4 /*yield*/, axios.patch('/update-product', { title: title, id: id_1 })];
                case 1:
                    data = (_a.sent()).data;
                    ok = data.ok, products = data.products, error = data.error;
                    // console.log(ok, products)
                    if (error)
                        throw new Error(error);
                    if (ok) {
                        console.log('aaaaaaa');
                        store.renderERP(products);
                        document.querySelector("#" + id_1).classList.add("blink");
                        setTimeout(function () {
                            document.querySelector("#" + id_1).classList.remove("blink");
                        }, 500);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error(err_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
