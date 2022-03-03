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
function handleShowItems() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-all-data')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
// function renderByGender() {  
//   render(gender);
// }
function handleRenderByGender(data) {
    getAllData(data);
}
function getAllData(gender) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-all-data')];
                case 1:
                    data = (_a.sent()).data;
                    render(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddItems(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, price, imgTop, imgBottom, gender, type, id, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    name = ev.target.name.value;
                    price = ev.target.price.value;
                    imgTop = ev.target[2].value;
                    imgBottom = ev.target[3].value;
                    gender = ev.target[4].value;
                    type = ev.target[5].value;
                    id = Math.random().toString(36);
                    return [4 /*yield*/, axios.post('/add-items', { name: name, price: price, imgTop: imgTop, imgBottom: imgBottom, gender: gender, type: type, id: id })];
                case 1:
                    data = (_a.sent()).data;
                    ev.target.reset();
                    render(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleRemoveItems(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    name = ev.target.elements.remove.value;
                    return [4 /*yield*/, axios.post('/delete-items', { name: name })];
                case 1:
                    data = (_a.sent()).data;
                    ev.target.reset();
                    render(data);
                    return [2 /*return*/];
            }
        });
    });
}
function render(data) {
    var root = document.getElementById('root');
    var html = "";
    data.items.forEach(function (item) {
        html += "<div class=\"items\">\n      <p>" + item.name + "</p>\n      <img class=\"imgTop\" src=\"" + item.imgTop + "\" >\n      <img class=\"imgBottom\" src=\"" + item.imgBottom + "\" >\n      <p>" + item.price + "$</p>\n      <button class=\"cartButton\" onclick=\"addToCart(" + item.id + ")\">Add To Cart</button>\n      </div>";
    });
    root.innerHTML = html;
}
//category buttons
// async function handleSearch(ev) {
//   const searchTerm = ev.target.value;
//   const {data} = await axios.get('/search-items',{searchTerm});  
//     const root = document.getElementById("root");
//     const gender = ev.target.dataset.gender;
//     let html = "";
//      if(Array.isArray(data)){
//        data.forEach((item)=>{
//          html +=`<div class="items">
//          <p>${item.name}</p>
//          <img class="imgTop" src="${item.imgTop}" >
//          <img class="imgBottom" src="${item.imgBottom}" >        
//          <p>${item.price}$</p>
//          <button class="cartButton" onclick="addToCart(${item.id})">Add To Cart</button>
//          </div>`;
//        })
//       root.innerHTML = html;
//     } else {
//       render(data);
//     }
// }
