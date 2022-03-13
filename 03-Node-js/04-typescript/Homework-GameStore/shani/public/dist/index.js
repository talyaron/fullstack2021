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
function loadErp() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getGames()];
                case 1:
                    data = _a.sent();
                    renderToERP(data);
                    return [2 /*return*/];
            }
        });
    });
}
function loadGameStore() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getGames()];
                case 1:
                    data = _a.sent();
                    renderToGameStore(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleErpLoad() {
    loadErp();
}
function handleGameStoreLoad() {
    loadGameStore();
}
function getGames() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-games')];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function handleAddGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
<<<<<<< HEAD
<<<<<<< HEAD
        var name, standardEdition, deluxeEdition, goldEdition, bunbleEdtion, data;
=======
        var name, standardEdition, deluxeEdition, goldEdition, bundleEdition, data;
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
=======
        var name, frontImg, backImg, standardEdition, deluxeEdition, goldEdition, bundleEdition, data;
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    name = ev.target.elements.name.value;
                    frontImg = ev.target.elements.frontImg.value;
                    backImg = ev.target.elements.backImg.value;
                    standardEdition = ev.target.elements.standardEdition.value;
                    deluxeEdition = ev.target.elements.deluxeEdition.value;
                    goldEdition = ev.target.elements.goldEdition.value;
<<<<<<< HEAD
<<<<<<< HEAD
                    bunbleEdtion = ev.target.elements.bunbleEdtion.value;
                    return [4 /*yield*/, axios.post('/add-new-game', { name: name, standardEdition: standardEdition, deluxeEdition: deluxeEdition, goldEdition: goldEdition, bunbleEdtion: bunbleEdtion })];
=======
                    bundleEdition = ev.target.elements.bundleEdition.value;
                    return [4 /*yield*/, axios.post('/add-new-game', { name: name, standardEdition: standardEdition, deluxeEdition: deluxeEdition, goldEdition: goldEdition, bundleEdition: bundleEdition })];
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
=======
                    bundleEdition = ev.target.elements.bundleEdition.value;
                    return [4 /*yield*/, axios.post('/add-new-game', { name: name, frontImg: frontImg, backImg: backImg, standardEdition: standardEdition, deluxeEdition: deluxeEdition, goldEdition: goldEdition, bundleEdition: bundleEdition })];
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderToERP(data);
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var deletedGame, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    deletedGame = ev.target.elements["delete"].value;
                    return [4 /*yield*/, axios.post('/delete-game', { deletedGame: deletedGame })];
                case 1:
                    data = (_a.sent()).data;
                    renderToERP(data);
                    console.log(data);
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
<<<<<<< HEAD
<<<<<<< HEAD
function handleUpdateGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var standardEdition, deluxeEdition, goldEdition, bunbleEdtion, data;
=======
function handleGetGameById(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    id = ev.target.elements.findId.value;
                    return [4 /*yield*/, axios.get('/get-game-by-id', { id: id })];
                case 1:
                    data = (_a.sent()).data;
                    renderToDom(data);
                    console.log(data);
                    ev.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdateGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, standardEdition, deluxeEdition, goldEdition, bundleEdition, data;
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
=======
function handleGetGameById(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, x, data, error_1;
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
                    standardEdition = ev.target.elements.standardEdition.value;
                    deluxeEdition = ev.target.elements.deluxeEdition.value;
                    goldEdition = ev.target.elements.goldEdition.value;
                    bunbleEdtion = ev.target.elements.bunbleEdtion.value;
                    return [4 /*yield*/, axios.post('/update-game', { standardEdition: standardEdition, deluxeEdition: deluxeEdition, goldEdition: goldEdition, bunbleEdtion: bunbleEdtion })];
=======
                    id = ev.target.id;
                    standardEdition = ev.target.elements.standardEdition.valueAsNumber;
                    deluxeEdition = ev.target.elements.deluxeEdition.valueAsNumber;
                    goldEdition = ev.target.elements.goldEdition.valueAsNumber;
                    bundleEdition = ev.target.elements.bundleEdition.valueAsNumber;
                    return [4 /*yield*/, axios.patch('/update-game', { standardEdition: standardEdition, deluxeEdition: deluxeEdition, goldEdition: goldEdition, bundleEdition: bundleEdition, id: id })];
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
=======
                    _a.label = 1;
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    id = ev.target.elements.id.valueAsNumber;
                    x = ev.target.elements.submit.value;
                    return [4 /*yield*/, axios.get("/get-game-by-id?id=" + id + "&x=" + x)];
                case 2:
                    data = (_a.sent()).data;
                    if (data > -1)
                        throw new Error("there is no id: " + id + " ");
                    //how do i get the error message i did in the server to show
                    renderToERP(data);
                    console.log(data);
<<<<<<< HEAD
                    renderToDom(data);
<<<<<<< HEAD
                    ev.target.reset();
=======
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
=======
                    ev.target.reset();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateGame(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, name, frontImg, backImg, standardEdition, deluxeEdition, goldEdition, bundleEdition, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    id = ev.target.id;
                    name = ev.target.elements.gameName.value;
                    frontImg = ev.target.elements.frontImg.value;
                    backImg = ev.target.elements.backImg.value;
                    standardEdition = ev.target.elements.standardEdition.valueAsNumber;
                    deluxeEdition = ev.target.elements.deluxeEdition.valueAsNumber;
                    goldEdition = ev.target.elements.goldEdition.valueAsNumber;
                    bundleEdition = ev.target.elements.bundleEdition.valueAsNumber;
                    return [4 /*yield*/, axios.patch('/update-game', { name: name, frontImg: frontImg, backImg: backImg, standardEdition: standardEdition, deluxeEdition: deluxeEdition, goldEdition: goldEdition, bundleEdition: bundleEdition, id: id })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderToERP(data);
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
                    return [2 /*return*/];
            }
        });
    });
}
function renderToERP(data) {
    var root = document.querySelector("#root");
    var html = "";
    data.forEach(function (game) {
<<<<<<< HEAD
<<<<<<< HEAD
        html += "\n        <form class=\"game\" id=" + game.id + " onsubmit=\"handleUpdateGame(ev)\">\n         <h3>" + game.name + "</h3> \n         <input type=\"text\" placeholder=\"" + game.standardEdition + "\" value=\"" + game.standardEdition + "\">  \n         <input type=\"text\" placeholder=\"" + game.deluxeEdition + "\" value=\"" + game.deluxeEdition + "\"> \n         <input type=\"text\" placeholder=\"" + game.goldEdition + "\" value=\"" + game.goldEdition + "\"> \n         <input type=\"text\" placeholder=\"" + game.bundleEdition + "\"value=\"" + game.bundleEdition + "\" > \n        <button type=\"submit\">Update</button></form>";
=======
        html += "\n        \n        <form class=\"game\" id=\"" + game.id + "\" onsubmit=\"handleUpdateGame(event)\">\n         <h3 class=\"gameName\">" + game.name + "</h3> \n          \n\n         \n         <label for=\"standardEdition\">Standard Edition:</label>\n         <input type=\"number\" id=\"standardEdition\" name=\"standardEdition\" placeholder=\"" + game.standardEdition + "\" >  \n         \n         <label for=\"deluxeEdition\">Deluxe Edition:</label>\n         <input type=\"number\" id=\"deluxeEdition\" name=\"deluxeEdition\" placeholder=\"" + game.deluxeEdition + "\" > \n         \n         <label for=\"goldEdition\">Gold Edition:</label>\n         <input type=\"number\" id=\"goldEdition\" name=\"goldEdition\" placeholder=\"" + game.goldEdition + "\" > \n         \n         <label for=\"bundleEdition\">Bundle Edition:</label>\n         <input type=\"number\" id=\"bundleEdition\" name=\"bundleEdition\" placeholder=\"" + game.bundleEdition + "\" > \n        \n         <button type=\"submit\" value=\"update\">Update</button></form>";
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
=======
        html += "\n        \n        <form class=\"game\" id=\"" + game.id + "\" onsubmit=\"handleUpdateGame(event)\">\n         <h3 class=\"gameName\">" + game.name + "</h3> \n          \n         <label for=\"gameName\">Game Name: </label>\n         <input type=\"text\" id=\"gameName\" name=\"gameName\" placeholder=\"" + game.name + "\" >  \n\n         <label for=\"frontImg\">Front Img Url: </label>\n         <input type=\"text\" id=\"frontImg\" name=\"frontImg\" placeholder=\"" + game.frontImg + "\" >  \n         \n         <label for=\"backImg\">Back Img Url:  </label>\n         <input type=\"text\" id=\"backImg\" name=\"backImg\" placeholder=\"" + game.backImg + "\" >  \n\n         <label for=\"standardEdition\">Standard Edition:  </label>\n         <input type=\"number\" id=\"standardEdition\" name=\"standardEdition\" placeholder=\"" + game.standardEdition + "\" >  \n         <br>\n         <label for=\"deluxeEdition\">Deluxe Edition:  </label>\n         <input type=\"number\" id=\"deluxeEdition\" name=\"deluxeEdition\" placeholder=\"" + game.deluxeEdition + "\" > \n         \n         <label for=\"goldEdition\">Gold Edition:  </label>\n         <input type=\"number\" id=\"goldEdition\" name=\"goldEdition\" placeholder=\"" + game.goldEdition + "\" > \n         \n         <label for=\"bundleEdition\">Bundle Edition:  </label>\n         <input type=\"number\" id=\"bundleEdition\" name=\"bundleEdition\" placeholder=\"" + game.bundleEdition + "\" > \n        \n         <button type=\"submit\" value=\"update\">Update</button></form>";
>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
    });
    root.innerHTML = html;
}
;
function renderToGameStore(data) {
    var rootGameStore = document.querySelector("#rootGameStore");
    var html = "";
    data.forEach(function (storeGame) {
        html += "\n        <div class=\"storeGame\"> <h1>" + storeGame.name + "</h1>\n        <img src=\"" + storeGame.frontImg + "\" class=\"storeGame__img--front\">\n        <img src=\"" + storeGame.backImg + "\" class=\"storeGame__img--back\">\n        \n        <div class=\"storeGame__editions\"> \n        <h3 class=\"storeGame__editions--standardEdition\"> Standard Edition " + storeGame.standardEdition + " </h3>\n        <h3 class=\"storeGame__editions--deluxeEdition\"> Deluxe Edition $" + storeGame.deluxeEdition + " </h3>\n        <h3 class=\"storeGame__editions--goldEdition\"> Gold Edition $" + storeGame.goldEdition + " </h3>\n        <h3 class=\"storeGame__editions--bundleEdition\"> Bundle Edition  $" + storeGame.bundleEdition + " </h3>\n        </div>\n        \n        </div>\n        ";
    });
    rootGameStore.innerHTML = html;
}
