const wordsDictionary = require('./dictionary.json');

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

 async function getDailyWord(req,res){

    let {dayOffset} = req.query;
    
    console.log(dayOffset)
    
    const dailyWord = await FundleWord.find({wordNumber: dayOffset})
    
    res.send(dailyWord)
    
}
  