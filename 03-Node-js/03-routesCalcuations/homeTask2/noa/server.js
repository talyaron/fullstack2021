const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

const google = [
    {
        title: ' למה לשלב פעילות גופנית בחיים שלכם?',
        article: 'כמעט כל יום מביא איתו מחקר חדש בנושא פעילות גופנית, עם יתרונות וחסרונות חדשים, השפעות שונות ומגוונות על הגוף ולעיתים קרובות – הרבה פרטים מבלבלים. חלק מהמחקרים מראים ללא שום ספק יתרונות משמעותיים וטוענים כי אם אתם מעוניינים לרדת במשקל, אין דרך טובה יותר מאימון פיזי. אחרים לא מראים גישה חד משמעית.'
    },
    {
        title: ' למה לשלב פעילות גופנית בחיים שלכם?',
        article: 'כמעט כל יום מביא איתו מחקר חדש בנושא פעילות גופנית, עם יתרונות וחסרונות חדשים, השפעות שונות ומגוונות על הגוף ולעיתים קרובות – הרבה פרטים מבלבלים. חלק מהמחקרים מראים ללא שום ספק יתרונות משמעותיים וטוענים כי אם אתם מעוניינים לרדת במשקל, אין דרך טובה יותר מאימון פיזי. אחרים לא מראים גישה חד משמעית.'
    },
]

app.use(express.static("public"));

app.get("/get-google",  (req, res) => {

    const search = req.query.search;
  
    const searchreasult = getSearchReasult(search)
    
    res.send(searchreasult)
})

function getSearchReasult(search) {
    if (search) {
        const regex = new RegExp(search, 'i')
        return google.filter((article) => 
            regex.test(article.title))
    }
    else {
        return []
    }
}

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});