const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static("public"));

const google=[
    {title:' למה לשלב פעילות גופנית בחיים שלכם?',
article:'כמעט כל יום מביא איתו מחקר חדש בנושא פעילות גופנית, עם יתרונות וחסרונות חדשים, השפעות שונות ומגוונות על הגוף ולעיתים קרובות – הרבה פרטים מבלבלים. חלק מהמחקרים מראים ללא שום ספק יתרונות משמעותיים וטוענים כי אם אתם מעוניינים לרדת במשקל, אין דרך טובה יותר מאימון פיזי. אחרים לא מראים גישה חד משמעית.'}

]



app.get("/get-google", (req, res) =>{

function handleSearch(ev){
    const search= ev.target.value;
    const regex=new RegExp(search, 'i')

    const searchresult= google.filter(article=>{
        if(regex.test(article.title)) 
        res.send(searchresult)
    })
}

})












app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});