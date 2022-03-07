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
function appInit() {
    getCards();
}
//needed to load on when the page opens
function getCards() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/new-game")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderGame(data);
                    return [2 /*return*/];
            }
        });
    });
}
function renderGame(cards) {
    //  for (let i = cards.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       const temp = cards[i];
    //       cards[i] =cards[j];
    //       cards[j] = temp;
    // }
    var uid = function () {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };
    var root = document.querySelector("#root");
    if (Array.isArray(cards)) {
        var html_1 = "";
        cards.forEach(function (card) {
            html_1 += "<div class=\"card\" id=" + uid + "><img src=" + card.imgUrl + "> <p>" + card.name + "</p></div>";
        });
        root.innerHTML = html_1;
    }
}
function handleNewGame() {
    var openingPage = document.querySelector(".openingPage");
    openingPage.style.display = "none";
    // let gameCards:HTMLElement=document.querySelector("#root");
    // let title:HTMLElement=document.querySelector(".title")
    // let displayCards=gameCards.style.display
    // let startButton:HTMLElement=document.querySelector(".startButton");
    // if(displayCards ==='block'){
    //     startButton.style.display="none";
    //     gameCards.style.display="grid";
    //     title.style.display="none";
    //     document.body.style.backgroundImage='url("https://media.sketchfab.com/models/bde62298ac8640588d5a2928b8e113dc/thumbnails/cea9e18e2bc84efdab1c881a6e6d82c6/a778dd7953b34ab9b9bc92dc2a499598.jpeg")';
    //     document.body.style.backgroundRepeat="no-repeat";
    //     document.body.style.backgroundSize="cover";
    // }else {
    //    startButton.style.display="inline";
    //    gameCards.style.display="none";
    //    document.body.style.backgroundImage='url("https://thumbs.gfycat.com/HardHoarseBarasinga-size_restricted.gif")';
    //    document.body.style.backgroundRepeat="no-repeat";
    //    document.body.style.backgroundSize="cover";
    // }
}
