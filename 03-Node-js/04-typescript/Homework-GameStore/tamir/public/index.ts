/// מביאה את כל המידע בכל הטענה מחדש של העמוד
function handleallgame() {
    getalldata()
    rendertoscreen()
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
        html += `<div> game name is ${game.name}</div>`

    });
    root.innerHTML = html
}

async function handleid(ev) {
    const { data } = await axios.get('/getall')
    console.log(data);

}


