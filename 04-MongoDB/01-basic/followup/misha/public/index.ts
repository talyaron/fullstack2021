async function handleRegister(ev) {

    ev.preventDefault();

    let { guitarname, price, brand } = ev.target.elements;

    guitarname = guitarname.value;
    price = price.value;
    brand = brand.value

    const { data } = await axios.post('/add-guitar', { guitarname, price, brand })
    const {result} = data;
    
    const guitars = [result]

    console.log(guitars)
    renderGuitars(guitars);

}

async function handleGetGuitars() {

    const { data } = await axios.get('/get-guitars')

    const guitars = data

    renderGuitars(guitars);
}

function renderGuitars(guitars) {
 

    const html = guitars.map(guitar => {
        return `<div>${guitar.guitarname} <input type='text' placeholder='role' value='${guitar.price}' onblur='handleUpdate(event, "${guitar._id}")'>
        <button onclick='handleDelete("${guitar._id}")'>DELETE</button></div>`
    }).join('');

    document.getElementById('guitars').innerHTML = html;

}

async function handleUpdate(ev, guitarId) {
    const price = ev.target.value;
    const { data } = await axios.patch('/update-guitar', { guitarId, price })
}

async function handleDelete(guitarId) {

    const { data } = axios.delete('/delete-guitar', { data: { guitarId } })

    const {result} = data;
    
    console.log(result)
    const guitars = [result]

    console.log(guitars)
    renderGuitars(guitars)
}