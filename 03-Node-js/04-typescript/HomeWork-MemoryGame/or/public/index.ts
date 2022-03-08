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
        html += `<div class = "card" onclick="handleFlipCard(event)">
        <img class="pic" src="${card.picSrc}">
        <div class = "name"> ${card.name}</div>
        </div>`
    })
    html += `</div>`
    root.innerHTML = html
} 
 