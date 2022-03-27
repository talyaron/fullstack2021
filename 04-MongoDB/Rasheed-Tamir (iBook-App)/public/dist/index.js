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
var axios;
function getBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/get-books")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    if (Array.isArray(data))
                        return [2 /*return*/, data];
                    return [2 /*return*/];
            }
        });
    });
}
function handleBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getBooks()];
                case 1:
                    data = _a.sent();
                    renderData(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleLoadBooks() {
    handleBooks();
}
function renderData(data) {
    var html = "";
    data.forEach(function (book) {
        html += "\n                <div id=\"book\" class=\"book\">\n                <input  class=\"check\" type=\"checkbox\" id=\"check1\">\n                <input  class=\"check\" type=\"checkbox\" id=\"check2\">\n                <input  class=\"check\" type=\"checkbox\" id=\"check3\">\n                <input  class=\"check\" type=\"checkbox\" id=\"check4\">\n                <input  class=\"check\" type=\"checkbox\" id=\"check5\">\n\n                    <div class=\"book__content\">\n                        <div class=\"book__content__pageFlip\" id=\"page1\">\n                            <div class=\"book__content__pageFlip-back\">\n                            <img src=\"" + book.firstPageImg + "\">\n                            <label class=\"book__content__pageFlip-back-btn\" for=\"check1\">\n                                <<</label>\n        \n                            </div>\n                            <div class=\"book__content__pageFlip-front\">\n                            <img id=\"cover\" src=\"" + book.coverImg + "\">\n                            <label class=\"book__content__pageFlip-front-btn\" id=\"glow\" for=\"check1\">Read</label>\n                        </div>\n                    </div>\n                    <div class=\"book__content__pageFlip\" id=\"page2\">\n                        <div class=\"book__content__pageFlip-back\">\n                            <img src=\"" + book.secendPageImg + "\">\n                            <label class=\"book__content__pageFlip-back-btn\" for=\"check2\">\n                                <<</label>\n                        </div>\n                        <div  class=\"book__content__pageFlip-front\">\n                            <h1> " + book.firstPageChapter + "</h1>\n                            <h2> " + book.firstPageHeadLine + "</h2>\n                            <p> " + book.firstPageContent + "</p>\n                            <label class=\"book__content__pageFlip-front-btn\" for=\"check2\">>></label>\n                        </div>\n                    </div>\n                    <div class=\"book__content__pageFlip\" id=\"page3\">\n                    <div class=\"book__content__pageFlip-back\">\n                        <img src=\"" + book.thirdPageImg + "\">\n                        <label class=\"book__content__pageFlip-back-btn\" for=\"check3\">\n                            <<</label>\n                    </div>\n                    <div class=\"book__content__pageFlip-front\">\n                        <h1> " + book.secendPageChapter + "</h1>\n                        <h2> " + book.secendPageHeadLine + "</h2>\n                        <p>" + book.secendPageContent + "</p>\n                        <label class=\"book__content__pageFlip-front-btn\" for=\"check3\">>></label>\n                    </div>\n                </div>\n                <div class=\"book__content__pageFlip\" id=\"page4\">\n                    <div class=\"book__content__pageFlip-back\">\n                        <img src=\"" + book.fourthPageImg + "\">\n                        <label class=\"book__content__pageFlip-back-btn\" for=\"check4\">\n                            <<</label>\n                    </div>\n                    <div class=\"book__content__pageFlip-front\">\n                        <h1>  " + book.thirdPageChapter + "</h1>\n                        <h2> " + book.thirdPageHeadLine + "</h2>\n                        <p>" + book.thirdPageContent + ".</p>\n                        <label class=\"book__content__pageFlip-front-btn\" for=\"check4\">>></label>\n                    </div>\n                </div>\n                <div class=\"book__content__pageFlip\" id=\"page5\">\n                    <div class=\"book__content__pageFlip-back\">\n                        <img src=\"" + book.backCoverImg + "\">\n                        <label class=\"book__content__pageFlip-back-btn\" for=\"check5\">\n                            <<</label>\n                    </div>\n                    <div class=\"book__content__pageFlip-front\">\n                        <h1>  " + book.fourthPageChapter + "</h1>\n                        <h2> " + book.fourthPageHeadLine + "</h2>\n                        <p>" + book.fourthPageContent + "</p>\n                        <label class=\"book__content__pageFlip-front-btn\" for=\"check5\">>></label>\n                </div>\n            </div>\n        </div>\n        </div>";
    });
    var root = document.querySelector('#root');
    root.innerHTML = html;
}
