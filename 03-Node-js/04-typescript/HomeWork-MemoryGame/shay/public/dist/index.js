// function initApp() {
//   console.log("start");
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
//   console.log("end");
// }
function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function handleNewGame() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/newGame")];
                case 1:
                    data = (_a.sent()).data;
                    renderGame(data);
                    return [2 /*return*/];
            }
        });
    });
}
function getRootElement() {
    var rootHTML = document.querySelector(".root");
    return rootHTML;
}
function renderGame(data) {
    console.log(data);
    var rootHTML = getRootElement();
    var html = '<section class="cardsgrid">';
    data.forEach(function (game) {
        html += "<div class=\"color\" id=\"" + game.pairID + "\">\n     <img class=\"frontCard\" src=\"" + game.photo + "\"  id=\"" + game.uniqueID + "\">\n        <img class=\"backCard\" onclick=\"handleFlipedCard()\"  src=\"https://www.cinemascomics.com/wp-content/uploads/2021/05/Un-actor-de-Marvel-Studios-se-quiere-pasar-a-DC-Comics.jpg\">\n        \n        </div>\n      ";
    });
    html += "</section>";
    rootHTML.innerHTML = html;
}
var hasFlipped = false;
var firstCard, secondCard;
var lockBoard = false;
function handleFlipedCard() {
    return __awaiter(this, void 0, void 0, function () {
        var cards;
        return __generator(this, function (_a) {
            cards = document.querySelectorAll('.color');
            cards.forEach(function (card) { return card.addEventListener('click', flipCard); });
            return [2 /*return*/];
        });
    });
}
function flipCard() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //const { data } = await axios.get("/newGame");
            this.classList.add('flip');
            if (!hasFlipped) {
                hasFlipped = true;
                firstCard = this;
            }
            else {
                secondCard = this;
                checkForMatch();
            }
            return [2 /*return*/];
        });
    });
}
function checkForMatch() {
    return __awaiter(this, void 0, void 0, function () {
        var isMatch;
        return __generator(this, function (_a) {
            isMatch = firstCard.id === secondCard.id;
            console.log(firstCard, secondCard);
            console.log(isMatch);
            isMatch ? disableCards() : unflipCards();
            return [2 /*return*/];
        });
    });
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(function () {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}
function resetBoard() {
    var _a, _b;
    _a = [false, false], hasFlipped = _a[0], lockBoard = _a[1];
    _b = [null, null], firstCard = _b[0], secondCard = _b[1];
}
