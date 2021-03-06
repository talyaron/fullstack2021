
const gameState = {
    playerId: "",
    difficulty: "easy",
    cardBackground: "https://i.imgur.com/ETlethM.jpeg",
    time: 0,
    moves: 0,
    cardsInPlay: 0,
    twoCardsOpen: false,
    lastCardId: "",
    renderCards(cards) {
        let html = ``;
        cards.forEach(card => {
            html += `<div class="card scale" id="${card}">
                        <div class="card--front"></div>
                        <div class="card--back"></div>
                    </div>`
        });
        document.querySelector('.cards-grid').innerHTML = html;
    },
    playGame() {
        const cards: any = document.querySelectorAll('.card')
        cards.forEach(card => {
            card.addEventListener('click', async (event) => {
                this.flipCard(event.target);
            })
        });
    },
    async flipCard(card) {
        const { data } = await axios.get(`/getCard?id=${card.id}&player=${this.playerId}`)
        card.childNodes[3].style.backgroundImage = `url(${data})`;
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
    },
    resetCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('scale');
            card.classList.remove('flipped');
        });
        this.twoCardsOpen = false;
    },
    async checkPair(id) {
        const { data } = await axios.get(`/checkPair?firstId=${id}&secondId=${this.lastCardId}&playerId=${this.playerId}`) 
        if (data) {
            const cards: any = document.querySelectorAll('.flipped')
            setTimeout(() => {
                cards.forEach(card => {
                    card.style.visibility = 'hidden';
                    card.style.pointerEvents = 'none';

                });
            }, 400);
            this.cardsInPlay -= 2;
            this.checkWinCondition();
        }

    },
    async checkWinCondition() {
        if (this.cardsInPlay == 0) {
            const gameTime = performance.now() - this.time;
            let gameTimeMin = Math.floor(gameTime / 60000);
            let gameTimeSec: string = (Math.floor((gameTime / 1000) % 60)).toString();
            if (parseInt(gameTimeSec) < 10) gameTimeSec = "0" + gameTimeSec;
            setTimeout(() => {
                document.querySelector('.main').classList.toggle('in-vis');
                const win: any = document.querySelector('.win');
                win.classList.toggle('in-vis');
                win.innerHTML = `<h2>Congratulations!</h2>
                                <h3>You won in ${this.moves} turns, <br>
                                taking you ${gameTimeMin}:${gameTimeSec} seconds.</h3>
                                <form onsubmit="handleWin(event)">
                                <label for="name">
                                <input type="text" name="name" id="name">
                                </label>
                                <input type="submit" name="start" value="Submit" id="button">
                                </form>
                                `
            }, 800);
            this.time = gameTime;
        }
    }


}

async function handleForm(ev) {
    ev.preventDefault();
    for (let checkbox of ev.target) {
        if (checkbox.checked) gameState.difficulty = checkbox.value;
    };

    switch (gameState.difficulty) {
        case "easy":
            gameState.cardsInPlay = 8;
            break;
        case "normal":
            gameState.cardsInPlay = 12;
            break;
        case "hard":
            gameState.cardsInPlay = 18;
            const grid:any = document.querySelector('.cards-grid')
            grid.style.gridTemplateColumns = "repeat(6, 1fr)"
            break;
    }

    document.querySelector('.menu').classList.toggle('in-vis');
    document.querySelector('.main').classList.toggle('in-vis');
    const { data } = await axios.post('/initGame', { difficulty: gameState.difficulty }); //receives an array of ids for the cards 
    gameState.playerId = data.pop()
    gameState.renderCards(data);
    gameState.time = performance.now();
    gameState.playGame()
}
async function handleWin(ev) {
    ev.preventDefault();
    const { data } = await axios.post('/endGame', {name: ev.target[0].value, id: gameState.playerId, time: gameState.time, turns: gameState.moves});
    renderLeaderBoards(data);
    
};

function renderLeaderBoards(leaderBoard){
    console.log(leaderBoard);
    console.dir(leaderBoard);
    
    let html = "";
    for(let player in leaderBoard){
        const time = convertTime(leaderBoard[player].time)
        html +=`<div class="player">
                <p>${leaderBoard[player].name}</p>
                <p>${time[0]}:${time[1]}</p>
                <p>${leaderBoard[player].turns}</p>
                </div>`
    }
    document.querySelector('.win').innerHTML = html
};

function convertTime(time){
    let convertedTime = [];
    convertedTime.push(Math.floor(time / 60000));
    convertedTime.push((Math.floor((time / 1000) % 60)).toString());
    if (parseInt(convertedTime[1]) < 10) convertedTime[1] = "0" + convertedTime[1];
    
    return convertedTime;
}



