import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

interface Games {
  gamesData: Array<GameInfo>;
  getGameById(id): object;
  addGame(newGame: object);
  updateGame(name, price, id);
};

interface GameInfo {
  name: String;
  price: String | Number;
  id: number;
}

// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// }


let games: Games = {
  gamesData: [
    { name: 'Airborne Kingdom', price: 74.5, id: 1 },
    { name: 'Paint Warfare', price: 'Free', id: 2 },
    { name: 'REBEL', price: 2.5, id: 3 },
    { name: 'A Musical Story', price: 50.35, id: 4 },
    { name: 'Automon', price: 29.5, id: 5 },
  ],
  getGameById(id) {
    const specificGame = this.gamesData.findIndex((game) => game.id == id);
    return [this.gamesData[specificGame], this.gamesData.length];
  },
  addGame(newGame: object) {

    let i = this.gamesData.length;
    this.gamesData.push({ ...newGame, id: i + 1 })
  },
  updateGame(name, price, id) {

    const index = this.gamesData.findIndex((game) => game.id == id)
    if (index > -1) {

      this.gamesData[index] = { name, price, id }


    }
  }
}

app.get('/all-games', (req, res) => {
  res.send(games.gamesData);
});

app.get('/get-game-by-id', (req, res) => {
  const search = req.query.search;

  const specificGame = games.getGameById(search);

  res.send(specificGame)
});

app.post('/add-game', (req, res) => {
  const addGame = req.body.addGame;

  games.addGame(addGame);
  // console.log(games.gamesData);


  res.send(games.gamesData)
  // console.log(addGame.game);
  // const {price} = addGame;
  // console.log(price);

})

app.patch('/update-game', (req, res) => {
  const { name, price, id } = req.body
  // console.log(name,price,id);

  games.updateGame(name, price, id);
  res.send(games.gamesData)

})

let users = {
  userData: [
    { username: 'michael frankel', email: 'miki.frankel@gmail.com', password: 'Blabla' },
    { username: 'neta frankel', email: 'neta.frankel@gmail.com', password: 'Blibli2' },
  ],
  checkIfUserLogedAlready(email) {
    const index = this.userData.findIndex(user => user.email === email)
    if (index === -1) {
      return true;
    } else {
      return false;
    }
  },
  addUser(username, email, password) {
    this.userData.push({ username, email, password })
  }
}

app.post('/add-user', (req, res) => {
  const { username, email, password } = req.body;
  const userInsideOrNot = users.checkIfUserLogedAlready(email);

  if (userInsideOrNot === true){
    users.addUser(username, email, password)
    res.send({...users.userData, userInsideOrNot})
    
  } else {
    console.log("login");
    
  }
  
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

























