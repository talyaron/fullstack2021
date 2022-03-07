function handleStartButton() {
    getCardsArray()
}
async function getCardsArray() {
    const { data } = await axios.get('/get-cards')
    renderCards(data)

}
function renderCards(cardsArray) {

    const root = document.querySelector('#root')
    let html = '<div class="cards">'
    cardsArray.forEach(card => {
        html += `<div class = "card" onclick(event)>
        <div class = "card-up">
        <div class = "card-pic" style="background:url(${card.picSrc}); background-size:cover; background-position:center;"></div>
        <div class = "card-name">${card.name}<div>
        </div>
        </div>`
    })
    html += `</div>`
    root.innerHTML = html
} 
