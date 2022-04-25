import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

//  מייצרת מספר זהות רנדומלי לכל אובייקט (המספר הוא סטרינג)
const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// המבנה של האובייקט בתוך המערך
interface boy {
    name: string
    age: number
    id: string
}

// המערך עצמו
let boy: Array<boy> = [
    { name: 'tamir', age: 24, id: uid() },
    { name: 'nisim', age: 34, id: uid() },
    { name: 'kobi', age: 32, id: uid() }
]

// נתיב שדרכו מעבירים את כל המידע (המערך)
app.get('/me', (req, res) => {
    res.send(boy);
});

// נתיב שדרכו מוסיפים סטודנט הפונקציות תמיד יהיו בצד שרת על מנת להוריד עומס
app.post('/add-student', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const id = uid()
    const boy = addstudent(name, age, id)
    res.send(boy)
})

// הפונקציה שמוסיפה את הסטודנט
function addstudent(name: string, age: number, id: string) {
    boy.push({ name, age, id })
    return boy;
}

// הנתיב שדרכו מוחקים סטודנט,החישוב מתבצע בצד שרת
app.delete('/delete-game', (req, res) => {
    try {
        const { id } = req.body;
        if (id) {
            boy = boy.filter((boy) => boy.id !== id);
            res.send(boy)
        }
    } catch (error) {

    }
})

app.patch("/change-name", (req, res) => {
    try {
        const { id, name } = req.body;
        if(!id || !name) throw new Error ('its not the smae')
        const index = boy.findIndex((boy) => boy.id === id)
        if (index !== -1) {
            boy[index].name = name;
        } else {
            throw new Error('i dont find the new name')
        }        
        res.send({data:boy})
    } catch (error) {
        console.error(error)
    }
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
