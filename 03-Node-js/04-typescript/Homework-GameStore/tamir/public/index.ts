const { data } = axios.get('/getall')
console.log(data);
/// מביאה את כל המידע בכל הטענה מחדש של העמוד
function handleallgame() {
    getalldata()
    rendertoscreen(data)
}

// לוקחת את המידע מהשרת
async function getalldata() {
    const { data } = await axios.get('/getall')
    console.log(data);
}

function rendertoscreen(games) {
    getalldata()
    const root = document.getElementById('root')
    let html =''
        games.forEach(game => {
        html = `<div> hey ${game.name}</div>`

    });
    root.innerHTML = html
}