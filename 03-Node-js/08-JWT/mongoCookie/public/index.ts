async function handleRegister(e) {

    e.preventDefault()

    try {

        let { name, password, email } = e.target.elements;
        name = name.value; password = password.value; email = email.value

        const { data } = await axios.post('/company/add-employees', { name, password, email })
        const { result } = data
        console.log(result._id);

        if (!e.target.elements) throw new Error("no elements' event in handleRegister");


    } catch (error) {
        console.error(error.message);

    }

    e.target.reset()

}

async function handleGetEmployees(e) {

    e.preventDefault()

    let { name, password } = e.target.elements;
    name = name.value; password = password.value;

    const { data } = await axios.post('/company/get-employees', { name, password })

    const { result } = data
    console.log(result);
    
    render(result)

    e.target.reset()

}

function render(login) {

    let root = document.querySelector('#root')

    let html = `
    <button onclick="handleGet()">Get</button>
    `
    root.innerHTML = html


}

async function handleGet() {

    const {data} = await axios.post('/company/get-employee-decode')
    console.log(data);
        
}










