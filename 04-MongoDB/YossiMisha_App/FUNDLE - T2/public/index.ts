
console.log('hello')
const WORD_LENGTH = 5;
const guessGrid = document.querySelector("[data-guess-grid]")

startInteraction()

function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
}


function handleMouseClick(ev) {
    if (ev.target.matches("[data-key]")) {
        pressKey(ev.target.dataset.key)
        return
    }
    if (ev.target.matches("[data-enter]")) {
        submitGuess()
        return
    }
    if (ev.target.matches("[data-delete]")) {
        deleteKey()
        return
    }
}

function handleKeyPress(ev) {
    if (ev.key === "Enter") {
        submitGuess()
        return
    }

    if (ev.key === "Backspace" || ev.key === "Delete") {
        deleteKey()
        return
    }

    if (ev.key.match(/^[a-z]$/)) {
        pressKey(ev.key)
        return
    }
}


function pressKey(key) {
    const activeTiles: any = getActiveTiles();
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile: any = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase();
    nextTile.textContent = key.toUpperCase();
    nextTile.dataset.state = 'active';
}

function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]')
}

function deleteKey() {
    const activeTiles: any = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1];
    if (lastTile) {
        lastTile.removeAttribute("data-state");
        lastTile.removeAttribute("data-letter");
        lastTile.textContent = '';
    }
    else {
        return
    }
}

function submitGuess() {
    console.log()
}


function handleShowStats() {
    const stats: any = document.querySelector("#stats");
    if (stats.style.display === "none") {
        stats.style.display = "block";
    } else {
        stats.style.display = "none";
    }
}

function handleShowHelp() {
    const stats: any = document.querySelector("#help");
    if (stats.style.display === "none") {
        stats.style.display = "block";
    } else {
        stats.style.display = "none";
    }
}

function handleShowLogin() {
    const logreg: any = document.querySelector(".logreg");
    if (logreg.style.display === "none") {
        logreg.style.display = "block";
        stopInteraction()
    } else {
        // logreg.classList.add("logreg-hide")
        logreg.style.display = "none";

        startInteraction()
    }

}

function handleDisplayNone() {
    const stats: any = document.querySelector("#stats");
    if (stats.style.display === "block") {
        stats.style.display = "none";
    }
    const help: any = document.querySelector("#help");
    if (help.style.display === "block") {
        help.style.display = "none";
    }
}

document.body.addEventListener('click', handleDisplayNone, true);


function handleHideWindow() {
    const logreg: any = document.querySelector("#logreg");
    if (logreg.style.display === "block") {
        logreg.style.display = "none";
    }
}

//////////////////////////// LOGIN - REGISTER ///////////////////////////////////////////

function handleNotAMember() {
    const register: any = document.querySelector(".registerwrapper")
    const login: any = document.querySelector(".loginwrapper")
    register.style.display = 'block'
    login.style.display = 'none'
}
function handleAlreadyAMember() {
    const register: any = document.querySelector(".registerwrapper")
    const login: any = document.querySelector(".loginwrapper")
    register.style.display = 'none'
    login.style.display = 'block'
}


async function handleRegister(ev) {
    try {

        ev.preventDefault();

        let { username, password, confirmPassword, email, confirmEmail } = ev.target.elements

        username = username.value;
        password = password.value;
        confirmPassword = confirmPassword.value;
        email = email.value;
        confirmEmail = confirmEmail.value;

        if (password !== confirmPassword) {
            window.alert('passwords dont match')
        }
        if (email !== confirmEmail) {
            window.alert('emails dont match')
        }
        if (password === confirmPassword && email === confirmEmail) {
            const { data } = axios.post('/add-user', { username, password, email })
            return data;
        }

    }

    catch (error) {
        console.log(error);
    }
}


async function handleLogin(ev) {
    ev.preventDefault();
    let { username, password } = ev.target.elements
    username = username.value;
    password = password.value;
    const { data } = await axios.get(`/get-user?username=${username}&password=${password}`)
    document.querySelector(".hello").innerHTML = `&nbsp;&nbsp;&nbsp;Hello <span style="color: orange;">&nbsp;${username}</span>`

}


// START countDownDate:
let today = new Date()
let tomorrow = new Date(today)
let tomorrowMidnight = tomorrow.setHours(24, 0, 0, 0);
let countDownDate = new Date(tomorrowMidnight).getTime();

let x = setInterval(function() {

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
  }
  const btn = document.querySelector('#share');
  const resultPara = document.querySelector('.result');

  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'shared successfully'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
    }
  });
//   END SHARE
