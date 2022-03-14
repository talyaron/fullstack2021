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
var hasFlippedCard = false;
var firstCard, secondCard;
var game = {
    cards: [],
    getCards: function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios.get("/new-game")];
                    case 1:
                        data = (_a.sent()).data;
                        if (Array.isArray(data))
                            return [2 /*return*/, data];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    shuffleCards: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, shuffled;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getCards()];
                    case 1:
                        _a.cards = _b.sent();
                        shuffled = this.cards
                            .map(function (value) { return ({ value: value, sort: Math.random() }); })
                            .sort(function (a, b) { return a.sort - b.sort; })
                            .map(function (_a) {
                            var value = _a.value;
                            return value;
                        });
                        return [2 /*return*/, shuffled];
                }
            });
        });
    },
    renderGame: function () {
        return __awaiter(this, void 0, void 0, function () {
            var html, _a, emptyWrapper, wrapper;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        html = "";
                        _a = this;
                        return [4 /*yield*/, this.shuffleCards()];
                    case 1:
                        _a.cards = _b.sent();
                        emptyWrapper = document.querySelector(".wrapper__empty");
                        wrapper = document.querySelector(".wrapper");
                        console.dir(this);
                        try {
                            if (Array.isArray(this.cards)) {
                                this.cards.forEach(function (card) {
                                    html += "<div id=\"" + card.id + "\" onclick='handleFlip(event)' class=\"card\">\n          <div class=\"card__face-back\">\n          </div>\n          <div class=\"card__face-front\">\n          <img src=\"" + card.src + ".jpg\">\n          </div>\n          </div>";
                                    wrapper.innerHTML = "";
                                    emptyWrapper.innerHTML = html;
                                });
                                return [2 /*return*/];
                                ///<object id="front" data="./Images/cardBack.svg" type="image/svg+xml">
                                // <img src="./Images/cardBack.svg">
                                // </object>
                            }
                            throw new Error("no array of cards found");
                        }
                        catch (error) {
                            console.error(error);
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    flipCard: function (card) {
        try {
            if (card.hasAttribute("id")) {
                card.classList.toggle("flipped");
                if (!hasFlippedCard) {
                    hasFlippedCard = true;
                    firstCard = card;
                }
                else {
                    hasFlippedCard = false;
                    secondCard = card;
                }
                return handleCardMatching(firstCard, secondCard, hasFlippedCard);
            }
            throw new Error("no card was found");
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
};
function handleCardMatching(firstCard, secondCard, hasFlippedCard) {
    var pairs = [
        [1, 15], [15, 1],
        [2, 16], [16, 2],
        [3, 13], [13, 3],
        [4, 12], [12, 4],
        [5, 11], [11, 5],
        [6, 9], [9, 6],
        [7, 14], [14, 7],
        [8, 10], [10, 8]
    ];
    if (hasFlippedCard !== true) {
        for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
            var i = pairs_1[_i];
            var matchCheck = [firstCard.id, secondCard.id];
            if (i.toString() === matchCheck.toString()) {
                console.log("its a match");
                return;
            }
        }
        setTimeout(function () {
            firstCard.classList.toggle("flipped");
            secondCard.classList.toggle("flipped");
        }, 2500);
    }
}
function handleNewGame() {
    game.renderGame();
}
function handleFlip(ev) {
    var card = ev.path[1];
    game.flipCard(card);
}
