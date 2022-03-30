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
const guessGrid = document.querySelector("[data-guess-grid]");
const targetWord = '';
const offsetFromDate = new Date(2022, 0, 1);
const msOffset = Date.now() - offsetFromDate;
const dayOffset = Math.floor(msOffset / 1000 / 60 / 60 / 24);
console.log(dayOffset);
getDailyWord();
function getDailyWord() {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield axios.get(`/get-word?dayOffset=${dayOffset}`);
        console.log(data);
    });
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
    // const activeTiles = [...getActiveTiles()]
    const activeTiles = getActiveTiles();
    if (activeTiles.length !== WORD_LENGTH) {
        console.log("not enough letters");
    }
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
        handleHideWindow();
        startInteraction();
    }
}
function handleHideWindow() {
    const logreg = document.querySelector("#logreg");
    if (logreg.style.display === "block") {
        logreg.style.display = "none";
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
                const { data } = axios.post('/add-user', { username, password, email });
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function* () {
        ev.preventDefault();
        let { username, password } = ev.target.elements;
        username = username.value;
        password = password.value;
        const { data } = yield axios.get(`/get-user?username=${username}&password=${password}`);
        document.querySelector(".hello").innerHTML = `Hello ${username}`;
    });
}
