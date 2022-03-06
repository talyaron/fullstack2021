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
function shuffle(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}
function startGame() {
    axios.get('/get-cards').then(function (_a) {
        var data = _a.data;
        var deck = document.querySelector(".deck");
        console.log(data);
        var shuffledDeck = shuffle(data);
        for (var i = 0; i < shuffledDeck.length; i++) {
            var liTag = document.createElement('LI');
            liTag.classList.add('card');
            var addImge = document.createElement('IMG');
            liTag.appendChild(addImge);
            addImge.setAttribute("src", "img/" + shuffledDeck[i]);
            addImge.setAttribute("alt", "image of vault boy from fallout");
            deck.appendChild(liTag);
        }
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
