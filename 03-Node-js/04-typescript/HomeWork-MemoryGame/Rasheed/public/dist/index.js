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
axios.get('/get-cards')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
var opened = [];
var matched = [];
var starCount = 3;
var moves = 0;
var time;
var minutes = 0;
var seconds = 0;
var timeStart = false;
function startGame() {
    return __awaiter(this, void 0, void 0, function () {
        var data, deck, i, liTag, addImge;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/get-cards")];
                case 1:
                    data = (_a.sent()).data;
                    deck = document.querySelector(".deck");
                    for (i = 0; i < data.length; i++) {
                        liTag = document.createElement('LI');
                        liTag.classList.add('card');
                        addImge = document.createElement('IMG');
                        liTag.appendChild(addImge);
                        addImge.setAttribute("src", "img/" + data[i]);
                        deck.appendChild(liTag);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
startGame();
function removeCard() {
    var deck = document.querySelector(".deck");
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
}
function timer() {
    var timeCounter = document.querySelector(".timer");
    time = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + "Timer: " + minutes + ":" + seconds;
    }, 1000);
}
function stopTime() {
    clearInterval(time);
}
function resetEverything() {
    var timeCounter = document.querySelector(".timer");
    var star = document.querySelector(".star-rating").querySelectorAll(".star");
    var movesCount = document.querySelector(".moves-counter");
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + "Timer: 00:00";
    star[2].firstElementChild.classList.add("fa-star");
    starCount = 3;
    moves = 0;
    movesCount.innerHTML = 0;
    matched = [];
    opened = [];
    removeCard();
    startGame();
}
function movesCounter() {
    var movesCount = document.querySelector(".moves-counter");
    movesCount.innerHTML++;
    moves++;
}
function startRating() {
    var star = document.querySelector(".star-rating").querySelectorAll(".star");
    if (moves === 14) {
        star[2].firstElementChild.classList.remove("fa-star");
        starCount--;
    }
    if (moves === 18) {
        star[1].firstElementChild.classList.remove("fa-star");
        starCount--;
    }
}
function match() {
    setTimeout(function () {
        opened[0].parentElement.classList.add("match");
        opened[1].parentElement.classList.add("match");
        matched.push.apply(matched, opened);
        document.body.style.pointerEvents = "auto";
        winGame();
        opened = [];
    }, 600);
    movesCounter();
    startRating();
}
function noMatch() {
    setTimeout(function () {
        opened[0].parentElement.classList.remove("flip");
        opened[1].parentElement.classList.remove("flip");
        document.body.style.pointerEvents = "auto";
        opened = [];
    }, 700);
    movesCounter();
    startRating();
}
function compareTwo() {
    if (opened.length === 2) {
        document.body.style.pointerEvents = "none";
    }
    if (opened.length === 2 && opened[0].src === opened[1].src) {
        match();
    }
    else if (opened.length === 2 && opened[0].src !== opened[1].src) {
        noMatch();
    }
}
function addStats() {
    var stats = document.querySelector(".modal-contant");
    for (var i = 1; i <= 3; i++) {
        var statsElement = document.createElement("p");
        statsElement.classList.add("stats");
        stats.appendChild(statsElement);
    }
    var p = stats.querySelectorAll("p.stats");
    p[0].innerHTML = "Time to Complete: " + minutes + " Minutes and " + seconds + "Seconds";
    p[1].innerHTML = "Moves Taken: " + moves;
    p[2].innerHTML = "Your Star Rating is: " + starCount + "out of 3";
}
function displayModal() {
    var modal = document.querySelector("#modal");
    var modalClose = document.getElementsByClassName("close")[0];
    modal.style.display = " block";
    modalClose.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = " none";
        }
    };
}
function winGame() {
    if (matched.length === 16) {
        stopTime();
        addStats();
        displayModal();
    }
}
var deck = document.querySelector(".deck");
deck.addEventListener("click", function (ev) {
    if (ev.target.nodeName === "LI") {
        console.log(ev.target.nodeName + "Wass clicked");
        if (timeStart === false) {
            timeStart = true;
            timer();
        }
        flipCard();
    }
    function flipCard() {
        ev.target.classList.add("flip");
        addToOpened();
    }
    ;
    function addToOpened() {
        if (opened.length === 0 || opened.length === 1) {
            opened.push(ev.target.firstElementChild);
        }
        compareTwo();
    }
    ;
});
var reset = document.querySelector(".reset-btn");
var playAgain = document.querySelector(".play-agian-btn");
reset.addEventListener('click', resetEverything);
playAgain.addEventListener('click', function () {
    var modal = document.querySelector("#modal");
    modal.style.display = "none";
    resetEverything();
});
