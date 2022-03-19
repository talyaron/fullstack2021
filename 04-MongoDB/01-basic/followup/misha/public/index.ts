async function  handleRegister(ev){

    ev.preventDefault();
    let {guitarname, price, brand} = ev.target.elements;

    guitarname = guitarname.value;
    price = price.value;
    brand = brand.value

    console.log(guitarname,price,brand)
    const {data} = await axios.post('/add-guitar', {guitarname, price, brand})

    renderGuitars(data);

}

async function handleGetGuitars(){

    const {data} = await axios.get('/get-guitars')

    const users = data

    renderGuitars(data);
}

function renderGuitars(guitars){
    console.log(guitars)
    const html = guitars.map(guitar => {
        return `<div>${guitar.guitarname} <input type='text' placeholder='role' value='${guitar.price}' onblur='handleUpdate(event, "${guitar._id}")'>
        <button onclick='handleDelete("${guitar._id}")'>DELETE</button></div>`
    }).join('');

    document.getElementById('guitars').innerHTML = html;

}

async function handleUpdate(ev, guitarId){
    console.log('handle')
    const price = ev.target.value;
    const {data} = await axios.patch('/update-guitar', {guitarId, price})
}

async function handleDelete(guitarId){
    
    const {data} = axios.delete('/delete-guitar',{data:{guitarId}})
}