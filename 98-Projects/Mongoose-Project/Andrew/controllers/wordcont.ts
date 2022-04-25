import Word from "../model/wordModel";
import jwt from 'jwt-simple';
import User from "../model/userModel";

export const addWord = async (req, res) => {
    const newWord = new Word();
    newWord.word = req.body.word
    newWord.type = "adj";
    await newWord.save();
    res.send({ ok: true })
};
export const getWord = async (req, res) => {
    const secret = process.env.JWT_SECRET;
    let { userInfo } = req.cookies;
    userInfo = jwt.decode(userInfo, secret);

    const regex = new RegExp('^(a|e|i|o|u)');
    const words = await Word.find({});
    const adj = words.filter(word => word.type == "adj")
    const noun = words.filter(word => word.type == "noun")
    const verb = words.filter(word => word.type == "verb")

    let object = '';
    if (Math.floor(Math.random() * 100) <= 30) {
        object += adj[Math.floor(Math.random() * adj.length)].word + ' ';
    }
    object += noun[Math.floor(Math.random() * noun.length)].word + ' ';
    if (regex.test(object)) object = 'an ' + object;
    else object = 'a ' + object;
    if (Math.floor(Math.random() * 100) <= 80) {
        let object2 = ''
        object += verb[Math.floor(Math.random() * verb.length)].word + ' ';
        object2 += noun[Math.floor(Math.random() * noun.length)].word;
        if (regex.test(object2)) object2 = 'an ' + object2;
        else object2 = 'a ' + object2;
        object += object2
    }
    await User.findOneAndUpdate({ _id: userInfo.userId },{word: object});
    res.send({ word: object })

};