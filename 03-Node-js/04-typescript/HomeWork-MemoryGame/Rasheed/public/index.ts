
axios.get('/get-cards')
    .then(({ data }) => {
        console.log(data)
    });

let opened:Array<any> = []
let matched:Array<any> = []
let starCount = 3;
let moves:number = 0;
let time:any;
let minutes:number = 0;
let seconds:number = 0;
let timeStart:boolean = false


function shuffle(arr:Array<string>) {
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;

    }
    return arr
}

function startGame() {

    axios.get('/get-cards').then(({ data }) => {
        const deck = document.querySelector(".deck");

        console.log(data);
        const shuffledDeck = shuffle(data);

        for (let i = 0; i < shuffledDeck.length; i++) {
            const liTag = (<HTMLInputElement>document.createElement('LI'));
            liTag.classList.add('card');
            const addImge = (<HTMLInputElement>document.createElement('IMG'));
            liTag.appendChild(addImge);
            addImge.setAttribute("src", "img/" + shuffledDeck[i]);
            addImge.setAttribute("alt", "image of vault boy from fallout");
            deck.appendChild(liTag);
        }
    });

}

startGame();

function removeCard() {
    const deck = document.querySelector(".deck");

    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
}

function timer() {
    const timeCounter = document.querySelector(".timer");
    time = setInterval(function () {
        seconds++;
        if (seconds === 60 ) {
            minutes++;
            seconds = 0;
        }

        timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + "Timer: " +   minutes + ":" + seconds ;
    }, 1000);
}

function stopTime() {
    clearInterval(time)
}

function resetEverything() {
    const timeCounter = document.querySelector(".timer");
    const star = document.querySelector(".star-rating").querySelectorAll(".star");
    const movesCount: any = document.querySelector(".moves-counter");
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
    const movesCount: any = document.querySelector(".moves-counter");
    movesCount.innerHTML++;
    moves++;
}

function startRating() {
    const star = document.querySelector(".star-rating").querySelectorAll(".star");
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
        matched.push(...opened);
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

    } else if (opened.length === 2 && opened[0].src !== opened[1].src) {
        noMatch();
    }
}


function addStats() {
    const stats = document.querySelector(".modal-contant");
    for (let i = 1; i <= 3; i++) {
        const statsElement = document.createElement("p");
        statsElement.classList.add("stats");
        stats.appendChild(statsElement);
    }
    let p = stats.querySelectorAll("p.stats");
    p[0].innerHTML = "Time to Complete: " + minutes + " Minutes and " + seconds + "Seconds";
    p[1].innerHTML = "Moves Taken: " + moves;
    p[2].innerHTML = "Your Star Rating is: " + starCount + "out of 3";

}

function displayModal() {
    const modal = (<HTMLInputElement>document.querySelector("#modal"));
    const modalClose = (<HTMLInputElement>document.getElementsByClassName("close")[0]);
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
        stopTime()
        addStats();
        displayModal();
    }
}
const deck = document.querySelector(".deck");

deck.addEventListener("click", function (ev) {
    if ((<HTMLInputElement>ev.target).nodeName === "LI") {
        console.log((<HTMLInputElement>ev.target).nodeName + "Wass clicked");
        if (timeStart === false) {
            timeStart = true;
            timer();
        }
        flipCard()
    }

    function flipCard() {
        (<HTMLInputElement>ev.target).classList.add("flip");
        addToOpened()
    };
    function addToOpened() {
        if (opened.length === 0 || opened.length === 1) {
            opened.push((<HTMLInputElement>ev.target).firstElementChild);
        }
        compareTwo()
    };
});

const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-agian-btn");

reset.addEventListener('click', resetEverything);
playAgain.addEventListener('click', function () {
    const modal = (<HTMLInputElement>document.querySelector("#modal"));
    modal.style.display = "none";
    resetEverything()
});
