import express from 'express';
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());


interface Game {
  id?: number;
  Img: string;

  Name: string;
  Release: number;
  Description: string;
}

let gameBoy: Array<Game> = [

  {
    id: 1,
    Img: './images/tony',
    Name: 'Tony Hawks Pro Skater 2',
    Release: 2000,
    Description: 'Tony Hawks Pro Skater 2 is a skateboarding video game developed by Neversoft and published by Activision.'
  },
  {
    id: 2,
    Img: './images/mario',
    Name: 'Super Mario Land',
    Release: 1989,
    Description: 'Super Mario Land is a 1989 side-scrolling platform video game developed and published by Nintendo as a launch game for its Game Boy handheld game console.'
  },

  // {
  //   id: 1,
  //   Name: 'Tony Hawks Pro Skater 2',
  //   Release: 2000,
  //   Description: 'Tony Hawks Pro Skater 2 is a skateboarding video game developed by Neversoft and published by Activision.'
  // },
  // {
  //   id: 2,
  //   Name: 'Super Mario Land',
  //   Release: 1989,
  //   Description: 'Super Mario Land is a 1989 side-scrolling platform video game developed and published by Nintendo as a launch game for its Game Boy handheld game console.'
  // },


]



app.get('/get-games', (req, res) => {
  res.send(gameBoy);
});

app.get('/get-search', (req, res) => {
  const search = req.query.searchGame;
  console.log(req.query);

  const filtered = filterSearch(search)
  res.send(filtered);
});

app.delete('/delete-game', (req, res) => {
  const { id } = req.body
  console.log(id)
  gameBoy = id.filter(game => game.id != game)
  console.log(gameBoy)
  res.send({ gameBoy, ok: true })
});


function filterSearch(search) {
  try {

    // const search = event.target.value
    // console.log(search);
    console.log(search);

    if (search) {
      const regex = new RegExp(search, 'i');
      // return gameBoy.filter((game)=> regex.test(game.Name) || regex.test(game.Description));
      const filtered = gameBoy.filter((game) => regex.test(game.Name) || regex.test(game.Description));

      console.log("filter", filtered)
      return filtered;
    }
  } catch (err) {
    console.error(err);
    return [];
  }

}




// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substring(2);
// }

// function updateGames(id) {

//   id.forEach((game)=> {
//     id = uid();
//   })
// }


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});