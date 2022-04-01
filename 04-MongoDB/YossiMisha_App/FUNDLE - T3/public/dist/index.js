var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('hello');
const WORD_LENGTH = 5;
const keyboard = document.querySelector("[data-keyboard]");
const guessGrid = document.querySelector("[data-guess-grid]");
const alertContainer = document.querySelector("[data-alert-container]");
const targetWord = '';
const offsetFromDate = new Date(2022, 0, 1);
const msOffset = Date.now() - offsetFromDate;
const dayOffset = Math.floor(msOffset / 1000 / 60 / 60 / 24);
console.log(dayOffset);
getDailyWord();
function getDailyWord() {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield axios.get(`words/get-word?dayOffset=${dayOffset}`);
        console.log(data);
    });
}
function tabIndex() {
    const eyeImg = document.querySelectorAll('#eyeImg');
    eyeImg.forEach((img) => {
        img.tabIndex = -2;
    });
}
tabIndex();
function handlePassToggle() {
    const password = document.querySelectorAll('.passip');
    password.forEach((input) => {
        if (input.type === 'password') {
            input.type = "text";
        }
        else {
            input.type = "password";
        }
    });
}
function timeOfDay() {
    let realtoday = new Date();
    let realtime = realtoday.getHours();
    if ((realtime >= 0 && realtime <= 5) || (realtime >= 22 && realtime <= 24)) {
        return 'Good Night';
    }
    if (realtime >= 6 && realtime <= 11) {
        return 'Good Morning';
    }
    if (realtime >= 12 && realtime <= 16) {
        return 'Good Afternoon';
    }
    if (realtime >= 17 && realtime <= 21) {
        return 'Good Evening';
    }
}
startInteraction();
function startInteraction() {
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("keydown", handleKeyPress);
}
function stopInteraction() {
    document.removeEventListener("click", handleMouseClick);
    document.removeEventListener("keydown", handleKeyPress);
}
function handleMouseClick(ev) {
    if (ev.target.matches("[data-key]")) {
        pressKey(ev.target.dataset.key);
        return;
    }
    if (ev.target.matches("[data-enter]")) {
        submitGuess();
        return;
    }
    if (ev.target.matches("[data-delete]")) {
        deleteKey();
        return;
    }
}
function handleKeyPress(ev) {
    if (ev.key === "Enter") {
        submitGuess();
        return;
    }
    if (ev.key === "Backspace" || ev.key === "Delete") {
        deleteKey();
        return;
    }
    if (ev.key.match(/^[a-z]$/)) {
        pressKey(ev.key);
        return;
    }
}
function pressKey(key) {
    const activeTiles = getActiveTiles();
    if (activeTiles.length >= WORD_LENGTH)
        return;
    const nextTile = guessGrid.querySelector(":not([data-letter])");
    nextTile.dataset.letter = key.toLowerCase();
    nextTile.textContent = key.toUpperCase();
    nextTile.dataset.state = 'active';
}
function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]');
}
function deleteKey() {
    const activeTiles = getActiveTiles();
    const lastTile = activeTiles[activeTiles.length - 1];
    if (lastTile) {
        lastTile.removeAttribute("data-state");
        lastTile.removeAttribute("data-letter");
        lastTile.textContent = '';
    }
    else {
        return;
    }
}
function submitGuess() {
    return __awaiter(this, void 0, void 0, function* () {
        const activeTiles = [...getActiveTiles()];
        // const activeTiles: any = getActiveTiles()
        if (activeTiles.length !== WORD_LENGTH) {
            showAlert('Not enough letters');
            shakeTiles(activeTiles);
        }
        const guess = activeTiles.reduce((word, tile) => {
            return word + tile.dataset.letter;
        }, "");
        const { data } = yield axios.get(`words/get-guessCheck?guess=${guess}`);
        if (data.found = false) {
            showAlert("Not in word list");
            shakeTiles(activeTiles);
            return;
        }
        stopInteraction();
        activeTiles.forEach((...params) => flipTile(...params, guess));
    });
}
function flipTile(tile, index, array, guess) {
    const letter = tile.dataset.letter;
    const key = keyboard.querySelector(`[data-key="${letter}]`);
}
function showAlert(message, duration = 1000) {
    const alert = document.createElement('div');
    alert.textContent = message;
    alert.classList.add("alert");
    alertContainer.prepend(alert);
    setTimeout(() => {
        alert.classList.add("alert-hide");
        alert.addEventListener("transitionend", () => {
            alert.remove();
        });
    }, duration);
}
function shakeTiles(tiles) {
    tiles.forEach((tile) => {
        tile.classList.add("shake");
        tile.addEventListener("animationend", () => {
            tile.classList.remove("shake");
        }, { once: true });
    });
}
function handleShowStats() {
    const stats = document.querySelector("#stats");
    if (stats.style.display === "none") {
        stats.style.display = "block";
    }
    else {
        stats.style.display = "none";
    }
}
function handleShowHelp() {
    const stats = document.querySelector("#help");
    if (stats.style.display === "none") {
        stats.style.display = "block";
    }
    else {
        stats.style.display = "none";
    }
}
function handleShowLogin() {
    const logreg = document.querySelector(".logreg");
    if (logreg.style.display === "none") {
        logreg.style.display = "block";
        stopInteraction();
    }
    else {
        // logreg.classList.add("logreg-hide")
        logreg.style.display = "none";
        startInteraction();
    }
}
function handleDisplayNone() {
    const stats = document.querySelector("#stats");
    if (stats.style.display === "block") {
        stats.style.display = "none";
    }
    const help = document.querySelector("#help");
    if (help.style.display === "block") {
        help.style.display = "none";
    }
}
document.body.addEventListener('click', handleDisplayNone, true);
function handleHideWindow() {
    const logreg = document.querySelector("#logreg");
    if (logreg.style.display === "block") {
        logreg.style.display = "none";
    }
}
//////////////////////////// LOGIN - REGISTER ///////////////////////////////////////////
function handleNotAMember() {
    const register = document.querySelector(".registerwrapper");
    const login = document.querySelector(".loginwrapper");
    register.style.display = 'block';
    login.style.display = 'none';
}
function handleAlreadyAMember() {
    const register = document.querySelector(".registerwrapper");
    const login = document.querySelector(".loginwrapper");
    register.style.display = 'none';
    login.style.display = 'block';
}
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            ev.preventDefault();
            let { username, password, confirmPassword, email, confirmEmail } = ev.target.elements;
            username = username.value;
            password = password.value;
            confirmPassword = confirmPassword.value;
            email = email.value;
            confirmEmail = confirmEmail.value;
            if (password !== confirmPassword) {
                window.alert('passwords dont match');
            }
            if (email !== confirmEmail) {
                window.alert('emails dont match');
            }
            if (password === confirmPassword && email === confirmEmail) {
                const { data } = yield axios.post('users/add-user', { username, password, email });
                console.log(data);
                if (data === 'AlreadyUser') {
                    window.alert('Username already taken');
                }
                else {
                    loginPractice(username, password);
                }
            }
            ev.target.reset();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function handleLogin(ev) {
    ev.preventDefault();
    let { username, password } = ev.target.elements;
    username = username.value;
    password = password.value;
    ev.target.reset();
    loginPractice(username, password);
}
function loginPractice(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield axios.get(`users/get-user?username=${username}&password=${password}`);
        const greetings = timeOfDay();
        console.log(data);
        if (data.user) {
            document.querySelector(".hello").innerHTML = `&nbsp;&nbsp;&nbsp;${greetings} <span style="color: orange;">&nbsp;${username}</span>`;
            handleShowLogin();
        }
        else if (data === 'nouser') {
            window.alert('Username doesnt exist');
        }
        else if (data === 'nopass') {
            window.alert('Password doesnt match');
        }
    });
}
// START countDownDate:
let today = new Date();
let tomorrow = new Date(today);
let tomorrowMidnight = tomorrow.setHours(24, 0, 0, 0);
let countDownDate = new Date(tomorrowMidnight).getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let twoDigitsHours = ("0" + hours).slice(-2);
    let twoDigitsMinutes = ("0" + minutes).slice(-2);
    let twoDigitsSeconds = ("0" + seconds).slice(-2);
    document.querySelector("#countdown").innerHTML = twoDigitsHours + ": "
        + twoDigitsMinutes + ": " + twoDigitsSeconds;
}, 1000);
// END countDownDate
// START SHARE:
const shareData = {
    title: 'MY FUNDLE STATISTICS!',
    text: '',
    url: ''
};
const btn = document.querySelector('#share');
const resultPara = document.querySelector('.result');
btn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
    try {
        yield navigator.share(shareData);
        resultPara.textContent = 'shared successfully';
    }
    catch (err) {
        resultPara.textContent = 'Error: ' + err;
    }
}));
//   END SHARE
