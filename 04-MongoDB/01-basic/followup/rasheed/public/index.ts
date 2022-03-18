let axios;
async function handleAddGames(ev){
    ev.preventDefault();
    let {title, price,type} = ev.target.elements;
    console.log(title, price,type)
    title = title.value;
    price = price.value;
    type = type.value

    console.log(title, price,type)

    const {data} = await axios.post('/add-game',{title, price,type});
    console.log(data)
    ev.target.reset();
}