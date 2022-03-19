async function handleRegister(ev) {

    ev.preventDefault();

    let { guitarname, price, brand, file } = ev.target.elements;

    guitarname = guitarname.value;
    price = price.value;
    brand = brand.value;
    file = file.value;

    const { data } = await axios.post('/add-guitar', { guitarname, price, brand, file })


    handleGetGuitars()
}

async function handleGetGuitars() {

    const { data } = await axios.get('/get-guitars')

    const guitars = data

    renderGuitars(guitars);
}

function renderGuitars(guitars) {

    const html = guitars.map(guitar => {
        return `<div>Model: ${guitar.guitarname} <input type='text' placeholder='price' value='${guitar.price}' onblur='handleUpdate(event, "${guitar._id}")'>
        Brand: ${guitar.brand}
        <img src="${guitar.file}"></img>
        <button onclick='handleDelete("${guitar._id}")'>DELETE</button></div>`
    }).join('');

    document.getElementById('guitars').innerHTML = html;

}

async function handleUpdate(ev, guitarId) {
    const price = ev.target.value;
    const { data } = await axios.patch('/update-guitar', { guitarId, price })
}

async function handleDelete(guitarId) {

    const {data} = await axios.delete('/delete-guitar', { data: { guitarId } })

    handleGetGuitars()

}