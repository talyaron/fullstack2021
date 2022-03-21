import express from 'express';
const app = express();

import EventEmitter from 'events';
const eventEmitter = new EventEmitter()


const port = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.json());

interface Games {
  gamesData: Array<GameInfo>;
  getGameById(id): object;
  addGame(newGame: object);
  updateGame(name, price, id);
  deleteGame(id);
};

interface GameInfo {
  name: String;
  price: String | Number;
  id: number;
  copies: number;
  img: any;
}

// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// }


let games: Games = {
  gamesData: [
    { name: 'Airborne Kingdom', price: 74.5, id: 1, copies: 3, img: 'https://cdn.akamai.steamstatic.com/steam/spotlights/f492d8f69b27d178b78ca160/spotlight_image_english.jpg?t=1646328641' },
    { name: 'Paint Warfare', price: 'Free', id: 2, copies: 2, img: 'https://cdn.akamai.steamstatic.com/steam/spotlights/dcac02b07ab8031df9c885b1/spotlight_image_english.jpg?t=1646419530' },
    { name: 'REBEL', price: 2.5, id: 3, copies: 1, img: 'https://cdn.akamai.steamstatic.com/steam/spotlights/91cb3ff06b8df8e0d70726a0/spotlight_image_english.jpg?t=1646432891' },
    { name: 'A Musical Story', price: 50.35, id: 1, copies: 3, img: 'https://cdn.akamai.steamstatic.com/steam/spotlights/35cbac8a79192bfa95b59ddd/spotlight_image_english.jpg?t=1646437577' },
    { name: 'Automon', price: 29.5, id: 5, copies: 0, img: 'https://cdn.akamai.steamstatic.com/steam/spotlights/b223800234b836efbb0aaed7/spotlight_image_english.jpg?t=1646673197' },
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
  },
  deleteGame(id) {
    this.gamesData = this.gamesData.filter((game) => game.id !== id)
  }
}

app.get('/all-games', (req, res) => {
  res.send(games.gamesData);
});

app.get('/get-game-by-id', (req, res) => {
  const search = req.query.search;
  const specificGame = games.getGameById(search)

  res.send(specificGame)
});

app.post('/add-game', (req, res) => {
  const addGame = req.body.addGame;

  games.addGame(addGame);


  res.send(games.gamesData)

})


app.patch('/update-game', (req, res) => {
  const { name, price, id } = req.body

  games.updateGame(name, price, id);
  res.send(games.gamesData)

})

app.delete('/delete-game', (req, res) => {
  const { id } = req.body
  games.deleteGame(id)
  res.send(games.gamesData)
})


let users = {
  userData: [
    { username: 'michael', email: 'miki.frankel@gmail.com', password: 'a', img: 'img/michael.png', log: false },
    { username: 'neta', email: 'neta.frankel@gmail.com', password: 'Blibli2', img: 'img/michael.png', log: false },
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
    this.userData.push({ username, email, password, log: true })
  },
  checkNameAndPassword(name, password) {
    const index = this.userData.findIndex((user) => user.username === name && user.password === password)
    if (index !== -1) {
      this.userData[index].log = true;
      return { ...this.userData[index], check: true };
    } else {
      return false;
    }
  },
  userCart: [],
  userAddToCart(cart){
    console.log({cart});
    
  }
}

app.post('/add-user', (req, res) => {
  const { username, email, password } = req.body;
  const userInsideOrNot = users.checkIfUserLogedAlready(email);

  if (userInsideOrNot === true) {
    users.addUser(username, email, password)///////////////////////////////////
    res.send({ ...users.userData, username, userInsideOrNot })

  } else {
    res.send(`Hello ${username}, you are alreay registered. Please log in!`)
  }

})

app.get('/get-password-and-username', (req, res) => {
  const loginName = req.query.loginName;
  const loginPassword = req.query.loginPassword

  const checkUserLogin = users.checkNameAndPassword(loginName, loginPassword)

  res.send(checkUserLogin)
});

app.patch('/add-to-cart', (req, res) => {
  const { id } = req.body;
  const {copy, indexGame} = checkGame (id)
  if (copy === true) {
    const user =  checkUser()
    if (user !== undefined){
      indexGame -1;
      users.userAddToCart({...user, indexGame})
    }
  } else {
    console.log('no copy of game');
    
  }
  
})

function checkGame (id){
  const indexGame = games.gamesData.findIndex(game => game.id === id)
  if (indexGame !== -1 &&  games.gamesData[indexGame].copies !== 0){
    return {copy: true, indexGame: games.gamesData[indexGame].copies}
  }
}

function checkUser () {
  const indexUser = users.userData.findIndex(user => user.log === true)
  if (indexUser !== -1){
    return users.userData[indexUser]
  } else {
    console.log('no login user');
    
  }
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

























