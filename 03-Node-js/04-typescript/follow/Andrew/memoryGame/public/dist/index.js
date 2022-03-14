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
var gameState = {
    playerId: "",
    difficulty: "easy",
    cardBackground: "https://i.imgur.com/ETlethM.jpeg",
    time: 0,
    moves: 0,
    cardsInPlay: 0,
    twoCardsOpen: false,
    lastCardId: "",
    renderCards: function (cards) {
        var html = "";
        cards.forEach(function (card) {
            html += "<div class=\"card scale\" id=\"" + card + "\">\n                        <div class=\"card--front\"></div>\n                        <div class=\"card--back\"></div>\n                    </div>";
        });
        document.querySelector('.cards-grid').innerHTML = html;
    },
    playGame: function () {
        var _this = this;
        var cards = document.querySelectorAll('.card');
        cards.forEach(function (card) {
            card.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.flipCard(event.target);
                    return [2 /*return*/];
                });
            }); });
        });
    },
    flipCard: function (card) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("/getCard?id=" + card.id + "&player=" + this.playerId)];
                    case 1:
                        data = (_a.sent()).data;
                        card.childNodes[3].style.backgroundImage = "url(" + data + ")";
                        card.classList.toggle('scale');
                        card.classList.toggle('flipped');
                        if (this.twoCardsOpen) {
                            this.resetCards();
                        }
                        else if (!this.lastCardId) {
                            this.lastCardId = card.id;
                        }
                        else {
                            this.moves++;
                            console.log(this.moves);
                            this.checkPair(card.id);
                            this.lastCardId = "";
                            this.twoCardsOpen = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    resetCards: function () {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function (card) {
            card.classList.add('scale');
            card.classList.remove('flipped');
        });
        this.twoCardsOpen = false;
    },
    checkPair: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, cards_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("/checkPair?firstId=" + id + "&secondId=" + this.lastCardId + "&playerId=" + this.playerId)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data) {
                            cards_1 = document.querySelectorAll('.flipped');
                            setTimeout(function () {
                                cards_1.forEach(function (card) {
                                    card.style.visibility = 'hidden';
                                    card.style.pointerEvents = 'none';
                                });
                            }, 400);
                            this.cardsInPlay -= 2;
                            this.checkWinCondition();
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    checkWinCondition: function () {
        return __awaiter(this, void 0, void 0, function () {
            var gameTime, gameTimeMin_1, gameTimeSec_1;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.cardsInPlay == 0) {
                    gameTime = performance.now() - this.time;
                    gameTimeMin_1 = Math.floor(gameTime / 60000);
                    gameTimeSec_1 = (Math.floor((gameTime / 1000) % 60)).toString();
                    if (parseInt(gameTimeSec_1) < 10)
                        gameTimeSec_1 = "0" + gameTimeSec_1;
                    setTimeout(function () {
                        document.querySelector('.main').classList.toggle('in-vis');
                        var win = document.querySelector('.win');
                        win.classList.toggle('in-vis');
                        win.innerHTML = "<h2>Congratulations!</h2>\n                                <h3>You won in " + _this.moves + " turns, <br>\n                                taking you " + gameTimeMin_1 + ":" + gameTimeSec_1 + " seconds.</h3>\n                                <form onsubmit=\"handleWin(event)\">\n                                <label for=\"name\">\n                                <input type=\"text\" name=\"name\" id=\"name\">\n                                </label>\n                                <input type=\"submit\" name=\"start\" value=\"Submit\" id=\"button\">\n                                </form>\n                                ";
                    }, 800);
                    this.time = gameTime;
                }
                return [2 /*return*/];
            });
        });
    }
};
function handleForm(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, checkbox, grid, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    for (_i = 0, _a = ev.target; _i < _a.length; _i++) {
                        checkbox = _a[_i];
                        if (checkbox.checked)
                            gameState.difficulty = checkbox.value;
                    }
                    ;
                    switch (gameState.difficulty) {
                        case "easy":
                            gameState.cardsInPlay = 8;
                            break;
                        case "normal":
                            gameState.cardsInPlay = 12;
                            break;
                        case "hard":
                            gameState.cardsInPlay = 18;
                            grid = document.querySelector('.cards-grid');
                            grid.style.gridTemplateColumns = "repeat(6, 1fr)";
                            break;
                    }
                    document.querySelector('.menu').classList.toggle('in-vis');
                    document.querySelector('.main').classList.toggle('in-vis');
                    return [4 /*yield*/, axios.post('/initGame', { difficulty: gameState.difficulty })];
                case 1:
                    data = (_b.sent()).data;
                    gameState.playerId = data.pop();
                    gameState.renderCards(data);
                    gameState.time = performance.now();
                    gameState.playGame();
                    return [2 /*return*/];
            }
        });
    });
}
function handleWin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    return [4 /*yield*/, axios.post('/endGame', { name: ev.target[0].value, id: gameState.playerId, time: gameState.time, turns: gameState.moves })];
                case 1:
                    data = (_a.sent()).data;
                    renderLeaderBoards(data);
                    return [2 /*return*/];
            }
        });
    });
}
;
function renderLeaderBoards(leaderBoard) {
    console.log(leaderBoard);
    console.dir(leaderBoard);
    var html = "";
    for (var player in leaderBoard) {
        var time = convertTime(leaderBoard[player].time);
        html += "<div class=\"player\">\n                <p>" + leaderBoard[player].name + "</p>\n                <p>" + time[0] + ":" + time[1] + "</p>\n                <p>" + leaderBoard[player].turns + "</p>\n                </div>";
    }
    document.querySelector('.win').innerHTML = html;
}
;
function convertTime(time) {
    var convertedTime = [];
    convertedTime.push(Math.floor(time / 60000));
    convertedTime.push((Math.floor((time / 1000) % 60)).toString());
    if (parseInt(convertedTime[1]) < 10)
        convertedTime[1] = "0" + convertedTime[1];
    return convertedTime;
}
