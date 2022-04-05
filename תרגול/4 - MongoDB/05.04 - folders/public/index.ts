async function hendleData() {
    const { data } = await axios.get('/get-data')

    console.log(data)
}
hendleData()

async function hendlePostText(ev) {
    ev.preventDefault();
    const text = ev.target.elements.text.value

    console.log(text)
    const { data } = await axios.post('/get-text', { text })

    console.log(data)
}
