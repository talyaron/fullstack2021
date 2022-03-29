import express from 'express';
import mongoose from "mongoose";


const wordsDictionary = require('./dictionary.json');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// function shuffleDictionary(wordsDictionary){

//   let R = Math.floor(Math.random() * wordsDictionary.length)
//   let X = wordsDictionary[R]
//   let Y = 
//   wordsDictionary[] = 

// }

shuffleDictionary(wordsDictionary)

function shuffleDictionary(Dictionary) {
  for (let i = 0; i < Dictionary.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = Dictionary[i];
      Dictionary[i] = Dictionary[j];
      Dictionary[j] = temp;
  }
}

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  played: Number,
  wins: Number,
  current_strike: Number,
  max_strike: Number,
})

const WordSchema = new mongoose.Schema({
  word: String,
  wordNumber: Number
})

const FundleWord = mongoose.model('FundleWords', WordSchema);
const FundleUser = mongoose.model('FundleUsers', UserSchema);

addToDB()
async function addToDB() {
  const dictionaryTest = await FundleWord.find({ wordNumber: 1 })

  if (dictionaryTest.length > 0) {
    console.log('ok')
    let i = 0;
  }

  else {
    console.log('null')
    for (let i = 0; i < wordsDictionary.length; i++) {
      const newWord = new FundleWord({ word: wordsDictionary[i], wordNumber: i })
      const result = await newWord.save()
    }

  }
}


app.post("/add-user", async (req, res) => {

  let { username, password, email } = req.body;
  let played = 0;
  let wins = 0;
  let current_strike = 0;
  let max_strike = 0;
  const newFundleUser = new FundleUser({ username, password, email, played, wins, current_strike, max_strike })

  const result = await newFundleUser.save()
  console.log(result)

  res.send({ result });

});

app.post("/add-word", async (req, res) => {


})

app.get("/get-word", async (req,res) =>{

let {dayOffset} = req.query;

console.log(dayOffset)

const dailyWord = await FundleWord.find({wordNumber: dayOffset})

res.send(dailyWord)

})

app.get("/get-user", async (req, res) => {


  let { username, password } = req.query
  console.log(username, password)

  const userMatch = await FundleUser.find({ username: username, password: password })
  console.log(userMatch)

  if (userMatch) {
    res.send({ user: userMatch })
  }

  else {
    const noPass = await FundleUser.find({ username: username })
    if (noPass) {
      res.send("password doesn't match")
    }
    else {
      res.send("username doesn't exist")
    }
  }


})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
