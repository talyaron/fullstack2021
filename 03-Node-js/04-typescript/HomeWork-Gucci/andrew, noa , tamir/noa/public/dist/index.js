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
function getAllStock() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/get-stock")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderStock(data);
                    return [2 /*return*/];
            }
        });
    });
}
getAllStock();
function handleSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var uid, newItem, keys, i, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    uid = function () {
                        return Date.now().toString(36) + Math.random().toString(36).substr(2);
                    };
                    newItem = { name: "", price: 0, img: "", group: "", Collection: "", "function": "", movement: "", "case": "", diameter: "", dial: "", bracelet: "", id: uid };
                    newItem.id = uid();
                    keys = Object.keys(newItem);
                    for (i = 0; i < keys.length; i++) {
                        newItem[keys[i]] = ev.target.elements[i].value;
                    }
                    return [4 /*yield*/, axios.post("/add-stock", { newItem: newItem })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderStock(data);
                    return [2 /*return*/];
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
                    return [4 /*yield*/, axios.post("/delete-stock", { id: id })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderStock(data);
                    return [2 /*return*/];
            }
        });
    });
}
function renderStock(data) {
    var HTML = '';
    data.items.forEach(function (item) {
        HTML += " <div class=\"card\">\n        <p> name: " + item.name + "</p>\n        <p> price: " + item.price + "</p>\n        <img src=\"" + item.img + "\">\n        <p> group: " + item.group + "</p>\n        <p> collection: " + item.Collection + "</p>\n        <p> function: " + item["function"] + "</p>\n        <p> movement: " + item.movement + "</p>\n        <p> case: " + item["case"] + "</p>\n        <p> diameter: " + item.diameter + "</p>\n        <p> dial: " + item.dial + "</p>\n        <p> bracelet: " + item.bracelet + "</p>\n        <button onclick=\"handleDelete('" + item.id + "')\">Delete</button>\n        <button onclick=\"handleEdit('" + item.id + "')\">Edit</button>\n       </div> ";
    });
    var rootHTML = document.getElementById('root');
    rootHTML.innerHTML = HTML;
}
