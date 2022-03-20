async function handleAddGame(ev) {
    ev.preventDefault()
    let { title, img } = ev.target.elements;
    title = title.value;
    img = img.value;
    const {data} = await axios.post('/add-game', {title, img})
    console.log(data);
}