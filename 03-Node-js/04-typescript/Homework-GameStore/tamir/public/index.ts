<<<<<<< HEAD
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
=======
/// מביאה את כל המידע בכל הטענה מחדש של העמוד
function handleallgame() {
    getalldata()

}
// לוקחת את המידע מהשרת
async function getalldata() {
    const { data } = await axios.get('/getall')
    console.log(data, '1');

}
// מרנדרת את כל המשחקים
async function rendertoscreen() {
    const { data } = await axios.get('/getall')
    const root = document.getElementById('root')
    let html = ''
    data.forEach(game => {
        html += `<div onclick="handledelete(event)" id='${game.id}'>  game name is ${game.name}</div>`

    });
    root.innerHTML = html
}
// מוחקת משחק
async function handledelete(id: string) {
    const { data } = await axios.delete('/delete-game', { data: { id } })
    console.log({data} );

}


>>>>>>> parent of d2fdcf04 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
