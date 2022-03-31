
console.log('hello')
const WORD_LENGTH = 5;
const guessGrid = document.querySelector("[data-guess-grid]")

startInteraction()

function startInteraction(){
    document.addEventListener("click",handleMouseClick)
    document.addEventListener("keydown",handleKeyPress)
}

function stopInteraction(){
    document.removeEventListener("click",handleMouseClick)
    document.removeEventListener("keydown",handleKeyPress)
}


function handleMouseClick(ev){
    if(ev.target.matches("[data-key]")){
        pressKey(ev.target.dataset.key)
        return
    }
    if(ev.target.matches("[data-enter]")){
        submitGuess()
        return
    }
    if(ev.target.matches("[data-delete]")){
        deleteKey()
        return
    }
}

function handleKeyPress(ev){
if(ev.key === "Enter"){
    submitGuess()
    return
}

if(ev.key === "Backspace" || ev.key === "Delete"){
    deleteKey()
    return
}

if(ev.key.match(/^[a-z]$/)){
    pressKey(ev.key)
    return
}
}


function pressKey(key){
    const activeTiles:any = getActiveTiles();
    if(activeTiles.length >= WORD_LENGTH) return
    const nextTile:any = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase();
    nextTile.textContent = key.toUpperCase();
    nextTile.dataset.state = 'active';
}

function getActiveTiles(){
    return guessGrid.querySelectorAll('[data-state="active"]')
}

function deleteKey(){
    const activeTiles:any = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length-1];
    if(lastTile){
    lastTile.removeAttribute("data-state");
    lastTile.removeAttribute("data-letter");
    lastTile.textContent = '';
    }
    else{
        return
    }
}

function submitGuess(){
    console.log()
}

