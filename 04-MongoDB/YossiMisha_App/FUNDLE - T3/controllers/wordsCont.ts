import FundleWord from "../model/wordsModel"

const dictionary = require('../dictionary.json');

function shuffleDictionary(dictionary: any) {
    for (let i = 0; i < dictionary.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = dictionary[i];
        dictionary[i] = dictionary[j];
        dictionary[j] = temp;
    }
}

shuffleDictionary(dictionary)

export async function addToDB() {
    const dictionaryTest = await FundleWord.find({ wordNumber: 1 })

    if (dictionaryTest.length > 0) {
        console.log('ok')
        console.log(dictionary.length)
    }

    else {
        console.log('null')
        
        for (let i = 0; i < dictionary.length; i++) {
            const newWord = new FundleWord({ word: dictionary[i], wordNumber: i })
            const result = await newWord.save()
            console.log(i)
        }

    }
}

export async function getDailyWord(req: any, res: any) {

    let { dayOffset } = req.query;

    console.log(dayOffset)

    const dailyWord = await FundleWord.find({ wordNumber: dayOffset })
    // const dailyWord = await FundleWord.find({})
 
    console.log(dailyWord.length)

    res.send(dailyWord)

}

export async function wordExists(req:any, res:any){

    const { guess } = req.query;

    const wordCheck = await FundleWord.find({word:guess})

    

    if (wordCheck[0]){
        res.send({found: true})
    }
    else{
        res.send({found: false})
    }
}
